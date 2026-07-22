---
title: XnConvert tool
description: A short guide on how to use XnConvert to rescale League assets
lastUpdated: 2024-10-30
---

## Download

- [Download XnConvert *You dont need a license!*](https://www.xnview.com/de/xnconvert/#downloads)

## Rescale files

Rescaling is nessecary to get 2x & 4x version of your textures. These are lower quality versions for the gamesettings and are needed with almost every texture. If not, the user of your mod will see the default texture of the skin. To avoid that, you can simply follow these steps to make it as easy as possible:

1. Select a file or folder. It is not nessecary to add each folder/file individually, you can simply add the folder with the highest hirarchy.

   ![Adding files or folders in the XnConvert input tab](/user-pictures/vector/general-guides/for-tools/select__file.png)

2. Once you input your file, go to the "Actions" tab and click "Add action>". Select "Transform" --> "Resize".

   ![Adding a Transform Resize action in the Actions tab](/user-pictures/vector/general-guides/for-tools/actionstab.png)

3. Change the scaletype next to "Width" & "Height" to "percent" and the values to 50%.

   ![Resize width and height set to 50 percent](/user-pictures/vector/general-guides/for-tools/values.png)

   Leave the rest as is.

4. Now head over to the "Output" tab. Under "Filename" remove the `_result` part and add a x2_ before it like this: `2x_{Filename}`

5. Hit "convert" at the bottom right and wait until its finished.

6. Repeat the steps with the following changes!

   - Change the percentage in the Actions tab to 25% instead of 50%
   - Edit the Filename to `4x_{Filename}`

And thats it!

## Error fixes

### conversion error

- if thats the case you might want to start the tool as admin

