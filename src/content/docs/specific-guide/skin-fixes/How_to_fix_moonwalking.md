---
title: How to fix moonwalking
description: This is the fix for when your champion starts walking in random directions
lastUpdated: 2025-02-04
---

# How to fix "moonwalking" champion
Sometimes champions might be turned in the opposite direction of where  they go and generally move really weirdly. This happens mainly on  remodels due to animation layering.
![skuttle_moonwalk.gif](/user-pictures/goat/skuttle_moonwalk.gif)

## How to fix:
1. Convert and open the SkinX.bin of your skin, for example Skin0.bin
2. Delete the following block:
```rigPoseModifierData```
![moonwalk_fix.png](/user-pictures/goat/moonwalk_fix.png =x400)
3. Convert back the bin


Done!

# Sources

- Yoru Queen of Night
