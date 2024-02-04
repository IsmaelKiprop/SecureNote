#!/bin/bash

# SecureNote Setup Script

# Pull the latest code from the repository
echo "Pulling the latest code from the repository..."
git pull origin main

# Add changes to git
echo "Adding changes to git..."
git add .

# Commit changes with a timestamp
timestamp=$(date +"%Y-%m-%d %T")
commit_message="Updated code - $timestamp"
echo "Committing changes with message: $commit_message"
git commit -m "$commit_message"

# Push changes to GitHub
echo "Pushing changes to GitHub..."
git push

echo "Setup completed successfully!"
