---
title: How to fix broken animations with LoLmaya
description: This tutorial shows you how to fix broken animations on your model that happen due to animation layering etc.
lastUpdated: 2025-02-04
tags:
  type: troubleshooting
  level: advanced
  subject: [skin-fixes, animation]
  tool: [maya, obsidian]
---

Common issues that can appear are: bugged animations that just don’t look properly, champions walking backwards/sidewards or smth

For Jhin, his reload animation is horribly bugged if you export it normally:

<img src="/user-pictures/goat/fixbrokenanimation/1.gif" alt="Jhin's reload animation looking horribly bugged in game" height="300" />

### Required Tools

-   [Obsidian *Main program to extract and browse Leagues gamefiles.*](/core-guides/tools/obsidian)
-   [Autodesk Maya *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
- [LoL-Maya *Plugin made by tarngaina*](https://github.com/tarngaina/lol_maya)

## Written Guide

### How to get a Riot .skl file
First extract the original champion [.skl](/specific-guide/filetypes) file from Obsidian, following the tutorial above. You only need the [.skl](/specific-guide/filetypes). In my case, it’s Jhin.skl

Rename the [.skl](/specific-guide/filetypes) to Riot.skl and place it in the champion skin folder of your custom skin. I rename Jhin.skl to Riot.skl and put it into Jhin.wad.client/assets/characters/jhin/skins/base.

![Riot.skl placed in the custom skin's base folder](/user-pictures/goat/fixbrokenanimation/2.webp)

### Exporting your skin
Load your finished skin in Maya. You have to have all the weighting done.

![Finished, fully weighted skin loaded in Maya](/user-pictures/goat/fixbrokenanimation/3.webp)

Now export your model as “Riot skn/skl” format in Maya with whatever name you want (except “riot” ofc).
In the bottom right/Script Editor you will see this. This means it worked.

![Maya Script Editor output confirming a successful export](/user-pictures/goat/fixbrokenanimation/4.webp)

Delete the riot.skl file.

### Result

<img src="/user-pictures/goat/fixbrokenanimation/5.gif" alt="Jhin's reload animation playing correctly after the fix" height="300" />

## Sources

- Yoru Queen of Night
