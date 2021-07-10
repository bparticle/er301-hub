---
title: Strike
description: A collection of filters + extras.
author: tomf
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/tomf/summary
link: https://github.com/tmfset/er-301-custom-units
github:
  path: tmfset/er-301-custom-units
  tagRegex: ^strike.*$
latest version: v1.3.0
files:
  - strike-1.0.0.pkg
units:
  - { name: Strike, category: LPG, docs: true }
  - { name: Bique, category: Filter, docs: true }
  - { name: Sieve, category: Filter, docs: true }
  - { name: Arc, category: Envelope, docs: true }
  - { name: Fin, category: Oscillator, docs: true }
  - { name: Formant, category: Oscillator, docs: true }
  - { name: Softy, category: Oscillator, docs: true }
  - { name: Tanh, category: Limiter, docs: true }
  - { name: CPR, category: Compressor, docs: true }
  - { name: Lift, category: LPG, docs: true }
---

**[Strike (LPG)](/docs/strike/strike)** 
<md-img src="strike/strike.png" alt=""></md-img> 

A lowpass gate using the envelope from arc and a 12dB/oct biquad filter. 

Also includes EOF/EOR gate outputs from the **rise**/**fall** controls as well as the envelope out from the **height** control. 

**[Bique (BCF)](/docs/strike/bique)** 
<md-img src="strike/bique.png" alt=""></md-img> 

A multi-mode biquad cascade filter with options for lowpass, bandpass, and highpass at either 12dB/oct, 24dB/oct, or 36dB/oct. Modeled after the equations outlined [here](https://webaudio.github.io/Audio-EQ-Cookbook/audio-eq-cookbook.html) by Robert Bristow-Johnson. 

Output is **tanh** limited to give distortion at higher gain levels. This is particularly useful when pinging the filter at high resonance. 

**[Sieve (SVF)](/docs/strike/sieve)** 
<md-img src="strike/sieve.png" alt=""></md-img> 

A state variable filter that mixes between lowpass, bandpass, and highpass. Modeled after the algorithm designed by Andrew Simper outlined [here](https://www.cytomic.com/files/dsp/SvfLinearTrapOptimised2.pdf). 

Output is **tanh** limited to give distortion at higher gain levels. This is particularly useful when pinging the filter at high resonance. 

**[Arc (AD)](/docs/strike/arc)** 
<md-img src="strike/arc.png" alt=""></md-img> 
<md-img src="strike/arc-wave.png" alt=""></md-img> 

An AD envelope with loop toggle and bend control. 

Also includes EOF/EOR gate outputs from the **rise**/**fall** controls. 

**[Fin (Osc)](/docs/strike/fin)** 
<md-img src="strike/fin.png" alt=""></md-img> 
<md-img src="strike/fin-wave.png" alt=""></md-img> 

A "fin" wave oscillator, so called because the wave resembles a shark fin. 

Essentially this is just a different configuration of **arc** as an oscillator. 

**[Formant (Osc)](/docs/strike/formant)** 
<md-img src="strike/formant.png" alt=""></md-img> 
<md-img src="strike/formant-wave.png" alt=""></md-img> 

A formant oscillator [based on](https://github.com/whimsicalraps/Mannequins-Technical-Maps/blob/master/mangrove/mangrove.md) the [Mangrove](https://www.whimsicalraps.com/products/mangrove) module by Whimsical Raps. 

**[Softy (Osc)](/docs/strike/softy)** 
<md-img src="strike/softy.png" alt=""></md-img> 
<md-img src="strike/softy-wave.png" alt=""></md-img> 
<md-img src="strike/softy-wave2.png" alt=""></md-img>

A triangle (atan) oscillator with soft sync. 

**[Tanh](/docs/strike/tanh)** 
<md-img src="strike/tanh.png" alt=""></md-img> 

Limits the incoming signal with a tanh function. 

**[CPR](/docs/strike/cpr)**
<md-img src="strike/cpr.png" alt=""></md-img> 
<md-img src="strike/cpr-sub.png" alt=""></md-img> 

A stereo peak compressor.

Includes a sidechain branch and optional auto makeup gain. Outputs available for the reduction signal as well as a gate for when the compressor is active.

**[Lift (LPG)](/docs/strike/lift)**
<md-img src="strike/lift.png" alt=""></md-img> 

A lowpass gate using a slew limiter envelope and a 6dB/oct filter.

Includes the slew output from the **height** control.
