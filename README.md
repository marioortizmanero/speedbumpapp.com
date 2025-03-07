# speedbumpapp.com

This repository contains the source code needed to build [SpeedBump's website](https://speedbumpapp.com).

## Redirects

Using Cloudflare ("rules"); order matters:

* Name: Spanish
  * Match against: (expression) `(http.request.uri.path eq "/") and starts_with(http.request.accepted_languages[0],"es")`
  * Action: (301 dynamic redirect) `concat("https://",http.host,"/es",http.request.uri.path)`
* Name: German
  * Match against: (expression) `(http.request.uri.path eq "/") and starts_with(http.request.accepted_languages[0],"de")`
  * Action: (301 dynamic redirect) `concat("https://",http.host,"/de",http.request.uri.path)`
* Name: English
  * Match against: (expression) `http.request.uri.path eq "/"`
  * Action: (301 dynamic redirect) `concat("https://",http.host,"/en/")`
* /blog/v1/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/blog/v1/") or (http.request.uri eq "/blog/v1")`
  * Action: (301 static redirect) `/en/blog/v1/`
* /blog/launch/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/blog/launch/") or (http.request.uri eq "/blog/launch")`
  * Action: (301 static redirect) `/en/blog/launch/`
* /privacy-policy/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/privacy-policy/") or (http.request.uri eq "/privacy-policy")`
  * Action: (301 static redirect) `/en/privacy-policy/`

Using Netlify:

```
# Partly taken from:
#   https://www.11ty.dev/docs/i18n/#distinct-urls-using-implied-default-language

# Redirect any URLs with the language code in them already
/en/*   /:splat     301!

# Important: Per shadowing rules, URLs for the
# _non-default_ language-specific content files
# are served without redirects.

# Redirect for end-user’s browser preference override
/*  /es/:splat  302   Language=es
/*  /de/:splat  302   Language=de

# For SEO; trailing slashes are better to avoid duplicates.
/es   /es/ 301
/de   /de/ 301
```
