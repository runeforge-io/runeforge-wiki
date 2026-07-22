---
title: How to Update Linked Bins
description: A guide on how to update your bin's linked bins. This will fix most missing voicelines or crashing skins.
lastUpdated: 2025-07-11
---

## Required Tools

- [Obsidian](/core-guides/tools/obsidian)
- [Ritobin *Tools to translate bin files into Python files*](/core-guides/tools/rito-bin)
- [Any Code editing software *Capable of editing python files*](/core-guides/tools#code-bin-editing)

## Introduction

When Riot releases a new skin, a part in `skinX.bins` usually gets updated and your custom skin does not play any voices anymore or it may crash. This guide will show you how to update the linked bins in your mod.

This guide fixes crashes for the following champions:
```Samira, Lee Sin, Qiyana, Yone E2, Viego, Qiyana```

:::caution
Your skin must have a SkinX.bin, if it doesn’t, there is either another crashing mod or another issue with your mod.
:::

Only `data/characters/char/skins/SkinX.bin` can be affected, not hashed bins or bins directly inside data, such as `13f570775654c664.bin` or `ahri_skins_skin0_skins_skin1.bin`.

## Guide
### Extract Riot's Current skinX.bin

Extract the matching skinX.bin to your custom skin from Obsidian or extracted wad folder. Make sure to not extract it in the same location, in order to avoid overwriting your existing mod's files.

Convert it to `.py` with ritobin by drag-and-dropping the `.bin` onto `ritobin_cli.exe`.

### Update the .bin
Open both files side by side in your editor, Visual studio for me.

At the start of the .bin you will find `linked: list[string] = {` and then a list of long `.bin` files.

When you compare your .bin to the new .bin, you will see that they are different (*usually it is even more obvious by the new one simply having more lines*):
![The mod's outdated linked bin list](/user-pictures/vector/general-guides/fix-sfx/codeblock1.webp)
![Riot's current linked bin list with more entries](/user-pictures/vector/general-guides/fix-sfx/codeblock2.webp)

Copy the whole list of .bins from Riot's current .bin into your mod's py file.

### Convert the Python File Back and Repack Your Mod
Convert your edited .py back to .bin by drag-and-dropping the .py onto ritobin_cli.exe and repack your mod in CSLoL.

## Sources

- Yoru Queen of Night