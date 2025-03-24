#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print step messages
print_step() {
    echo -e "${YELLOW}\n👉 $1${NC}"
}

# Function to print success messages
print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Function to print error messages and exit
print_error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

# Function to check if command exists
check_command() {
    if ! command -v $1 &> /dev/null; then
        print_error "$1 is required but not installed. Please install it first."
    fi
}

# Check required commands
check_command "git"
check_command "npm"

# Ensure we're on main branch
print_step "Checking current branch..."
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
    print_error "Not on main branch. Please switch to main branch first."
fi

# Check for uncommitted changes
print_step "Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
    # Prompt for commit message
    echo -e "${YELLOW}You have uncommitted changes. Enter a commit message:${NC}"
    read -r COMMIT_MESSAGE
    
    if [ -z "$COMMIT_MESSAGE" ]; then
        print_error "Commit message cannot be empty"
    fi
    
    # Stage and commit changes
    git add . || print_error "Failed to stage changes"
    git commit -m "$COMMIT_MESSAGE" || print_error "Failed to commit changes"
    print_success "Changes committed successfully"
fi

# Pull latest changes from main
print_step "Pulling latest changes from main..."
git pull origin main || print_error "Failed to pull latest changes"
print_success "Latest changes pulled successfully"

# Push to main
print_step "Pushing to main branch..."
git push origin main || print_error "Failed to push to main"
print_success "Changes pushed to main successfully"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_step "Installing dependencies..."
    npm install || print_error "Failed to install dependencies"
    print_success "Dependencies installed successfully"
fi

# Deploy to GitHub Pages
print_step "Deploying to GitHub Pages..."
npm run deploy || print_error "Failed to deploy to GitHub Pages"
print_success "Deployed to GitHub Pages successfully"

print_success "All done! Your changes should be live in a few minutes at https://letterface.app"
echo -e "${YELLOW}Note: It may take a few minutes for the changes to be visible on the live site.${NC}" 