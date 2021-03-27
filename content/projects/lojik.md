---
title: Lojik
description: A bunch of logical operators as well as some excellent new sequencer primitives
author: tomf
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/tomf/summary
link: https://github.com/tmfset/er-301-custom-units
latest version: v0.4.0
files:
  - lojik-0.1.1.pkg
  - lojik-0.2.0.pkg
  - lojik-0.4.0.pkg
units:
  - { name: And, category: Gates, docs: true }
  - { name: DLatch, category: Gates, docs: true }
  - { name: Latch, category: Gates, docs: true }
  - { name: Not, category: Gates, docs: true }
  - { name: Or, category: Gates, docs: true }
  - { name: Pick, category: Gates, docs: true }
  - { name: Register, category: Sequencers, docs: true }
  - { name: Seq, category: Sequencers, docs: true }
  - { name: Trig, category: Gates, docs: true }
  - { name: Turing, category: Sequencers, docs: true }
  - { name: Wait, category: Gates, docs: true }
---

Hello all let me introduce Lojik! A collection of bespoke units for the latest v0.6 firmware, using the amazing, newly available, DSP layer. This collection includes a bunch of logical operators as well as some excellent new sequencer primitives.

These units all perform as well as the built-in core units, using < 1-2% CPU each.
