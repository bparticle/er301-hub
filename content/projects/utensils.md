---
title: Utensils
description: Sound design utilities
author: worldwave # If you use the exact OD forum username then the avatar will be fetched from the forum
compatibility: { v05: false, v06: true } # object with two keys and boolean values: v05 and v06
contact: https://forum.orthogonaldevices.com/u/worldwave/summary # Just a link to wherever you can be contacted
link: https://forum.orthogonaldevices.com/t/utensils-precious-sound-design-tools-i-use-constantly # Another link, to the project source or
latest version: v0.0.0
files: # A list of files that you have uploaded in /static/packages
  - Utensils.pkg
units: # A list of units with categories. If possible, use existing categories unless you have something that deserves its own
  - { name: Splitt, category: Utilities }
  - { name: Hiverb, category: Utilities }
---

## Utensils

The first tools I like to have on hand for my sound design purposes. These were tested on stereo signals so might have issues with mono.

## Splitt

Splitt is a low-mid-hi bandsplitter using 3 Band and the basic Ladder filters as they shift phase a little less than other filter choices. The result is a rather clean bandsplit exemplified by this scope image:

Before bandsplit:
<md-img src="utensils/202b332145b07baf586ead4fe74b636d51e5151e.png" alt=""></md-img>

After bandsplit:
<md-img src="utensils/7ae1f23b3cd6dcf6647ee71eb3182e02ac6bf01f.png" alt=""></md-img>

You can then sound-design to your liking within each band chain (as long as you maintain that whatever units you use are put in after the splitting units). I also added band cutoff parameters for the low and hi bands (which change the mid band obviously). The default values for these would be 150 for Low and 2500 for High. Future plans would be to add gainboost/cut per band using the VCA’s but I felt for the initial release that it would clutter the unit’s UI which should be rather simple.

## Hiverb

Hiverb is just a quick solution to split your signal into one dry version and one additional layer which gets highpassed and sent to a reverb. Generally speaking, for a clean mix in a percussive section, you would not want to put reverb on your bass instruments. However, reverb on bass instruments contributes a ton to timbre & complexity. To clean up the mix and still use reverbs to stereoize bass instruments and give them space, Hiverb takes only the high frequency band and sends it into Freeverb. Freeverb parameters as well as bandsplit cutoff are accessible from the front of the unit, as well as Amount which is for gain on the reverb layer. The original signal level is preserved so you could call this unit additive. Watch your gain levels to avoid clipping, even though there is much more headroom in the high frequencies.

## Compand

This unit is no longer supported
