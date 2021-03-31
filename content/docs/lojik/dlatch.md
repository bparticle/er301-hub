---
title: DLatch
description: A data latch.
author: tomf
project: lojik
---

<md-img src="lojik/dlatch.png" alt=""></md-img>

Samples the **unit input** when the **clock** gate goes high. Re-samples the **unit input** when **reset** is high.

#### Patch Ideas

1. _Sample and Hold_<br>Patch a signal into the **clock** input to create a sample and hold function.

2. _Track and Hold_<br>Patch a signal into the **clock** input and hold **reset** high to creatte a track and hold function.

3. _Shift Register_<br>Patch several `DLatches` in a row and give them all the same **clock** signal. The left-most **unit input** will be shifted through the `DLatches` on each clock tick.

| Input            | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| **_unit input_** | The input to be sampled.                                                            |
| **clock**        | Sample the **unit input** on gate high.                                             |
| **reset**        | Reset the internal latch to cause the **unit input** to be re-sampled on the clock. |
