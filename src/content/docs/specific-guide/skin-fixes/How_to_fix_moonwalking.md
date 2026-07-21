---
title: How to fix moonwalking
description: This is the fix for when your champion starts walking in random directions
published: true
date: 2025-02-04T02:00:02.393Z
tags: animation, code
editor: markdown
dateCreated: 2024-02-22T03:13:56.381Z
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
