---
lang: en
title: "Trying to Monetize my App without Being an Ass"
permalink: /en/blog/monetization/
date: 2025-04-08
description: "TODO"
keywords: ["TODO"]
image: /assets/blog/marketing-learnings/preview.jpg
imageAlt: "TODO"
draft: true

pricing_apps:
  - title: Opal
    lines:
      - "<mark>💎 Free version with Pro subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 40€ (paying weekly)
        * 21€ (paying monthly)
        * 8€ (paying yearly)
      - "🧪 *1-week free trial*"
  - title: One Sec
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 2€ (family plan with up to 5 members, paying yearly)
        * 1€ (paying yearly)
      - "🧪 *1-week free trial*"
  - title: Clearspace
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 5€ (paying yearly)
      - "🧪 *1-week free trial*"
  - title: BePresent
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 6€ (paying yearly)
        * 18€ (paying monthly)
      - "🧪 *1-week free trial*"
  - title: ScreenZen
    lines:
      - "<mark>🙏 Donation-based</mark>"
      - "Notes that it may change to a subscription in the future."
      - "Donation options grant lifetime access: 6€, 10€, 22€."
  - title: AppBlock
    lines:
      - "<mark>💎 Free version with Pro subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 2€ (paying yearly)
      - "🧪 *1-week free trial*"
  - title: Forest
    lines:
      - "<mark>💰 5€ one-time purchase on iOS, free on Android.</mark>"
      - "💎 Pro version on Android for one-time payment of 4.39€."
      - "🎮 In-app purchases for gamification ranging from 2€ to 22€."
      - "🎞️ Ad videos to redeem yourself from failure and in-game currency."
  - title: Focus Plant
    lines:
      - "<mark>💎 Free with Pro subscription.</mark>"
      - |
        🗓️ Monthly pricing:

        * 3€ (paying yearly)
      - "🧪 *1-week free trial*"
      - "🎞️ Ad videos to get free in-game currency"
  - title: Cold Turkey
    lines:
      - "<mark>💰 Free with Pro one-time payment of 40€</mark>"
      - "*(desktop program, not an app)*"
  - title: Brick
    lines:
      - "<mark>💰One-time payment of 50€ per blocking device</mark>"
      - "*(physical device, not just an app)*"
  - title: UnPluq
    lines:
      - "<mark>🔄 70€ for one blocking device and 1 year subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 6€ (paying for 6 months)
        * 5€ (paying yearly)
        * 4€ (paying for 3 years)
      - "*(physical device, not just an app)*"
  - title: Wellspent
    lines:
      - "<mark>💼 Opaque pricing</mark>"
      - "They sell a screen time API to businesses instead of directly to the consumer."
---

For 3 months, I've been building [SpeedBump](/), an app to get you off the phone.

Doomscrolling is a problem so captivating that I actually [quit my job to solve it](https://nullderef.com/blog/quit-job-2024/). And I'm glad I did, because the work behind this funny app is *endless*. However, this also means that at some point I need to make a living with it -- even if I'm not in a hurry.

My app seems to make for a great product. People share encouraging feedback, telling me how it helps them have a healthier relationship with their phone. This review was written by someone who *isn't my friend*:

![Review with 5 stars for the app: I went out of my way to track down and review this app because I appreciate it so much. This is exactly the tool I needed to help me handle my smartphone addiction. It introduces a tiny bit of friction any time I go to use a brain candy app, which is just enough to get me to think "do I actually want to look at this right now?" And the answer is usually no and I don't. But sometimes it's yes and I can! Which means I'll keep using it.](review.png)

Isn't that *super* cool???

The question is: does SpeedBump make for a good business? Truth is, I didn't have that question too much in my mind when I started.

Pricing is a necessity that users would rather avoid; ideally, everything is free. That's because every monetization option has downsides which -- as a long-time phone user -- I've felt:

* Subscription burnout
* Intrusive advertisements
* Selling data
* ...the list goes on

Can we find a middle point between monetizing a product and being an ass?

## What the other guys are doing

Not that *I* need to do the same, but it gives me a baseline for comparison[^rounding][^location][^discounts][^fake-free]:

<div class="third-party-apps">
{%- for app in pricing_apps %}
  <div class="card">
    <img eleventy:widths="100" src="/assets/competitors/{{ app.title }}.webp" alt="{{ app.name }}'s logo">
    <h3>{{ app.title }}</h3>
    <div class="card-content">
      {%- for line in app.lines %}
      <p>{{ line | markdownify }}</p>
      {%- endfor %}
    </div>
  </div>
{%- endfor %}
</div>

TODO: look at reviews of other apps and see what people say about it being paid.

## Donations

TODO: bad experience with Meme Stickers.

## Subscriptions: the Bad Guys

Everyone's tired of subscriptions -- they're everywhere.

Truth is, they work.

### Hibernating subscriptions

- Kagi does this
- https://untested.sonnet.io/notes/auto-hibernate-subscriptions/

### Community subscriptions

- Finch does this

## Pay Once

- Works for some features, but others have ongoing server costs.

## Ads

- When you open apps
- When you want to unlock a new annoyance

## My Dream: Well-Integrated Ads

- NordVPN logo with memes like dancing cats

## Money for growth, not just making a living

My objective since the beginning has been to make quitting doomscrolling something accessible. Anyone should be able to do it.

Something I've learned is that the objective isn't just to sustain myself. Growing SpeedBump is what makes it accessible -- but that costs money.

If a tree falls in a forest and no one is around to hear it, does it make a sound? If my app is amazing but no one knows about it, does it make a difference?

This is particularly important in this space. People are increasingly aware of the problems caused by excessive social media usage. But not to a point where the majority does something about it.

At the same time, I need money. Not just for myself, but also to grow the business. Promoting your app costs money, but making your app more known is precisely how you make it accessible. Building something and waiting for everyone isn't perfect -- it takes a very long time and hits limits.

[^rounding]: Numbers are rounded for simplicity.
[^location]: Prices may vary according to the country. This analysis was based in Germany.
[^discounts]: No special discounts applied -- just the regular price on the app or website. For example, One Sec has a 50% discount for students.
[^fake-free]: Technically, some apps have a free version. But it's so limited that I consider it paid. For example, if blocking more than one app requires a subscription, it's not really free. This includes: One Sec, Clearspace, BePresent.
