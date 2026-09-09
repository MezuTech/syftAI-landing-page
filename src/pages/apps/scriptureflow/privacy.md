---
layout: ../../../layouts/LegalLayout.astro
title: ScriptureFlow — Privacy Policy
description: What ScriptureFlow stores, what leaves your phone, which providers process it, and how to delete all of it.
updated: September 9, 2026
eyebrow: ScriptureFlow · Legal
image: /og/scriptureflow.png
app: scriptureflow
appName: ScriptureFlow
backHref: /apps/scriptureflow
backLabel: Back to ScriptureFlow
siblings:
  - { href: /apps/scriptureflow/terms, label: Terms of service }
  - { href: /apps/scriptureflow/delete-account, label: Delete your data }
  - { href: /apps/scriptureflow/support, label: Support }
---

ScriptureFlow is made by MezuTech, a one-person studio. This policy describes
the ScriptureFlow mobile app for iOS and Android. It is written to be read, so
where a section could say "certain information" it names the field instead.

Two things are true of the whole app and worth stating before the detail:

- **There is no analytics SDK in the app.** No Google Analytics, no Firebase, no Crashlytics, no Sentry, no Amplitude, no advertising identifier, no third-party tracking pixel. The app ships no code whose purpose is to observe you.
- **Nothing is sold, rented, or shared with advertisers.** There is no advertising in ScriptureFlow and no data broker relationship to disclose.

## 1. You do not need to give us a name

ScriptureFlow opens straight into scripture. On first launch the app creates an
**anonymous account** — a random identifier and nothing else, no email, no
name, no contact details. That identifier is what your notes and reading
progress are attached to, so the app works fully without you ever identifying
yourself.

If you later sign up, that same anonymous account is upgraded in place, so
nothing you already saved is lost.

## 2. What we store

### Only if you choose to create a full account

- **Email address** — if you sign up with a six-digit email code. Used to send that code and to let you sign back in on another device. It is not used for marketing; there is no mailing list.
- **Apple account identifier and, if you permit it, name and email** — if you use Sign in with Apple. If you use Apple's Hide My Email, we only ever see the relay address.
- **A display name**, if you set one. It is yours to type and can be anything.

### Created by using the app

- **Notes and highlights** you write on a verse.
- **Saved verses** and the verse pinned to your home-screen widget.
- **Reading progress** — chapters marked read, plan day completions, and the dates you read on, which is what the streak and coverage meter are counted from.
- **Preferences** — your translation, text size, and the other reading settings.
- **A share count** — a row recording that a verse was shared, used to show which passages people return to. It records the verse, not the recipient, and never touches your contacts.

### What we never collect

No contacts, no photos, no calendar, no microphone, no camera, no precise or
coarse location, no health data, no advertising ID, no device fingerprint, no
list of other apps on your phone.

## 3. Where notes live

**Notes are free and work with no account.** By default they are stored on your
device.

Carrying notes to your account so they survive a reinstall and appear on a
second device is part of ScriptureFlow Pro. If you are not a Pro subscriber,
your notes stay on the phone you wrote them on and are never uploaded.

## 4. What leaves your phone, and to whom

The app talks to a small number of services, each for one job.

- **Supabase** — the database and sign-in system. It holds the account and content described in section 2, and it is where scripture text is served from. Data is protected by row-level security: the rules are written so an account can read and write only its own rows.
- **OpenRouter** — used for two features. *Study sheets*: the verse reference and its public-domain scripture text are sent to a language model to draft the study prose. *Search assist*: when a plain search finds nothing, your search wording is sent to a model, which answers with **verse references only** — the verse text always comes from our own database, never from the model. Your notes, your email, and your account identifier are never sent to a model. We do not permit these providers to train on the content we send.
- **RevenueCat** — used only if you subscribe. It handles the purchase and tells our server whether your subscription is active. See section 5.
- **Apple / Google** — sign-in, and payment if you subscribe. We never see your card.
- **Resend** — delivers the six-digit sign-in code to your email address, if you sign up that way.

Requests to language models are made from our own server, never from the app,
so the app never carries a provider API key and the providers never see your
device or IP address.

### If narration is enabled in a future release

Narration is not in the current release. If and when it ships, spoken audio is
either produced on your own device by the operating system's built-in
text-to-speech, or fetched from a scripture-audio provider by our server, which
asks for a passage and gets back a file. Either way the passage is what is
sent — never anything you wrote.

## 5. Payments

If you subscribe to Pro, the transaction is handled by the **App Store** or
**Google Play**. We never receive or store your card number, billing address,
or any payment credential.

RevenueCat sits between the store and us. It receives the store's purchase
record and an identifier for your account, and it tells our server one thing:
whether Pro is active. Your entitlement is written to our database only by that
server-side webhook, which is also why cancelling in the store is enough — you
never have to tell us.

## 6. Children

ScriptureFlow is not directed at children under 13 and we do not knowingly
collect personal data from them. The app is usable with no personal data at all
(section 1), which is the strongest form this protection can take. If you
believe a child has created an account with an email address, write to us and
we will delete it.

## 7. How long we keep things

- **Content you created** — notes, saved verses, reading history — is kept until you delete it or delete your account.
- **Deleting your account deletes it immediately.** Account deletion cascades through every table keyed to your account; there is no soft-delete tombstone holding your notes.
- **Anonymous accounts** that are never signed up hold nothing that identifies a person, and are removed with the account.
- **Sign-in codes** expire within minutes and are not retained afterwards.
- **Purchase records** held by RevenueCat and the app stores are retained under their own policies, because we are required to keep a record of a transaction that happened.

## 8. Your rights

You can, at any time, from inside the app:

- **Read and edit** everything you have written.
- **Export or copy** your notes out by sharing them.
- **Delete your account and all its data** — Settings → Account → Delete account. It is confirmed once, then it is gone.

If you cannot open the app, [the deletion page](/apps/scriptureflow/delete-account)
explains how to have the same thing done by email.

If you are in the UK, EU, or another jurisdiction with statutory data rights,
those rights — access, rectification, erasure, portability, objection, and
complaint to a supervisory authority — apply, and the routes above are how we
serve them. The lawful basis for the account content is performance of the
contract you entered by using the app; for the email address, it is the
legitimate interest of letting you sign back in.

## 9. Security, honestly stated

Traffic is encrypted in transit. Access to your rows is enforced by database
policy rather than by client code, so a bug in the app cannot expose another
reader's notes. Secret keys live on the server and are never shipped in the
app binary.

No system is perfect and we will not claim otherwise. If we discover a breach
affecting your data, we will tell you at the email address on your account, if
we have one, and publish a notice on this page.

## 10. Scripture text

The translations in the app — the Berean Standard Bible, the King James
Version, the World English Bible and the American Standard Version — are in the
public domain. Scripture itself is never behind a subscription in ScriptureFlow.

## 11. Changes

If this policy changes materially, the date at the top changes and the app
tells you the next time you open it. Continuing to use ScriptureFlow after that
means the revised policy applies.

## 12. Contact

MezuTech — [support@scriptureflow.app](mailto:support@scriptureflow.app) or
[hello@syftup.com](mailto:hello@syftup.com). We answer data requests
ourselves; there is no ticket queue.
