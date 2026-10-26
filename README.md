# portfolio_site

Ben Curzon's portfolio website. A plain static site: HTML, CSS and a small amount of JavaScript. No framework, no build step, no dependencies to install or keep patched.

## Structure

```
public/                 everything Netlify serves
  index.html            the whole page (hero, case studies, about, how I work, experience, contact)
  thanks/index.html     fallback page if the contact form is sent without JavaScript
  css/site.css          all styles
  js/site.js            accordions, image viewer, music links dialog, contact form
  images/               web-sized images (WebP) and the Mirai clickthrough GIF
  _headers              security headers and caching rules for Netlify
  favicon.svg, robots.txt, sitemap.xml
netlify.toml            tells Netlify to publish the public folder
```

## Editing

- **Text:** edit `public/index.html` directly.
- **Adding or changing a zoomable image:** give the `<img>` a `data-zoom="N"` attribute, `role="button"` and `tabindex="0"`, then add a matching entry (number N, in order) to the `GALLERY` list at the top of `public/js/site.js`. To make the left and right arrows work between nearby images, add their numbers together as one list in `GROUPS`, in the order they appear on the page.
- **Image sizes:** keep images under about 2200px wide and use WebP. Large diagrams can go to about 3200px.

## Deploying (Netlify)

1. Netlify: Add new site, Import an existing project, choose GitHub, pick this repository.
2. Build command: leave empty. Publish directory: `public` (already set in `netlify.toml`).
3. After the first deploy, Netlify's Forms settings should list a form called `contact`. Turn on email notifications there so messages reach you. Spam is caught by a hidden honeypot field and Netlify's own filtering.
4. Domain: add `bencurzon.com` under Domain management and follow Netlify's DNS steps at the current registrar.

## Notes

- Fonts (Bricolage Grotesque, Plus Jakarta Sans) load from Google Fonts. To self-host them later, download the font files and update the `@font-face` rules and the `Content-Security-Policy` in `public/_headers`.
- The contact form has no email address anywhere in the code by design.
