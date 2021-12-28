---
title: Register
description: A shift register.
author: tomf
project: lojik
---

<md-img src="lojik/register.png" alt=""></md-img>

A shift register that can hold up to 64 steps of arbitrary voltages with a built in random source to sample from.

Samples values from the **unit input** whenever the **capture** gate is triggered and adds a random value scaled by **scatter** to the value before storing it in the currently active step.

Serves as the basis for the more specialized units `turing` and `seq`.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The input signal to record. |
| **clock**        | Advance by **stride** steps. |
| **capture**      | Store the **unit input** plus some randomness scaled by **scatter**. |
| **length**       | The total number of steps in the register, up to a maximum of 64. |
| **stride**       | The number of steps to advance on each **clock** or **shift** trigger. |
| **drift**        | Add slight random variation to the stored step values when non zero. Returns to the original stored value when zero. |
| **shift**        | Shift the register by **stride** steps. |
| **reset**        | Reset the current step to the head of the register. |
| **gain**         | Input gain. |
| **bias**         | Input bias. |
| **scatter**      | Randomness added to the **unit input** on **capture** and **set all/window**. |

| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Clock Sync**  | **shift**: synchronize shift triggers to the **clock**.<br>**capture**: synchronize capture triggers to the **clock**.<br>**reset**: synchronize reset triggers to the clock. |
| **Set all**   |  **zero**: set all stored values to zero.<br>**scatter**: add randomness to all stored values scaled by the **scatter** control.<br>**zero + scatter**: set all stored values to zero and then **scatter** them. |
| **Set window**   |  **zero**: set the current window to zero. That is, step through the register using the current **length** and **stride** and set each value.<br>**scatter**: add randomness to all stored values in the current window.<br>**zero + scatter**: set the current window to zero and then **scatter** it. |
