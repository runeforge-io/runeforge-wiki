---
title: Blender
description: A starting guide to using Blender for League modding
published: true
date: 2024-08-26T10:55:43.753Z
tags: guide, tools, 3d, modelling, animation, blender
editor: markdown
dateCreated: 2024-02-10T14:01:52.224Z
---

>W.I.P
This page is under construction!
{.is-info}
# Blender
This guide shows you how you can utilize Blender for League modding.
## Steam Blender
<!--IF ANYONE IS EDITING/UPDATING THIS PAGE PLEASE UPDATE THE THINGS MENTIONED IN THE OTHER COMMENTS IN HERE-->
Steam Blender has 2 differences from the standalone version.
- Only one instance of Blender can be opened at the time
- You get automatic updates

If you don't need multiple Blender instances open and you like automatic updates you can get Blender from Steam.

### Downloads
- <a href="https://store.steampowered.com/app/365670/Blender/">Steam Blender download</a> (*requires a Steam account*)
- <a href="https://www.blender.org/download/">Standalone Blender download</a>
{.links-list}

---
# What you can and cannot do in Blender
  ### Without Maya
 <!--ADD EXAMPLES OF ALL MENTIONED FILES AS SCREENSHOTS, CROSS OUT ONES YOU CANT DO IN BLENDER-->
Without using Autodesk Maya you can edit champion's <a href="/en/specific-guide/filetypes#skn">.skn</a> and [.skl](/en/specific-guide/filetypes#skl) files.
Currently you cannot edit <a href="/en/specific-guide/filetypes#anm">.anm</a>, <a href="/en/specific-guide/filetypes#scb">.scb</a> and <a href="/en/specific-guide/filetypes#sco">.sco</a> files without using <a href="/core-guides/tools/maya">Autodesk Maya.</a>
  ### With Maya
If you have Autodesk Maya 2023/24 you can edit all the files mentioned above with Blender.
When you save your FBX file in blender you can save it in Maya as one of the files you need.
 
Refer to the <a href="/core-guides/tools/maya">Autodesk Maya</a> guide on how to save these files.
<!--ADD LINKS WHERE NEEDED-->
---
# lol2gltf and LtMAO
You will need one of the listed tools if you are unable or do not want to use Autodesk Maya.
## lol2gltf
[lol2gltf](/core-guides/tools/lol2gltf) can convert .skn and .skl to the gltf format usable by Blender.

Converting the gltf file back is not as user friendly and i recommend using lol2fbx for that.

If you wish to use [lol2gltf](/core-guides/tools/lol2gltf) refer to its guide page.
<!--ADD LINKS TO EVERYTHING THAT NEEDS TO BE LINKED-->

---

## LtMAO
<!--CHANGE THE LTMAO LINK IF THE PAGE GETS MADE WITH A DIFFERENT LINK-->
<a href="/core-guides/tools/LtMAO">LtMAO</a> is a useful modding tool, however you will need it for its lol2fbx feature as there is no Blender plugin for League files.

Head to <a href="/core-guides/tools/LtMAO">LtMAO</a> guide page to see how to use the tool, along with lol2fbx.

---
# Saving FBX to convert back
You will need to select what you want and then export it as FBX.
>Before saving your fbx you will have to open the Modeling tab and select your mesh.
>After selecting the mesh you will need to flip the normals. Press Alt+N and click Flip.
>![normalsflipp.png](/user-pictures/bud/normalsflipp.png)
>{.is-info}

>When saving the fbx file, you will need to open the armature tab on the right side of the prompt and <ins>uncheck</ins> "Add Leaf Bones" option.
>![leaf-bones.png](/user-pictures/bud/leaf-bones.png)
>{.is-warning}
  
After saving your FBX file convert it back to .skn and .skl using one of the tools mentioned.

  >If you saved an animation that you plan to save in Maya make sure that "Bake Animation" option is checked.
>{.is-info}
  
---
  
 # Resolving issues
  ## Texture look wierd in game
 You most likely forgot to flip the normals of the mesh.
  ## Other issues
  Refer to the <a href="/core-guides/tools/LtMAO">LtMAO</a> lol2fbx or <a href="/core-guides/tools/lol2gltf">lol2gltf</a> guide for any encountered errors.
  <!--ADD LINKS TO STUFF-->
  
  
