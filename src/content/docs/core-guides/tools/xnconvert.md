---
title: XnConvert tool
description: A short guide on how to use XnConvert to rescale League assets
published: true
date: 2024-10-30T01:24:46.239Z
tags: convert, rescaler
editor: markdown
dateCreated: 2024-10-30T01:12:21.316Z
---

# Download

- [Download XnConvert *You dont need a license!*](https://www.xnview.com/de/xnconvert/#downloads)
{.links-list}

# Rescale files

Rescaling is nessecary to get 2x & 4x version of your textures. These are lower quality versions for the gamesettings and are needed with almost every texture. If not, the user of your mod will see the default texture of the skin. To avoid that, you can simply follow these steps to make it as easy as possible:

- **Step 1**

![select__file.png](/user-pictures/vector/general-guides/for-tools/select__file.png)

Select a file or folder. It is not nessecary to add each folder/file individually, you can simply add the folder with the highest hirarchy.

- **Step 2**

![actionstab.png](/user-pictures/vector/general-guides/for-tools/actionstab.png)

Once you input your file, go to the "Actions" tab and click "Add action>". Select "Transform" --> "Resize".
Change the scaletype next to "Width" & "Height" to "percent" and the values to 50%.

![values.png](/user-pictures/vector/general-guides/for-tools/values.png)

Leave the rest as is.

- **Step 3**

Now head over to the "Output" tab. Under "Filename" remove the `_result` part and add a x2_ before it like this: `2x_{Filename}`

- **Step 4**

Hit "convert" at the bottom right and wait until its finished.

- **Step 5**

Repeat the steps with the following changes!

- Change the percentage in the Actions tab to 25% instead of 50%
- Edit the Filename to `4x_{Filename}`

And thats it!

# Error fixes

## conversion error

- if thats the case you might want to start the tool as admin

