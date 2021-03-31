---
title: Seq
description: A step sequencer.
author: tomf
project: lojik
---

<md-img src="lojik/seq.png" alt=""></md-img>

A specialized version of the `register` unit designed for step sequencing.

When **capture** is fired, the register will start recording and ignore all **clock** and **shift** triggers. Each **capture** will advance to the next step as well as the total **length** until a **reset** trigger is fired.

See `register` for more details.

#### Patch Ideas
1. _SH-101_<br><br>Connect a keyboard V/Oct to the unit input and the gate to **capture**. Play a few notes then manually press **reset** to play back the sequence.<br>
