---
title: Pick
description: A VC switch.
author: tomf
project: lojik
---

<md-img src="lojik/pick.png" alt=""></md-img>

Output the **unit input** when **pick** is low and the **alt** signal when **pick** is high.

#### Patch Ideas

1. _Sequence Swap_<br>Pass in two sequences or CV sources and switch between them at will with the **pick** gate.

2. _Audio Rate Slice_<br>Rapidly switch between two signals with an audio-rate **pick** input.

| Input            | Description                                               |
| ---------------- | --------------------------------------------------------- |
| **_unit input_** | The left input, output when **pick** is low.              |
| **alt**          | The right input, output when **pick** is high.            |
| **pick**         | Output the **unit input** when low and **alt** when high. |
