# UC Image-validation

This project is a simple web application for validating image uploads using the Uploadcare widget. It enforces restrictions on image dimensions and provides user-friendly error messages for images that exceed the allowed size.

## Features
- Uploadcare widget integration for image uploads
- Restricts uploads to images only
- Enforces maximum width and height for uploaded images
- Custom error messages for exceeding max width, height, or both
- Supports multiple image uploads (up to 10)
- Image cropping and shrinking options
- **Supports uploading images from a wide range of sources via the Uploadcare widget:**
  - Local Files
  - Direct Link
  - Facebook
  - Google Drive
  - Google Photos
  - Dropbox
  - Instagram
  - Evernote
  - Flickr
  - OneDrive
  - Camera
- **Preview feature:** Allows users to preview images before uploading.

## Usage
1. Open `index.html` in your browser.
2. Use the Uploadcare widget to select and upload images from any supported source.
3. The app will validate each image's dimensions and display errors if any image exceeds the allowed size.

## Configuration
- Maximum width and height are set via the `data-max-width` and `data-max-height` attributes in the HTML input.
- The Uploadcare public key is set in `assets/script.js`.
- Custom error messages are defined in `assets/script.js` under `UPLOADCARE_LOCALE_TRANSLATIONS`.

## Dependencies
- [Uploadcare Widget](https://uploadcare.com/docs/uploads/widget/)
- [jQuery 3.3.1](https://jquery.com/)

## File Overview
- `index.html`: Main HTML file with the Uploadcare widget and configuration.
- `assets/style.css`: Custom styles for the app.
- `assets/script.js`: Contains validation logic and custom error messages.
- `assets/icon.svg`: Favicon for the app.

