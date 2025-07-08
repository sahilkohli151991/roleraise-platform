import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAssessmentSchema } from "@shared/schema";
import { googleSheetsService } from "./google-sheets";
import { googleAppsScriptService } from "./google-apps-script";
import { createPaypalOrder, capturePaypalOrder, loadPaypalDefault } from "./paypal";
import fs from 'fs';
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  // Load testimonials and mentors from JSON files on startup
  let testimonials: any[] = [];
  let mentors: any[] = [];

  try {
    const testimonialsPath = path.join(process.cwd(), 'testimonials.json');
    const mentorsPath = path.join(process.cwd(), 'mentors.json');
    
    if (fs.existsSync(testimonialsPath)) {
      testimonials = JSON.parse(fs.readFileSync(testimonialsPath, 'utf-8'));
    }
    
    if (fs.existsSync(mentorsPath)) {
      mentors = JSON.parse(fs.readFileSync(mentorsPath, 'utf-8'));
    }
  } catch (error) {
    console.error('Error loading JSON files:', error);
  }

  // Assessment form submission
  app.post("/api/assessment", async (req, res) => {
    try {
      const validatedData = insertAssessmentSchema.parse(req.body);
      
      // Store in memory
      const assessment = await storage.createAssessment(validatedData);
      
      // Also save to Google Sheets (try Apps Script first, then fallback to API)
      try {
        if (process.env.GOOGLE_APPS_SCRIPT_URL) {
          await googleAppsScriptService.appendAssessment(assessment);
        } else {
          await googleSheetsService.appendAssessment(assessment);
        }
      } catch (sheetsError) {
        console.error('Failed to save to Google Sheets:', sheetsError);
        // Continue even if Google Sheets fails
      }
      
      res.json({ 
        success: true, 
        message: "Assessment submitted successfully",
        id: assessment.id 
      });
    } catch (error) {
      console.error('Assessment submission error:', error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid assessment data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      res.json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch testimonials" 
      });
    }
  });

  // Get mentors
  app.get("/api/mentors", async (req, res) => {
    try {
      res.json(mentors);
    } catch (error) {
      console.error('Error fetching mentors:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch mentors" 
      });
    }
  });

  // PayPal routes (updated to match PayPalButton expectations)
  app.get("/setup", async (req, res) => {
    await loadPaypalDefault(req, res);
  });

  app.post("/order", async (req, res) => {
    // Request body should contain: { intent, amount, currency }
    await createPaypalOrder(req, res);
  });

  app.post("/order/:orderID/capture", async (req, res) => {
    await capturePaypalOrder(req, res);
  });

  const httpServer = createServer(app);
  return httpServer;
}
