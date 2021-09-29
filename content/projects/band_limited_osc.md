---
title: Band Limited Oscillators
description: Basic oscillators without digital aliasing
author: ljw
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/ljw/summary
link: https://github.com/ljwall/er-301-units
github:
  path: ljwall/er-301-units
  tagRegex: ^band_limited_osc-.*$
latest version: v0.0.2
files:
  - band_limited_osc-0.0.2.pkg
units:
  - { name: SquareOsc, category: Oscillators }
  - { name: SawOsc, category: Oscillators }
---

Two oscillator units: square and saw.

These are targeted at audio-rate use rather than as LFOs. They make use of band-limited synthesis, and so avoid the digital aliasing sounds you can hear at higher frequencies when using the core oscillators (e.g. Aliasing Saw) as audio sources.

* Square wave has PWM.
* Saw has hard sync.

Controls are very similar to the core oscillator units.
