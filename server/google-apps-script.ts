import { Assessment } from '@shared/schema';

/**
 * Google Apps Script webhook integration for RoleRaise assessments
 * 
 * This is a simpler alternative to the Google Sheets API that uses
 * Google Apps Script webhooks with your personal Gmail account.
 */

export class GoogleAppsScriptService {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = process.env.GOOGLE_APPS_SCRIPT_URL || '';
    
    if (!this.webhookUrl) {
      console.warn('GOOGLE_APPS_SCRIPT_URL not found in environment variables');
    }
  }

  async appendAssessment(assessment: Assessment): Promise<void> {
    if (!this.webhookUrl) {
      throw new Error('Google Apps Script webhook URL not configured');
    }

    try {
      const payload = {
        name: assessment.name,
        email: assessment.email,
        currentRole: assessment.currentRole,
        experience: assessment.experience,
        salary: assessment.salary,
        targetSalary: assessment.targetSalary,
        timestamp: new Date().toISOString()
      };

      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to save to Google Sheets');
      }

      console.log('Assessment saved to Google Sheets via Apps Script');
    } catch (error) {
      console.error('Error saving to Google Sheets via Apps Script:', error);
      throw error;
    }
  }
}

export const googleAppsScriptService = new GoogleAppsScriptService();