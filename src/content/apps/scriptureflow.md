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
