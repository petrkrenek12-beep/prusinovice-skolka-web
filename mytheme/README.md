# MyTheme - WordPress School Website Theme

A modern, responsive WordPress theme converted from React components for Základní škola Prusinovice.

## Installation

1. Download the `mytheme.zip` file
2. Go to WordPress Admin → Appearance → Themes → Add New → Upload Theme
3. Choose the ZIP file and click "Install Now"
4. Activate the theme

## Features

- Responsive design optimized for school websites
- SEO-friendly structure
- Accessibility compliant (WCAG 2.1 AA)
- Custom post types for school content
- Multi-level navigation with mobile menu
- Contact forms and school information management
- Gallery and document management
- Czech language support

## Setup

### Menus
1. Go to Appearance → Menus
2. Create a new menu called "Primary Menu"
3. Add pages: Home, About School, Classes, Gallery, Contacts, Documents, Menu
4. Assign to "Primary Menu" location

### Pages
Create these pages with the following slugs:
- Home (front page)
- o-skole (About School)
- tridy (Classes) 
- fotogalerie (Photo Gallery)
- kontakty (Contacts)
- dokumenty (Documents)
- jidelnicek (Menu)

## Development

### Build Process
```bash
npm install
npm run build
```

### File Structure
- `/src/` - Source files (JS, CSS, images)
- `/assets/` - Compiled production files
- `/template-parts/` - Reusable template components
- `/inc/` - Theme functionality modules

### Customization
- Colors and fonts: Edit `theme.json`
- Styles: Modify `/src/scss/` files
- JavaScript: Edit `/src/js/` files
- PHP: Modify template files and `/inc/` modules

## Requirements

- WordPress 6.0+
- PHP 7.4+
- Modern browser support

## Support

For theme support and customization, contact the development team.