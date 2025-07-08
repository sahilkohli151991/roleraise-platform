# Calendly Integration Setup Guide

## Quick Setup Steps

1. **Get your Calendly URL**:
   - Go to [calendly.com](https://calendly.com) and create an account
   - Create a new event type (e.g., "Strategy Call - 30 minutes")
   - Copy your Calendly URL (it looks like: `https://calendly.com/your-username/strategy-call`)

2. **Add to Replit Secrets**:
   - Go to your Replit project
   - Click on "Secrets" in the left sidebar (lock icon)
   - Add a new secret:
     - Key: `VITE_CALENDLY_URL`
     - Value: `https://calendly.com/your-username/strategy-call`

3. **Restart the application**:
   - The BookCall component will automatically use your Calendly URL
   - The widget will embed directly in your website

## Calendly Event Configuration

### Recommended Settings for Strategy Call:
- **Event Name**: "Free Strategy Call"
- **Duration**: 30 minutes
- **Description**: "Book a free 30-minute strategy session to discuss your career goals and see if RoleRaise is right for you."
- **Location**: Zoom/Google Meet (automatically generated)
- **Availability**: Set your preferred hours
- **Buffer Time**: 15 minutes before/after

### Advanced Settings:
- **Collect Email**: Required
- **Collect Phone**: Optional
- **Custom Questions**: 
  - "What's your current role?"
  - "What's your target salary range?"
  - "What's your biggest career challenge?"

## Integration Features

✅ **Automatic Embedding**: Widget loads directly in your website
✅ **Responsive Design**: Works on mobile and desktop
✅ **Fallback Support**: Shows contact info if URL not configured
✅ **Professional Styling**: Matches your website design
✅ **SEO Friendly**: Proper meta tags and structure

## Testing

After adding your Calendly URL:
1. Visit your website
2. Click "Book Free Strategy Call" button
3. Scroll to the booking section
4. You should see your Calendly widget embedded
5. Test booking to ensure it works correctly

## Support

If you need help:
- Check that your Calendly URL is correct
- Ensure the secret is named exactly: `VITE_CALENDLY_URL`
- Restart your application after adding the secret