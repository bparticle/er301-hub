---
title: Lojik
description: A collection of logical operators and sequencers
author: tomf
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/tomf/summary
link: https://github.com/tmfset/er-301-custom-units
latest version: v0.5.0
files:
  - lojik-0.1.1.pkg
  - lojik-0.2.0.pkg
  - lojik-0.4.0.pkg
  - lojik-0.5.0.pkg
units:
  - { name: And, category: Gates, Logic, docs: true }
  - { name: Or, category: Gates, Logic, docs: true }
  - { name: Not, category: Gates, Logic, docs: true }
  - { name: Trig, category: Gates, docs: true }

  - { name: Latch, category: Gates, docs: true }
  - { name: DLatch, category: Gates, docs: true }
  - { name: Pick, category: Gates, docs: true }

  - { name: Register, category: Sequencers, docs: true }
  - { name: Turing, category: Sequencers, docs: true }
  - { name: Seq, category: Sequencers, docs: true }

  - { name: Pulse, category: Gates, Oscillators, docs: true },
  - { name: Wait, category: Gates, docs: true },
  - { name: Euclid, category: Gates, Sequencers, docs: true },
---

**Dependencies:**
* `core`

Lojik is a collection of logical gates, sequencers, and more.

This collection is built entirely in the DSP layer and operates similarly to the built-in `core` units, that is to say _very efficiently_ (~1-2% CPU).

One of the core principals behind these units is _experimentation_. All units operate just as well slowly (CV) as they do quickly (audio rate). Although some of these functions can be found elsewhere (e.g. `And` is just a simplified VCA), hopefully the design encourages viewing those existing functions in new and interesting ways.

What happens when you write to a shift `register` and freeze it at audio rate? What if the driving `pulse` follows a euclidean rythm? What then if you sequence the `pulse` rate?

There's only one way to find out!
