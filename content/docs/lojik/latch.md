---
title: Latch
description: An SR latch.
author: tomf
project: lojik
---

<md-img src="lojik/latch.png" alt=""></md-img>

Output is latched high when the **unit input** is greater than zero.

| Input            | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| **_unit input_** | The latch is set when the **unit input** is greater than zero.                       |
| **reset**        | Reset the latch to zero on gate high unless the **unit input** is greater than zero. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |