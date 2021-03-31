---
title: Wait
description: A VC switch.
author: tomf
project: lojik
---

<md-img src="lojik/wait.png" alt=""></md-img>

Keeps an internal step counter that increments on the **clock**. Outputs the **unit input** on the first step and zero for the other **wait** steps.

#### Patch Ideas

1. _Clock Divider_<br><br>Patch a clock into the **clock** input as well as the **unit input** to divide the clock by **wait** minus 1.<br>

2. _Sub-harmonics_<br><br>Patch an oscillator into the **unit input** and trigger the **clock** at audio rate to chop it up.<br>

3. _Clocked Mute_<br><br>Mute a signal for **wait** steps before bringing it back in.<br>

| Input            | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| **_unit input_** | The signal to bypass.                                                               |
| **wait**         | The number of "zero" steps before the **unit input** is output again.               |
| **clock**        | Increase the internal step counter.                                                 |
| **reset**        | Reset the internal counter such that the **unit input** is output again.            |

