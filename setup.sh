#!/bin/bash

# SecureNote Setup Script

# Install or update frontend dependencies
echo "Installing or updating frontend dependencies..."
cd secure-note-frontend
npm install
cd ..

# Install or update backend dependencies
echo "Installing or updating backend dependencies..."
cd secure-note-backend
pip install -r requirements.txt
cd ..

# Restart the server or application
echo "Restarting the application..."
# Replace 'myApp' with the actual process or service name
pm2 restart myApp
