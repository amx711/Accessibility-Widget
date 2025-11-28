import { AccessibilityState } from '../types';

/**
 * Generates the CSS string to be injected into the page based on the current state.
 * Uses !important to override existing styles for accessibility compliance.
 */
export const generateAccessibilityCSS = (state: AccessibilityState): string => {
  let css = '';

  // 1. Text Size (Applied to html/body to scale em/rem)
  if (state.textSize !== 100) {
    css += `
      html, body {
        font-size: ${state.textSize}% !important;
      }
    `;
  }

  // 2. Grayscale
  if (state.isGrayscale) {
    css += `
      html {
        filter: grayscale(100%) !important;
      }
    `;
  }

  // 3. High Contrast (Yellow on Black usually, or strict contrast)
  if (state.isHighContrast) {
    css += `
      html {
        filter: contrast(150%) !important;
      }
      body, div, p, span, h1, h2, h3, h4, h5, h6, li, a, button, input, select, textarea {
        background-color: #000000 !important;
        color: #ffff00 !important;
        border-color: #ffff00 !important;
      }
      a {
        color: #00ffff !important;
      }
      button {
        background-color: #000000 !important;
        color: #ffff00 !important;
        border: 2px solid #ffff00 !important;
      }
      img, svg, video {
        filter: contrast(100%) !important; 
      }
      /* Ensure icons are visible */
      svg {
        fill: #ffff00 !important;
        stroke: #ffff00 !important;
      }
    `;
  }

  // 4. Negative Contrast (Invert)
  if (state.isNegativeContrast) {
    css += `
      html {
        filter: invert(100%) hue-rotate(180deg) !important;
      }
      img, video, iframe {
        filter: invert(100%) hue-rotate(180deg) !important;
      }
    `;
  }

  // 5. Light Background
  if (state.isLightBackground) {
    css += `
      body, div, section, article, header, footer, main, aside {
        background-color: #ffffff !important;
        color: #000000 !important;
      }
      p, span, h1, h2, h3, h4, h5, h6, li, a {
        color: #000000 !important;
      }
      a {
        text-decoration: underline !important;
      }
    `;
  }

  // 6. Highlight Links
  if (state.isLinksUnderlined) {
    css += `
      a {
        text-decoration: underline !important;
        background-color: #ffff00 !important;
        color: #000000 !important;
        font-weight: bold !important;
        padding: 0 2px !important;
      }
    `;
  }

  // 7. Readable Font (System fonts)
  if (state.isReadableFont) {
    css += `
      *, *::before, *::after {
        font-family: Arial, Tahoma, 'Segoe UI', sans-serif !important;
      }
    `;
  }

  // 8. Stop Animations
  if (state.areAnimationsStopped) {
    css += `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        transform: none !important;
      }
    `;
  }

  // 9. Large Cursor
  if (state.isLargeCursor) {
    css += `
      html, body, a, button, input, select, textarea {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewport="0 0 48 48" style="fill:black;stroke:white;stroke-width:2px;"><path d="M0,0 L0,36 L8.5,25.5 L19,48 L24,45 L13.5,23.5 L24,24 L0,0 Z"/></svg>'), auto !important;
      }
    `;
  }

  // 10. Text Spacing
  if (state.isTextSpacing) {
    css += `
      * {
        line-height: 1.8 !important;
        letter-spacing: 0.1em !important;
        word-spacing: 0.2em !important;
      }
      p, li, h1, h2, h3, h4, h5, h6 {
        margin-bottom: 1.5em !important;
      }
    `;
  }

  // 11. Highlight Titles
  if (state.isHighlightTitles) {
    css += `
      h1, h2, h3, h4, h5, h6 {
        background-color: #000000 !important;
        color: #ffffff !important;
        padding: 5px 10px !important;
        display: inline-block !important;
        margin: 5px 0 !important;
        border-radius: 4px !important;
      }
    `;
  }

  // 12. Text Align
  if (state.textAlign) {
    css += `
      p, h1, h2, h3, h4, h5, h6, li, a, div, span {
        text-align: ${state.textAlign} !important;
      }
    `;
  }

  return css;
};
