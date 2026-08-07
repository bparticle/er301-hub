---
title: Hyperscale301
description: 67 stereo custom units for the ER-301, made by mudlogger
author: mudlogger # If you use the exact OD forum username then the avatar will be fetched from the forum
compatibility: { v05: false, v06: true }
contact: https://forum.orthogonaldevices.com/u/mudlogger/summary
link: https://github.com/mudlogger/er301-hyperscale-units
github:
  path: mudlogger/er301-hyperscale-units
  tagRegex: ^v.*$
latest version: v1.6
files: [] # No local files: the release .zip is ~700MB (individual .pkg files up to ~22MB each), far too large to host in this repo. Download via the "Latest GitHub release" button above, sourced live from the GitHub releases API.
units:
  - { name: bend, category: Generators }
  - { name: bento box, category: Generators }
  - { name: big, category: Generators }
  - { name: bongo phase, category: Generators }
  - { name: bongo rom, category: Generators }
  - { name: bottles, category: Generators }
  - { name: chance, category: Generators }
  - { name: coastal, category: Generators }
  - { name: dialled in, category: Generators }
  - { name: dorian, category: Generators }
  - { name: edev, category: Generators }
  - { name: edigi, category: Generators }
  - { name: emono, category: Generators }
  - { name: endless bongo, category: Generators }
  - { name: endless marimba, category: Generators }
  - { name: ezil rev 2, category: Generators }
  - { name: ezil, category: Generators }
  - { name: fragments, category: Generators }
  - { name: gaston, category: Generators }
  - { name: gran, category: Generators }
  - { name: gritch25, category: Generators }
  - { name: grove rev 2, category: Generators }
  - { name: grove, category: Generators }
  - { name: hamming, category: Generators }
  - { name: hyper scale, category: Generators }
  - { name: hyper301, category: Generators }
  - { name: jitter, category: Generators }
  - { name: kalimba hell, category: Generators }
  - { name: krystal kastles, category: Generators }
  - { name: luthier, category: Generators }
  - { name: lutq, category: Generators }
  - { name: manq, category: Generators }
  - { name: mantis, category: Generators }
  - { name: marimba rom, category: Generators }
  - { name: mesh, category: Generators }
  - { name: metab, category: Generators }
  - { name: monolith, category: Generators }
  - { name: ninja, category: Generators }
  - { name: noise merchant, category: Generators }
  - { name: ota rev 2, category: Generators }
  - { name: ota rev 3, category: Generators }
  - { name: ota rev 4, category: Generators }
  - { name: ota, category: Generators }
  - { name: piano esque, category: Generators }
  - { name: plaidium, category: Generators }
  - { name: pole, category: Generators }
  - { name: puls, category: Generators }
  - { name: r+r25, category: Generators }
  - { name: rescale, category: Generators }
  - { name: ria, category: Generators }
  - { name: ringing rocks, category: Generators }
  - { name: slaughter house, category: Generators }
  - { name: speak and hell, category: Generators }
  - { name: spook, category: Generators }
  - { name: sweet spot, category: Generators }
  - { name: temple + rain, category: Generators }
  - { name: temple tantrum, category: Generators }
  - { name: tight rope, category: Generators }
  - { name: tritone rev 2, category: Generators }
  - { name: tritone, category: Generators }
  - { name: tube, category: Generators }
  - { name: tunnel vision, category: Generators }
  - { name: twisted, category: Generators }
  - { name: ultra violet, category: Generators }
  - { name: unskool, category: Generators }
  - { name: velouria, category: Generators }
  - { name: vink, category: Generators }
---

Hyperscale301 is a large, ever-growing collection of **stereo** custom units for the ER-301 by mudlogger — mostly self-generating/semi-random drum, percussion, granular and synth voices with deliberately minimal controls (usually a handful of CV-able sliders). You steer the ship rather than program it note-by-note. As of **v1.6** the pack contains 67 individual `.pkg` units.

<div class="yt-embed">
  <youtube :video-id="'eztGpEXggFY'"></youtube>
</div>

