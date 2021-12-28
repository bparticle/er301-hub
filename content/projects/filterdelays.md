---
title: Filter Delays
description: Some filtered delays
author: yrn1
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/yrn1/summary
link: https://github.com/yrn1/er-301-custom-units
github:
  path: yrn1/er-301-custom-units
  tagRegex: ^fdelay.*$
latest version: 0.6.05
files:
  - fdelay-v1.0.0.pkg
units:
  - { name: Filter Delay, category: Delays and Reverb, docs: false }
  - { name: Tuned Filter Delay, category: Delays and Reverb, docs: false }
  - { name: Manual Grain Delay, category: Delays and Reverb, docs: false }
  - { name: Feedback Delay Network, category: Delays and Reverb, docs: false }
  - { name: Simple Feedback Delay Network, category: Delays and Reverb, docs: false }
---

fdelay contains a bunch of units based on -- you guessed it -- delays.

This set is the next generation of the old FilterDelays package. Sorry, I renamed it. The old one is still available on [GitHub](https://github.com/yrn1/er-301-units).

## Filter Delay

The Filter Delay unit is a simple clocked delay with a tone control in the feedback loop. The stereo version also has a randomized 'spread' control.

The stereo verion uses 9%-10% CPU.

## Tuned Filter Delay

The Tuned Filter Delay unit is a simple delay with a tone control in the feedback loop and a V/Oct tuned delay time. When you feed it noise pulses, it sounds Karplus-Strong-like. When you feed it anything else, well...

Note that due to the way the feedback loop is implemented, the maximum frequency is about 375Hz.

The stereo verion uses 9%-10% CPU.

<div class="yt-embed">
  <youtube :video-id="'nqHFELsciLc'"></youtube>
</div>

## Manual Grain Delay

The Manual Grain Delay unit is the unholy child of Filter Delay and Manual Grains. It is a delay line with tone control in the feedback loop. But instead of just playing the delayed signal, you trigger grains, with all the usual controls you expect from grains: pitch, duration and squash (pan is coming in some next release). You can also freeze the delay loop and play with grains in the frozen buffer. It's a bit like part of Mutable Instruments Clouds, but without the auto-triggering and the reverb.

The stereo version uses 10%-40% CPU, depending on how many grains are running concurrently.

<div class="yt-embed">
  <youtube :video-id="'1maXTPKAQGE'"></youtube>
</div>

## FDN

The FDN unit is a Feedback Delay Network, inspired by the paper by [Tom Erbe - UC San Diego: REVERB TOPOLOGIES AND DESIGN](http://tre.ucsd.edu/wordpress/wp-content/uploads/2018/10/reverbtopo.pdf).

With small delay times, it sounds like a simple reverb with tone and feedback control. But the delay times go so insanely big that it can also behave like a delay that eventuelly smears out into a reverby sound.

The stereo version uses 20% CPU.

<div class="yt-embed">
  <youtube :video-id="'cX_T2rWy1HM'"></youtube>
</div>

## SFDN

The SFDN unit is a simple version of FDN, without modulation. Because of this, cheaper delay lines can be used.

The stereo version uses 11%-12% CPU.
