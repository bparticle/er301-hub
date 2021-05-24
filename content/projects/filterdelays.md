---
title: Filter Delays
description: Some filtered delays
author: yrn1
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/yrn1/summary
link: https://github.com/yrn1/FilterDelays
github:
  path: yrn1/FilterDelays
  tagRegex: ^0.6.*$
latest version: 0.6.02
files:
  - FilterDelays-0.6.01.pkg
  - FilterDelays-0.6.02.pkg
units: # A list of units with categories. If possible, use existing categories unless you have something that deserves its own
  - { name: Filter Delay, category: Delays and Reverb, docs: false } # Object with two required keys: name and category. "docs" is optional: if set to true, then you can link to a dedicated documentation page in /content/docs/my-project/name-of-unit.md
  - { name: Feedback Delay Network, category: Delays and Reverb, docs: false }
---

FilterDelays contains a bunch of units based on -- you guessed it -- delays.

## FilterDelay

The FilterDelay unit is a simple clocked delay with a tone control in the feedback loop. The stereo version also has a randomized 'spread' control.

## FDN

The FDN unit is a Feedback Delay Network, inspired by the paper by [Tom Erbe - UC San Diego: REVERB TOPOLOGIES AND DESIGN](http://tre.ucsd.edu/wordpress/wp-content/uploads/2018/10/reverbtopo.pdf).

With small delay times, it sounds like a simple reverb with tone and feedback control. But the delay times go so insanely big that it can also behave like a delay that eventuelly smears out into a reverby sound.

Note: the 'level' control adjusts the input level to the FND network.
