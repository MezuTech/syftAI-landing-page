---
name: LoveStory
order: 3
tagline: Romance novels your phone writes, with or without a signal
summary: >-
  Pick a trope, a setting and how warm you want it, and get a full multi-chapter
  romance — generated in the cloud, or entirely on your device with no network
  and no API credits.
status: in-development
progress: 80
platforms: [iOS, Android]
icon: ../../assets/apps/lovestory/icon.svg
frame: phone
features:
  - title: Start from a trope, not a blank prompt
    body: >-
      Enemies to Lovers, Fake Dating, Slow Burn, Second Chance, Forbidden Love.
      Then a setting — small town, historical, workplace, tropical — and a heat
      level from fade-to-black upward.
  - title: Written on your device
    body: >-
      A Gemma model downloaded once and run through LiteRT-LM. No connection, no
      account, no credits, and nothing about the story leaves the phone.
  - title: Or in the cloud when you want range
    body: >-
      The same request can be routed to a larger hosted model instead. The
      app picks per request, and defaults to on-device the moment a model is
      installed.
  - title: Chapters, generated as chapters
    body: >-
      An outline pass first, then one pass per chapter. Small models have a two
      to four thousand token window — asking for a whole novel in one shot
      returns truncated nonsense, so the app never does.
  - title: A library that keeps your place
    body: >-
      Stories you start show up with the page saved, favourites are one tap,
      and anything downloaded reads with the radio off.
  - title: No account to browse
    body: >-
      Read what is there before signing up for anything.
stack:
  - Flutter
  - Bloc
  - Supabase
  - flutter_gemma
  - LiteRT-LM
  - OpenRouter
legal:
  - { href: /apps/lovestory/privacy, label: Privacy policy }
  - { href: /apps/lovestory/terms, label: Terms of service }
  - { href: /apps/lovestory/support, label: Support }
  - { href: /apps/lovestory/delete-account, label: Delete your data }
  - { href: /apps/lovestory/acknowledgements, label: Acknowledgements }
faq:
  - q: Does anything I generate leave my phone?
    a: >-
      On the on-device path, no — not the trope, not the setting, not a word of
      the prose. It runs on a model you downloaded once and works with the radio
      off. On the cloud path the story brief is sent to OpenRouter to be
      written, but your email, your name and your account identifier are not.
      If you want a guarantee, generate on device; that is what it is for.
  - q: What does it cost?
    a: >-
      Nothing. Cloud generation spends a credit, you start with five, and the
      balance returns to five every thirty days. Generating on your own device
      costs no credits at all. There is no subscription and no in-app purchase
      in the app today, so there is nothing to buy and nothing to cancel.
  - q: Do I own the stories it writes?
    a: >-
      As between you and us, yes — we claim no ownership and we do not publish
      them. The honest caveat is that copyright in AI-generated text is
      unsettled in several countries, so we cannot promise you own a copyright
      the law may not grant. Another user with a similar brief may also get a
      similar story.
  - q: Is it 18+?
    a: >-
      Yes. The highest of the three heat levels produces explicit sexual content
      between adults, so the app is for over-18s. Mature content is switched off
      by default and stays off until you turn it on. The lower two levels are
      fade-to-black and clean respectively.
  - q: Which offline model should I download?
    a: >-
      The one marked recommended, currently Qwen 2.5 1.5B. Bigger is not better
      on a phone — decode speed is limited by memory bandwidth, so every extra
      gigabyte of weights makes generation proportionally slower. The catalogue
      runs from 475 MB to 2.4 GB and each card lists the RAM it wants.
  - q: Why is offline generation so slow?
    a: >-
      Because a phone is not a datacentre. A budget device decodes a few tokens
      a second, and every token read has to pass over the whole weight file. The
      app sizes offline requests to match — six chapters where the cloud does
      ten — rather than promising a story the phone will not finish.
  - q: Why is a story sometimes repetitive or abruptly ended?
    a: >-
      Small models hold two to four thousand tokens at once, which is nowhere
      near a novel. So generation is split: one pass for the outline, then one
      pass per chapter that sees only the outline and a recap of what came
      before. That split is what makes a long story possible, and it is also
      why the seams occasionally show.
  - q: Can I sign in with Google or Apple?
    a: >-
      Not yet. Sign-up is by email address and password only. The social buttons
      on the sign-up screen are unfinished and do nothing in the current build.
roadmap:
  - { label: 'Cloud generation and reader', done: true }
  - { label: 'Library, favourites, offline downloads', done: true }
  - { label: 'On-device generation with Gemma', done: true }
  - { label: 'Model manager: download, select, delete', done: true }
  - { label: 'Store submission', done: false }
---

The on-device path is the interesting half. A phone-sized model cannot hold a
novel in its context window, so generation is split: one pass to get an outline
and a cast, then a pass per chapter that only sees the outline and what came
before. That is slower than a single hosted request and it costs nothing, works
on a plane, and never sends a word of what someone is reading to a server.