More demos: [FuTrYFDV6Zs](https://youtu.be/FuTrYFDV6Zs), [Zbcc6PW59So](https://youtu.be/Zbcc6PW59So), [EXbhVVzUnag](https://youtu.be/EXbhVVzUnag) (Static + Loss unit).

## Requirements

- **Minimum ER-301 firmware v0.6.15** ([odevices/er-301 releases](https://github.com/odevices/er-301/releases)) — v0.6.14 and earlier cannot load the samples bundled in these packages.
- Set the ER-301 to **48kHz / 128 samples per block** in system settings.
- These are **stereo** units: link channel 1 + channel 2 before loading one (hold the Ch 1 button while pressing Ch 2 — the "linked" LED lights up).
- A number of units additionally depend on other hub packages: [Accents](/projects/accents), [Band Limited Oscillators](/projects/band_limited_osc), [Filter Delays](/projects/filterdelays), [Lojik](/projects/lojik), [Sloop](/projects/sloop) and [Strike](/projects/strike). Install these first.

## Downloads

Because a full release (all 67 `.pkg` files zipped together) is several hundred megabytes — far too large to host as static files on this hub — downloads are **not** listed below. Use the **"Latest GitHub release"** button at the top of this page (it links straight to the current `hyperscale301.vX.X.zip` asset on GitHub), or browse [all releases](https://github.com/mudlogger/er301-hyperscale-units/releases) directly, including the original `er301` tag if you want an older/smaller starting point.

### Installation

1. Download the latest `hyperscale301` release `.zip`.
2. Unzip it — you'll get one `.pkg` file per unit.
3. Copy the `.pkg` files you want to `ER301/packages` on the SD card.
4. On the ER-301: flip the left switch to **Admin** → **Package Manager**.
5. Highlight and install each `.pkg` individually.

## Units

Most units are single-purpose generative voices with little to no public documentation beyond their name and the demo videos above — this hub will get more per-unit detail as it's written up. What's known from the release notes so far:

| Unit | Notes |
| --- | --- |
| **bongo rom** | 6-voice triggerable bongos with pitch randomizer. |
| **endless bongo** | Same as bongo rom, plus an internal phase sequencer. |
| **marimba rom** | 6-voice triggerable marimbas with pitch randomizer. |
| **endless marimba** | Marimba rom with an internal phase sequencer. |
| **chance** | Probability sliders shape the drum pattern. |
| **dorian** | 2 self-generating, semi-random FM synths in the Dorian scale. |
| **noise merchant** | 2 Mangrove-style oscillators through a filter, in an FM feedback loop — harsh noise territory. |
| **r+r25** | 2 pinged bandpass filters — "you steer the ship". |
| **ultra violet** | Wavetable oscillator through rbeny's Ultraviolet package. |
| **edev** | 4-voice glitch drum sample player: 4 euclidean sequencers, random clock, per-voice probability, spread delay. |
| **edigi** | 4-voice FM drum samples with 4 euclidean sequencers, optional clocked random clock, random sample, reverb. |
| **emono** | Like edev, mono-flavored drum voices with the same euclidean/clock/delay setup. |
| **monolith** | 4-voice stereo glitch drum sample player: 4 euclidean sequencers, random clock, per-voice probability, clocked delay. |
| **fragments** | Granular stretch through a stereo delay and reverb, with 2 internal LFOs and randomization. |
| **jitter** | Same granular-stretch/delay/reverb/LFO approach as fragments. |
| **hyper301** | Grain-stretching unit (part of the pack's namesake "hyperscale" granular voices). |
| **piano esque** | Random atonal piano samples through a looper. |
| **puls** | Pulsar synthesis: sine + fast envelope, 36dB HP filter, stereo delay and reverb. |
| **twisted** | Scannable wavetable synth with internal LFO, low-pass gate, tanh gain, 12dB BP filter, delay and reverb. |
| **gaston** | Pulsar synthesis with a ping-pong clocked delay. |

The remaining units (`bend`, `bento box`, `big`, `bongo phase`, `bottles`, `coastal`, `dialled in`, `ezil` / `ezil rev 2`, `gran`, `gritch25`, `grove` / `grove rev 2`, `hamming`, `hyper scale`, `kalimba hell`, `krystal kastles`, `luthier`, `lutq`, `manq`, `mantis`, `mesh`, `metab`, `ninja`, `ota` / `rev 2` / `rev 3` / `rev 4`, `plaidium`, `pole`, `rescale`, `ria`, `ringing rocks`, `slaughter house`, `speak and hell`, `spook`, `sweet spot`, `temple + rain`, `temple tantrum`, `tight rope`, `tritone` / `tritone rev 2`, `tube`, `tunnel vision`, `unskool`, `velouria`, `vink`) don't have a published description yet — check the demo videos linked above, or the [release notes](https://github.com/mudlogger/er301-hyperscale-units/releases) for the version they were added in.

Extra miscellaneous packages by other authors that pair with this pack are collected separately at [er301-misc-units-by-others](https://github.com/mudlogger/er301-misc-units-by-others).
