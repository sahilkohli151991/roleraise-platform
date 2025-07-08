# Simple Google Sheets Integration with Apps Script

## Setup Instructions

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet
2. Add these headers in row 1:
   - A1: Name
   - B1: Email  
   - C1: Current Role
   - D1: Experience
   - E1: Salary
   - F1: Target Salary
   - G1: Date

### Step 2: Create Google Apps Script
1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add new row with form data
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.currentRole || '',
      data.experience || '',
      data.salary || '',
      data.targetSalary || '',
      new Date().toISOString()
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Click the gear icon and select "Web app"
3. Set execute as "Me" 
4. Set access to "Anyone"
5. Click "Deploy"
6. Copy the web app URL (it will look like: https://script.google.com/macros/s/ABC123.../exec)

### Step 4: Update Your Replit Project
Add this URL as a secret in your Replit project:
- Secret name: `GOOGLE_APPS_SCRIPT_URL`
- Secret value: The web app URL you copied

That's it! Much simpler than the Google Cloud Console method.