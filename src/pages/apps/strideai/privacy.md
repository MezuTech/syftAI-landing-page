---
layout: ../../../layouts/LegalLayout.astro
title: StrideAI — Privacy Policy
description: What StrideAI stores, what the AI coach sends off your phone, what the ads see, and how to delete all of it.
updated: September 9, 2026
eyebrow: StrideAI · Legal
image: /og/strideai.png
app: strideai
appName: StrideAI
backHref: /apps/strideai
backLabel: Back to StrideAI
siblings:
  - { href: /apps/strideai/terms, label: Terms of service }
  - { href: /apps/strideai/delete-account, label: Delete your data }
  - { href: /apps/strideai/support, label: Support }
---

StrideAI is made by MezuTech, a one-person studio. This policy describes the
StrideAI mobile app for iOS and Android. It is written to be read, so where a
section could say "certain information" it names the field instead.

Three things are true of the whole app and worth stating before the detail:

- **There is no analytics SDK in the app.** No Google Analytics, no Firebase Analytics, no Crashlytics, no Sentry, no Amplitude, no third-party tracking pixel. The app ships no code whose purpose is to observe how you use it.
- **There are ads, and they are honest about themselves.** StrideAI shows *rewarded* ads through Google AdMob — the kind you choose to watch in exchange for AI credits. There are no banners, no interstitials, and no ad you did not opt into. Section 6 says exactly what AdMob sees.
- **Your study data is never sold, rented, or handed to advertisers.** Your tasks, subjects, study logs and AI conversations are not part of any ad transaction and there is no data-broker relationship to disclose.

## 1. What an account is for

StrideAI needs an account, because the point of the app is that your subjects
and study history follow you and survive a reinstall. You can create one two
ways:

- **Email address and password.** The address identifies the account and is how you sign back in. It is not used for marketing; there is no mailing list.
- **Google sign-in.** Google tells us your Google account identifier and the email address on it. We never see your Google password.

Authentication is handled by **Supabase Auth**. Passwords are stored by
Supabase as salted hashes — we never see or store the password itself.

## 2. What we store

### Attached to your account, on our server

- **Subjects** — the name, icon and colour you gave each one.
- **Tasks** — title, notes, due date, priority, completion, and the subject each belongs to.
- **Study logs** — how long you studied, against which subject, and when. This is what the weekly view and the per-subject totals are counted from.
- **Focus sessions** — the start, length and outcome of each Pomodoro session, and whether it completed or was abandoned.
- **Credits and credit transactions** — your current balance, and a row for each time credits were granted or spent, so a balance can be explained rather than merely asserted.
- **Ad watch limits** — a daily count of rewarded ads watched, which is what the five-a-day cap is enforced from. It records that an ad was watched, not which ad or what it was for.

### On your device only

- **A cached copy** of the above, so the app opens and works without a connection.
- **Timer settings** — your focus, short-break and long-break lengths.
- **Reminder settings** — the days and times you asked to be nudged.
- **Your AI backend preference** — whether you are using the cloud coach or the on-device one.
- **The on-device language model**, if you downloaded it (section 5).
- **Your AI chat history.**

### What we never collect

No contacts, no calendar, no precise or coarse location, no health data, no
device fingerprint, and no list of the other apps on your phone.

## 3. Permissions, and what each one is actually for

The app asks for these only at the moment the feature needs them, and each one
is refusable without breaking the rest of the app.

- **Microphone and speech recognition** — only so you can ask the AI coach a question by speaking instead of typing. Speech is transcribed to text; we do not store the audio.
- **Notifications** — only to deliver the study reminders you configured. There are no promotional notifications.
- **Files and photos** — only when you pick a document or image for the coach to read (section 4). The app can see the file you chose, not your library.

## 4. Document and handwriting analysis

If you hand the coach a PDF, a Word document or a photo, the text is pulled out
of it first:

- **PDFs and Word documents** are parsed on your device.
- **Photos of notes and handwriting** are read on your device by Google's ML Kit text recognition, which runs locally and does not upload the image.

What happens to the extracted **text** then depends entirely on which AI backend
you have selected, which is the subject of the next section. The original file
itself is never uploaded to us and never stored on our server.

## 5. The AI coach — two backends, two very different answers

This is the most important section in this policy, because the same feature has
two privacy stories and **you choose which one you are using**, in the app under
the AI model screen.

### On-device (Gemma)

