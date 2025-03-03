---
lang: en
title: The German language broke my website
date: 2025-03-04
description: Did you know that Germans have 18 variations for "speed bump"?
keywords: ["speedbump app", "screen time", "social media addiction", "startup journey", "android", "iphone", "productivity app"]
image: /assets/blog/launch/preview.jpg
imageAlt: TODO
draft: true
---

I'm building an app to help people use their phones less. As a metaphor I use speed bumps -- they're annoying but actually work. This worked well enough as a catchy phrase in [the landing page](/), and it gave the project some personality.

Or at least it worked well enough until I tried to translate the site to German. There are a whooping 18 terms that can be used to refer to a speed bump. Some of them are less popular, and two out of the three translating websites gave me wrong terms. Not to mention that Google Translate's word was so long that it broke the site, going beyond the screen size:

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
    <img class="screenshot" eleventy:widths="300" src="/en/blog/german-translation/english.jpg" alt="A screenshot of a landing page with:
  Do you know speed bumps?
  Annoying, but they sure slow you down.
  Meet the speed bump for addictive apps.
  [Play Store button]
  [App Store button]">
    <img class="screenshot" eleventy:widths="300" src="/en/blog/german-translation/german.jpg" alt="The same picture as before in German. The translation for 'speed bump' is so long that it goes beyond the screen size.
  Kennst du Geschwindigkeitsbegrenzung?
  Nervig, aber sie bremsen dich definitiv aus.
  Entdecke die Bodenschwelle für Sucht-Apps.">
  </div>
</p>

I've collected all the terms here because why not -- let me know if you know more of them:

1. **Geschwindigkeitsbegrenzung**: suggested by Google Translate. It's completely wrong and means "speed limit".
2. **Bodenschwelle**: suggested by Claude AI. It means "ground bump" and is not used, according to a German friend.
3. **Fahrbahnschwelle**: suggested by DeepL. It means "roadway swell" and is more common.
4. **Temposchwelle**: suggested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrlgf2/). It means speed/rate bump.
5. **Bremsschwelle**: sugested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrl7jo/). According to Wikipedia, this is a broader term.
6. **Rüttelschwelle**: suggested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrl7jo/). This is what appears in dictionaries (["Duden"](https://en.wikipedia.org/wiki/Duden)).
7. **Bremsbückel**: suggested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrli58/).
8. **Schwelle**: Wikipedia lists it as the most popular term in Austria.
9. **Geschwindigkeitshügel**: another term mentioned on Wikipedia.
10. **Kreissegmentschwellen**: another one from Wikipedia.
11. **Moabiter Kissen**: in Moabit, Germany (Wikipedia). It's a neighbourhood of Berlin. Kissen means cushion, so it'd be "Moabit Cushion".
12. **Krefelder Kissen**: the equivalent for Krefeld, Germany (Wikipedia).
13. **Berliner Kissen**: the equivalent for Berlin, Germany (Wikipedia).
14. **Kölner Teller**: the equivalent for Cologne, Germany (Wikipedia).
15. **Delfter Hügel**: the equivalent for Delft, Netherlands (Wikipedia).
16. **schlafender/liegender Polizist**: a joke with Italian origin referring to speed bumps being sleeping or laying-down policemen. This is also used in languages such as English (sleeping policemen) or Spanish (policía tumbado).
17. **Ralentisseur**: taken from French, so probably more common in the borders of Germany.
18. **Speedbump**: taken from English; most young people are familiar with it.
19. **Hubbel**: suggested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrracd/). It's something that bulges out.
20. **Huckel**: suggested [on Reddit](https://www.reddit.com/r/germany/comments/1j2gryv/comment/mfrracd/), similar to Hubbel. It's slang.

Lesson learned: get a proper translation service -- even AI doesn't work well enough. Or without budget, try asking a friend. Though even with proper translation, culture might make it irrelevant. It turns out speed bumps aren't all that popular in Germany. Munich stopped building them twenty years ago because they were a danger to cyclists and rescue vehicles ([according to Reddit](https://www.reddit.com/r/Munich/comments/1ieicbg/comment/mac76xe/)).
