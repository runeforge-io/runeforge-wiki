---
title: Update Linked Bins
description: A guide on how to update your bin's linked bins. This will fix most missing voicelines or crashing skins.
published: true
date: 2025-06-22T04:16:42.999Z
tags: audio, voiceline, fix
editor: markdown
dateCreated: 2024-02-20T21:53:45.483Z
---

# Required Tools

- [Obsidian](/core-guides/tools/obsidian)
- [Ritobin *Tools to translate bin files into Python files*](/core-guides/tools/rito-bin)
- [Any Code editing software *Capable of editing python files*](/core-guides/tools#coding)
{.links-list}

# Introduction

This guide shows you how you can fix your mod if it does not play any champion voices anymore.
This usually happens on new Riot skin releases.

This guide also fixes crashes for the following champions:
```Samira```
```Lee sin```
```Qiyana```
```Yone E```
```Viego```
```Qiyana```

**Your skin must have an edited SkinX.bin, if it doesn’t, there must be another issue.**

When Riot releases a new skin, a part in `skinX.bins` usually gets updated and your custom skin does not play any voices anymore.
Only SkinX.bins are affected, so `data/characters/champion/skin0, skin1, skin2, skin3, etc.` and not .bins directly inside data, like `E67150BE212BCA8C.bin`.

> IMPORTANT: If you want to fix a skin by someone else and your extracted files look like this, it’s best to just wait for the creator to update it.
{.is-info}

![exampleextractedfiles.webp](/user-pictures/vector/general-guides/fix-sfx/exampleextractedfiles.webp)

# Guide
## Extracting the new skinX.bin

Extract the matching skinx.bin to your custom skin from Obsidian. Make sure to not extract it in the same location, so you don’t override it and lose your particles.

Then convert it to **.py** with ritobin by drag-and-dropping the **.bin** onto ritobin_cli.exe.
![ritobin_usage.webp](/user-pictures/vector/general-guides/fix-sfx/ritobin_usage.webp =x80)
![ritobin_usage2.webp](/user-pictures/vector/general-guides/fix-sfx/ritobin_usage2.webp =x80)

## Updating the .bin
Open both files side by side in your editor, Visual studio for me.

Now right at the start of the .bins you will find `linked: list[string] = {` and then a long list of .bin files.

When you compare your .bin to the new .bin, you will see that they are different (*usually it is even more obvious by the new one simply having more lines*):
![codeblock1.webp](/user-pictures/vector/general-guides/fix-sfx/codeblock1.webp)
![codeblock2.webp](/user-pictures/vector/general-guides/fix-sfx/codeblock2.webp)
Now copy the whole list of .bins from the new .bin file into your edited and outdated one.
Save your .bin.

## Converting the Python file back and repack your mod
Now just convert the .py back into a .bin by drag-and-dropping the .bin onto ritobin_cli.exe and then repack your mod in CSLoL.
# Sources

- Yoru Queen of Night