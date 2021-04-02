---
title: Chance
description: A probability gate.
author: tomf
project: lojik
---

<md-img src="lojik/chance.png" alt=""></md-img>

Randomly outputs pulses of the **unit input** signal with **chance** probability. At **chance** 1, all pulses are output, at 0 none, and at 0.5 there's a 50% chance a pulse will be output.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The input clock signal.  |
| **chance**       | The probability a pulse will be output. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |