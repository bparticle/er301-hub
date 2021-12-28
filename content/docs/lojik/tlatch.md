---
title: TLatch
description: A timed latch.
author: tomf
project: lojik
---

<md-img src="lojik/tlatch.png" alt=""></md-img>

Output is latched high when the **unit input** is greater than zero. It will remain high for the specified **time** or until **reset** is fired.

| Input            | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| **_unit input_** | The latch is set when the **unit input** is greater than zero.                       |
| **time**         | The amount of time to stay high. |
| **reset**        | Reset the latch to zero on gate high. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |