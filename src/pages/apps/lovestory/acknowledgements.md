---
layout: ../../../layouts/LegalLayout.astro
title: LoveStory — Acknowledgements
description: The language models LoveStory runs on device and in the cloud, the licence each one carries, and the open-source software and imagery behind the app.
updated: September 9, 2026
eyebrow: LoveStory · Credits
image: /og/lovestory.png
app: lovestory
appName: LoveStory
backHref: /apps/lovestory
backLabel: Back to LoveStory
siblings:
  - { href: /apps/lovestory/privacy, label: Privacy policy }
  - { href: /apps/lovestory/terms, label: Terms of service }
  - { href: /apps/lovestory/support, label: Support }
  - { href: /apps/lovestory/delete-account, label: Delete your data }
---

LoveStory writes nothing by itself. Every word it produces comes out of a model
someone else trained and gave away, and the offline half of the app exists only
because a handful of organisations publish small models that a phone can
actually run. This page names them and links the licence each one carries.

Two of those licences bind **you**, not just us — see the note at the end of the
on-device section.

## Models that run on your phone

These are downloaded on your instruction from
[Hugging Face](https://huggingface.co), where the `litert-community`
organisation publishes the LiteRT bundles the app can load. We host none of
them and redistribute none of them; the app fetches them from the publisher.

- **[Qwen3 0.6B](https://huggingface.co/litert-community/Qwen3-0.6B)** — 475 MB. Alibaba's Qwen team, Apache 2.0. The fastest thing here to download and to write with.
- **[Qwen 2.5 1.5B Instruct](https://huggingface.co/litert-community/Qwen2.5-1.5B-Instruct)** — 1.7 GB. Apache 2.0. The recommended pick: the best balance of prose quality and size.
- **[SmolLM3 3B](https://huggingface.co/litert-community/SmolLM3-3B)** — 2.0 GB. Hugging Face's own SmolLM team, Apache 2.0. Richer writing, for phones with the RAM.
- **[Gemma 4 E2B](https://huggingface.co/litert-community/gemma-4-E2B-it-litert-lm)** — 2.4 GB. Google DeepMind, under the **[Gemma Terms of Use](https://ai.google.dev/gemma/terms)** and the [Gemma Prohibited Use Policy](https://ai.google.dev/gemma/prohibited_use_policy). The most capable of the four, and the largest.

**The Gemma licence applies to you directly.** It is not an open-source licence
in the usual sense — it carries use restrictions that follow the model onto your
device. Downloading Gemma through LoveStory means accepting Google's terms for
it, and the prohibited-use policy is worth reading rather than scrolling past.
The Apache 2.0 models above carry no such restriction.

## Models in the cloud

Cloud generation is routed through [OpenRouter](https://openrouter.ai), which
sits in front of several providers. The app names specific free models rather
than taking whatever is going, because story generation needs a long, coherent,
correctly structured answer and most free models cannot produce one.

- **NVIDIA Nemotron** models, in two sizes — the primary and the large fallback.
- **Google Gemma 4 26B Instruct**, as an alternative.
- **OpenRouter's free-model router**, as a last resort when the named models are rate limited or retired.

Free hosted models are retired regularly and without notice, so this list moves.
Each provider's own terms govern a request routed to it.

## The runtime that makes offline work

- **[LiteRT-LM](https://github.com/google-ai-edge/LiteRT-LM)** — Google's on-device inference runtime, which is what actually executes the model on your phone.
- **[flutter_gemma](https://pub.dev/packages/flutter_gemma)** and **[flutter_gemma_litertlm](https://pub.dev/packages/flutter_gemma_litertlm)** — the Flutter bindings that let a Dart app drive it.

Without these the offline half of LoveStory would not exist, and the offline
half is the interesting half.

## Software

LoveStory is a [Flutter](https://flutter.dev) application. The open-source
packages it depends on, each under its own licence — mostly BSD, MIT or
Apache 2.0 — include:

- **flutter\_bloc** and **get\_it**, for state and dependency injection
- **fpdart**, for the functional error handling the codebase uses throughout
- **supabase\_flutter**, the client for the database and sign-in
- **cached\_network\_image**, **shimmer**, **flutter\_animate**, **animate\_do** and **flutter\_staggered\_animations**, for the interface
- **google\_fonts**, **iconsax**, **flutter\_svg**, **glassmorphism**, **gradient\_borders**
- **share\_plus**, **url\_launcher**, **shared\_preferences**, **flutter\_screenutil**

Infrastructure: [Supabase](https://supabase.com) for the database and
authentication.

## Imagery

Story covers are photographs from [Unsplash](https://unsplash.com), used under
the [Unsplash License](https://unsplash.com/license) and loaded from Unsplash's
own servers. They are chosen to suit a genre, and they are not illustrations of
any particular story.

## Corrections

If something here is credited wrongly, credited insufficiently, or belongs to
you and should not be in the app at all, write to
**[hello@syftup.com](mailto:hello@syftup.com)** and it will be fixed or removed.
That is not a formality — a takedown request from a rights holder is answered
the same week.
