---
title: Fixing Broken Face Normal
description: This is how you can fix your champion looking "see-through"
published: true
date: 2025-02-04T02:00:32.387Z
tags: modelling, texture
editor: markdown
dateCreated: 2024-02-22T04:14:43.862Z
---

# Fixing Broken Face Normals
How wrong face normals in-game are usually noticeable:

This is more common, where the whole character or connected parts appears kind of see through.

![1.webp](/user-pictures/goat/brokennormals/1.webp) 

Staff is missing from certain angles, rather uncommon to just have a few face normals wrong.

![2.webp](/user-pictures/goat/brokennormals/2.webp =x342)

You can check face normals in Maya here:

![3.webp](/user-pictures/goat/brokennormals/3.webp)

### Correct
Barely visible green dots (if visible at all)

![4.webp](/user-pictures/goat/brokennormals/4.webp)

### Incorrect

Small green lines, very visible around “crowded” areas (face)

![5.webp](/user-pictures/goat/brokennormals/5.webp)

## How to fix

The fix is very simple : 

Select your mesh, then, while in the modeling tab, go to Mesh Display > Reverse

![fix.png](/user-pictures/goat/brokennormals/fix.png =x400)

Your model should now appear normal!

# Sources

- Yoru Queen of Night
