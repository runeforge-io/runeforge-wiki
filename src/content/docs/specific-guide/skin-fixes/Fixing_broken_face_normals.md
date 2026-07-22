---
title: Fixing Broken Face Normal
description: This is how you can fix your champion looking "see-through"
lastUpdated: 2025-02-04
---

How wrong face normals in-game are usually noticeable:

This is more common, where the whole character or connected parts appears kind of see through.

![Champion model appearing see-through due to flipped normals](/user-pictures/goat/brokennormals/1.webp) 

Staff is missing from certain angles, rather uncommon to just have a few face normals wrong.

<img src="/user-pictures/goat/brokennormals/2.webp" alt="Staff missing from certain angles due to wrong normals" height="342" />

You can check face normals in Maya here:

![Where to check face normals in Maya](/user-pictures/goat/brokennormals/3.webp)

#### Correct
Barely visible green dots (if visible at all)

![Correct normals showing barely visible green dots](/user-pictures/goat/brokennormals/4.webp)

#### Incorrect

Small green lines, very visible around “crowded” areas (face)

![Incorrect normals showing small green lines around the face](/user-pictures/goat/brokennormals/5.webp)

### How to fix

The fix is very simple : 

Select your mesh, then, while in the modeling tab, go to Mesh Display > Reverse

<img src="/user-pictures/goat/brokennormals/fix.png" alt="Maya Mesh Display menu with the Reverse option" height="400" />

Your model should now appear normal!

## Sources

- Yoru Queen of Night
