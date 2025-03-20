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
