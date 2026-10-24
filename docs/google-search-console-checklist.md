# Google Search Console & Indexing Playbook — Shams Persians Hyderabad

This step-by-step checklist enables the business owner or webmaster to claim, verify, submit, and monitor Shams Persians on Google Search Console (GSC) and Google Business Profile.

---

## Step 1: Add Property in Google Search Console
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **Domain** property (recommended for covering `https://shamspersians.com`, `http://`, `www`, and subdomains) OR **URL prefix** (`https://shamspersians.com`).

---

## Step 2: Ownership Verification
- **Method A (Recommended): DNS TXT Record**
  1. Copy the TXT record value from GSC (e.g. `google-site-verification=...`).
  2. Log into your domain registrar (GoDaddy, Namecheap, Google Domains / Squarespace, Hostinger).
  3. Under DNS Management, add a `TXT` record with Host `@` and Value `google-site-verification=...`.
  4. Wait 5–15 minutes and click **Verify** in GSC.
- **Method B: HTML Tag**
  1. Alternatively, copy the meta verification code `<meta name="google-site-verification" content="..." />`.
  2. Paste it into the `<head>` of `index.html`.

---

## Step 3: Submit the Canonical XML Sitemap
1. In the left navigation of GSC, select **Sitemaps** (under Indexing).
2. In the "Add a new sitemap" input field, type:
   `sitemap.xml`
3. Click **Submit**.
4. Confirm that the status reports **"Success"** and shows **25 Discovered Pages**.

---

## Step 4: Inspect & Request Indexing for Key Pages
Using the top **URL Inspection** bar in GSC, submit the following initial priority URLs to trigger rapid indexing:
1. `https://shamspersians.com/` (Home)
2. `https://shamspersians.com/persian-cats-banjara-hills`
3. `https://shamspersians.com/persian-cats-jubilee-hills`
4. `https://shamspersians.com/persian-cats-secunderabad`
5. `https://shamspersians.com/persian-cats-begumpet`
6. `https://shamspersians.com/kittens`

For each URL:
- Paste the URL into the search bar.
- Click **Test Live URL**.
- Verify that Googlebot can fetch the page without errors.
- Click **Request Indexing**.

---

## Step 5: Connect Website to Google Business Profile (GBP)
1. Log in to [Google Business Profile Manager](https://business.google.com).
2. Locate the **Shams Persians** listing (5.0 ★, 3 Reviews, Phone `078424 96805`).
3. Click **Edit Profile** > **Contact**.
4. In the **Website** field, enter the canonical domain:
   `https://shamspersians.com`
5. Ensure the Business Hours match:
   - Monday through Sunday: **Open 24 hours**
6. Under **Service Area**, confirm the areas served match our covered localities:
   - Hyderabad, Banjara Hills, Jubilee Hills, Secunderabad, Begumpet, Old City, Gachibowli, Kondapur, Kukatpally, Mehdipatnam, etc.

---

## Step 6: Verify Rich Results & Schema Markup
1. Test your live URL on the [Google Rich Results Test](https://search.google.com/test/rich-results).
2. Confirm the detection of:
   - **LocalBusiness / PetStore**
   - **AggregateRating** (5.0 ★, 3 reviews)
   - **FAQPage** structured data
   - **BreadcrumbList** on location pages

---

## Step 7: Weekly 30-Day Indexing Monitoring Plan

### Days 1 – 7:
- Verify that GSC Page Indexing reports 0 crawl errors, 0 redirect loops, and 0 blocked resources.
- Confirm Googlebot successfully fetched `robots.txt` and `sitemap.xml`.

### Days 8 – 14:
- Review the **Performance** report in GSC for initial impressions on queries like:
  - *"persian cats hyderabad"*
  - *"shams persians"*
  - *"persian cats near me"*
  - Locality-specific queries (e.g. *"persian cats in banjara hills"*).

### Days 15 – 30:
- Review average position, CTR, and search queries.
- Ensure new Google reviews on Google Business Profile reinforce keywords naturally (e.g., reviewers mentioning kitten delivery and localities).
