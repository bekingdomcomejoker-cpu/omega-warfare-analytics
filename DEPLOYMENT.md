# 🚀 Project Joinity: Permanent Deployment Guide

This guide explains how to deploy **Project Joinity: Omega Warfare Analytics** permanently on the Manus platform.

---

## 📋 Pre-Deployment Checklist

- [x] Project is fully functional and tested
- [x] All import errors have been resolved
- [x] GitHub repository is up-to-date
- [x] Environment configuration file (.env.example) is prepared
- [x] Database schema is defined (Drizzle ORM)
- [x] RBAC system is implemented
- [x] Primary Researcher account setup script is ready

---

## 🔧 Deployment Steps

### Step 1: Access the Manus Management UI

1. Log in to your **Manus account** at [https://manus.im](https://manus.im)
2. Navigate to your **Dashboard** or **Projects** section
3. Look for a **"Create New Project"** or **"Deploy"** button

### Step 2: Create a New Project from GitHub

1. Click **"Create New Project"** or **"Import from GitHub"**
2. Select **"GitHub Repository"** as the source
3. Enter the repository URL:
   ```
   https://github.com/bekingdomcomejoker-cpu/omega-warfare-analytics
   ```
4. Or search for: `omega-warfare-analytics`

### Step 3: Configure the Project

1. **Project Name**: `omega-warfare-analytics` (or your preferred name)
2. **Project Title**: `Project Joinity - Omega Warfare Analytics`
3. **Scaffold Type**: Select **`web-db-user`**
   - This includes: React frontend + Express backend + Database + User authentication
4. **Visibility**: Choose **Public** or **Private** based on your preference

### Step 4: Set Environment Variables

In the Manus **Settings → Secrets** panel, configure:

**Essential Variables:**
- `VITE_APP_TITLE`: `Project Joinity - Omega Warfare Analytics`
- `JWT_SECRET`: Generate a secure random string (min 32 characters)
- `RESONANCE_SIGNATURE`: `1.67x`

**Optional Variables (auto-configured by Manus):**
- `VITE_OAUTH_PORTAL_URL`
- `OAUTH_SERVER_URL`
- `BUILT_IN_FORGE_API_KEY`
- `DATABASE_URL`

See `.env.example` for the complete list of available variables.

### Step 5: Database Setup

1. Manus will automatically provision a MySQL/TiDB database
2. The database connection string will be provided as `DATABASE_URL`
3. Run the database migrations:
   ```bash
   pnpm run db:migrate
   ```
4. Create the Primary Researcher account:
   ```bash
   pnpm run create:researcher
   ```

### Step 6: Deploy

1. Review the configuration summary
2. Click **"Deploy"** or **"Publish"**
3. Manus will:
   - Clone the GitHub repository
   - Install dependencies
   - Build the project
   - Set up the database
   - Deploy to a permanent URL

### Step 7: Access Your Live Dashboard

Once deployment is complete, you'll receive:
- **Permanent URL**: Something like `https://omega-warfare-analytics-xxxxx.manus.space`
- **Dashboard Access**: Log in with your Manus OAuth credentials
- **Admin Panel**: Access database and settings from the Management UI

---

## 📊 Post-Deployment Configuration

### Primary Researcher Account

After deployment, create your Primary Researcher account:

1. SSH into the deployed instance or use the Manus terminal
2. Run:
   ```bash
   pnpm run create:researcher
   ```
3. This creates a `researcher` role account with:
   - **Resonance Signature**: `1.67x`
   - **Full Analytics Access**: All dashboard features
   - **Research Privileges**: Full access to Lambda calculations and Covenant analysis

### Custom Domain (Optional)

In the Manus **Settings → Domains** panel:

1. Click **"Add Custom Domain"**
2. Enter your domain (e.g., `omega-warfare.yourdomain.com`)
3. Follow the DNS configuration instructions
4. Your dashboard will be accessible at the custom domain

### Analytics & Monitoring

The Manus **Dashboard** panel provides:
- Real-time traffic metrics
- Error logs and debugging
- Database usage statistics
- Performance monitoring

---

## 🔐 Security Best Practices

1. **Keep Secrets Secure**: Never commit `.env` files to GitHub
2. **Use Strong JWT Secret**: Generate a cryptographically secure random string
3. **Enable HTTPS**: Manus automatically provides SSL/TLS
4. **Restrict Access**: Use the Primary Researcher role for sensitive operations
5. **Monitor Logs**: Regularly check the Manus logs for suspicious activity

---

## 🛠️ Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Verify Node.js version compatibility (18+)
- Check the Manus build logs for specific errors

### Database Connection Issues
- Verify `DATABASE_URL` is correctly set in Secrets
- Ensure database migrations have run successfully
- Check that the database user has proper permissions

### Authentication Not Working
- Verify `OAUTH_SERVER_URL` is correctly configured
- Check that OAuth credentials are valid
- Clear browser cookies and try again

### Import Errors
- All import paths have been fixed in the current version
- If new errors appear, check the Manus build logs
- Ensure all files are properly committed to GitHub

---

## 📈 Scaling & Performance

For production use:

1. **Database Optimization**: Enable query caching and indexing
2. **CDN**: Manus provides automatic CDN for static assets
3. **Load Balancing**: Manus handles load balancing automatically
4. **Monitoring**: Use the Manus Dashboard to monitor performance

---

## 🔄 Continuous Deployment

After the initial deployment:

1. **Push Updates to GitHub**: Any changes to the `master` branch
2. **Manus Auto-Deploy**: (if enabled) Automatically redeploys on push
3. **Manual Redeploy**: Use the Manus UI to manually trigger redeployment
4. **Rollback**: Use Manus checkpoints to rollback to previous versions

---

## 📞 Support

For issues or questions:

1. **Manus Support**: Visit [https://help.manus.im](https://help.manus.im)
2. **GitHub Issues**: Report bugs at the repository
3. **Documentation**: See README.md for research framework details

---

## ✨ Final Notes

**Project Joinity** is now ready for permanent deployment. The unified dashboard, analytical backend, and research framework are all configured and tested.

**Chicka chicka orange.** 🕊️⚔️✨

---

*Deployment Guide v1.0*  
*Resonance Signature: 1.67x*  
*Axiom 18: Truth Liberates*
