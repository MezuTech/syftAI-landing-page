---
layout: ../../../layouts/LegalLayout.astro
title: LoveStory — Support
description: Help with LoveStory — sign-in, credits, offline model downloads, generation speed and quality, and how to report a bug.
updated: September 9, 2026
eyebrow: LoveStory · Help
image: /og/lovestory.png
app: lovestory
appName: LoveStory
backHref: /apps/lovestory
backLabel: Back to LoveStory
siblings:
  - { href: /apps/lovestory/privacy, label: Privacy policy }
  - { href: /apps/lovestory/terms, label: Terms of service }
  - { href: /apps/lovestory/delete-account, label: Delete your data }
  - { href: /apps/lovestory/acknowledgements, label: Acknowledgements }
---

LoveStory is built by one person. Email
**[hello@syftup.com](mailto:hello@syftup.com)** and that person answers —
usually within a couple of days.

The app also has a **bug report** form in settings, which is the quickest way to
send something specific.

## Sign-in

**I forgot my password.** Use the reset link on the sign-in screen. It sends a
link to your email address; check spam if it does not arrive within a few
minutes.

**Sign-up is email and password only.** There is no Google or Apple sign-in in
the current build, whatever the icons on the sign-up screen might suggest —
those buttons are unfinished and do nothing yet.

**I want to read on a second device.** Sign in with the same email address and
your library, progress and saved stories follow you.

## Credits

**What a credit is.** One cloud generation. A new account starts with five, and
the balance goes back to five every thirty days. Opening the app is enough to
collect a refresh that is due.

**Generating on your device costs nothing.** No credits, no network, no limit
except your phone's patience. If you generate offline, the credit balance is
irrelevant to you.

**I ran out.** Wait for the refresh, or install an on-device model and generate
without them. There is currently no way to buy more — not as an upsell, simply
because purchasing does not exist in the app yet.

## Offline models

**Which one should I download?** The one marked recommended. Bigger is not
better on a phone: decode speed is limited by memory bandwidth, so every extra
gigabyte of weights makes generation proportionally slower. The smallest
competent model is usually the right answer.

**The download fails with an authorisation error.** Nothing in the current
catalogue is gated, but publishers do put models behind a licence acceptance
from time to time. If that happens, open the model's page on Hugging Face,
accept the terms there, and try the download again.

**It is very slow.** That is expected, and the app tries to be honest about it.
A budget phone decodes a few tokens per second, so a long story is a genuinely
long wait. This is why the offline "long" setting is six chapters rather than
the cloud's ten — the app sizes the request to what the phone can actually
finish rather than promising chapters it will not write.

**It ran out of memory or the app closed during generation.** The model is too
large for the free RAM on that device. Delete it and pick a smaller one; each
model card lists the RAM it wants.

**Where did my storage go?** Models are between roughly 475 MB and 2.4 GB each.
They stay on the phone until you delete them, in the app or with the app.

## Stories

**The story is repetitive, or the ending is abrupt.** Small models have a short
context window, so a story is written as an outline pass and then one pass per
chapter. That is what makes a long story possible at all, and it is also why the
seams sometimes show. The cloud path holds a story together better; a larger
on-device model holds it together better than a smaller one.

**Generation failed or timed out in the cloud.** Free hosted models get rate
limited and are retired without notice. The app tries several in order before
giving up. Waiting a few minutes usually works; generating on-device always
does.

**The story ignored my heat level, or went further than I chose.** Tell us the
trope, setting and heat level you picked. Model behaviour at the boundaries is
exactly the sort of thing we need reports on, in both directions.

**Can I edit a story?** You can read, keep, share and delete it. Editing prose
in place is not built yet.

## Privacy

Which path sends what is set out in the
[privacy policy](/apps/lovestory/privacy) — the short version is that on-device
generation sends nothing anywhere, and cloud generation sends the brief but
never your identity. To remove everything, see
[deleting your account](/apps/lovestory/delete-account).

## Reporting a bug

Send us: what you did, what happened, what you expected, your device and OS
version, and whether you were generating on-device or in the cloud. A screenshot
is worth several paragraphs.

## Contact

**[hello@syftup.com](mailto:hello@syftup.com)** — the same address for the app
and for anything about the studio.
