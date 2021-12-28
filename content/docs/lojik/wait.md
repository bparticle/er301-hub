---
title: Wait
description: A VC switch.
author: tomf
project: lojik
---

<md-img src="lojik/wait.png" alt=""></md-img>

Keeps an internal step counter that increments when the **unit input** is greater than zero. Outputs the **unit input** on the first step and zero for the other **count** steps. Can be **invert**ed to do the opposite, output nothing on step zero and the **unit input** on all other steps.

Trigger the waiting action by firing **arm** or change it to a toggle to wat continously.

#### Patch Ideas

1. _Clock Divider_<br>Patch a clock into the **unit input** input, change **arm** to a toggle, and set it high. The input clock will continuously skip **count** pulses.

2. _Subharmonics_<br>Patch an oscillator into the **unit input**, set **arm** high, and set the **Input Sense** to high. This will output a single cycle of the oscillator then skip **count** cycles to create subharmonics.

3. _Burst Generator_<br>Patch a fast clock into the **unit input** and toggle **invert**. When **arm** is triggered, the next **count** clock pulses will be output.

| Input            | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| **_unit input_** | The signal to bypass.                                                               |
| **count**         | The number of steps to wait for.               |
| **invert**        | When invert is low, wait blocks the input. When high, it allows the input through only during the wait period.                                                 |
| **arm**           | Reset the internal counter and prepare to wait.            |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |