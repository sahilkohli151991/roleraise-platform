# RoleRaise - Career Mentorship Platform

## Overview

RoleRaise is a career mentorship platform designed to help professionals land $200K+ tech roles through personalized coaching and mentorship. The platform connects job seekers with experienced mentors from top tech companies like Google, Meta, Amazon, and Netflix.

## System Architecture

### Frontend Architecture

- **Framework**: React with TypeScript
- **UI Library**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens inspired by Jolt.io
- **State Management**: React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture

- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage with connect-pg-simple for production
- **Payment Processing**: PayPal SDK integration
- **External APIs**: Google Sheets API for data collection

### Database Schema

The application uses PostgreSQL with the following main tables:
- **users**: User authentication and profile data
- **assessments**: Career assessment form submissions
- **testimonials**: Success stories and reviews
- **mentors**: Mentor profiles and information

## Key Components

### Landing Page
- Hero section with career assessment form
- "How It Works" process explanation
- Dynamic testimonials and mentor showcases
- Pricing tiers with PayPal integration
- Calendly booking widget for strategy calls

### Assessment System
- Multi-step career assessment form
- Google Sheets integration for data collection
- Real-time form validation with Zod schemas
- Toast notifications for user feedback

### Mentorship Platform
- Dynamic mentor profiles loaded from JSON
- Company affiliations and experience levels
- Avatar support with fallback handling

### Payment Integration
- PayPal sandbox/production environment support
- Order creation and capture workflow
- Multiple pricing tiers (Essential, Premium, Elite)

## Data Flow

1. **User Assessment**: Users fill out career assessment form
2. **Data Collection**: Form data is stored in memory and Google Sheets
3. **Mentor Matching**: System displays available mentors based on user needs
4. **Payment Processing**: PayPal integration handles subscription payments
5. **Booking**: Calendly widget enables strategy call scheduling

## External Dependencies

### Payment Processing
- **PayPal SDK**: For handling payments and subscriptions
- Environment variables: `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`

### Data Collection
- **Google Sheets API**: For storing assessment data
- Service account authentication required
- Environment variables: `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_SHEET_ID`

### Scheduling
- **Calendly**: Embedded widget and popup integration for booking strategy calls
- Environment variable: `VITE_CALENDLY_URL` (your Calendly event URL)
- Dual integration: inline widget + popup option
- Fallback contact form when URL not configured

### Database
- **Neon Database**: PostgreSQL hosting
- Connection string in `DATABASE_URL` environment variable

## Deployment Strategy

### Development
- Vite dev server for frontend hot reloading
- Express server with TypeScript compilation
- In-memory storage for rapid development

### Production
- Frontend built and served as static files
- Express server bundled with esbuild
- PostgreSQL database with Drizzle migrations
- Environment-specific PayPal configuration

### Environment Configuration
Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string
- `PAYPAL_CLIENT_ID`: PayPal application client ID
- `PAYPAL_CLIENT_SECRET`: PayPal application secret
- `GOOGLE_SERVICE_ACCOUNT_JSON`: Google service account credentials
- `GOOGLE_SHEET_ID`: Target Google Sheet for data collection
- `VITE_CALENDLY_URL`: Your Calendly event URL for strategy calls

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Added Calendly integration with inline widget and popup functionality