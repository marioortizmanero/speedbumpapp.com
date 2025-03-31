# speedbumpapp.com

This repository contains the source code needed to build [SpeedBump's website](https://speedbumpapp.com).

## Redirects

Using Cloudflare ("rules"); order matters:

* Name: Spanish
  * Match against: (expression) `(http.request.uri.path eq "/") and starts_with(http.request.accepted_languages[0],"es")`
  * Action: (301 static redirect) `https://speedbumpapp.com/es/`
* Name: German
  * Match against: (expression) `(http.request.uri.path eq "/") and starts_with(http.request.accepted_languages[0],"de")`
  * Action: (301 static redirect) `https://speedbumpapp.com/de/`
* Name: English
  * Match against: (expression) `http.request.uri.path eq "/"`
  * Action: (301 static redirect) `https://speedbumpapp.com/en/`
* /blog/v1/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/blog/v1/") or (http.request.uri eq "/blog/v1")`
  * Action: (301 static redirect) `/en/blog/v1/`
* /blog/launch/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/blog/launch/") or (http.request.uri eq "/blog/launch")`
  * Action: (301 static redirect) `/en/blog/launch/`
* /privacy-policy/ (before i18n)
  * Match against: (expression) `(http.request.uri eq "/privacy-policy/") or (http.request.uri eq "/privacy-policy")`
  * Action: (301 static redirect) `/en/privacy-policy/`
* /en/blog/social-media-timer/ (before SEO strategy)
  * Match against: (expression) `(http.request.uri eq "/en/blog/social-media-timer/") or (http.request.uri eq "/en/blog/social-media-timer")`
  * Action: (301 static redirect) `/en/blog/how-to-reduce-screen-time/`
* /es/blog/social-media-timer/ (before SEO strategy)
  * Match against: (expression) `(http.request.uri eq "/es/blog/social-media-timer/") or (http.request.uri eq "/es/blog/social-media-timer")`
  * Action: (301 static redirect) `/es/blog/addicion-al-movil/`
* /de/blog/social-media-timer/ (before SEO strategy)
  * Match against: (expression) `(http.request.uri eq "/de/blog/social-media-timer/") or (http.request.uri eq "/de/blog/social-media-timer")`
  * Action: (301 static redirect) `/de/blog/handysucht-bekaempfen/`
