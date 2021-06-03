---
title: Strike (LPG)
description: A lowpass gate.
author: tomf
project: strike
---

<md-img src="strike/strike.png" alt=""></md-img>

A lowpass gate using the envelope from arc and a 12dB/oct biquad filter.

Also includes EOF/EOR gate outputs from the **rise**/**fall** controls as well as the envelope out from the **height** control.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | _NA_  |
| **trig**         | Trigger input. |
| **rise/EOF**         | Rise time. How long does it take for the envelope to fully open. Branch output is an EOF gate. |
| **fall/EOR** | Fall time. How long after fully risen does it take for the envelope to close. Branch output is an EOR gate. |
| **bend**            | Bend the envelope curve using a power scale. Can be configured for the rise/fall to scale together or inverted. |
| **height** | Control how high the envelope goes. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Bend Mode** | Set the bend mode to either hump (together) or fin (inverted). |