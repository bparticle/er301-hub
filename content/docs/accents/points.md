---
title: Points
description: Points is a multi-segment envelope generator with four sets of controls to specify time, level, and curvature for each segment. It includes options for sustain or looping on gate high, and analog and digital retrigger options.
author: joe
project: accents
files:
  - Points-Ideas.pdf
  - points-presets.zip
---
<md-img src="accents/Points.png" alt=""></md-img>
## Input

| Input            | Description                                       |
| ---------------- | ------------------------------------------------- |
| **_unit input_** | feed a gate signal into the left side of the unit |

## Controls

| Control     | Description                                  |
| ----------- | -------------------------------------------- |
| **time x**  | time to reach point x                        |
| **level x** | level of point x                             |
| **curve x** | curvature of the segment approaching point x |

## Options

### Held Gate

sustain will sustain at level 3 when it is reached if the gate is still high
loop will jump immediately back to point 1 when point 3 is reached, and loop from point 1 to 3 as long the gate is high

## Retrigger

When the envelope is retriggered before it has completed it’s full cycle:
analog will begin the first phase from the level of the envelope at the moment is retriggered
digital will force the envelope to level 4 before beginning the first phase

### Views

There are various views to help you focus on particular aspects of control
all, time/level, levels, times, curves and a view showing all of the relevant controls for each segment [1-4]

## Other Stuff

Attached is a PDF of some sketches of a few ideas you could try with Points, and a zip file of Points unit presets with those ideas already built. Recommended installation path for the presets is /er-301/v0.6/presets/points
