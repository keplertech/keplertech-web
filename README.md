# keplertech-web

Source of https://keplertech.io.

The site is one static page: `site/index.html`, with its styles and script inside the file, the demo recordings in `site/media/` and the fonts in `site/fonts/` (self-hosted, so visitors make no request to Google). There is no build step. Netlify publishes the `site` folder as-is (see `netlify.toml`, which also sets the security headers; if the page ever loads something from another site, add that site to the Content-Security-Policy there).

Visit statistics are at https://keplertech.goatcounter.com. GoatCounter sets no cookies and stores no personal data, so the site needs no cookie banner. It counts page views and clicks on links to other sites (shown as events). `site/count.js` is GoatCounter's script, served from this site; to update it, download https://gc.zgo.at/count.js over it. Visits from `localhost` and `file://` are not counted.

To preview locally, open `site/index.html` in a browser.

To add a talk, copy one `<a class="talk">` block in the "Talks and videos" section and change the link, year, source and titles.

The previous Hugo site (`content/`, `layouts/`, `themes/`, `static/`, `hugo.toml`) is no longer published and can be deleted.
