# Deployment Guide

This guide will help you deploy the Makyo Dropdown component library and its documentation.

## Repository Setup

1. **Create a GitHub Repository**

   ```bash
   # Initialize git repository
   git init
   git add .
   git commit -m "Initial commit: Makyo Dropdown component library"

   # Create GitHub repository (replace with your username/organization)
   # Go to GitHub and create a new public repository named 'makyo-dropdown'

   # Add remote origin
   git remote add origin https://github.com/YOUR_USERNAME/makyo-dropdown.git
   git branch -M main
   git push -u origin main
   ```

2. **Update package.json with correct repository URL**
   ```json
   {
     "repository": {
       "type": "git",
       "url": "https://github.com/YOUR_USERNAME/makyo-dropdown.git"
     },
     "homepage": "https://github.com/YOUR_USERNAME/makyo-dropdown#readme"
   }
   ```

## Storybook Deployment

### Option 1: Netlify (Recommended)

1. **Build Storybook**

   ```bash
   npm run build-storybook
   ```

2. **Deploy to Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Create a new site from Git
   - Connect your GitHub repository
   - Set build command: `npm run build-storybook`
   - Set publish directory: `storybook-static`
   - Deploy!

3. **Custom Domain (Optional)**
   - In Netlify dashboard, go to Site settings > Domain management
   - Add custom domain like `makyo-dropdown-storybook.netlify.app`

### Option 2: GitHub Pages

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**

   ```json
   {
     "scripts": {
       "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy-storybook
   ```

### Option 3: Vercel

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build-storybook
   vercel --prod storybook-static
   ```

## Demo Page Deployment

### Deploy the example HTML page

1. **Create a simple demo repository or use a subfolder**

   ```bash
   # Copy the example/index.html to a demo repository
   # Or create a demo folder in the main repository
   ```

2. **Deploy to Netlify/Vercel/GitHub Pages**
   - Use the same process as Storybook
   - Point to the `example` folder or demo repository

## NPM Package Publishing

1. **Build the library**

   ```bash
   npm run build
   ```

2. **Test the package locally**

   ```bash
   npm pack
   # This creates a .tgz file you can test in other projects
   ```

3. **Publish to NPM**
   ```bash
   npm login
   npm publish
   ```

## Automated Deployment with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Storybook and Demo

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build library
        run: npm run build

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
          cname: your-custom-domain.com # Optional
```

## Environment Variables

For production deployments, you might need:

```bash
# .env.production
STORYBOOK_BASE_URL=https://your-storybook-url.com
DEMO_BASE_URL=https://your-demo-url.com
```

## Testing Before Deployment

1. **Build and test locally**

   ```bash
   npm run build
   npm run storybook
   ```

2. **Test the built Storybook**

   ```bash
   npm run build-storybook
   npx serve storybook-static
   ```

3. **Verify all features work**
   - Search functionality
   - Multiple selection
   - Portal mode
   - Custom rendering
   - Keyboard navigation
   - All visual examples

## Post-Deployment Checklist

- [ ] GitHub repository is public
- [ ] README.md includes correct installation instructions
- [ ] Storybook is accessible and all stories work
- [ ] Demo page shows component functionality
- [ ] NPM package is published (if desired)
- [ ] All URLs in documentation are updated
- [ ] Component can be imported in a test project

## Deliverables URLs

After deployment, update these URLs in your documentation:

- **GitHub Repository**: `https://github.com/YOUR_USERNAME/makyo-dropdown`
- **Storybook URL**: `https://your-storybook-deployment.netlify.app`
- **Demo URL**: `https://your-demo-deployment.netlify.app`

## Support

If you encounter issues during deployment:

1. Check the build logs for errors
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility (18+)
4. Test locally before deploying
5. Check platform-specific documentation (Netlify, Vercel, etc.)

---

**Note**: Remember to replace placeholder URLs and usernames with your actual deployment URLs and GitHub username.
