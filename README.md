# keplertech-web

Source of https://keplertech.io.

The site is one static page: `site/index.html`, with its styles and script inside the file, the demo recordings in `site/media/` and the fonts in `site/fonts/` (self-hosted, so visitors make no request to Google). There is no build step. Netlify publishes the `site` folder as-is (see `netlify.toml`, which also sets the security headers; if the page ever loads something from another site, add that site to the Content-Security-Policy there).

Visit statistics are at https://keplertech.goatcounter.com. GoatCounter sets no cookies and stores no personal data, so the site needs no cookie banner. It counts page views, clicks on links to other sites and on the contact email (shown as events). `site/count.js` is GoatCounter's script, served from this site; to update it, download https://gc.zgo.at/count.js over it. Visits from `localhost` and `file://` are not counted.

To preview locally, open `site/index.html` in a browser.

`site/404.html` is shown by Netlify for any missing page. `site/robots.txt` and `site/sitemap.xml` are for search engines; after a significant change to the page, update the `lastmod` date in the sitemap.

The icons come from `site/favicon.svg`. After editing it, regenerate the others from the repository root (needs `rsvg-convert` and `ffmpeg`, both on Homebrew):

```
rsvg-convert -w 32 -h 32 site/favicon.svg | ffmpeg -v error -y -i - site/favicon.ico
sed 's/ rx="14"//' site/favicon.svg | rsvg-convert -w 180 -h 180 -o site/apple-touch-icon.png
```

The demo recordings are MP4 files that play like GIFs (muted, looping, only while on screen). To add one from a screen recording or GIF:

```
ffmpeg -i demo.gif -movflags +faststart -pix_fmt yuv420p -an \
  -vf "fps=20,scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=lanczos" \
  -c:v libx264 -preset veryslow -crf 32 -tune stillimage site/media/demo.mp4
```

Browsers cache media files for a week (see `netlify.toml`), so give a changed recording a new file name.

To add a talk, copy one `<a class="talk">` block in the "Talks and videos" section and change the link, year, source and titles.
