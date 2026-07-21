---
title: Importing and Exporting Animations
description: A guide on how to import animations in Maya and export then for League modding
lastUpdated: 2024-08-26
---

# Importing and Exporting Animations
This guide will help you import animations in maya and export them for League modding.

## Tools Needed
-   [Obsidian *Main program to extract and browse Leagues gamefiles.*](/core-guides/tools/obsidian)
- [Maya 2023 *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
- [LoL-Maya *Plugin made by tarngaina*](https://github.com/tarngaina/lol_maya)

### Before you begin animation stuff
I strongly suggest you first get familiar with how to import [.skn](/specific-guide/filetypes) and [.skl](/specific-guide/filetypes).

## Importing

### Extracting what you need

Firstly, you want to extract your desired Champion folder with Obsidian (for this post, I will be working with Blitzcrank). 
<img src="/user-pictures/goat/extracting_stuff.png" alt="extracting_stuff.png" height="400" />
Once extracted, navigate to the location where you extracted it and find the animation folder (Should be something like assets\characters\character\skins\base\animations).

### Importing the animation in Maya

Make sure these are your import options :

<img src="/user-pictures/goat/importexport/import_options.png" alt="import_options.png" height="600" />


With the model in the scene (import the [.skn](/specific-guide/filetypes) and [.skl](/specific-guide/filetypes) first), simply drag and drop the animation you want (should be [.anm](/specific-guide/filetypes)) to see in the viewport, and VOILA, you have your funny Blitzcrank walk in the Maya scene.
<img src="/user-pictures/goat/cry_about_it.gif" alt="cry_about_it.gif" height="300" />

## Exporting
### Setting up the timeline
Now, if you want to Export an animation, you will want to specify the frames you want to export. To do that, select the range you want to export in the timeline 
<img src="/user-pictures/goat/timeline_show-off.png" alt="timeline_show-off.png" height="300" />
Here, I made a small animation to demonstrate. The animation lasts for 20 frames, but the frames are between frame 40 and 60. To select the frames you want to export, make sure the two numbers are the same in both boxes, so I type 40/40 and 60/60 (this will change depending on YOUR animation lenght)
<img src="/user-pictures/goat/waving.gif" alt="waving.gif" height="325" />
This is not what you want
![timeline_specification.png](/user-pictures/goat/timeline_specification.png)
This is what you want
![timeline_specification2.png](/user-pictures/goat/timeline_specification2.png)
The bar needs to be "full"

:::caution
You also need to leave one empty frame at the start! So in my case, instead of 40/40, I would have 39/39
:::

### Exporting the animation

:::caution
Make sure you export in 30 fps!
:::

To export, select File > Export All 
![export_all.png](/user-pictures/goat/export_all.png)

Then, select the animation you want to replace and make sure you export as [.anm](/specific-guide/filetypes)

<img src="/user-pictures/goat/export_has_anm.png" alt="export_has_anm.png" height="400" />

Annnnnd well done! You now know how to import and export animations for League models!

<img src="/user-pictures/goat/works.gif" alt="works.gif" height="450" />



