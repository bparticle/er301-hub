---
title: Tanh
description: A tanh limiter.
author: tomf
project: strike
---

<md-img src="strike/tanh.png" alt=""></md-img>

Limits the incoming signal with a `tanh` function.

Essentially computes `output = tanh(input * gain)`. As the input signal approaches one or negative one it is soft clipped, the gain value helps push the signal up to the limits:

<md-img src="strike/tanh-explain.gif" alt=""></md-img>

On this graph `x` is the amplitude of our input signal. You can see that as `x` increases `y` approaches one and can never exceed it.

As a result `tanh` limits the signal and can even be used a a wave shaper to distort, for example, a triangle wave into a sine shape.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The signal to limit.  |
| **gain**         | Additional input gain to push against the function. |
