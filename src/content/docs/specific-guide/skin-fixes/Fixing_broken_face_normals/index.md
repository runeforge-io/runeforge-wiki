---
title: Fixing Broken Face Normal
description: This is how you can fix your champion looking "see-through"
lastUpdated: 2025-02-04
tags:
  type: troubleshooting
  level: intermediate
  subject: [skin-fixes, 3d-modelling]
  tool: [maya]
---

How wrong face normals in-game are usually noticeable:

This is more common, where the whole character or connected parts appears kind of see through.

![Champion model appearing see-through due to flipped normals](./1.webp) 

Staff is missing from certain angles, rather uncommon to just have a few face normals wrong.

![Staff missing from certain angles due to wrong normals](./2.webp)

You can check face normals in Maya here:

![Where to check face normals in Maya](./3.webp)

#### Correct
Barely visible green dots (if visible at all)

![Correct normals showing barely visible green dots](./4.webp)

#### Incorrect

Small green lines, very visible around “crowded” areas (face)

![Incorrect normals showing small green lines around the face](./5.webp)

### How to fix

The fix is very simple : 

Select your mesh, then, while in the modeling tab, go to Mesh Display > Reverse

![Maya Mesh Display menu with the Reverse option](./fix.png)

Your model should now appear normal!

## Sources

- Yoru Queen of Night
