---
title: Lojik
description: A collection of logical operators and sequencers
author: tomf
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/tomf/summary
link: https://github.com/tmfset/er-301-custom-units
github:
  path: tmfset/er-301-custom-units
  tagRegex: ^lojik.*$
latest version: v1.2.0
files:
  - lojik-0.1.1.pkg
  - lojik-0.2.0.pkg
  - lojik-0.4.0.pkg
  - lojik-0.5.0.pkg
  - lojik-1.0.0.pkg
units:
  - { name: Register, category: Sequencers, docs: true }
  - { name: Turing, category: Sequencers, docs: true }
  - { name: Seq, category: Sequencers, docs: true }
  - { name: Latch, category: Switch, docs: true }
  - { name: DLatch, category: Switch, docs: true }
  - { name: TLatch, category: Switch, docs: true }
  - { name: Pick, category: Switch, docs: true }
  - { name: Pulse, category: Oscillators, docs: true }
  - { name: Wait, category: Divider, docs: true }
  - { name: Euclid, category: Divider, docs: true }
  - { name: Chance, category: Divider, docs: true }
  - { name: And, category: Logic, docs: true }
  - { name: Or, category: Logic, docs: true }
  - { name: Not, category: Logic, docs: true }
  - { name: Trig, category: Logic, docs: true }
---

**Dependencies:**
* `core`

**[Register](/docs/lojik/register)** 
<md-img src="lojik/register.png" alt=""></md-img> 

A shift register that can hold up to 64 steps of arbitrary voltages. Contains a built in random source to sample from. 

**[Turing](/docs/lojik/turing)** 
<md-img src="lojik/turing.png" alt=""></md-img> 

Basically just a register with a scale quantizer in front of it, ideal for quickly generating V/Oct sequences. 


**[Seq](/docs/lojik/seq)** 
<md-img src="lojik/seq.png" alt=""></md-img> 

A step sequencer. 

**[Euclid](/docs/lojik/euclid)** 
<md-img src="lojik/euclid.png" alt=""></md-img>

<md-img src="lojik/euclid-ext.png" alt=""></md-img> 

A euclidean rhythm generator. 

**[Wait](/docs/lojik/wait)** 
<md-img src="lojik/wait.png" alt=""></md-img> 

Arm to wait a number of input pulses, invert to pass a number of pulses. 

**[Pulse](/docs/lojik/pulse)** 
<md-img src="lojik/pulse.png" alt=""></md-img> 

A square wave oscillator. 

**[Trig](/docs/lojik/trig)** 
<md-img src="lojik/trig.png" alt=""></md-img> 

Convert the input signal to a trigger. 

**[Not](/docs/lojik/not)** 
<md-img src="lojik/not.png" alt=""></md-img> 

Is the input signal less than or equal to zero? 

**[And](/docs/lojik/and)** 
<md-img src="lojik/and.png" alt=""></md-img> 

Is the input signal and gate input greater than zero? 

**[Or](/docs/lojik/or)** 
<md-img src="lojik/or.png" alt=""></md-img> 

Is the input signal or gate input greater than zero? 

**[Pick](/docs/lojik/pick)** 
<md-img src="lojik/pick.png" alt=""></md-img> 

Output input on gate low, alt on gate high. 

**[Latch](/docs/lojik/latch)** 
<md-img src="lojik/latch.png" alt=""></md-img> 

An SR latch, set it high and reset it low. 

**[DLatch](/docs/lojik/dlatch)** 
<md-img src="lojik/dlatch.png" alt=""></md-img> 

A data latch, essentially just a sample and hold. 

**[TLatch](/docs/lojik/tlatch)** 
<md-img src="lojik/tlatch.png" alt=""></md-img> 

A timed latch, set it high for a limited amount of time. 

**[Chance](/docs/lojik/chance)** 
<md-img src="lojik/chance.png" alt=""></md-img> 

A probabilistic gate. Randomly pass clock pulses based on a probability. 
