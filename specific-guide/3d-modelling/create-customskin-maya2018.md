---
title: Create a skin in Maya 2018
description: This guide will show you how to create your very own custom skin with Maya 2018
published: true
date: 2024-03-29T17:09:26.906Z
tags: guide, maya, 2018, custom skin
editor: markdown
dateCreated: 2024-02-14T22:23:02.802Z
---

> **<p align="center" style="bold"> 🗃️ This is an outdated guide, which stays in our archive!</p>** 
{.is-info}

If you want to see the guide for Maya 2023, click the link down below.

- [Maya 2023 custom skin guide *Including the use of LoLMaya*](/specific-guide/3d-modelling/create-customskin-maya2023)
{.links-list}

# Required Tools

- [Maya 2018 *You have to download this manually, there is no specific guide*](/core-guides/tools/maya)
- [Riot File Translator Plug-in *Provided by Yoru*](https://drive.google.com/file/d/1mDEyhK2H90LorVSeMu2JHxWihHTjG5aG/view)
- [Any 2D editing software *Skip this step if you already have one*](/core-guides/tools#texturing)
{.links-list}
- [.skl Updater *by Morilli, download "Latest" not "Pre-Alpha"*](https://github.com/Morilli/LeagueToolkit/releases)
{.links-list}

Optional:

- [Wooxy *If Maya doesn't load your .skn*](https://chewychronicles.wordpress.com/wooxy/)
- [Waifu2x *to heavily denoise and/or scale up images*](https://github.com/AaronFeng753/Waifu2x-Extension-GUI/releases)
- [Ultimate Unwrap 3D pro *+ League of Legends third party plugin to preview animations outside of the game*](https://www.unwrap3d.com/u3d/downloads.aspx)
- [UV Helper *by Marcius922 | to easily allign your UV's into the 4 corners*](https://drive.google.com/file/d/1nhScgzfjkIPULFPKFdwrqKrN9x3Vi7Cy/view)
{.links-list}

Extract UV Helper in `C:\Users\\Documents\maya\*your version*\` (*Path may vary*)

# Installing Riotfiletranslator
**Important Note**
The .env file is not fully correct in this video! If you do it like this you cannot load weighted models!It is missing the \others in the path for scripts. **This is how it has to look (depends on your placement ofc, just the paths in red have to be the same)**: 
`MAYA_PLUG_IN_PATH = D:\Dokumente\Maya plugins\Maya 2018\bin\plug-ins`
`MAYA_SCRIPT_PATH = D:\Dokumente\Maya plugins\Maya 2018\scripts\others`
`XBMLANGPATH = D:\Dokumente\Maya plugins\Maya 2018\icons`
*Path's may vary*

<div align="left">
  <a href="https://www.youtube.com/watch?v=oaGIkKzRNkU"><img src="https://img.youtube.com/vi/oaGIkKzRNkU/0.jpg" alt="Guide on how to install LOL Maya Plugin"
style="width:75%"></a>
</div>

*External link to Youtube!*

# Full Guide Video
**Note:** If you already have a finished model and texture made yourself or from another source, you can skip until **00:19:22** and parts between **00:19:22 and 00:28:11**.

<div align="left">
  <a href="https://www.youtube.com/watch?v=dJ6-0kPCr_g"><img src="https://img.youtube.com/vi/dJ6-0kPCr_g/0.jpg" alt="Guide on how to use the simple hud template"
style="width:75%"></a>
</div>

*External link to Youtube!*

# Sources

- Yoru Queen of Night