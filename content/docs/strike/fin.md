---
title: Fin (Osc)
description: A "fin" wave oscillator.
author: tomf
project: strike
---

<md-img src="strike/fin.png" alt=""></md-img>
<md-img src="strike/fin-wave.png" alt=""></md-img>

A "fin" wave oscillator, so called because the wave resembles a shark fin.

Essentially this is just a different configuration of **arc** as an oscillator.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | _NA_  |
| **V/oct**         | Volt per octave offset from **f0**. |
| **f0**         | The base oscillator freequency. |
| **sync** | Hard sync the oscillator phase. |
| **width** | The width of the wave, i.e. rise time vs fall time. |
| **bend**            | Bend the oscillator curve using a power scale. Can be configured to scale together or inverted. |
| **gain** | The output scale. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Bend Mode** | Set the bend mode to either hump (together) or fin (inverted). |