---
name: Sift AI
order: 4
tagline: Rank candidates by skill, not keywords
summary: >-
  A hiring tool that scores every applicant against the role you actually wrote,
  with reasoning attached. Built for small teams and agencies drowning in
  applications and short on recruiters.
status: private-beta
progress: 75
platforms: [Web]
icon: ../../assets/apps/sift/icon.svg
frame: browser
website: https://app.syftup.com
legal: true
features:
  - title: A score, with its reasoning
    body: >-
      Every candidate is evaluated against your requirements — skills match,
      relevance of experience, quality of their answers — and comes back with a
      1–10 score and the reasoning behind it.
  - title: Screening questions, not just CVs
    body: >-
      Ask the role's real questions up front and grade the answers. A CV tells
      you where someone worked; the answers tell you whether they can do this.
  - title: A pipeline you can move people through
    body: >-
      New, shortlisted, rejected — per role, with the score visible at every
      step. You decide; auto-rejection is opt-in and stays under your control.
  - title: Workspaces for teams
    body: >-
      Organisations, workspaces and members, so an agency can run several
      clients without the roles bleeding into each other.
  - title: Email the shortlist in bulk
    body: >-
      Send the same message to a filtered group instead of pasting names into a
      mail client one at a time.
stack:
  - Serverpod
  - Dart
  - Postgres
  - Redis
  - Flutter Web
  - Paystack
pricing:
  - name: Free
    price: $0
    period: forever
    note: Enough to run one real hire and see the scoring for yourself.
    includes:
      - 1 active job post
      - Grade up to 40 candidates
      - AI scoring with reasoning
    href: https://app.syftup.com/signup
    cta: Start free
  - name: Standard
    price: $7
    period: month
    note: For a small team hiring a few roles at a time.
    featured: true
    includes:
      - 3 active job posts
      - Grade up to 250 candidates
      - Bulk emailing
      - Extra job slots at $3 each
    href: https://app.syftup.com/signup?plan=standard
  - name: Agency
    price: $25
    period: month
    note: For volume and for agencies running several clients.
    includes:
      - 7 active job posts
      - Unlimited candidates
      - Bulk emailing and workspaces
      - Extra job slots at $2 each
    href: https://app.syftup.com/signup?plan=agency
faq:
  - q: Is it really free to start?
    a: >-
      Yes. You can post one job and grade up to 40 candidates at no cost. You
      only pay if you need more jobs or features like bulk emailing.
  - q: Does the AI reject candidates automatically?
    a: >-
      No. It scores every candidate from 1–10, but the decision is yours. You
      can opt into auto-rejecting low scores, and it stays under your control.
  - q: How does the scoring work?
    a: >-
      Candidate responses are evaluated against your job requirements — skills
      match, relevance of experience and quality of the answers — producing a
      score from 1 to 10 with detailed reasoning attached.
  - q: Can I cancel anytime?
    a: >-
      Yes. Subscribe for a single month to cover a hiring burst and cancel
      immediately. No contracts.
roadmap:
  - { label: 'Jobs, applications and AI grading', done: true }
  - { label: 'Candidate pipeline and dashboard', done: true }
  - { label: 'Organisations, workspaces and members', done: true }
  - { label: 'Subscriptions and billing', done: true }
  - { label: 'Public launch', done: false }
---

Sift is the oldest of the four and the only one that is not Flutter-on-mobile:
a Serverpod backend in Dart, Postgres and Redis behind it, and a Flutter Web
client. It is also the reason this site lives at **syftup.com** — the domain
started as Sift's, and the studio grew around it.
