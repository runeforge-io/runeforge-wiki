---
title: Animated Loading Screen
description: How to make Animated Loading Screen
published: true
date: 2024-09-09T10:34:15.868Z
tags: 
editor: markdown
dateCreated: 2024-08-29T20:24:07.036Z
---

# **Custom Animated Loading Screen Guide**

Learn how to create a custom animated loading screen for League of Legends by following this comprehensive step-by-step guide. Whether you're a beginner or an experienced modder, this guide will help you.

## Video Tutorial

If you prefer a visual guide, you can follow the step-by-step video tutorial available on YouTube. The video will walk you through the entire process.

<div align="left">
  <a href="https://www.youtube.com/watch?v=9Mz6xG-CBV8"><img src="https://img.youtube.com/vi/9Mz6xG-CBV8/0.jpg" alt="How to make Animated Loading Screen" style="width:75%"></a>
</div>

## Step 1: Download and Extract Files

1. **Download** the necessary files from [here](https://www.mediafire.com/file/77skjtuhmkinlp4/Animated_Loading_Screen_V2.zip/file).
2. **Extract** the ZIP file into a folder. Inside, you'll find two main folders: `UI.wad.client` and `programs`.

## Step 2: Prepare and Convert Your Video

1. Ensure your video is **720p** resolution and **30 fps**. The duration must be a whole number (e.g., 5, 10, not 5.2 or 8.3).
2. Drag and drop your video onto `VideoToSpritesheet.exe` for conversion. Wait for the process to complete. Your video will be converted to `spritesheet.png`.

## Step 3: Handle Conversion Files

1. **Do not close** the CMD window after conversion as it contains important information.
2. Rename `uibase` (found in `UI.wad.client\clientstates\loadingscreen\ux\loadingscreenclassic`) to `uibase.bin`.
    ```bash
    uibase -> uibase.bin
    ```
3. Drag and drop `uibase.bin` onto `ritobin_cli.exe` (in `programs\bin`) to convert it to a `.py` file.
4. Open the `.py` file and update the values at the bottom with those from the CMD window.
![image.png](/user-pictures/sirdexal/image.png)
5. Save the file, delete `uibase.bin`, and drag the `.py` file onto `ritobin_cli.exe` to reconvert it to a `.bin` format.
6. Rename `uibase.bin` to `uibase` (remove `.bin` extension).
    ```bash
    uibase.bin -> uibase
    ```

## Step 4: Convert Spritesheet to DDS

1. Convert `spritesheet.png` to `spritesheet.dds` using an image editing tool. 
    - For Photoshop, follow [this guide](/core-guides/tools/adobe/photoshop).
> **Note:** GIMP and <span>paint.net</span> support DDS files by default.

## Step 5: Convert DDS to TEX and Finalize

1. Drag and drop `spritesheet.dds` onto `tex2dds.exe` (in `programs`) to get `spritesheet.tex`.
2. Move `spritesheet.tex` to `UI.wad.client\assets\Animatedloadscreen`.

## Step 6: Create and Run the Mod

1. Use `cslolmanager` to create a new mod and add the `UI.wad.client` folder.
2. Run your mod and enjoy your new animated loading screen!


