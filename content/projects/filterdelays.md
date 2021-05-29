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
latest version: 0.6.04
files:
  - FilterDelays-0.6.03.pkg
  - FilterDelays-0.6.04.pkg
units:
  - { name: Filter Delay, category: Delays and Reverb, docs: false }
  - { name: Feedback Delay Network, category: Delays and Reverb, docs: false }
  - { name: Simple Feedback Delay Network, category: Delays and Reverb, docs: false }
---

FilterDelays contains a bunch of units based on -- you guessed it -- delays.

## FilterDelay

The FilterDelay unit is a simple clocked delay with a tone control in the feedback loop. The stereo version also has a randomized 'spread' control.

The stereo verion uses 9%-10% CPU.

## FDN

The FDN unit is a Feedback Delay Network, inspired by the paper by [Tom Erbe - UC San Diego: REVERB TOPOLOGIES AND DESIGN](http://tre.ucsd.edu/wordpress/wp-content/uploads/2018/10/reverbtopo.pdf).

With small delay times, it sounds like a simple reverb with tone and feedback control. But the delay times go so insanely big that it can also behave like a delay that eventuelly smears out into a reverby sound.

The stereo version uses 20% CPU.

<youtube :video-id="'cX_T2rWy1HM'"></youtube>

## SFDN

The SFDN unit is a simple version of FDN, without modulation. Because of this, cheaper delay lines can be used.

The stereo version uses 11%-12% CPU.
