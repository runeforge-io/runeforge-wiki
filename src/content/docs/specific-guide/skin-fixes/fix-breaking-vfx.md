---
title: Common VFX Bugfixes
description: A list of common VFX problems you might encounter
published: true
date: 2025-02-04T02:01:07.014Z
tags: vfx, bin, fix, transparency, bug
editor: markdown
dateCreated: 2024-02-21T21:08:17.473Z
---


# Fix and Prevent VFX from breaking

This tutorial shows you how your particles should break less often by including every particle texture and model in your mod and rerouting them to your champion’s particle folder. This can also help you find all particles your champion/skin uses.

Particles break and have blocky shapes due to Riot renaming files that you might not have edited, but they are from the game files.If your .bins are not from the same patch as the file was renamed in, your particles will break as the old bin cannot find the outdated filename, resulting in often blocky shapes and missing models.

![showbrokenvfx.webp](/user-pictures/vector/general-guides/fix-sfx/showbrokenvfx.webp)

<br>

<div align="left">
  <a href="https://www.youtube.com/watch?v=6FLj7f9_fRE"><img src="https://img.youtube.com/vi/6FLj7f9_fRE/0.jpg" alt="Guide on how to fix broken vfx and prevent them from breaking"
style="width:75%"></a>
</div>

*External link to Youtube!*

# Fix VFX transparency
## Explanation

![transparent1.webp](/user-pictures/vector/general-guides/fix-sfx/transparent1.webp =393x) ![transparent2.webp](/user-pictures/vector/general-guides/fix-sfx/transparent2.webp =500x)

Left are are DEFAULT Soraka particles. and right are edited Lux particles. This is caused by .bins using an incorrect blendmode or having the image in the wrong way. In Sorakas case she uses the same particle for Q heal passive effect  on her and the Q missile head. The way her textures are set up is not  compatible, one of those is always gonna be bugged.

![transparent3.webp](/user-pictures/vector/general-guides/fix-sfx/transparent3.webp)
*Black background texture, BLENDMODE 4*

![transparent4.webp](/user-pictures/vector/general-guides/fix-sfx/transparent4.webp)
*Black background texture, BLENDMODE 1*

In order for a texture with a transparent background to show up properly, the blendmode of the emitter has to be 1. A texture with a black background will show up properly on a blendmode 4.

## How to fix

1. Load the .bin(s) with incorrect blendmodes as .py in a coding program.

2. Search for the name of the bugged looking texture after determining if it’s a texture with transparency or black background

3. Look at the whole emitter it is in and look for a `blendmode` value,  it’s usually around the top and around `birthColor`. If you cannot find  one, it’s already set to 1 as 1 is default.

![transparent5.webp](/user-pictures/vector/general-guides/fix-sfx/transparent5.webp)

4. Now change your blendmode to the correct one.

5. Make sure every time this texture is mentioned it uses the same blendmode.

6. If you need blendmode 4 and there is no blendmode value: simply add  it anywhere in the top part of the emitter, before the `pass:` value.

# Sources

- Yoru Queen of Night