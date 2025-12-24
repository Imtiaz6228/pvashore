#!/bin/bash

# PVAshore Deployment Script for Hostinger VPS
# This script automates the deployment process

set -e  # Exit on any error

echo "🚀 Starting PVAshore deployment to Hostinger VPS..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js version check passed: $(node -v)"

# Install dependencies
print_status "Installing dependencies..."
npm ci --production=false

# Run linting
print_status "Running ESLint..."
npm run lint || print_warning "Linting failed, but continuing with deployment..."

# Build the application
print_status "Building application for production..."
npm run build:production

# Create logs directory
print_status "Creating logs directory..."
mkdir -p logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_status "Installing PM2..."
    npm install -g pm2
fi

# Stop existing application if running
print_status "Stopping existing application..."
pm2 stop pvashore || print_warning "No existing application to stop"

# Start application with PM2
print_status "Starting application with PM2..."
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Setup PM2 startup script (run as root or with sudo)
print_status "Setting up PM2 startup script..."
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME || print_warning "PM2 startup setup failed. You may need to run this manually."

print_success "🎉 Deployment completed successfully!"
print_status ""
print_status "Application is now running at: http://localhost:$(grep PORT .env.production | cut -d'=' -f2)"
print_status ""
print_status "Useful commands:"
print_status "  • Check status: pm2 status"
print_status "  • View logs: pm2 logs pvashore"
print_status "  • Restart: pm2 restart pvashore"
print_status "  • Stop: pm2 stop pvashore"
print_status ""
print_status "Don't forget to:"
print_status "  1. Configure your domain DNS to point to this VPS"
print_status "  2. Update .env.production with your actual domain"
print_status "  3. Configure SSL certificate (Let's Encrypt recommended)"
print_status "  4. Set up nginx reverse proxy if needed"
