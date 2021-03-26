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
  - Seq
  - Turing
  - Register
  - Latch
  - DLatch
  - Trig
  - And
  - Or
  - Not
  - Pick
  - Wait
categories:
  - Experimental
  - Logic
  - Sequencer
---

Hello all let me introduce Lojik! A collection of bespoke units for the latest v0.6 firmware, using the amazing, newly available, DSP layer. This collection includes a bunch of logical operators as well as some excellent new sequencer primitives.

These units all perform as well as the built-in core units, using < 1-2% CPU each.

## And

A logical `And` gate.

Output goes high when the **unit input** _and_ the **gate** input are greater than zero.

| Input | Description |
| --- | --- |
| **_unit input_** | The left input to the `and` gate. |
| **gate** | The right input to the `and` gate. |

## Or

A logical `Or` gate.

Output goes high when either the **unit input** _or_ the **gate** input is greater than zero.

| Input | Description |
| --- | --- |
| **_unit input_** | The left input to the `or` gate. |
| **gate** | The right input to the `or` gate. |

## Not

A logical `Not` gate.

Output goes high when the **unit input** is less than or equal to zero.

| Input | Description |
| --- | --- |
| **_unit input_** | The input to the `not` gate. |

## Trig

Convert the input signal to a trigger.

Outputs a trigger when the **unit input** is greater than zero.

| Input | Description |
| --- | --- |
| **_unit input_** | The input to the trigger converter. |

## Latch

An SR Latch.

Output is latched high when the **unit input** is greater than zero.

| Input | Description |
| --- | --- |
| **_unit input_** | The latch is set when the **unit input** is greater than zero. |
| **reset** | Reset the latch to zero on gate high unless the **unit input** is greater than zero. |

## DLatch

A data latch.

Samples the **unit input** when the **clock** gate goes high. Re-samples the **unit input** when **reset** is high.

### Patch Ideas
1. _Sample and Hold_<br><br>Patch a signal into the **clock** input to create a sample and hold function.

2. _Track and Hold_<br><br>Patch a signal into the **clock** input and hold **reset** high to creatte a track and hold function.

3. _Shift Register_<br><br>Patch several `DLatches` in a row and give them all the same **clock** signal. The left-most **unit input** will be shifted through the `DLatches` on each clock tick.

| Input | Description |
| --- | --- |
| **_unit input_** | The input to be sampled. |
| **clock** | Sample the **unit input** on gate high. |
| **reset** | Reset the internal latch to cause the **unit input** to be re-sampled on the clock. |

## Pick

A VC switch.

Output the **unit input** when **pick** is low and the **alt** signal when **pick** is high.

### Patch Ideas
1. _Sequence Swap_<br><br>Pass in two sequences or CV sources and switch between them at will with the **pick** gate.

2. _Audio Rate Slice_<br><br>Rapidly switch between two signals with an audio-rate **pick** input.

| Input | Description |
| --- | --- |
| **_unit input_** | The left input, output when **pick** is low. |
| **alt** | The right input, output when **pick** is high. |
| **pick** | Output the **unit input** when low and **alt** when high. |

## Sequencers
- Register - A shift register that can hold up to 64 steps of arbitrary voltages. Contains a built in random source to sample from.
<md-img src="lojik/lojik__000.png" alt=""></md-img>
- Turing - Basically just a register with a scale quantizer in front of it, ideal for quickly generating V/Oct sequences.
<md-img src="lojik/lojik__001.png" alt=""></md-img>
- Seq - A step sequencer
<md-img src="lojik/lojik__002.png" alt=""></md-img>
