---
title: How to fix moonwalking
description: This is the fix for when your champion starts walking in random directions
lastUpdated: 2025-02-04
tags:
  type: troubleshooting
  level: intermediate
  subject: [skin-fixes, animation, bin-editing]
---

Sometimes champions might be turned in the opposite direction of where  they go and generally move really weirdly. This happens mainly on  remodels due to animation layering.
![Scuttle crab moonwalking, facing away from its movement direction](/user-pictures/goat/skuttle_moonwalk.gif)

## How to fix
1. Convert and open the SkinX.bin of your skin, for example Skin0.bin
2. Delete the `rigPoseModifierData` block:
   <img src="/user-pictures/goat/moonwalk_fix.png" alt="The rigPoseModifierData block to delete in the converted bin file" height="400" />
3. Convert back the bin

Done!

## Sources

- Yoru Queen of Night
