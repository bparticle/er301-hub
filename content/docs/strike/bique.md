---
title: Bique (BCF)
description: An IIR biquad cascade filter.
author: tomf
project: strike
---

<md-img src="strike/bique.png" alt=""></md-img>

A multi-mode biquad cascade filter with options for lowpass, bandpass, and highpass at either 12dB/oct, 24dB/oct, or 36dB/oct. Modeled after the equations outlined [here](https://webaudio.github.io/Audio-EQ-Cookbook/audio-eq-cookbook.html) by Robert Bristow-Johnson.

Output is tanh limited to give distortion at higher gain levels. This is particularly useful when pinging the filter at high resonance.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The signal to filter.  |
| **type/mode**    | Set the filter type and mode. |
| **V/oct**        | Volt per octave offset from **f0**. |
| **f0**           | The base cutoff frequency. |
| **Q**            | Resonance, scaled exponentially. Small values are usually enough, but higher values come in handy when pinging the filter. |
| **gain** | Input gain to push the output against the tanh limiter and cause distortion. |
