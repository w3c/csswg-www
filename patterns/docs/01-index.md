---
title: CSSWG Pattern Library Docs
---

The CSS for the site is built from this pattern library, which means that CSS can be designed as components but then we generate one stylesheet for the site.

If you have the project running, making a change to the CSS of any component will rebuild the stylesheet for the site, and reload the browser.

I'm using a lot of CSS Custom Properties and a small amount of Sass. You'll find all of that in `_config.scss`.

## Dark mode

The dark mode for the site is handled by way of CSS Custom Properties, and the `prefers-color-scheme` media feature.
