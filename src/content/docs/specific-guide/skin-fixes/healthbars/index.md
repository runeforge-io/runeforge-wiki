---
title: How to manually fix healthbars
description: A short tutorial on how to fix healthbars if FixHealthBar.exe doesnt work.
lastUpdated: 2025-09-20
tags:
  type: troubleshooting
  level: intermediate
  subject: [skin-fixes, ui]
  tool: [ltmao, cslol-manager]
---

:::note
This tutorial uses LtMAO, specifically the explorer contexts. If you dont have it installed, follow the instructions [here for installing LtMAO](/core-guides/tools/ltmao) and  [here for enabling explorer contexts](/core-guides/tools/ltmao#explorer-contexts).
:::

---
Examples of Broken Healthbars
![Example of a broken healthbar in game](./hpbarexample1.png)
![Another example of a broken healthbar in game](./hpbarexample.png)

---
### Overview

Navigate to your `cslol-manager\installed` directory and find the name of your mod. Inside that folder, navigate to the `WAD` directory and extract your `.wad.client` using LtMAO.

![Extracting the wad.client file with LtMAO's context menu](./extract-wad.png)

You will see a new directory titled `Champion.wad`
Inside that directory, navigate to `DATA\Characters\Character\Skins`. Inside that directory you will see one or more `.bin` files. Convert them to `.py` with LtMAO, then open the `.py` in your text editor.

![Converting the skin bin files to py with LtMAO](./convertbintopy.png)

In your text editor press `Ctrl+F` and search for `unitHealthBarStyle`, it will look something like this:

![The unitHealthBarStyle value found in the py file](./hpbarstyle9.png)

Change it's value to `12` and save your file. Next, convert your `.py` back into `.bin`.

![Converting the edited py file back into a bin](./pytobin.png)

Next, you need to:

1. Delete the `.py` file.
2. Navigate to your `WAD` directory.
3. Convert the `Champion.wad` directory back to a `.wad.client` file.

![Packing the Champion.wad directory back into a wad.client file](./packtowad.png)

After this, delete your `Character.wad` directory, toggle the run button inside `cslol-manager` and youre good to go!
![Excited kitty meme celebrating the fixed healthbar](./excited-kitty.png)


