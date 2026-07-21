---
title: LtMAO
description: A guide on how to install and use LtMAO.
published: true
date: 2025-04-08T17:00:48.875Z
tags: guide, install, ltmao
editor: markdown
dateCreated: 2024-02-11T19:27:37.139Z
---

# LtMAO
This page will explain the LtMAO tool made by Tarngaina and all of its features.

---
## Download and Installation
> ### <p><span style="color:#ffffff">Installation</span>
> Download: <a href="https://github.com/tarngaina/LtMAO/archive/refs/heads/hai.zip">LtMAO-hai.zip</a>
> Extract: <kbd>LtMAO-hai.zip</kbd>
> Run <kbd>LtMAO/start.bat</kbd>
> {.is-info}
  
- [LtMAO GitHub page](https://github.com/tarngaina/LtMAO?tab=readme-ov-file)
{.links-list}
---
## cslmao
> Please make sure to use the updated cslol version in order to work with vanguard!
{.is-danger}
### Update cslmao
  copy cslol/mod-tools.exe to ltmao/resources/ext-tools
  
### Info

Just <a href="/core-guides/tools/cslolmanager">cslol-manager</a>, but different UI.

<u style="color:orange">Important: Need to set Game folder in setting tab first to work.</u>

  ![cslmao.png](/user-pictures/bud/cslmao.png)
  
 ---
## leaguefile_inspector
  View League files information.
  
  ![ltmaofileinspect.png](/user-pictures/bud/ltmaofileinspect.png)
  
 ---
## animask_viewer
  Edit MaskData's weights inside animation BINs.
  
  ![animask.png](/user-pictures/bud/animask.png)
  
 ---
## hash_manager
  ![hashmanager.png](/user-pictures/bud/hashmanager.png)

  <u style="color:orange">Important: Please wait for all syncing/updating/loading hashes finished before process with any <kbd style="background-color:#343942;color:orange">LtMAO</kbd> functions.</u>

1. CDTB Hashes: Auto sync <a href="https://github.com/CommunityDragon/CDTB/tree/master/cdragontoolbox">CommunityDragon</a> hashes. Can also be manually downloaded at mentioned link.

 <span>
   
2. Extracted Hashes: Extract personally by user.

	<span>
    
   Hashes that can be extracted:

	- binentries:
		+ VfxSystemDefinitionData -> particlePath in BIN.
		+ StaticMaterialDef -> name in BIN.
	- binhashes:
		+ Joint hashes -> joint names in SKL.
		+ Submesh hashes -> submesh names in SKN.
	- game:
		+ File path that starts with <kbd style="background-color:#343942">assets/</kbd> or <kbd style="background-color:#343942">data/</kbd> in BIN. If file type is <a href="/en/specific-guide/filetypes#dds">.dds</a>, extract 2x, 4x dds too.

3. Custom Hashes:

 	- Custom Hashes is hashes that used with all LtMAO related functions: leaguefile_inspector, ritobin, wad_tool,...
   
	 - Custom Hashes = CDTB Hashes + Extracted Hashes + User Manually Added Hashes


Also has generate wad & bin hash function. Those generated hashes can be added to Custom Hashes with <kbd style="background-color:#343942">-></kbd> buttons.
   
 ---
  ## vo_helper
Make the fantome work on all languages by cloning it.

<u style="color:orange">Important: The audio inside fantome must also come with events file to make it work on other languages.</u>
    
![vohelper.png](/user-pictures/bud/vohelper.png)
    
 ---
  ## no_skin
  Creates a mod that disables (almost) all riot skins and turns every champion to the default skin.
    
<kbd style="background-color:#343942">SKIPS.json</kbd>: Some skins cause League to crash when they get changed to base. This file tells the program to not change those skins to base.
  
![noskin.png](/user-pictures/bud/noskin.png)
    
  Use it by clicking "Browse Champions folder" button and locating the Champions folder inside the game installation address.
>The address should look like this: "\Riot Games\League of Legends\Game\DATA\FINAL\Champions"
>{.is-info}
  
Press the Start button and select the folder where you want the mod to be created.
  
  After the operation is completed select the .fantome file you got and put it in CsLol or cslmao.
    
 ---
  ## uvee
Extract UVs from skn/sco/scb as png files.
    
![uvee.png](/user-pictures/bud/uvee.png)
    
 ---

  ## shrum
Rename joints in ANM using old names & new names input.

Can load SKL as inputs.
    
![shrum.png](/user-pictures/bud/shrum.png)
    
 ---
  ## hapiBin
An app with multiple functions related to updating BIN file:

- Copy linked list.
- Copy vfx colors.

![hapibin.png](/user-pictures/bud/hapibin.png)
    
 ---

## wad_tool
  Simple tool to unpack and pack WAD files.

Can bulk unpack multiple WADs into same output. Example: Bulk unpacking all voiced wad then throw into vo_helper is a fast way to create a champion voicepack for specific language mod.

![wadtool.png](/user-pictures/bud/wadtool.png)
    
 ---

  ## pyntex
<a href="/core-guides/tools/hacksaw">Hacksaw/bintex</a> but rewritten. Print out mentioned & missing files in all BINs inside a WAD or a Folder.

![pyntex.png](/user-pictures/bud/pyntex.png)
    
 ---

  ## sborf
Fix skin based on rito files: moonwalk animations, layering animations,...
    
![sborf.png](/user-pictures/bud/sborf.png)
    
 ---
    
  ## lol2fbx
Convert League .skn and .skl files to FBX and vice versa.
    
![lol2fbx.png](/user-pictures/bud/lol2fbx.png)
    
    
 ---
## Explorer contexts
    
For some guides on this wiki, you will need the file explorer contexts to make things easier. You can enable them by running LtMAO throught the shortcut as Admin, going to the settings and clicking this button.
    
![explorer-contexts.png](/user-pictures/fbs/explorer-contexts.png) 
    
After this, you should see LtMAO options when right clicking a directory or file.
    
![right-click.png](/user-pictures/fbs/right-click.png) 

---
## issues
If you have any issues or questions you can ask for help on the RuneForge discord.
  
  
  
  
  
  
  
  
  
  
  
  
  