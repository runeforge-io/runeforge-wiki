---
title: Edit Visual FX Colors manually
description: A short guide on how to manually edit VFX colors in bin files.
published: true
date: 2024-08-26T10:56:15.462Z
tags: visual studio, vfx, code, bin, color
editor: markdown
dateCreated: 2024-02-11T19:57:31.882Z
---

# Required tools

Extractor and Converter:
- [Obsidian *Tool to explore and export Riot Game files*](/core-guides/tools/obsidian)
- [Ritobin *Tools to translate bin files into Python files*](/core-guides/tools/rito-bin)
{.links-list}

An code editor of your choice:
- [Choose any Code Editor *Visual Studio recommended*](/core-guides/tools#coding-bin-editing)
{.links-list}

If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
*Other editors work aswell, aslong as they can edit .py (Python) files.*

A calculator or:
- [Wooxy Plus *Very old tool which is mostly outdated but can be used to calculate color values*](https://drive.google.com/file/d/1Lj-TMFXve-QuCOeYN9v4QeBXpXaaoTgc/view)
{.links-list}

*Your antivirus may flag this prgram, it is of course safe!*

# Guide
## Color Codes
1,1,1,X = White0,0,0,X = BlackShould be left like this as it can distort the look of particles.

## Edit multiple same values in Visual Studio Code
Sometimes you have blocks like this, where you have multiple lines with only the same color value.
To select them all at once, first of all select one of the lines with the 3 values you want to replace.
![part1.webp](/user-pictures/vector/general-guides/manualedit-vfx/part1.webp)

Now you rightclick and select “Change all Occurences”
![part2.webp](/user-pictures/vector/general-guides/manualedit-vfx/part2.webp)

Then it selects all lines
![part3.webp](/user-pictures/vector/general-guides/manualedit-vfx/part3.webp)

Now you just paste in your values and done.
![part4.webp](/user-pictures/vector/general-guides/manualedit-vfx/part4.webp)

## Video Guide
<br>
<div align="left">
  <a href="https://www.youtube.com/watch?v=h2NlIc35qWY"><img src="https://img.youtube.com/vi/h2NlIc35qWY/0.jpg" alt="Guide on how to edit VFX Color values via code"
style="width:75%"></a>
</div>
*External Youtube Link!*

# Sources
- Yoru Queen of Night
