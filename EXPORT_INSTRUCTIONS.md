# Export RoleRaise to Your GitHub Account

## Step 1: Create New Repository on GitHub

1. Go to https://github.com/sahilkohli151991
2. Click "New repository"
3. Name it: `roleraise-platform`
4. Description: "Career coaching platform for $200K+ tech roles with PayPal integration, Calendly booking, and mentor matching"
5. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Download Your Code from Replit

**Option A: Download ZIP (Recommended)**
1. In Replit, click the three dots (...) next to your project name
2. Select "Download as ZIP"
3. Extract the ZIP file on your local machine

**Option B: Use Replit's Git Integration**
1. In Replit sidebar, find the "Version Control" tab
2. Connect to your GitHub account
3. Push directly to your new repository

## Step 3: Push to Your GitHub Repository

Open terminal/command prompt in your extracted project folder:

```bash
# Initialize git (if needed)
git init

# Add your GitHub repository as remote
git remote add origin https://github.com/sahilkohli151991/roleraise-platform.git

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: RoleRaise career coaching platform

- Complete React/TypeScript frontend with modern UI
- PayPal integration for 3 pricing tiers ($2,497, $4,997, $9,997)
- Calendly booking integration for strategy calls
- Google Forms integration for assessment data
- Mentor profiles and testimonials system
- Professional conversion-optimized design
- Responsive mobile-first layout"

# Push to your repository
git push -u origin main
```

## Step 4: Environment Variables Setup

When you deploy your repository, you'll need these environment variables:

**PayPal Integration:**
- `PAYPAL_CLIENT_ID` = Your PayPal Client ID
- `PAYPAL_CLIENT_SECRET` = Your PayPal Client Secret

**Google Integration:**
- `GOOGLE_APPS_SCRIPT_URL` = Your Google Apps Script webhook URL

**Calendly Integration:**
- `VITE_CALENDLY_URL` = https://calendly.com/kohlisahil151991

## Step 5: Deployment Options

**Option A: Vercel (Recommended)**
1. Go to https://vercel.com
2. Connect your GitHub account
3. Import your `roleraise-platform` repository
4. Add environment variables in Vercel dashboard
5. Deploy automatically

**Option B: Netlify**
1. Go to https://netlify.com
2. Connect GitHub and select your repository
3. Add environment variables
4. Deploy

**Option C: Your Own Server**
1. Clone repository to your server
2. Run `npm install`
3. Set environment variables
4. Run `npm run build`
5. Serve the built files

## Repository Structure

Your repository contains:
- `client/` - React frontend with TypeScript
- `server/` - Express.js backend
- `shared/` - Shared TypeScript schemas
- `attached_assets/` - Images and logos
- Configuration files for Tailwind, Vite, etc.

## Key Features Working

✅ PayPal payment processing for all pricing plans
✅ Calendly booking integration
✅ Google Forms data collection
✅ Mentor profiles and testimonials
✅ Mobile-responsive design
✅ Professional conversion-optimized UI

## Next Steps After Export

1. Set up your custom domain (roleraise.com) with your hosting provider
2. Configure SSL/HTTPS
3. Set up analytics (Google Analytics, etc.)
4. Monitor payment processing
5. Update Calendly links if needed

Your RoleRaise platform is ready for production deployment!