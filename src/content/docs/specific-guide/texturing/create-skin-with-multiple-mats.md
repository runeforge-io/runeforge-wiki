---
title: Create models/ skins with multiple materials
description: A guide on how to bind multiple materials onto models in Maya.
published: true
date: 2024-08-26T10:56:44.258Z
tags: maya, modelling, texturing, multiple, material
editor: markdown
dateCreated: 2024-02-20T03:44:21.671Z
---

> Work ahead!
> We want to write this guide out instead of linking a video. If you want to help us out: [Click here](/posting-guide/apply-as-contributor)
{.is-info}

# Required Tools

### 3D Tool

- [Maya 2023](/core-guides/tools/maya)
{.links-list}

### Code/Bin Editor
- [Ritobin *.bin to .py file converter*](/core-guides/tools/rito-bin)
{.links-list}

And 

- [Visual Studio Code *Feature rich tool to read, create or edit code*](/core-guides/tools/visual-studio)
{.links-list}

OR 

- [Notepad++ *Simple program to read, create or edit code*](/core-guides/tools/notepadplusplus)
{.links-list}

# Video Guides
This tutorial teaches you how to assign multiple materials to a skin properly.
A lot of the newer champions and skins require multiple materials. An indicator for that are assets, that are not always there, but for example only appear in the recall animation, like KDA Ahri’s throne. Those champions and skins also usually have more than just the basic texture in the folder Skins/base.
<br>
<div align="left">
  <a href="https://www.youtube.com/watch?v=19LhAguxJtU"><img src="https://i3.ytimg.com/vi/19LhAguxJtU/maxresdefault.jpg" alt="Guide on how to create skins with different materials"
style="width:75%"></a>
</div>

*External link to Youtube!*

---

While assigning materials you might run into a rare issue, which for example Kalista and Mordekaiser have: they have bones and materials that have the same name.
<br>

<div align="left">
  <a href="https://www.youtube.com/watch?v=Yqe_GwzF8AU"><img src="https://img.youtube.com/vi/Yqe_GwzF8AU/0.jpg" alt="Guide on how to create skins with identical materials & bones"
style="width:75%"></a>
</div>

*External link to Youtube!*

# Code Snipet
```
            MaterialOverride: list[embed] = {
                SkinMeshDataProperties_MaterialOverride {
                    Texture: string = "ASSETS/Characters/Champion/Skins/Base/TextureName.dds"
                    Submesh: string = "MeshName"
                }
            }
```
To hide meshes, you can use this! If you have multiple of them, type them out and put a space between them
```
            InitialSubmeshToHide: string = "MeshName MeshName"
```

# Writen Guide

## Getting the materials ready in maya

To start off, lets open the hypershade, this is were you will find all the materials and textures associated with the current scene. (Windows > Rendering Editor > Hypershade)

![1.png](/user-pictures/goat/multiplematerial/1.png =x400)

First, import your textures by drag and dropping them in the texture tab of the hypershade.

![2.png](/user-pictures/goat/multiplematerial/2.png =x300)

Then, assign each texture to the correct mesh by first selecting your mesh (clicking on it), then hold right click over your texture and choosing "Assign Texture's Material to Selection".

![3.png](/user-pictures/goat/multiplematerial/3.png =x400)

Once you have fully textured your model, you can delete any unused materials, it will be easier to work with this way. (To do so, go back to the Material tab, then right click and select "Delete Unused Nodes")

![4.png](/user-pictures/goat/multiplematerial/4.png =x400)

Then, rename the materials to something more comprehensible if that isnt the case. (For exemple : rename the body material to "Body")

![5.png](/user-pictures/goat/multiplematerial/5.png =x300)

Also, before exporting the model, make sure the normals are correct! If your model looks transparent in game, simply follow this guide here.

- [Fixing Broken Face Normal](/specific-guide/3d-modelling/Fixing_broken_face_normals)
 {.links-list}

After that, you can export the skn like you would normally.

Also, dont forget to put all your texture file in the asset folder! (assets\characters\champion_name\skins\base)

And also dont forget to convert your textures into .dds

## Changing the code

We will now make it so the game recognize the newly added materials and textures. First, locate the skin0.bin of your champion, which should be located in data\characters\champion_name\skins. After finding it, drag and drop the skin0.bin directly on top of ritobin_cli, this will create a new .py file in the same folder (that contains the skin0.bin) that you will be able to edit.

![6.png](/user-pictures/goat/multiplematerial/6.png =x300)

Once you have opened the .py file (using notepad++ or Visual Studio), search for SkinMeshProperties (press ctrt+f and type it). 

You can then add the MaterialOverride code snipet under it (at the bottom of the paragraph, right before ArmorMaterial.

![7.png](/user-pictures/goat/multiplematerial/7.png =x300)

> Make sure to keep it like the picture above. If you make an error, the .py will not convert back. Verify your "{ }" and make sure they are well aligned.
{.is-warning}

You can add the "SkinMeshDataProperties" part as many time as you need, for every different materials you have.

![8.png](/user-pictures/goat/multiplematerial/8.png =x300)

In short : In the Texture string, you will change the name at the end for your texture name.

(Exemple : Texture: string = "ASSETS/Characters/Briar/Skins/Champion_name/Body_Texture.dds", where the Body_Texture.dds is the new texture's name)

And in the Submesh string, you will change it to the name you gave each material in Maya

And of course, assossiate the "Body" texture with the "Body" material.

Once you are done, delete the old skin0.bin and replace it with the new one you just made by drag and dropping the .py file directly on top if ritobin_cli, like we did before.

![9.png](/user-pictures/goat/multiplematerial/9.png =x300)

If you did no errors, a new skin0.bin file should be made, if not, you will need to check your code again for errors.

You can now delete the .py file and put the mod in csLoL to see the textures in game!

>Make sure you uncheck "Remove Unknown" in csLoL, or the game will not recognize your textures!
![10.png](/user-pictures/goat/multiplematerial/10.png =x300)
{.is-warning}

You should now have your textures working properly!

![11.png](/user-pictures/goat/multiplematerial/11.png =x300)

# Sources

- Yoru Queen of Night
- ☆Guardian☆ (GuiSai)