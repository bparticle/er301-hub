---
title: Euclid
description: A euclidean rhythm generator.
author: tomf
project: lojik
---

<md-img src="lojik/euclid.png" alt=""></md-img>

<md-img src="lojik/euclid-ext.png" alt=""></md-img>

A euclidean rhythm generator. Takes a clock signal at the **unit input** and converts it to a euclidean rhythm.

Includes a helpful visualization of the generated rhythm. The outer ring displays which steps of the rhythm are active and a bright circle indicates the current step. An additional empty circle will display when the rhythm is rotated to show the original starting point.

#### Patch Ideas

1. _Euclids Triangle_<br>Run a triangle oscillator into the **unit input** and set **beats** close to **length** and the **Output Mode** to **through**. The resulting wave will be chopped up according to the rhythm for some interesting timbres.

2. _Just Spinning_<br>Patch a clock into the **rotate** gate instead of the **unit input**, because why play by the rules.

| Input            | Description                        |
| ---------------- | ---------------------------------- |
| **_unit input_** | The clock signal to convert. |
| **reset**        | Fire to return to the first step of the rythm. |
| **rotate**       | Rotate the rhythm. |
| **beats**        | The number of beats to spread out over the **length**. |
| **length**       | The total number of steps in the rhythm. |


| Menu Item        | Description                        |
| ---------------- | ---------------------------------- |
| **Output Mode**  | **trigger**: output a trigger when the current step is active.<br>**gate**: output a gate when the current step is active.<br>**through**: output the incoming signal when the current step is active. |
| **Clock Sync**   |  **rotate**: synchronize rotate triggers to the input signal to ensure they don't interupt the beat.<br>**reset**: synchronize reset triggers to the input signal. |
| **Input Sense** | Input sensitivity, use high for through-zero signals and low for gate/trigger signals. |
