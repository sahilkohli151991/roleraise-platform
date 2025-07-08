# Quick Calendly Setup - RoleRaise

## Step 1: Add Your Calendly URL
1. Go to Secrets (lock icon in left sidebar)
2. Add new secret:
   - **Key**: `VITE_CALENDLY_URL`
   - **Value**: Your Calendly URL (e.g., `https://calendly.com/yourname/strategy-call`)

## Step 2: Restart Application
- Click "Restart" on the workflow to apply changes

## That's it!
Your "Book Free Strategy Call" button will now:
- Open your Calendly in a popup when clicked
- Show your embedded calendar in the booking section
- Allow customers to book meetings directly with you

## Current Status
- ✅ Calendly integration code is ready
- ✅ Assessment form is working and saving to Google Sheets
- ✅ All components are styled and responsive
- ⏳ Waiting for your Calendly URL to go live

Just add your Calendly URL to Secrets and you're ready to start getting bookings!