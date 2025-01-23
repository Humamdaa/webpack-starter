# My Webpack Project

This project is set up with Webpack for efficient development and bundling of JavaScript, SCSS, and assets. Below is an overview of the features and configurations in the Webpack setup.

## Features

### 1. **Development Mode**
- The project is set to **development mode** for faster builds and debugging. This mode provides unminified output and includes source maps for easier debugging in the browser.

### 2. **Entry and Output Configuration**
- **Entry Point**: The application starts from `src/index.js` as the main entry point.
- **Output Configuration**: 
  - Bundled files are output to the `dist/` directory.
  - The filenames include a **content hash** for caching purposes (e.g., `bundle.[contenthash].js`).
  - The output folder is automatically **cleaned** before each build to avoid old files.
  - Assets like images are placed in the `assets/` folder with cache-busting filenames (e.g., `assets/image.[hash].[ext]`).

### 3. **Source Maps**
- **Source maps** are enabled using `devtool: "source-map"`, allowing easier debugging by mapping compiled code back to the original source.

### 4. **Development Server (Webpack Dev Server)**
- The project uses **Webpack Dev Server** to serve the application in development mode with the following features:
  - **Port**: The server runs on **port 3000**.
  - **Auto-open**: The application will open automatically in the default web browser.
  - **Hot Module Replacement (HMR)**: Changes in the source code are applied without a full page reload.
  - **Compression**: The server enables **gzip compression** for better performance.
  - **History API Fallback**: Ensures that client-side routing (e.g., React Router) works correctly by redirecting 404s to `index.html`.

### 5. **Module Rules**
- Webpack is configured to handle various file types:
  - **SCSS files**: Processed using `style-loader`, `css-loader`, and `sass-loader` to bundle SCSS into CSS.
  - **JavaScript files**: Transpiled using `babel-loader` with the `@babel/preset-env` to support modern JavaScript syntax and compatibility with older browsers.
  - **Images**: Handled by `asset/resource` to copy image files to the output directory with a hash for caching.

### 6. **Plugins**
- **HtmlWebpackPlugin**:
  - Automatically generates an `index.html` file in the `dist/` folder.
  - Uses a custom template (`src/template.html`) for the HTML structure.
  - Sets the title of the generated HTML file to "Webpack-App".
  - Injects the generated JavaScript bundles into the HTML file.

- **BundleAnalyzerPlugin**:
  - Provides a **visual representation** of the size of the bundled files.
  - Helps identify and optimize large files or dependencies that may increase the overall bundle size.

## How to Use

1. **Install Dependencies**:
   ```bash
   npm install
