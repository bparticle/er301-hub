---
title: CPR (Stereo Compressor)
description: A stereo peak compressor.
author: tomf
project: strike
---

<md-img src="strike/cpr.png" alt=""></md-img>
<md-img src="strike/cpr-sub.png" alt=""></md-img>
<md-img src="strike/cpr-scope.png" alt=""></md-img>

A stereo peak compressor with sidechain and optional auto makeup gain. Also includes outputs for gain reduction and a gate when the compressor is active.

The sidechain branch can be manually switched in via a toggle on the input control. Note though that the sidechain signal will be subject to frame delay, slowing the compressor attack time.

When using the direct input as the sidechain the compressor is maximally fast, allowing it to act as a limiter at high ratio.

The reduction output signal is the same signal that is internally multiplied by the input to get the output signal, so it can be used as such (with a VCA) anywhere else you like.


| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | Signal to compress.  |
| **input**        | Input gain. |
| **thresh**       | Activation threshold. |
| **ouput**        | Output gain. |
