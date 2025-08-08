# Image Carousel

A simple, lightweight, and reusable image carousel component for web projects.

## Features

- Pure JavaScript, no dependencies
- Easy to use and customize
- Responsive with smooth transitions
- Auto-slide with navigation arrows and dots

## Installation

```bash
npm install your-image-carousel
```

## Usage

Import the function and call it with a container selector and an array of image URLs:

```js
import { createCarousel } from 'your-image-carousel';

createCarousel('#carousel-container', [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
]);
```

Make sure your HTML contains a container element, e.g.:

```html
<div id="carousel-container"></div>
```

## Development

Clone the repo and install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run start
```

Build for production:

```bash
npm run build
```

## License

MIT © Your Name

````

---

# Steps to Publish Your Package on npm

1. **Login to npm** (if not already):

```bash
npm login
````

Enter your npm username, password, and email.

2. **Build your package**

Make sure your `dist` folder is up to date:

```bash
npm run build
```

3. **Verify your `package.json`**

- `"main"` or `"module"` should point to your built file (e.g., `"dist/index.js"`)
- `"files"` array includes your built files (like `dist/`)
- `"version"` is updated (npm won’t let you publish the same version twice)

4. **Publish**

Run:

```bash
npm publish
```
