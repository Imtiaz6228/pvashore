# PVAshore - Premium PVA Accounts Provider

A modern, SEO-optimized Next.js application for selling premium phone-verified accounts (PVA) across major social media platforms.

## 🚀 Features

- **12 Fully Optimized Pages** with comprehensive SEO
- **Schema.org Structured Data** for rich search results
- **Responsive Design** with Tailwind CSS
- **Production Ready** for VPS deployment
- **PM2 Process Management** for reliability
- **Nginx Reverse Proxy** configuration
- **SSL Ready** with Let's Encrypt support

## 📦 Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4.1
- **Icons**: Lucide React
- **Process Management**: PM2
- **Reverse Proxy**: Nginx
- **Deployment**: VPS (Hostinger)

## 🏗️ Project Structure

```
pvapanel/
├── components/          # Reusable React components
├── pages/              # Next.js pages (12 optimized pages)
├── public/             # Static assets
├── styles/             # Global styles
├── .env.local          # Development environment variables
├── .env.production     # Production environment variables
├── ecosystem.config.js # PM2 configuration
├── next.config.js      # Next.js configuration
├── nginx.conf          # Nginx configuration
├── deploy.sh           # Deployment script
└── package.json        # Dependencies and scripts
```

## 🚀 Deployment to Hostinger VPS

### Prerequisites

- Ubuntu/Debian VPS from Hostinger
- Node.js 18+ installed
- Domain name pointed to VPS IP
- SSH access to server

### Step 1: Initial Server Setup

Connect to your VPS via SSH and run these commands:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+ (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Install Git
sudo apt install git -y

# Install Certbot for SSL
sudo apt install certbot python3-certbot-nginx -y
```

### Step 2: Deploy Application

```bash
# Clone your repository (replace with your actual repo)
git clone https://github.com/yourusername/pvashore.git
cd pvashore

# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### Step 3: Configure Environment Variables

Update `.env.production` with your actual values:

```bash
# Edit the production environment file
nano .env.production

# Update these values:
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
PORT=8080
```

### Step 4: Configure Nginx

```bash
# Copy nginx configuration
sudo cp nginx.conf /etc/nginx/sites-available/pvashore

# Edit nginx configuration with your domain
sudo nano /etc/nginx/sites-available/pvashore

# Replace 'yourdomain.com' with your actual domain
# Replace '/home/your-username/pvashore' with your actual path

# Enable the site
sudo ln -s /etc/nginx/sites-available/pvashore /etc/nginx/sites-enabled/

# Remove default nginx site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

### Step 5: SSL Certificate Setup

```bash
# Obtain SSL certificate from Let's Encrypt
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test certificate renewal
sudo certbot renew --dry-run
```

### Step 6: Final Steps

```bash
# Restart the application
pm2 restart pvashore

# Check application status
pm2 status

# View application logs
pm2 logs pvashore

# Setup PM2 to start on boot
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME
pm2 save
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run lint             # Run ESLint

# Production
npm run build:production # Build for production
npm run start:production # Start production server
npm run deploy           # Build and deploy

# PM2 Management
npm run pm2:start        # Start with PM2
npm run pm2:stop         # Stop PM2 process
npm run pm2:restart      # Restart PM2 process
```

## 🌐 Environment Variables

### Development (.env.local)
```env
NODE_ENV=development
PORT=3000
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production (.env.production)
```env
NODE_ENV=production
PORT=8080
SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔒 Security Features

- **Security Headers** configured in nginx.conf
- **Rate Limiting** to prevent abuse
- **HTTPS Enforcement** with SSL/TLS
- **CSP Headers** for content security
- **XSS Protection** enabled
- **CSRF Protection** configured

## 📊 SEO Optimization

All pages include:
- **Meta titles and descriptions** optimized for search
- **Open Graph tags** for social media sharing
- **Twitter Card tags** for Twitter sharing
- **Schema.org structured data** for rich snippets
- **Canonical URLs** to prevent duplicate content
- **Mobile-friendly design** with responsive layout

## 🚨 Monitoring & Maintenance

```bash
# Check application health
curl http://localhost:8080/health

# Monitor PM2 processes
pm2 monit

# View real-time logs
pm2 logs pvashore --lines 100

# Restart application
pm2 restart pvashore

# Update application
git pull origin main
npm install
npm run build:production
pm2 restart pvashore
```

## 🆘 Troubleshooting

### Application Not Starting
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs pvashore

# Check if port 8080 is in use
sudo netstat -tulpn | grep :8080
```

### Nginx Issues
```bash
# Test nginx configuration
sudo nginx -t

# Check nginx status
sudo systemctl status nginx

# View nginx logs
sudo tail -f /var/log/nginx/error.log
```

### SSL Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificates
sudo certbot renew
```

## 📞 Support

For deployment issues or questions:
- Check the logs: `pm2 logs pvashore`
- Verify nginx configuration: `sudo nginx -t`
- Test application health: `curl http://localhost:8080/health`

## 📝 License

This project is proprietary software for PVAshore.

---

**Note**: Always backup your data before deployment and test thoroughly in a staging environment before going live.
