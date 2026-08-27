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
