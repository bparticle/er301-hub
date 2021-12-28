---
title: Sieve (SVF)
description: An IIR state variable filter.
author: tomf
project: strike
---

<md-img src="strike/sieve.png" alt=""></md-img>

A state variable filter that mixes between lowpass, bandpass, and highpass. Modeled after the algorithm designed by Andrew Simper outlined [here](https://www.cytomic.com/files/dsp/SvfLinearTrapOptimised2.pdf).

Output is tanh limited to give distortion at higher gain levels. This is particularly useful when pinging the filter at high resonance.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The signal to filter.  |
| **V/oct**        | Volt per octave offset from **f0**. |
| **f0**           | The base cutoff frequency. |
| **Q**            | Resonance, scaled exponentially. Small values are usually enough, but higher values come in handy when pinging the filter. |
| **gain** | Input gain to push the output against the tanh limiter and cause distortion. |
| **mix** | Filter type control. 0 is lowpass, 0.5 is bandpass, and 1 is highpass. |
