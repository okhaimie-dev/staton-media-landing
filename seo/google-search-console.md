# Google Search Console — setup for statontv.com

Goal: verify ownership of statontv.com, submit the sitemap, and request indexing so Google discovers the movie page.

## Before you start

- Sign in at https://search.google.com/search-console with the Google account that should own this site (a business account is better than a personal one if available).
- The site is live at https://statontv.com with:
  - robots.txt → https://statontv.com/robots.txt
  - sitemap.xml → https://statontv.com/sitemap.xml

## Option A (recommended) — Domain property via DNS

Covers statontv.com and www.statontv.com, and does not depend on site deploys.

1. Search Console → Add property → choose **Domain** → enter `statontv.com` → Continue.
2. Google shows a **TXT record** like `google-site-verification=XXXX...`. Copy it.
3. Namecheap → Domain List → **Manage** statontv.com → **Advanced DNS** → **Add New Record**:
   - Type: `TXT Record`
   - Host: `@`
   - Value: paste the `google-site-verification=...` string
   - TTL: Automatic
4. Save, wait ~5–30 minutes, then click **Verify** in Search Console. (DNS can take a while; retry if needed.)

## Option B — URL-prefix property via HTML meta tag

Ideal if you want it verified immediately without touching DNS.

1. Search Console → Add property → choose **URL prefix** → enter `https://statontv.com/`.
2. Google gives a meta tag: `<meta name="google-site-verification" content="XXXX..." />`.
3. Send the `content` value to the developer (or paste it here) — it gets added to the site's metadata and deployed.
4. Return to Search Console and click **Verify**.

## After verification (either option)

1. **Submit the sitemap**: Search Console → Sitemaps → enter `sitemap.xml` → Submit. Status should become "Success".
2. **Request indexing**: top search bar → enter `https://statontv.com/` → press Enter → "Request Indexing". Do the same for the homepage only once; pages get re-crawled automatically over time.
3. **Inspect within 48h**: URL Inspection → check "Page is indexed" / coverage.

## What to watch over the next weeks

- **Performance report**: queries like `out of covering movie`, `out of covering full movie` should start appearing.
- **Pages report**: confirm https://statontv.com/ is indexed (no "Crawled – currently not indexed" surprises).
- If the old github.io URL appears, it is fine — it redirects to statontv.com.

## Optional

- **Bing Webmaster Tools**: https://www.bing.com/webmasters — can import directly from Search Console with one click.
