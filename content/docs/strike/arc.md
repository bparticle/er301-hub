---
title: Arc (AD)
description: A looping AD envelope.
author: tomf
project: strike
---

<md-img src="strike/arc.png" alt=""></md-img>
<md-img src="strike/arc-wave.png" alt=""></md-img>

An AD envelope with loop toggle and bend control.

Also includes EOF/EOR gate outputs from the rise/fall controls.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | A signal to trigger the envelope.  |
| **rise/EOF**         | Rise time. How long does it take for the envelope to fully open. Branch output is an EOF gate. |
| **fall/EOR**         | Fall time. How long after fully risen does it take for the envelope to close. Branch output is an EOR gate. |
| **bend**            | Bend the envelope curve using a power scale. Can be configured for the rise/fall to scale together or inverted. |
| **loop** | Toggle to automatically re-trigger the envelope on EOF. |
| **height** | Control how high the envelope goes or invert it. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Bend Mode** | Set the bend mode to either hump (together) or fin (inverted). |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |