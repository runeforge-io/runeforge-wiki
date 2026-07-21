---
title: How to fix broken animations with LoLmaya
description: This tutorial shows you how to fix broken animations on your model that happen due to animation layering etc.
published: true
date: 2025-02-04T02:01:47.397Z
tags: maya, animation
editor: markdown
dateCreated: 2024-02-22T05:14:01.874Z
---

# How to fix broken animations with LoLmaya
Common issues that can appear are: bugged animations that just don’t look properly, champions walking backwards/sidewards or smth

For Jhin, his reload animation is horribly bugged if you export it normally:

![1.gif](/user-pictures/goat/fixbrokenanimation/1.gif =x300)

## Required Tools

-   [Obsidian *Main program to extract and browse Leagues gamefiles.*](/core-guides/tools/obsidian)
-   [Autodesk Maya *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
- [LoL-Maya *Plugin made by tarngaina*](https://github.com/tarngaina/lol_maya)
{.links-list}

# Written Guide

## How to get a Riot .skl file
First extract the original champion <a href="/en/specific-guide/filetypes#skn">.skl</a> file from Obsidian, following the tutorial above. You only need the <a href="/en/specific-guide/filetypes#skn">.skl</a>. In my case, it’s Jhin.skl

Rename the <a href="/en/specific-guide/filetypes#skn">.skl</a> to Riot.skl and place it in the champion skin folder of your custom skin. I rename Jhin.skl to Riot.skl and put it into Jhin.wad.client/assets/characters/jhin/skins/base.

![2.webp](/user-pictures/goat/fixbrokenanimation/2.webp)

## Exporting your skin
Load your finished skin in Maya. You have to have all the weighting done.

![3.webp](/user-pictures/goat/fixbrokenanimation/3.webp)

Now export your model as “Riot skn/skl” format in Maya with whatever name you want (except “riot” ofc).
In the bottom right/Script Editor you will see this. This means it worked.

![4.webp](/user-pictures/goat/fixbrokenanimation/4.webp)

Delete the riot.skl file.

## Result

![5.gif](/user-pictures/goat/fixbrokenanimation/5.gif =x300)

# Sources

- Yoru Queen of Night
