# keplertech-web

Source of https://keplertech.io.

The site is one static page: `site/index.html`, with its styles and script inside the file, the demo recordings in `site/media/` and the fonts in `site/fonts/` (self-hosted, so visitors make no request to Google). There is no build step. Netlify publishes the `site` folder as-is (see `netlify.toml`, which also sets the security headers; if the page ever loads something from another site, add that site to the Content-Security-Policy there).

To preview locally, open `site/index.html` in a browser.

To add a talk, copy one `<a class="talk">` block in the "Talks and videos" section and change the link, year, source and titles.

The previous Hugo site (`content/`, `layouts/`, `themes/`, `static/`, `hugo.toml`) is no longer published and can be deleted.
