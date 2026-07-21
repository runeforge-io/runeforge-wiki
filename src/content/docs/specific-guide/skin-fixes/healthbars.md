---
title: How to manually fix healthbars
description: A short tutorial on how to fix healthbars if FixHealthBar.exe doesnt work.
published: true
date: 2025-09-20T11:35:38.067Z
tags: guide, skin fix
editor: markdown
dateCreated: 2025-01-28T18:37:13.690Z
---

# How to Fix Healthbars
> This tutorial uses LtMAO, specifically the explorer contexts. If you dont have it installed, follow the instructions [here for installing LtMAO](/core-guides/tools/LtMAO) and  [here for enabling explorer contexts](/core-guides/tools/LtMAO#explorer-contexts).
{.is-info}

---
Examples of Broken Healthbars
![hpbarexample1.png](/user-pictures/fbs/hpbarexample1.png)
![hpbarexample.png](/user-pictures/fbs/hpbarexample.png)

---
## Overview

Navigate to your `cslol-manager\installed` directory and find the name of your mod. Inside that folder, navigate to the `WAD` directory and extract your `.wad.client` using LtMAO.

![extract-wad.png](/user-pictures/fbs/extract-wad.png)

You will see a new directory titled `Champion.wad`
Inside that directory, navigate to `DATA\Characters\Character\Skins`. Inside that directory you will see one or more `.bin` files. Convert them to `.py` with LtMAO, then open the `.py` in your text editor.

![convertbintopy.png](/user-pictures/fbs/convertbintopy.png)

In your text editor press `Ctrl+F` and search for `unitHealthBarStyle`, it will look something like this:

![hpbarstyle9.png](/user-pictures/fbs/hpbarstyle9.png)

Change it's value to `12` and save your file. Next, convert your `.py` back into `.bin`.

![pytobin.png](/user-pictures/fbs/pytobin.png)

Next, you need to delete the `.py` file, navigate to your `WAD` directory, and convert the `Champion.wad` directory back to a `.wad.client` file. 

![packtowad.png](/user-pictures/fbs/packtowad.png)

After this, delete your `Character.wad` directory, toggle the run button inside `cslol-manager` and youre good to go!
![excited-kitty.png](/user-pictures/fbs/excited-kitty.png)


