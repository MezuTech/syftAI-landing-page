---
name: StrideAI
order: 2
tagline: The study planner that keeps students honest
summary: >-
  Tasks, a focus timer, and a log of the hours you actually studied — in one
  app, with an AI coach that knows your subjects. Built for students who have
  tried five productivity apps and abandoned all of them.
status: in-development
progress: 85
platforms: [iOS, Android]
icon: ../../assets/apps/strideai/icon.svg
frame: phone
features:
  - title: Tasks that know your subjects
    body: >-
      Every task belongs to a subject you created, with its own icon and
      colour. No generic lists, no folders you have to invent a system for.
  - title: A focus timer you can live with
    body: >-
      Pomodoro sessions with adjustable lengths, a session count that carries
      through the day, and a break that starts on its own so you do not have to
      decide.
  - title: Logs of the hours you actually did
    body: >-
      Time gets logged against a subject, so the weekly view is a record rather
      than an intention. Each subject carries its own running total.
  - title: An AI coach with a real budget
    body: >-
      Ask about a topic, a plan, or a deadline. It runs on free open models
      through OpenRouter, metered in credits, with the model choice left in
      your hands and the chat history kept.
  - title: Achievements that track range, not grind
    body: >-
      Five tracks — consistency, focus, mastery, subjects and tasks — each
      running Novice through Legend, so depth across a subject counts as much
      as hours on the clock.
  - title: Analytics you can read in ten seconds
    body: >-
      Where the week went, per subject, and which days actually held. Charts
      use one colour ramp reserved for data, and nothing else on the screen
      competes with it.
stack:
  - Flutter
  - get_it
  - Supabase
  - Postgres + RLS
  - OpenRouter
  - AdMob
roadmap:
  - { label: 'Tasks, subjects and study logs', done: true }
  - { label: 'Focus timer and session tracking', done: true }
  - { label: 'AI coach, credits and chat history', done: true }
  - { label: 'Achievements and weekly analytics', done: true }
  - { label: 'Store submission', done: false }
---

The palette is called Paper & Indigo, and it exists because the first version
of this app looked like every other student app: six accent colours, a card for
every feature, and no way to tell what mattered. Now one indigo means *act on
this*, and everything else is neutral or carries real meaning — a colour ramp
kept aside for charts, amber for a streak, green for done.

That constraint is most of the design work.
