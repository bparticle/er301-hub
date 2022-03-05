---
title: Scannable Harmonic Oscillator
description: Harmonic oscillator
author: joe_biomassa # If you use the exact OD forum username then the avatar will be fetched from the forum
compatibility: { v05: false, v06: true } # object with two keys and boolean values: v05 and v06
contact: https://forum.orthogonaldevices.com/u/joe_biomassa/summary # Just a link to wherever you can be contacted
link: https://forum.orthogonaldevices.com/t/scannable-harmonic-oscillator-in-middle-layer-this-time # Another link, to the project source or
github: # OPTIONAL: GitHub releases
  path: biomassa/301dev # GitHub user name and repository name
  tagRegex: ^jb's er-301 units v.0.0.2mnt*$ # regex by which the package can be found (^ = starts with, .*$ = any extension)
latest version: v0.0.2
files: # A list of files that you have uploaded in /static/packages
  - harmonic-0.0.2.pkg
units: # A list of units with categories. If possible, use existing categories unless you have something that deserves its own
  - { name: Scannable Harmonic Oscillator, category: Oscillators }
---

## Scannable Harmonic Oscillator

Controls should be pretty self explanatory — ‘center’ scans through harmonics, ‘width’ sets the width of each frequency band (bands have to overlap for smooth scanning), ‘xfade’ controls bands’ crossfading, ‘fdbk’ controls the sine oscillators’ ‘feedback’, and individual harmonics levels faders are present.

If the “center” control is centered, let’s say, around the 2nd harmonic, then that harmonic’s level will be maxed out already and the fader labeled “2” will have no effect. This is intentional and analogous to the behavior of the controls on the Frap Tools Fumana that I own.

<md-img src="harmonicoscillator/harmonic.png" alt=""></md-img>
