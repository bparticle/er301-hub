---
title: Lift (LPG)
description: A 6dB/oct lowpass gate.
author: tomf
project: strike
---

<md-img src="strike/lift.png" alt=""></md-img>

A lowpass gate using a slew limiter envelope and a 6dB/oct filter.

Also includes the slew output from the **height** control.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | Input signal.  |
| **gate**         | Gate input, start rising. |
| **height**       | Control how high the envelope goes. |
| **rise**         | Rise time. How long does it take for the envelope to fully open. |
| **fall**         | Fall time. How long after fully risen does it take for the envelope to close. |
