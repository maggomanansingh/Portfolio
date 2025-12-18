# Deployment Guide

This guide explains how to deploy your portfolio website to the internet using **Vercel** or **Render**. Both are excellent, free options for hosting this type of Node.js application.

## Prerequisites
1.  **GitHub Account**: You need a GitHub account to push your code.
2.  **Git Installed**: You already have this.

## Step 1: Push to GitHub
1.  Initialize a git repository (if you haven't already):
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2.  Create a new repository on [GitHub](https://github.com/new).
3.  Push your code to the new repository (follow the instructions GitHub gives you, typically:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy to Vercel (Recommended)
1.  Go to [Vercel](https://vercel.com/) and sign up with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `portfolio` repository from GitHub.
4.  Vercel will automatically detect the settings.
    -   **Framework Preset**: Other
    -   **Build Command**: (Leave empty)
    -   **Output Directory**: (Leave empty)
    -   **Install Command**: `npm install`
5.  Click **Deploy**.

## Step 2: Deploy to Render (Alternative)
1.  Go to [Render](https://render.com/) and sign up with GitHub.
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your `portfolio` repository.
4.  Configure the settings:
    -   **Runtime**: Node
    -   **Build Command**: `npm install`
    -   **Start Command**: `npm start`
5.  Click **Create Web Service**.

Your site will be live in a few minutes!
