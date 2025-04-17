---
lang: en
title: "How to Monetize an App without Being an Ass"
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
      - |
        📈 Net revenue: $660K/mo
  - title: AppBlock
    lines:
      - "<mark>💎 Free version with Pro subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 2€ (paying yearly)
      - "🧪 *1-week free trial*"
      - |
        📈 Net revenue: $200K/mo
  - title: One Sec
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 1€ (paying yearly)
        * 2€ (paying monthly)

        Lifetime option: one-time 100€
      - "🧪 *1-week free trial*"
      - |
        📈 Net revenue: $95K/mo
  - title: Clearspace
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 5€ (paying yearly)
      - "🧪 *1-week free trial*"
      - |
        📈 Net revenue: $75K/mo
  - title: BePresent
    lines:
      - "<mark>🔄 Requires subscription</mark>"
      - |
        🗓️ Monthly pricing:

        * 6€ (paying yearly)
        * 18€ (paying monthly)
      - "🧪 *1-week free trial*"
      - |
        📈 Net revenue: $45K/mo
  - title: ScreenZen
    lines:
      - "<mark>🙏 Donation-based</mark>"
      - "Notes that it may change to a subscription in the future."
      - "Donation options grant early lifetime access: 6€, 10€, 22€."
      - |
        📈 Net revenue: <$10K/mo
  - title: Forest
    lines:
      - "<mark>💰 5€ one-time purchase on iOS, free on Android.</mark>"
      - "💎 Pro version on Android for one-time payment of 4.39€."
      - "🎮 In-app purchases for gamification ranging from 2€ to 22€."
      - "🎞️ Ad videos to redeem yourself from failure and in-game currency."
      - |
        📈 Net revenue: $105K/mo
  - title: Focus Plant
    lines:
      - "<mark>💎 Free with Pro subscription.</mark>"
      - |
        🗓️ Monthly pricing:

        * 3€ (paying yearly)
      - "🧪 *1-week free trial*"
      - "🎞️ Ad videos to get free in-game currency"
      - |
        📈 Net revenue: <$10K/mo
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

Not that *I* need to do the same, but it gives me a baseline for comparison[^rounding][^location][^discounts][^fake-free][^revenue].

Feel free to skip if it's too much info. You can come back to this section later on:

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

## Relying on donations

Did you know SpeedBump isn't the only meme-y app I've built?

Back in 2018, I released "Meme Stickers for WhatsApp" to the Play Store.

