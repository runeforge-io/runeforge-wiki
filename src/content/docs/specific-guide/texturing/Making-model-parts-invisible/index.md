---
title: Making model parts invisible through textures only
description: This tutorial shows you how you can “delete” parts of a model/skin without having to actually 3D-edit it just by editing it in Photoshop or Gimp.
lastUpdated: 2024-08-26
tags:
  type: guide
  level: intermediate
  subject: [texturing]
  tool: [photoshop, gimp, maya, blender]
---

## Required Tools

Any graphic editor that can handle [.dds](/specific-guide/filetypes) files:

- [Adobe Photoshop *Program to edit 2D files*](/core-guides/tools/adobe/photoshop)
- [Gimp *Program to edit 2D files*](/core-guides/tools/gimp)
- [Uvee *to extract the model UV (only fully necessary if you don’t use Maya or Blender)*](https://github.com/tarngaina/uvee)

Something to view your model (not mandatory but very helpful) — either:

- [Autodesk Maya + LoLmaya *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
- [Blender *Program to create, edit, animate or rig 3D models*](/core-guides/tools/blender) with [lol2gltf *Tool to convert League .skn and .skl to gltf*](/core-guides/tools/lol2gltf)

## Infos
To delete small model parts you might not need to actually model edit. Simply making textures transparent might help in a lot of cases, but not all (Initially I wanted to delete Spirit Blossom Evelynn’s crown, which for some reason did not work).

![Example of a model part removed by transparent textures](./1.webp)

Keep in mind that textures deleted like this will still cast shadows, which will become and issue if you plan to erase really big model portions.

Also the textures are created with the model in mind, so in Syndra’s case she has a really dark forehead and eye area.

![Syndra's texture with a dark forehead and eye area](./2.webp)

Often models are also incomplete, for example if you delete hair that fully covers the side of the head, there might not be a modeled ear. Or if a skirt overlaps the legs, part of the leg will be missing (Secret Agent Miss Fortune).

## Tutorial
Loading your model and extracting the UV
Follow this tutorial to load your model in Blender (or Maya or wherever you can load a model and view models parts and uv) and extract the UV (best watch it until 15:20):


<a href="https://www.youtube.com/watch?v=_i3xVpwBIHQ"><img src="https://img.youtube.com/vi/_i3xVpwBIHQ/0.jpg" alt="Guide on how to install LOL Maya Plugin"
style="width:75%" /></a>

*External link to Youtube!*


### Finding the UV space you want to erase
First select the model parts you want to erase on your model. (I use Maya here instead of Blender, but its very similar).

Make sure to select everything of whatever you want to remove, all small areas and also the back side which can be hard to see sometimes.

![Model parts selected for removal in Maya](./3.webp)

Now look at the UV and remember which areas are selected, best leave it open and selected.

![UV editor highlighting the selected areas](./4.webp)

Then go into your graphic editor program, load the texture and the UV on a layer on top of it. Make sure that the UV is perfectly aligned in the middle, Photoshop likes being icky with that.

Select the area around the selected UV shells in your 3D programm. I recommend the Polygon Lasso tool.

Make sure to not overlap other UV shells to not delete thing you don’t want to.

![Selecting the UV shells on the texture with the Polygon Lasso tool](./5.webp)

The small little nearly rectangle on the right side below the light purple area is the inside of the mask, while the front side is way bigger and in the bottom right corner, so it’s easy to miss the back.

## Finding out what transparency method you need to use
There are 2 methods which are used by different graphic programs and plug-ins: Alpha masks and transparency.

You must find out which one your programm uses in order to make textures invisible.

### Alpha mask
If you load a texture and it it looks solid and has a layer called “Alpha” under channels that’s black and white, you need to use the first method.

![Texture appearing solid in the graphic editor](./6.webp)![Black and white Alpha layer under channels](./7.webp)

### Transparency
If the texture clearly has transparent parts and no Alpha layer under channels (or no channels), you need the second method.

<details>
<summary>Method 1</summary>
I use Photoshop for this one.

Go to the Alpha layer under “Channels”. Then paint all the areas you just selected in fully black.

(The gray areas are already existing transparencies from the skin)
  
![Selected areas painted black in the Alpha channel](./9.webp)
</details>
<details>
<summary>Method 2</summary>
I use Gimp for this.

Simply take your eraser tool and erase all the selected areas fully.
  
![Erasing the selected areas with Gimp's eraser tool](./10.webp)
</details>

Then save with BC3/DXT5 compression.

## Sources

- Yoru Queen of Night
