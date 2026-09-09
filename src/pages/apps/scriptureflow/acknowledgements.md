---
layout: ../../../layouts/LegalLayout.astro
title: ScriptureFlow — Acknowledgements
description: The translations, lexicons, cross-reference data, imagery and open-source software ScriptureFlow is built from, with the licence each one carries.
updated: September 9, 2026
eyebrow: ScriptureFlow · Credits
image: /og/scriptureflow.png
app: scriptureflow
appName: ScriptureFlow
backHref: /apps/scriptureflow
backLabel: Back to ScriptureFlow
siblings:
  - { href: /apps/scriptureflow/privacy, label: Privacy policy }
  - { href: /apps/scriptureflow/terms, label: Terms of service }
  - { href: /apps/scriptureflow/support, label: Support }
  - { href: /apps/scriptureflow/delete-account, label: Delete your data }
---

Almost nothing in ScriptureFlow that matters was written by us. The text is
older than every institution reading it, the lexicon is from 1890, and the
cross-references were compiled by other people who gave them away. Two of those
sources are given away on the condition that they are credited, so this page is
partly gratitude and partly the licence being honoured.

## Scripture

All four translations in the app are in the public domain. That is why
scripture is never behind the subscription — we could not gate it honestly, and
we would not want to.

- **Berean Standard Bible (BSB)** — released into the public domain on 30 April 2023. Source: [bereanbible.com](https://bereanbible.com).
- **King James Version (KJV)** — public domain. Text from the [eBible.org](https://ebible.org) 2006 edition.
- **World English Bible (WEB)** — public domain. Text from [eBible.org](https://ebible.org).
- **American Standard Version (ASV)** — public domain. Text from [eBible.org](https://ebible.org).

Verse counts differ between them, and that is correct rather than a fault in
our parsing. BSB and ASV omit the sixteen verses absent from the critical texts
— Matthew 17:21, Mark 9:44 and 9:46, John 5:4, Acts 8:37 among them — and WEB
places the Romans doxology at 14:24–26 rather than 16:25–27. The app shows you
what the translation actually says.

**The ESV and NIV are deliberately absent.** Crossway does not permit the ESV
text to be stored in a database like ours, and the NIV is not licensable at
this scale. We would rather be missing a translation than misrepresent one.

## Word roots and the concordance

- **Strong's Hebrew and Greek dictionaries** — the machine-readable edition maintained by the [openscriptures](https://github.com/openscriptures/strongs) project, licensed **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. James Strong's 1890 dictionary is itself in the public domain; the JSON derivation that makes it usable by software is not, and is used here under that licence.
- **Word-level Strong's tagging** — derived from the tagged KJV text, public domain.

Every definition you reach by tapping a word in a verse comes from that
lexicon. It is a nineteenth-century work: precise, opinionated, and occasionally
overtaken by a century of scholarship since. Treat it as a door into the
original language rather than as the last word on it.

## Cross-references

- **Cross-reference data** — from [OpenBible.info](https://www.openbible.info/labs/cross-references/), licensed **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)**. Around 344,000 links between passages, community-voted, and the reason Related Scriptures can find the passage carrying the same thought rather than merely the same word.

## Topical curation

The pool of verses the reel draws from is filtered against public-domain
topical indexes — **Torrey's New Topical Textbook**, **Nave's Topical Bible**,
and OpenBible's topic data. They decide what is eligible; a set of our own
filters then decides what is legible on a phone screen out of context.

## Generated study material

Study sheets, plain-language paraphrases and assisted search are drafted by
language models accessed through [OpenRouter](https://openrouter.ai). The
scholarship underneath them is not generated — the Greek and Hebrew, the
lexical entries and the cross-references are looked up in the sources above,
and the model writes the prose around them. That is the arrangement that keeps
a model from inventing a Greek word.

It can still be wrong about the prose. The
[terms](/apps/scriptureflow/terms) say so plainly, and so does the app.

## Software

ScriptureFlow is a [Flutter](https://flutter.dev) application. The open-source
packages it depends on, each under its own licence — mostly BSD, MIT or
Apache 2.0 — include:

- **Riverpod** and **go\_router**, for state and navigation
- **supabase\_flutter**, the client for the database and sign-in
- **just\_audio** and **flutter\_tts**, for playback and on-device narration
- **purchases\_flutter** (RevenueCat), for store purchases
- **home\_widget**, for the lock-screen and home-screen verse
- **share\_plus**, **flutter\_svg**, **shared\_preferences**, **url\_launcher**
- **Lucide** icons, ISC licensed

The complete licence text for every dependency is listed inside the app, under
**Settings → About → Licences**, which is generated from the build itself and
is therefore always the accurate list.

Infrastructure: [Supabase](https://supabase.com) for the database, auth and
edge functions; [Resend](https://resend.com) for sign-in emails;
[RevenueCat](https://www.revenuecat.com) for entitlements.

## Imagery

Photographs on the giving cards are openly licensed stock images, chosen to
evoke a kind of work. They are not the charities' own photography, and their
presence is not a claim of partnership or endorsement — see section 8 of the
[terms](/apps/scriptureflow/terms).

## Corrections

If something here is credited wrongly, credited insufficiently, or belongs to
you and should not be in the app at all, write to
**[support@scriptureflow.app](mailto:support@scriptureflow.app)** and it will be
fixed or removed. That is not a formality — a takedown request from a rights
holder is answered the same week.