<style>
.screenshots {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.screenshot {
  display: block;
  max-width: 300px;
  min-width: 200px;
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>

<p>
  <div class="screenshots">
    <img class="screenshot" eleventy:widths="400" src="stickers-main.png" alt="A screenshot for the Play Store: +120 memes for WhatsApp, and a WhatsApp conversation with multiple memes (pink guy, drake, pepe)">
    <img class="screenshot" eleventy:widths="400" src="stickers-app.png" alt="A screenshot for the Play Store: an Android phone with the app opened, listing five sticker packs (pepes and wojaks, dank memes, rage memes, more memes, people and trending)">
  </div>
</p>

WhatsApp had just added support for stickers in the chat. With apps like mine, you could download pre-built packs of stickers.

It was among the first of its kind and focused on a popular niche: memes. So its growth was *spectacular*. In exactly 13 days, it already had 1 million downloads! For comparison, SpeedBump has 300 downloads after 60 days.

<p>
  <div class="screenshots">
    <img class="screenshot" eleventy:widths="400" src="stickers-downloads.png" alt="A chart of downloads for the app, with peaks of up to 12k downloads, and a total of 1 million">
    <img class="screenshot" eleventy:widths="400" src="stickers-1m-play-store.jpg" alt="The Play Store listing of the app after reaching a million downloads, ranking 8th in the charts.">
  </div>
</p>

As a monetization strategy, I had set up a Patreon to get donations.

...but in its entire lifetime, I didn't receive a single donation. 0. Nada.

![0 patrons - $0 per month; Donation ($3 or more per month); Hey there! GlowApps is an independent android developer created in 2018, from Spain. My first project has been Meme Stickers for Whatsapp, with many more apps to come in the future. For now, I'll focus on updating our first app and making it as big as possible. This Patreon is intended to be used as a blog for updates and to publish our Privacy Policy. For more information please check out out Twitter](stickers-patreon.png)

Don't get me wrong -- this isn't a fair comparison with SpeedBump. The stickers app didn't provide so much value: you only had to open it once, add your stickers to WhatsApp, and then forget about it completely. This is also a nuanced story that I'll write more about in another post.

But having worked in more projects that rely on donations (mainly open source ones), I'm well aware of the struggles. And I'd rather avoid that path.

### The happy ending?

After all, there was a happy ending. I was extremely lucky to see this somewhat sketchy email in my inbox:

![Good Mornign \[sic\] Glow Apps Team, Would you like to sell your new Meme Stickers for WhatsApp App? (link to app) Best regards](stickers-email.jpg)

It was my first year of university and I felt more lost than an octopus in a garage (that's a Spanish expression for you). So I proposed working together instead -- maybe I'd learn from him.

Long story short, he saved my ass by revamping the app and putting ads in it. We probably went too far, going from a 4.4-star rating to 3.7 after reaching 5 million downloads. So I'm not incredibly proud of it.

But who cares? It was a stickers app soon to be irrelevant. With SpeedBump, I'm in it for the long run.

### The exception: ScreenZen

ScreenZen is known for being tip-only. It started as a side project, so the creator presumably didn't need too much money.

[We only have revenue *estimations*](#what-the-other-guys-are-doing), but both Android and iOS apps indicate &lt;$5k per month. This could be anywhere from $0 to $5K -- it's too low for the platform to give an exact number.

ScreenZen notes that the pricing may change, but I suspect they'd have a hard time with the community.

## Subscriptions: the Bad Guys

Everyone's tired of subscriptions -- they're everywhere. But that's for a reason: they kinda work.

### Maybe you should provide enough value

Opal is both the biggest and *most expensive* screen time app. Yet it boasts a 4.8 rating. It has probably made healthy phone usage more accessible than anyone else:

![Ratings and reviews: 4.8 out of 5, 41.6k ratings](opal-ratings.png)

Some reviews complain about pricing, but I guess the majority is happy with it?


### Hibernating subscriptions

Automatic renewals give subscriptions a scammy look: you sign up for a free trial, forget about it, and get charged. This can be resolved through the app store's customer support, but it's a dark pattern.

- Kagi does this
- https://untested.sonnet.io/notes/auto-hibernate-subscriptions/

### Community subscriptions

- Finch does this

### Lifetime payment

Let's take a look at One Sec. Its monthly subscription is among the cheapest at 1-2€

![1 star out of 5 review: I am over it 👎. I have loved this app since I began using it 6 months ago. It even inspired me to purchase my cousin an iPhone, knowing that I would be able to restrict their screen time and break the dopamine-induced doom scrolling that social media and games can oftentimes induce. When I was going to sign up for the family plan, I saw the price had increased from $25 to $40. For reference, the individual plan is $20. Honestly, if I only intended to add one additional user to the subscription, what incentive is there in not receiving a discount? Look at it this way: 2x individual plans = $40; 2x users on family plan = $40. What's the difference? This is really shortsighted and selfish of the developer, in my opinion, and it makes me want to not even renew the individual subscription. $40 is too much. The app is good and well thought out, but it isn't actually providing that grand of a solution to justify that price, even for multiple users. $25 actually motivated me to add users to the app, given it was only a $5 increase from what I was paying. Doubling the price only frustrates me and makes me want to protest the developer's greed, and it shows that their intent isn't to actually provide a solution and make that accessible to more people, but to squeeze every dollar from their user base. What a careless decision towards users. I'll be deleting the app.
](one-sec-review.png)

## Pay Once

When the Play Store came out, this was the golden standard.

- Works for some features, but others have ongoing server costs.

## Ads

- When you open apps
- When you want to unlock a new annoyance

### Well-Integrated Ads

- NordVPN logo with memes like dancing cats

## Money for growth, not just making a living

My objective since the beginning has been to make quitting doomscrolling something accessible. Anyone should be able to do it.

Something I've learned is that the objective isn't just to sustain myself. Growing SpeedBump is what makes it accessible -- but that costs money.

If a tree falls in a forest and no one is around to hear it, does it make a sound? If my app is amazing but no one knows about it, does it make a difference?

This is particularly important in this space. People are increasingly aware of the problems caused by excessive social media usage. But not to a point where the majority does something about it.

At the same time, I need money. Not just for myself, but also to grow the business. Promoting your app costs money, but making your app more known is precisely how you make it accessible. Building something and waiting for everyone isn't perfect -- it takes a very long time and hits limits.

[^rounding]: Numbers are rounded for simplicity.
[^location]: Prices may vary according to the country. This analysis was based in Germany.
[^discounts]: No special discounts applied -- just the regular price on the app or website. For example, One Sec has a 50% discount for students, and other offers for families.
[^fake-free]: Technically, some apps have a free version. But it's so limited that I consider it paid. For example, if blocking more than one app requires a subscription, it's not really free. This includes: One Sec, Clearspace, BePresent.
[^revenue]: Monthly revenue estimations taken from https://appfigures.com/market/explorer
