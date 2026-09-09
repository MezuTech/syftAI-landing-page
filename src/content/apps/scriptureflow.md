---
name: ScriptureFlow
order: 1
tagline: Scripture at the pace you already scroll
summary: >-
  A Bible study app shaped like the feed you already know. Verses arrive one at
  a time with narration, any word opens its Greek or Hebrew root, and the
  reading plan bends around the day you actually had.
status: in-development
progress: 80
platforms: [iOS, Android]
icon: ../../assets/apps/scriptureflow/icon.svg
frame: phone
features:
  - title: A reel, not a wall of text
    body: >-
      One verse fills the screen. Swipe for the next. Narration plays if you
      want it, so a passage can be read or listened to without changing
      anything about how you hold your phone.
  - title: Tap any word for its root
    body: >-
      Every word in the verse is a link into the concordance — the Greek or
      Hebrew behind the wording, what it meant where it was written, and the
      other places it appears.
  - title: Four ways into a passage
    body: >-
      Plain Words puts the verse in everyday language. Word Roots goes to the
      original. Related Scriptures finds the passages carrying the same
      thought. Full Study is all three plus context, in order.
  - title: Plans sized to the time you have
    body: >-
      Pick a plan from four minutes to a full chapter. Miss a day and the plan
      bends rather than breaks — the streak counts showing up, not perfection.
  - title: Notes that stay yours
    body: >-
      A private journal per verse, saved verses you can come back to, and any
      verse you want set as a lock-screen widget.
stack:
  - Flutter
  - Riverpod
  - go_router
  - Supabase
  - just_audio
  - Sign in with Apple
legal:
  - { href: /apps/scriptureflow/privacy, label: Privacy policy }
  - { href: /apps/scriptureflow/terms, label: Terms of service }
  - { href: /apps/scriptureflow/support, label: Support }
  - { href: /apps/scriptureflow/delete-account, label: Delete your data }
  - { href: /apps/scriptureflow/acknowledgements, label: Acknowledgements }
faq:
  - q: Does it cost anything to read the Bible in it?
    a: >-
      No, and it never will. All four translations, word roots, search, reading
      plans, streaks, saved verses, the widget and private notes on your own
      device are free and are not gated. ScriptureFlow Pro covers the two things
      that cost us money or work to produce: the generated study sheets, and
      carrying your notes to your account so they survive a reinstall.
  - q: Do I have to make an account?
    a: >-
      No. The app opens straight into scripture and creates an anonymous
      account on first launch — a random identifier, no email, no name. Adding
      an email address later is what makes the account portable to a second
      device, and it upgrades the account you already have rather than starting
      a new one.
  - q: Which translations are included, and why not the ESV or NIV?
    a: >-
      The Berean Standard Bible, King James Version, World English Bible and
      American Standard Version — all four in the public domain. The ESV is not
      permitted to be stored in a database like ours, and the NIV is not
      licensable at this scale. We would rather be missing a translation than
      misrepresent one.
  - q: Where do my notes actually live?
    a: >-
      On your device by default, and notes are free with no account. Syncing
      them to your account, so they survive a reinstall and appear on another
      device, is part of Pro. Stop subscribing and your notes are not taken from
      you — they stay on the device that holds them; what stops is the syncing.
  - q: Can I trust the generated study material?
    a: >-
      Treat it as a study aid, not as authority. The Greek and Hebrew, the
      lexical entries and the cross-references are looked up in real sources;
      the prose around them is drafted by a language model and can be wrong.
      Where there is nothing honest to say under a lens, the app shows the gap
      rather than filling it. Check anything that matters against the text.
  - q: Is there narration?
    a: >-
      Not in the current release. It is built and it is switched off, because
      the audio has to be licensed for the translation on screen first. Nothing
      in the app promises it in the meantime.
  - q: How do I cancel, or delete everything?
    a: >-
      Cancel in your store — Settings then Subscriptions on iOS, Play Store then
      Payments and subscriptions on Android. Nothing has to be sent to us.
      Deleting your account is Settings then Account then Delete account inside
      the app: one confirmation, then it is gone, with no retention period to
      wait out.
  - q: Is there a web version?
    a: >-
      No. ScriptureFlow is an iOS and Android app. The website is where its
      documents live, not where the app runs.
roadmap:
  - { label: 'Verse reel, narration and word roots', done: true }
  - { label: 'Reading plans, streaks and saved verses', done: true }
  - { label: 'Four-lens study sheets', done: true }
  - { label: 'Community reading and shared plans', done: false }
  - { label: 'TestFlight and Play Console beta', done: false }
---

The app started from one number: a phone gets about two hours of attention a
day. ScriptureFlow does not try to argue anyone out of that habit — it borrows
the shape of it. The vertical feed, the narration, the tap-to-expand: all of it
is the interaction pattern people already have, pointed at a text that rewards
slowing down.

What it will not do is gamify devotion. Streaks count days you showed up, and a
missed day resizes the plan instead of resetting it to zero.