The app downloads a small language model once, from **Hugging Face**, and then
answers your questions locally on your own hardware. Your questions, your notes
and your study data **never leave the device**. It works with no connection.
Because it costs us nothing to run, it costs you no credits.

The only thing that reaches Hugging Face is the request to download the model
file itself.

### Cloud (OpenRouter)

Your question — and the text extracted from any document you attached — is sent
to **OpenRouter**, which routes it to a free-tier language model to be answered.
Alongside the question we send the context the coach needs to be useful: the
subject it concerns and the relevant tasks or study history.

We do not send your email address, your password, or your account identifier to
a model provider.

We do not permit these providers to train on the content we send. Note that the
cloud backend runs on OpenRouter's **free tier**, whose daily allowance is shared
across everyone using StrideAI — that shared ration is the reason cloud answers
are metered in credits and on-device answers are not.

**If you would rather nothing left your phone at all, switch to the on-device
backend.** That option exists precisely so this is your decision and not ours.

## 6. Ads, and what Google sees

StrideAI shows rewarded ads through **Google AdMob**, and only ever the kind you
opened deliberately to earn credits. Ten credits per ad, up to five ads a day.

To serve an ad, Google's SDK receives your device's advertising identifier along
with the coarse technical data ad networks receive — device model, operating
system version, language, and general region derived from your IP address. It
does **not** receive your name, your email address, your tasks, your subjects,
your study logs, or anything you said to the AI coach.

**On iOS**, before that identifier can be used to personalise ads, iOS shows you
Apple's App Tracking Transparency prompt. If you decline, ads still work — they
are simply not personalised. **On Android**, you can reset or delete the
advertising ID in your system settings at any time.

How Google uses ad data is governed by
[Google's own privacy policy](https://policies.google.com/privacy), which we do
not control.

## 7. Who else the app talks to

- **Supabase** — the database and sign-in system. It holds everything in section 2. Access is enforced by Postgres row-level security: the rules are written so an account can read and write only its own rows.
- **OpenRouter** — cloud AI answers only, as described in section 5.
- **Hugging Face** — serves the on-device model file, if you download it.
- **Google AdMob** — rewarded ads, as described in section 6.
- **Google** — sign-in, if you use it.
- **Apple / Google** — the app stores themselves.

## 8. Payments

StrideAI has no subscription and no in-app purchase. Credits arrive three ways
— 200 when you sign up, 200 free each week, and 10 for each rewarded ad you
choose to watch. We therefore never receive, process, or store a card number,
a billing address, or any payment credential.

## 9. Children

StrideAI is a study app and is plainly of interest to students, but it is not
directed at children under 13 and we do not knowingly collect personal data from
them. If you believe a child under 13 has created an account, write to us and we
will delete it.

Because the app serves ads, we do not knowingly show personalised advertising to
anyone we know to be a child.

## 10. How long we keep things

- **Content you created** — subjects, tasks, study logs, focus sessions — is kept until you delete it or delete your account.
- **Credit transactions and ad-watch counts** are kept while the account exists, because they are the audit trail behind your balance and the daily cap.
- **Deleting your account deletes all of it.** Account deletion cascades through every table keyed to your account.
- **AI chat history** lives on your device; deleting the app deletes it.

## 11. Your rights

You can, at any time, from inside the app, read and edit everything you have
written, and switch the AI coach to the on-device backend so that nothing
further leaves your phone.

To delete your account and everything attached to it, follow
[the deletion page](/apps/strideai/delete-account).

If you are in the UK, EU, or another jurisdiction with statutory data rights,
those rights — access, rectification, erasure, portability, objection, and
complaint to a supervisory authority — apply, and the routes above are how we
serve them. The lawful basis for your study content is performance of the
contract you entered by using the app; for the email address, it is the
legitimate interest of letting you sign back in; for personalised advertising,
it is your consent, which you may withdraw in your device settings.

## 12. Security, honestly stated

Traffic is encrypted in transit. Access to your rows is enforced by database
policy rather than by client code, so a bug in the app cannot expose another
student's study history. Passwords are salted and hashed by Supabase Auth.

No system is perfect and we will not claim otherwise. If we discover a breach
affecting your data, we will tell you at the email address on your account and
publish a notice on this page.

## 13. Changes

If this policy changes materially, the date at the top changes. Continuing to
use StrideAI after that means the revised policy applies.

## 14. Contact

MezuTech — [hello@syftup.com](mailto:hello@syftup.com). We answer data requests
ourselves; there is no ticket queue.
