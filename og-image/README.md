# Link-preview image

`card.html` is the source of `site/og-image.png`, the image shown when a link to keplertech.io is shared (Slack, LinkedIn, X, ...). It is not published.

To regenerate the PNG after editing `card.html`, from the repository root:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars \
  --allow-file-access-from-files --force-device-scale-factor=1 --window-size=1200,630 \
  --virtual-time-budget=2000 --screenshot="$PWD/site/og-image.png" "file://$PWD/og-image/card.html"
```
