---
title: Erosive
description: Add Grunge, Grit and Distortion to your sound!
author: worldwave # If you use the exact OD forum username then the avatar will be fetched from the forum
compatibility: { v05: false, v06: true } # object with two keys and boolean values: v05 and v06
contact: https://forum.orthogonaldevices.com/u/worldwave/summary # Just a link to wherever you can be contacted
link: https://forum.orthogonaldevices.com/t/erosive-0-1-add-grunge-grit-and-distortion-to-your-sound # Another link, to the project source or
latest version: v0.1
files: # A list of files that you have uploaded in /static/packages
  - Erosive.pkg
units: # A list of units with categories. If possible, use existing categories unless you have something that deserves its own
  - { name: Erosive, category: Effects }
---

## Erosive

Essentially what it does is this: The input comes in and gets layered with noise that goes through a tilt-shelf that turns it into either distorted red noise, silence or harsh blue noise. That noise layer is then cross-modulated with the input, the result sounds like it is “melded together” with the input. Erosive then takes the input & the added noise layer and crushes them together with a softclipper.

The tilt knob controls the tilt shelf. Positive values produce gritty noise with denser high frequencies, and negative values produce grungier noise with denser lower frequencies. The max values completely silence out the lows or highs. This knob needs more tweaking in later versions, especially in the cutoff regions & gain values.

The drive knob controls pre/post gain to softclip & distort the crossmodulated signal.

Use cases (Disclaimer, the values aren’t properly tuned yet for any signal type & amplitude, take with grain of salt) :

Simple Reese-style bass:
Take two bass-frequency sinewave oscillators with identical tuning, in mono. Slightly detune them until you get that familiar pumping effect. Put Erosive on top with the default settings and push the drive to your liking!

Simple flute sound:
Take a higher-pitched (treble clef area) wave that is anywhere between a sinewave and a triangle, send it into Erosive with high Tilt and low Drive. Push the drive to get more metallic tones, as if the breath is stronger.

Grungy lead:
Take a lowpassed sawtooth, send it into Erosive with minimal Tilt values and high Drive. Play with the lowpass :slight_smile:

Please help me with any issues you find, this is my first custom unit (and the first time I actually use the ER-301). Criticism is welcome, I’d love to have this process working on the first try!

Here’s to more of these things. I love this module.

Deep sound design mumbo jumbo time:
This famed effect is reached when a clipping element (such as a harsh compressor, limiter or clipping distortion) causes a weaker, more textured layer to be crushed under a lower-pitched, higher-gain carrier layer. The clipping cleans up the peaks of the resulting wave, filling the places closer to the 0-crossing with the content from the higher-pitched layer. Ringmodding is used to make the effect more extreme without necessitating distortion that would otherwise harm the carrier.

In slower waves, such as bass instruments, the result sounds like flapping, or a stabbed/broken speaker. With faster ones it sounds like a harsh buzz or gritty texture. This is because the ear picks up the individual moments where the higher layer blinks in and out as the clipping and ringmodding crush it away to make room for the carrier wave.