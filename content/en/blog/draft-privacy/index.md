---
lang: en
# TODO: generic title: how to choose a privacy policy
title: "Screen Time Apps and Privacy: Bad Combination?"
permalink: /en/blog/privacy/
date: 2025-04-08
description: "TODO"
keywords: ["TODO"]
image: /assets/blog/marketing-learnings/preview.jpg
imageAlt: "TODO"
draft: true
---

I'm building SpeedBump, an [intentionally annoying app to break doomscrolling](/en/). Such apps need access to the apps you open and use at all times, so I've been wary about privacy. Thus, SpeedBump doesn't collect **any** data other than crash reports.

## Prototypes don't need to collect data

Collecting data (_quantitative_) is actually discouraged for prototypes. New products should focus on asking people through surveys, calls, and conversations (_qualitative_).

For example, I'd rather hear from a user that the app is too annoying than to figure it out by looking at data. Why?

1. Prototypes don't have many users. Analyzing data based on a user base of 30 is not a good idea.
2. People's stories are anecdotal, but they give you more information. When I talk with people, they share their opinion on phone addiction in general, what methods they tried, what worked and what didn't, and much more.

Thanks to qualitative data, [I discovered that my app sucked](/en/blog/v1/) at first. No code needed, just a survey and some chats.

## Collecting data actually helps improve the app

However, as your user count grows, anonymized data can be genuinely helpful.

With just qualitative data, you're limited to being reactive rather than proactive. You can detect bugs instead of waiting for someone to complain. And users rarely complain because they have other things to do -- they'll just uninstall.

This data also enables you to optimize the app. How should I know if people use their phones less when I force them to take a 10-minute break versus a 15-minute one? You try both versions on randomized groups of users and look at their average screen time -- an A/B test.

## What kind of data collection is intrusive?

So far, I talked about anonymized data.

## Do users care?

In reality, the majority don't care enough -- they just want to use the app.

Privacy-wary users are a loud minority. It depends on the industry, but TODO study.

## Privacy policies of other screen time apps

As research, I read the privacy policy of the 6 most popular screen time apps. I promise I didn't just feed it to an LLM; this was a pain.

No apps state that they sell your data, but it could still end up in the hands of others:

* Through **business transfers**: if [Meta buys Opal](/en/blog/opal-bought-by-meta/), then Meta owns its data.
* Within **associates**: Clearspace had a broad definition for with whom they may share data:

  ![Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.](clearspace-affiliates.png)

* Due to a **security compromise**: no system is 100% secure, which Opal, BePresent and Clearspace mention (good!):

  ![Please do not disclose your Account password to unauthorized people. No method of transmission over the Internet, or method of electronic storage, is 100% secure, however](opal-security.png)

Given how complex and ambiguous the policies are, instead of saying "app X is bad", I can:

* Point out red flags 🚩. The apps could clarify ambiguous statements as a response to this post -- I don't mean to shame anyone.
* List what data the company collects, which would be at risk in the cases above.

### Data collected

TODO: table with kind of data collected, with the apps as columns and the data types as rows. The data types are emojis and there's a legend.

### User interface

TODO: table with opt-in/opt-out, assuming, etc.

### Opal

The biggest player in screen time apps.

[Terms and Privacy](https://www.opal.so/terms) (easy read), [FAQ](https://www.opal.so/help/what-do-you-do-with-my-data), and [manifesto](https://www.opal.so/blog/manifesto)

* Data to improve products and services
* Not sold to third parties
* Targeting >13 year olds (separate app for children)

* Non-anonymous data: contact info, phone number, location, payment info
  * Used for sharing an account across platforms, payments, and bug reports.
* Anonymous data: **including** crash reports, most commonly used Opal features, when Opal was installed, how many times Opal is opened
  * Used to improve the app
  * "we often conduct research on user demographics, interests, and behavior"
  * "we may collect information about an individual’s online and offline preferences, habits, movements, trends, decisions, associations, memberships, finances, purchases and other information for statistical purposes"

In the app:

* Consent is assumed
* No way to opt out
* Pop up to track activity across other companies' apps and websites

## ScreenZen

[Privacy Policy](https://www.screenzen.co/privacy) (easy read)

* Only anonymous data with third-party software (UXCam, BugLife, Mixpanel):
  * Used to improve the app.
  * Screens visited, actions performed, device details. If the user reports a bug, they'll be asked to record their screen.

In the app:

* Consent is assumed
* No way to opt out

## One Sec

[Privacy Policy](https://one-sec.app/privacy/) (generated with [iubenda](https://www.iubenda.com/en/privacy-and-cookie-policy-generator), typical read)

* device logs; device information; sleeping activity; Usage Data; Calendar permission; Reminders permission; Photo Library permission; email address; User ID; payment info; purchase history; Trackers; first name; last name.
  * Used for enforcement requests, to improve the app, detect fraudulent activity, payments, technical reasons
  * Third-party software: TelemetryDeck, Make (Celonis), Paddle, Hetzner, Sendgrid, Typeform

In the app:

* Content is assumed
* No way to opt out

## Clearspace

[Privacy Policy](https://getclearspace.notion.site/Privacy-Policy-1d2959a3b6a14791aff5874704623820) (tough-ish read)

* Personal information:
  * names, email addresses, device information, location, actions performed
  * used for testimonials, improving the app, user-to-user communication, enforcement requests,

In the app:

* Consent is assumed
* No way to opt out
* Pop up to track activity across other companies' apps and websites

In theory, screen time apps on iOS don't have access to data about the apps you use. When you start blocking an app, Apple gives developers an encrypted token, which they can use to set up limits. But at no point do they know *what* app you're blocking.

TODO: image

Clearspace works around this limitation by simply asking the user what app they just blocked. I'm not sure why they do this or if it's allowed, though.

## AppBlock

[Privacy Policy - Play Store](https://appblock.app/privacy-policy-google-play/), [Privacy Policy - App Store](https://appblock.app/privacy-policy-app-store/) (tough-ish reads)

In the app:

* Consent is assumed (but has a link to the privacy policy)
* No way to opt out
* Pop up to track activity across other companies' apps and websites

* Personal data: e-mail, password, app configuration, location, device information
* Anonymized information: actions performed
* Third party services: AdMob, Firebase Analytics, Firebase Crashlytics, Facebook, RevenueCat, Singular
* Used for: enforcement requests, communicating with the user (e.g., bug reports)

## BePresent

[Privacy Policy](https://www.bepresentapp.com/privacy-policy) (tough-ish reads)

* Personal data: names, email addresses, usernames, location, device information, **app usage information**
* Used for: payment, account

* improve the app, communicate with you, fraud prevention, enforcement requests
