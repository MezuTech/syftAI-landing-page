---
layout: ../../../layouts/LegalLayout.astro
title: LoveStory — Privacy Policy
description: What LoveStory stores, the difference between generating a story on your device and in the cloud, which providers see what, and how to delete all of it.
updated: September 9, 2026
eyebrow: LoveStory · Legal
image: /og/lovestory.png
app: lovestory
appName: LoveStory
backHref: /apps/lovestory
backLabel: Back to LoveStory
siblings:
  - { href: /apps/lovestory/terms, label: Terms of service }
  - { href: /apps/lovestory/delete-account, label: Delete your data }
  - { href: /apps/lovestory/support, label: Support }
  - { href: /apps/lovestory/acknowledgements, label: Acknowledgements }
---

LoveStory is made by MezuTech, a one-person studio. This policy covers the
LoveStory mobile app for iOS and Android. It is written to be read, so where a
section could say "certain information" it names the field instead.

Three things are true of the whole app and worth stating before the detail:

- **There is no analytics SDK in the app.** No Google Analytics, no Firebase, no Crashlytics, no Sentry, no Amplitude, no advertising identifier, no third-party tracking pixel. The app ships no code whose purpose is to observe you.
- **Nothing is sold, rented, or shared with advertisers.** There is no advertising in LoveStory and no data broker relationship to disclose.
- **What you read is nobody's business but yours.** Stories you generate are private to your account. They are not published, not put in anyone else's feed, and not used to train anything.

## 1. The part that decides everything else: where the story is written

LoveStory can write a story two ways, and the privacy consequences are
completely different. The app tells you which one it is using before you press
generate, and defaults to on-device the moment a model is installed.

### On device

A model you downloaded once runs on your own phone. **Nothing about the story
leaves the device** — not the trope you picked, not the setting, not the heat
level, not a word of the prose. This works with the radio off, on a plane, with
no account and no network. It is the private path, and it is the default when a
model is present.

### In the cloud

The request is sent to [OpenRouter](https://openrouter.ai), which routes it to a
language model, and the prose comes back. What is sent is **the story request
itself** — the genre, tropes, setting, heat level, length and any premise you
typed. What is not sent is your email address, your name, your account
identifier, your library, or anything you have previously read. The model
provider receives an anonymous writing brief, not a reader.

Because the app calls OpenRouter directly rather than through a server of ours,
OpenRouter sees the network request as coming from your device. We do not
permit the providers reached this way to train on the content we send, but the
honest summary is this: **if you want a guarantee that a story never touches
anyone else's computer, use the on-device path.** That is what it is for.

## 2. What we store

### Your account

An account is needed to save stories, not to browse. Sign-up is by **email
address and password** — that is the only method the app offers.

- **Email address** — used to sign in, and to send a password reset if you ask for one. It is not used for marketing; there is no mailing list.
- **A display name**, if you set one. It is yours to type and can be anything.
- **A short bio and avatar**, if you fill them in. Both are optional and both are blank until you do.

### Created by using the app

- **Stories and chapters you generate**, with the title, synopsis, genre, tropes and heat level attached to them.
- **Your library** — what you saved and what you marked a favourite.
- **Reading progress** — which story and chapter you last had open, so it reopens where you left it.
- **Ratings** you give a story.
- **Preferences** — font size and family, whether mature content is shown, notification and autoplay settings.
- **Your credit balance** — how many generations you have left and how many you have used in total. See section 4.
- **Bug reports you submit**, which contain what you chose to write in them.

### What we never collect

No contacts, no photos, no calendar, no microphone, no camera, no precise or
coarse location, no health data, no advertising ID, no device fingerprint, no
list of other apps on your phone.

## 3. What leaves your phone, and to whom

- **Supabase** — the database and sign-in system. It holds the account and content in section 2. Access is enforced by row-level security, written so an account can read and write only its own rows.
- **OpenRouter** — only on the cloud generation path, and only what section 1 describes.
- **Hugging Face** — only when you download an on-device model. It is a file download: Hugging Face sees the request for that file and your IP address, the way any file host does. Some models are gated and require you to accept the model's licence there first.
- **Unsplash** — story covers are openly licensed photographs loaded from Unsplash's image servers, so Unsplash sees the request for the image and your IP address. No identifier of yours is attached to it.

There is no other outbound connection. The app has no server of ours between it
and these services.

## 4. Credits, and the absence of payments

Generating a story in the cloud costs a **credit**. A new account starts with
five, and the balance refreshes back to five every thirty days, collected simply
by opening the app.

**There is no way to buy anything in LoveStory today.** There is no
subscription, no in-app purchase, no card details, no payment processor, and
therefore no payment data of any kind for this policy to describe. Generating on
your device does not spend a credit at all — it costs nothing because it uses
nothing of ours.

If that changes, this policy changes with it, and the change will be obvious
rather than buried.

## 5. Age

**LoveStory is for adults.** Its highest heat level produces explicit sexual
content, and the app is not directed at children. Mature content is switched
**off** by default and stays off until you turn it on.

We do not knowingly collect personal data from anyone under 18. If you believe
a minor has created an account, write to us and it will be deleted.

## 6. How long we keep things

- **Content you created** — stories, library, reading progress, ratings — is kept until you delete it or delete your account.
- **Deleting your account deletes it.** Every table is keyed to your account with a cascade, so removing the account removes the stories, chapters, library rows, progress, ratings, settings and credit record with it.
- **Models you downloaded** live on your phone, not with us. Deleting the app removes them; so does deleting them individually in the app.
- **Stories generated on your device and never saved** were never ours to keep.

## 7. Your rights

You can, at any time:

- **Read, edit and delete** any story in your library, one at a time.
- **Export or copy** a story out by sharing it.
- **Delete your account and everything attached to it** — the route is on [the deletion page](/apps/lovestory/delete-account), which is honest about the fact that this is an email request today rather than a button in the app.

If you are in the UK, EU, or another jurisdiction with statutory data rights,
those rights — access, rectification, erasure, portability, objection, and
complaint to a supervisory authority — apply, and the routes above are how we
serve them. The lawful basis for your account content is performance of the
contract you entered by using the app; for your email address, it is the
legitimate interest of letting you sign back in.

## 8. Security, honestly stated

Traffic is encrypted in transit. Access to your rows is enforced by database
policy rather than by client code, so a bug in the app cannot expose another
reader's library.

LoveStory is in development and has not been through a security audit. No system
is perfect and we will not claim otherwise. If we discover a breach affecting
your data, we will tell you at the email address on your account and publish a
notice on this page.

## 9. Changes

If this policy changes materially, the date at the top changes and the app tells
you the next time you open it. Continuing to use LoveStory after that means the
revised policy applies.

## 10. Contact

MezuTech — [hello@syftup.com](mailto:hello@syftup.com). We answer data requests
ourselves; there is no ticket queue.
