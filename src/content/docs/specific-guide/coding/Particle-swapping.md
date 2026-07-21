---
title: Particle swapping through bin-editing
description: This tutorial teaches you how to take particles from one champion and reuse them on another champion.
published: true
date: 2024-08-26T10:57:11.941Z
tags: code, bin, particle
editor: markdown
dateCreated: 2024-02-22T04:29:01.767Z
---

# Particle swapping through bin-editing
This tutorial teaches you how to take particles from one champion and reuse them on another champion.

![reuse_particle.gif](/user-pictures/goat/reuse_particle.gif =x400)

## Required Tools
An code editor of your choice, we recommend **Visual Studio Code**:
- [Choose any Code Editor *Visual Studio Code is recommended*](/core-guides/tools#code-bin-editing)
{.links-list}

If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
*Other editors work aswell, aslong as they can edit .py (Python) files.*
- [BinReaderGui by Autergame *Reading containers in .bin files*](https://github.com/autergame/BinReaderGUI)
- [Ritobin *.bin to .py file converter*](/core-guides/tools/rito-bin)
- [Bintex by Marcius *Tool to list all textures and models inside a Python file*](https://www.dropbox.com/s/yfvuyl5rebwbaml/bintex.exe?dl=1)
- [Hacksaw *Tool to visually edit bin files*](/core-guides/tools/hacksaw)
{.links-list}
---
<br>

<div align="left">
  <a href="https://www.youtube.com/watch?v=_RoS1Dpdvfg"><img src="https://img.youtube.com/vi/_RoS1Dpdvfg/0.jpg" alt="Guide on how to install LOL Maya Plugin"
style="width:75%"></a>
</div>

*External Youtube Link!*

# TIPS
## Best order to work on particles to minimize fuckups
1. Look up skills that might be useful for your champion (skin previews etc.)

2. Extract the bins and textures/models etc. for those abilities

3. Copy all the particles folders of the other champions into your wad.client folder

4. Edit the bins to your liking

5. Check in-game

6. If you have buggy textures: Run your wad folder through bintex, open the “Missing” list and add any missing files to your wad folder – Tutorial

7. Make sure that you now have everything in-game

8. In .bins, reroute all your particle files to the base folder of your champion – Tutorial

9. Move all your particle files into the base folder of your champion

10. Hope everything is there, if not, check the “Missing” list again or the code directly and add missing files.

11. Done

# How to make your particles break less often
After finishing your particles I recommend following this [tutorial](https://wiki.runeforge.io/specific-guide/coding/fix-breaking-vfx).
Your skins will break less often and should only break when a new skin for the champion gets released.

# Sources

- Yoru Queen of Night
