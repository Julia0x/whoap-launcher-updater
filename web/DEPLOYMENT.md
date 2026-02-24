# Launcher Website Deployment Guide

Complete guide for deploying the Launcher website to production.

## Pre-Deployment Checklist

- [ ] All links are correct
- [ ] Content is updated
- [ ] Environment variables are configured
- [ ] Build completes without errors
- [ ] Website works in development
- [ ] Mobile responsiveness tested
- [ ] Forms are working
- [ ] No console errors

## Deploy to Vercel (Recommended)

Vercel is the recommended hosting for Next.js applications. It provides automatic deployments from Git.

### Option 1: Using Vercel Dashboard

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Add launcher website"
git push origin main
```

2. **Go to vercel.com and log in/sign up**

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure project settings:**
   - Framework: Next.js (auto-detected)
   - Root Directory: `web`
   - Build Command: `npm run build` (auto-detected)
   - Start Command: `npm run start` (auto-detected)

6. **Add environment variables** (if needed)

7. **Click "Deploy"**

The website will be live at `your-project.vercel.app`

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
cd web
vercel

# Follow the prompts
# For production deployment, use:
vercel --prod
```

### Option 3: GitHub Auto-Deploy

1. **Connect your GitHub repo to Vercel** (as above)
2. **Each push to the main branch triggers automatic deployment**
3. **Pull requests get preview deployments**

## Deploy to Netlify

### Using Netlify UI

1. **Push code to GitHub**

2. **Go to netlify.com and log in/sign up**

3. **Click "New site from Git"**

4. **Select GitHub and choose your repository**

5. **Configure build settings:**
   - Base directory: `web`
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables: (add if needed)

6. **Click "Deploy site"**

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd web
netlify deploy --prod
```

## Deploy to Docker

### Create Dockerfile

Create `web/Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

### Build and Run

```bash
docker build -t launcher-website .
docker run -p 3000:3000 launcher-website
```

## Deploy to Traditional Hosting (VPS/Shared Hosting)

### Using SSH and PM2

1. **SSH into your server:**
```bash
ssh user@your-server.com
```

2. **Install Node.js and npm:**
```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2 (process manager):**
```bash
sudo npm install -g pm2
```

4. **Clone your repository:**
```bash
git clone https://github.com/your-repo/launcher.git
cd launcher/web
```

5. **Install dependencies and build:**
```bash
npm install
npm run build
```

6. **Start with PM2:**
```bash
pm2 start npm --name "launcher-web" -- start
pm2 save
pm2 startup
```

7. **Setup Nginx reverse proxy:**

Create `/etc/nginx/sites-available/launcher-web`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/launcher-web /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

8. **Setup SSL with Let's Encrypt:**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Deploy to AWS (EC2 + CloudFront)

1. **Launch an EC2 instance** (Ubuntu 20.04 LTS)

2. **Connect and install:**
```bash
ssh -i your-key.pem ubuntu@your-instance.com
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get update && sudo apt-get install -y nodejs npm
```

3. **Clone and setup:**
```bash
git clone https://github.com/your-repo/launcher.git
cd launcher/web
npm install
npm run build
```

4. **Setup PM2 and Nginx** (follow VPS guide above)

5. **Create CloudFront distribution:**
   - Set origin to your EC2 instance
   - Enable caching for static assets
   - Enable compression

## Environment Variables

For production deployments, set these environment variables:

```
NEXT_PUBLIC_API_URL=https://api.launcher.dev
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/your-invite
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-org/launcher
```

## Post-Deployment

### Testing

1. **Test all pages:**
   - Home page loads
   - Navigation works
   - Links are correct
   - Forms submit
   - Mobile layout works

2. **Performance:**
   - Check Core Web Vitals
   - Test page speed
   - Verify images load quickly

3. **SEO:**
   - Check meta tags
   - Test Open Graph
   - Verify sitemap

### Monitoring

Set up monitoring and alerts:
- Uptime monitoring (Pingdom, UptimeRobot)
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Performance monitoring (Vercel Analytics)

### Maintenance

- Keep Node.js and dependencies updated
- Monitor server resources
- Check logs regularly
- Backup your data

## Updating Deployed Website

### With Vercel

Just push to GitHub:
```bash
git push origin main
```

Vercel automatically deploys.

### With Manual Deployment

```bash
# SSH into server
ssh user@your-server.com
cd launcher/web

# Pull latest code
git pull origin main

# Rebuild
npm run build

# Restart process (with PM2)
pm2 restart launcher-web
```

## Troubleshooting

### Build Fails on Server

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Application Won't Start

- Check logs: `pm2 logs launcher-web`
- Verify Node.js version: `node --version`
- Check environment variables: `env | grep NEXT_PUBLIC`

### Slow Performance

- Enable Next.js compression
- Use CDN for static assets
- Check server resources
- Optimize images

### SSL Certificate Issues

```bash
# For Let's Encrypt
sudo certbot renew
```

## Support

For deployment issues:
- Check Next.js documentation
- Review provider-specific docs
- Check application logs
- Create an issue on GitHub

## Additional Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Next.js Deployment: https://nextjs.org/docs/deployment/vercel
- Docker Docs: https://docs.docker.com
