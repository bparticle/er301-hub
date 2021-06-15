---
title: Formant (Osc)
description: A formant oscillator.
author: tomf
project: strike
---

<md-img src="strike/formant.png" alt=""></md-img>
<md-img src="strike/formant-wave.png" alt=""></md-img>

A formant oscillator [based on](https://github.com/whimsicalraps/Mannequins-Technical-Maps/blob/master/mangrove/mangrove.md) the [Mangrove](https://www.whimsicalraps.com/products/mangrove) module by Whimsical Raps.

An internal oscillator triggers an envelope generator at audio rate. The **formant** and **barrel** change the characteristics of that envelope.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | _NA_  |
| **V/oct**         | Volt per octave offset from **freq**. |
| **freq**         | The base oscillator freequency. |
| **sync** | Hard sync the internal oscillator phase. |
| **formant** | Increase or decrease the envelope duration. |
| **barrel**   | Change the envelope rise/fall ratio. |
| **gain** | The output scale. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Formant Duration** | **fixed**: the envelope duration will follow the **V/Oct** control.<br>**free**: the envelope duration will be unaffected by **V/Oct** |