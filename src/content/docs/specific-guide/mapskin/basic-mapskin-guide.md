---
title: Basic Mapskin starter guide
description: A small guide on how to create a mapskin, this includes only textures.
published: true
date: 2024-10-30T01:23:35.750Z
tags: texture, starting, mapskin
editor: markdown
dateCreated: 2024-10-29T22:16:12.732Z
---

>⚠️ Maintaining a mapskin guide and template is tricky, we appreciate any feedback and discoveries so we can update everything accordingly. Missing/ moved/ new files, changed names or new filetypes can potentially change every patch but mostly with every pre-season!⚠️
{.is-info}


# Introduction

Creating a mapskin for League is easier than it looks, since it shares alot of similarities with creating a custom skin. However, it takes alot of time and effort to create one, since there are alot more assets which you need to edit.

So before you start, we **highly recommend** you to check out the [Beginner Guides](/core-guides/get-started) in order to understand how editing League content works in general.
This guide is not for beginners in modding, however it is made for beginners in modding League maps!

## Disclaimer

Editing League maps can lead to many problems. Since this is the playground of the game, its better to create them with a plan or to test things out. Editing textures like in this guide is an easier task.


# Tools

The following tools are needed to edit the map **textures**.

- [Obsidian *To extract files*](/core-guides/tools/obsidian) 
{.links-list}

**OR *HIGHLY RECOMMENDED:***
- [Mapskin template *Base Template recommended*](/core-guides/downloadable-assets#templates)
- [Any 2D editing software *which can handle editing .dds files*](/core-guides/tools#texturing)
- [tex2dds *converter for .dds and .tex files*](/core-guides/tools/ritoddstex)
{.links-list}

# Guide

*Before we start, all nessecary files you need are in our templates. We wont discuss any needed files further in this guide, since Riot has alot of files which aren't used anymore in there. You can use the template for free and add/ remove all files you dont want to edit. In our guide, we work with the template, however the folder structure is the same as if you export it yourself*

## Ground Textures

Filepath: `\assets\maps\kitpieces\srx` & `\assets\maps\kitpieces\srs`

In there are multiple folder which are the ground texture pieces. 

### Declaration

| Foldername                                 | Description                                                                                       | 
|--------------------------------------------|---------------------------------------------------------------------------------------------------|
|base				                                 |all base ground texture/ part terrain textures used for before dragon mapchange or world events   |
|chemtech/ cloud/ earth/ fire/ hextech/ ocean|The dragonmap ground textures once a the map changes                                               |
|textures		                                 |some terrain textures, some unused textures & some assets for mapchanges|
|worlds			                                 |World event parts (*Needs conversion to .tex*)                                                                                  |

### Editing

In order to edit those textures, you need a 2D editing software which can handle .dds files. 

#### Ground Textures

- [Ground Texture Photoshop template *Recommended when you use Photoshop or Photopea*](/core-guides/downloadable-assets#mapskin-ground-texture-photoshop-template)
{.links-list}

*Warning huge file, you need a decent PC to handle that*

Most ground textures are .dds files which need the standard format which you find in any other texturing guide. Depending on the used software you need to check which settings are nessecary. 

If you use the provided Photoshop template, you can start editing accordingly. It is split in different folders for you to edit. Save them as .dds files. Check the filenames and the folder when saving! 

**Tips**
- Edit the tiles as a whole to avoid weird texture failures or uneven seams
- Save the WHOLE ground as a jpg or png and then open it your editing software to "cut out" each tile when saving, this takes alot less time
- the tip above can also be used to save memory for less powerful PC's

## Terrain & Mob textures

Since this is a beginners guide, editing those textures is a bit more complicated. In theory you can still just edit them in any 2D editing software with filters for example. However if you plan on doing more than a simple "mood change" you need to manually edit them with e.g. [Substance Painter](/core-guides/tools#texturing). 

Alternatively, change the model and texture manually, just make sure they don't have animations which need to be changed aswell.

> Regardless, this exceeds this guide and will be declared more detailed in another guide in the future. In the meantime you can check out any 3D editing guide to get more knowledge on how to edit 3D Models & our Texturing guides for more detailed info about painting models.

# Exporting & Creating the mapskin

Exporting the mapskin is as simple as every other skin, if you need a refreshment check out the [export settings](/core-guides/tools/adobe/photoshop#intel-texture-works).

## Quality settings

Since some people dont own a Nasa PC, you should be so kind to implement Quality settings, which can be done with this tool:

- [XnConvert *Easy conversion into 2x and 4x files*](/core-guides/tools/xnconvert#rescale-files)
{.links-list}

AFTER CONVERSION!

**Worlds Textures & potential future**

With the current 2024 worlds, Riot changed the filetype of the ground textures into .tex, which means you need to convert them back into tex once u saved them as .dds. This can be done with [tex2dds](#tools). This might be the case for the future with all ground textures

Once you've done all that, you can create your mod.
In case you forgot [how to create a mod package](/core-guides/tools/cslolmanager#create-a-mod-package)!



























