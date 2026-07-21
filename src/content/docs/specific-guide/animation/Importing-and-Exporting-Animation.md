---
title: Importing and Exporting Animations
description: A guide on how to import animations in Maya and export then for League modding
published: true
date: 2024-08-26T10:56:17.771Z
tags: animation
editor: markdown
dateCreated: 2024-02-12T01:46:49.842Z
---

# Importing and Exporting Animations
This guide will help you import animations in maya and export them for League modding.

## Tools Needed
-   [Obsidian *Main program to extract and browse Leagues gamefiles.*](/core-guides/tools/obsidian)
- [Maya 2023 *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
- [LoL-Maya *Plugin made by tarngaina*](https://github.com/tarngaina/lol_maya)
{.links-list}

### Before you begin animation stuff
I strongly suggest you first get familiar with how to import [.skn](/en/specific-guide/filetypes) and [.skl](/en/specific-guide/filetypes#skl).

## Importing

### Extracting what you need

Firstly, you want to extract your desired Champion folder with Obsidian (for this post, I will be working with Blitzcrank). 
![extracting_stuff.png](/user-pictures/goat/extracting_stuff.png =x400)
Once extracted, navigate to the location where you extracted it and find the animation folder (Should be something like assets\characters\character\skins\base\animations).

### Importing the animation in Maya

Make sure these are your import options :

![import_options.png](/user-pictures/goat/importexport/import_options.png =x600)


With the model in the scene (import the [.skn](/en/specific-guide/filetypes) and [.skl](/en/specific-guide/filetypes#skl) first), simply drag and drop the animation you want (should be [.anm](/en/specific-guide/filetypes)) to see in the viewport, and VOILA, you have your funny Blitzcrank walk in the Maya scene.
![cry_about_it.gif](/user-pictures/goat/cry_about_it.gif =x300)

## Exporting
### Setting up the timeline
Now, if you want to Export an animation, you will want to specify the frames you want to export. To do that, select the range you want to export in the timeline 
![timeline_show-off.png](/user-pictures/goat/timeline_show-off.png =x300)
Here, I made a small animation to demonstrate. The animation lasts for 20 frames, but the frames are between frame 40 and 60. To select the frames you want to export, make sure the two numbers are the same in both boxes, so I type 40/40 and 60/60 (this will change depending on YOUR animation lenght)
![waving.gif](/user-pictures/goat/waving.gif =x325)
This is not what you want
![timeline_specification.png](/user-pictures/goat/timeline_specification.png)
This is what you want
![timeline_specification2.png](/user-pictures/goat/timeline_specification2.png)
The bar needs to be "full"

>You also need to leave one empty frame at the start! So in my case, instead of 40/40, I would have 39/39
>{.is-warning}

### Exporting the animation

>Make sure you export in 30 fps!
>{.is-warning}

To export, select File > Export All 
![export_all.png](/user-pictures/goat/export_all.png)

Then, select the animation you want to replace and make sure you export as [.anm](/en/specific-guide/filetypes)

![export_has_anm.png](/user-pictures/goat/export_has_anm.png =x400)

Annnnnd well done! You now know how to import and export animations for League models!

![works.gif](/user-pictures/goat/works.gif =x450)



