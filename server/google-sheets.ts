import { google } from 'googleapis';
import { Assessment } from '@shared/schema';

/**
 * Google Sheets integration for RoleRaise assessments
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Cloud Project
 * 2. Enable the Google Sheets API
 * 3. Create a Service Account
 * 4. Download the service account JSON key
 * 5. Add the JSON content to Replit Secrets as 'GOOGLE_SERVICE_ACCOUNT_JSON'
 * 6. Create a Google Sheet and add the Sheet ID to Replit Secrets as 'GOOGLE_SHEET_ID'
 * 7. Share the sheet with the service account email (found in the JSON)
 * 
 * Sheet should have columns: Name, Email, Current Role, Experience, Salary, Target Salary, Date
 */

export class GoogleSheetsService {
  private sheets: any;
  private spreadsheetId: string;

  constructor() {
    this.spreadsheetId = process.env.GOOGLE_SHEET_ID || '';
    
    if (!this.spreadsheetId) {
      console.warn('GOOGLE_SHEET_ID not found in environment variables');
      return;
    }

    try {
      const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
      if (!serviceAccountJson) {
        console.warn('GOOGLE_SERVICE_ACCOUNT_JSON not found in environment variables');
        return;
      }

      const credentials = JSON.parse(serviceAccountJson);
      
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth });
    } catch (error) {
      console.error('Error initializing Google Sheets service:', error);
    }
  }

  async appendAssessment(assessment: Assessment): Promise<void> {
    if (!this.sheets || !this.spreadsheetId) {
      console.warn('Google Sheets not properly configured');
      return;
    }

    try {
      const values = [
        [
          assessment.name,
          assessment.email,
          assessment.currentRole,
          assessment.experience,
          assessment.salary,
          assessment.targetSalary,
          new Date().toISOString()
        ]
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'A:G', // Adjust range as needed
        valueInputOption: 'RAW',
        resource: {
          values,
        },
      });

      console.log('Assessment successfully added to Google Sheets');
    } catch (error) {
      console.error('Error adding assessment to Google Sheets:', error);
      throw error;
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();
