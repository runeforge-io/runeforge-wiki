---
title: Particle and Bin Dictionary
description: The full overview about everything you need to know about bins and particles!
published: true
date: 2024-08-26T10:56:58.792Z
tags: vfx, bin, particle, dictionary
editor: markdown
dateCreated: 2024-02-21T21:54:11.745Z
---

# Overview

Adding Particle Events to Specific Animations (*Specifically Recall but the method is applicable for any animation*) This does not show you how to create idle particles, only particles that show up in animations like **Dance**, **Recall**, **Joke**, **CAS_Effects**, etc.

This post overall is very complicated as we cover a LOT of things, so if you feel confused about something, always refer back to the terms at the top of the page. Don’t be afraid to go try it out and experiment since that is how most of us have learned. Should you need help, ask for it on the Runeforge-Discord server.

# Required Tools
> Note: This is a dictionary, if you are here you may already have each tool. If not, down below you can find all nessecary programs we use to edit bins.
{.is-info}
- [CS-LoL Manager *Standard League modding program*](/core-guides/tools/cslolmanager)
- [Obsidian *Extraction & Exploration tool for League of Legends game files*](/core-guides/tools/obsidian)
{.links-list}

An code editor of your choice, we recommend **Visual Studio Code**:
- [Choose any Code Editor *Visual Studio Code is recommended*](/core-guides/tools#code-bin-editing)
{.links-list}

If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
*Other editors work aswell, aslong as they can edit .py (Python) files.*

- [Ritobin *Tools to convert bin files into Python files*](/core-guides/tools/rito-bin)
- [Hacksaw *Visual bin Editor by Marcius*](/core-guides/tools/hacksaw)
{.links-list}

---

> As we continue to learn more about particles as a community through experimenting, this post will constantly be updated.

This is a comprehensive dictionary for the most common terms that are used in particles for League of Legends. We will cover most of the basics so that hopefully you can gain an understanding of how you can manipulate the visuals of particles towards your desires.

---

# Terms
## vfxsystemdefinitiondata
Container. Think of this as a neighborhood. A `Q_Mis` for example.

This is what defines all of the particles (vfxemitter) listed under the ability. Anything outside of this will not be seen while the ability is in action.
Best term to search for specific abilities.

![vfxsystemdefinitiondata.webp](/user-pictures/vector/general-guides/vfxdictionary/vfxsystemdefinitiondata.webp)

## vfxemitter
Particle or particle system within a container (vfxsystemdefinitiondata).
Think of this as the different houses within the neighborhood. This can be sparkles, a trail, indicators, mesh, etc. 

![vfxemitter.webp](/user-pictures/vector/general-guides/vfxdictionary/vfxemitter.webp)

## particlename
Another way by which you can search for specific abilities should “vfxsystemdefinitiondata” names be hashed.

Example, `particleName: string = “Graves_Skin18_recall_Hit"`

These can be renamed for organization purposes.
This is just like [vfxsystemdefinitiondata](/specific-guide/coding/particle-dictionary#vfxsystemdefinitiondata) just that it’s actually on the end of the system rather than the beginning.

![particlename.webp](/user-pictures/vector/general-guides/vfxdictionary/particlename.webp)

## emittername
A name given for a vfxemitter which can be renamed as desired. Good to rename for organization purposes.

Examples include, `“Flash"`, `"Burst"`, `"ground_decall"`, `"bokeh_dots"`

Their names can be random sometimes but it’s always named to make sense to whoever originally made the particle.

![emittername.webp](/user-pictures/vector/general-guides/vfxdictionary/emittername.webp)

## texture
Defines what texture will be used. Always in [.dds](/specific-guide/filetypes) format.

Most of the time they are perfect squares (1024×1024, 512×512, etc). It is also not uncommon for particles especially to not match a perfect square ratio. Some champions have two combined 512x512 texture sheets like Braum, making it 512x1024.

![texture.webp](/user-pictures/vector/general-guides/vfxdictionary/texture.webp)
## texturemult
Typically found directly underneath a `texture: string`.

This is a texture which is multiplied over the texture it is listed under. If you know about the `multiply` blending mode in Photoshop, this is exactly what is happening.

This is ideal for being used over completely white textures in order to give a color. Useful for rainbow effects and scrolling textures!

![texturemult.webp](/user-pictures/vector/general-guides/vfxdictionary/texturemult.webp)
## scrollrate
If a texture is seamless, what this does is that it tells that texture to move horizontally, vertically, or both. (listed here are the different types of scrollrates that you can find).

The values listed next to scroll rate define how quickly a texture moves.
## msimplemeshname
Followed by an SCB or SCO mesh. This defines what mesh will be used in an emitter.
## scb/ sco
**scb:** Mesh
**sco:** Mesh with joints and materials
## skn/ skl
Mesh with full skeleton and materials (standard file types for League champions). Used for animated meshes (Ivern's root, Swain's bird) if found in particle folder.
## skinscale
This determines the actual size of your champion in-game. Default value changes per champ. This will be located in the skin#.bin in `data/assets/characters/champion/skins`

![skinscale.webp](/user-pictures/vector/general-guides/vfxdictionary/skinscale.webp)
## materials
Controls how an object is viewed on screen. Assigning a texture to a material applies the texture to all objects within that material.

![materials.webp](/user-pictures/vector/general-guides/vfxdictionary/materials.webp)
Most older champions usually just have one material but you can actually add more if desired. Materials can be useful for when you want to have multiple pieces on a champion’s skin using different texture maps.


Recall assets are nearly always hidden meshes. Anything that won’t be visible on the champion throughout the game will be listed as hidden. Through the animation bin under skin0 (or desired skin), you can actually tell these meshes to appear during certain animations. You can find more on that in the animation tips (will be added later).

## blendmode
Just like in photoshop, this determines how an emitter is projected over the environment.

For regular texture files.
- 1 = Normal (Used when a particle has color information on the texture)
- 2 = Darkens
- 3 = Darkens
- 4 = Whiten (Sometimes a particle with color information and has a black background)
- 5 = Overlay like in photoshop.
{.grid-list}

Blending modes are different for [SCB/SCO](/specific-guide/coding/particle-dictionary#scb-sco)s and [SKN/SKL](/specific-guide/coding/particle-dictionary#skn-skl).
- SCB/SCO: 3 = Normal.
- SKN/SKL: 1 = Normal, 3 = Inverts faces, 4 = Whiten,
{.grid-list}

Having `miscrenderflags` will change how meshes render. Usually inverts faces for blendmodes 1 and 3.
## birthcolor
This is a color code which is typically followed by four values. `{ 0, 0, 0, 1 }`.
The first three numbers are RGB values which can be calculated by dividing the color’s number with white (255).

Say for example I have R = 144.
144 divided by 255 = 0.5647058… My first value will be that number.

![birthcolor.webp](/user-pictures/vector/general-guides/vfxdictionary/birthcolor.webp)

Repeat the same process for the other two values in order to get my desired color.
0 = Black, 1 = White.

The final value after RGB is the alpha.
1 is opaque and 0 is Full opacity.

You can use Marcius’s program, [Hacksaw](/core-guides/tools/hacksaw) to make recoloring fast and easy!
Doing math won’t be required at all. This is just useful information to help you understand how these values work!
## fresnel
Shader which gives a highlighted appearance to an object.

![fresnel.webp](/user-pictures/vector/general-guides/vfxdictionary/fresnel.webp)
**_fresnel color_** = A color value given to a fresnel. Similar to birthcolor, this is followed by RGBA values.
## vfxpalletedefinitiondata
This is a texture image which typically displays a varying amount of gradients. The emitter using this pulls a specific gradient using a number value from the image as opposed to the other types of coloring.

![vfxpalletedefinitiondata.webp](/user-pictures/vector/general-guides/vfxdictionary/vfxpalletedefinitiondata.webp)

## rate
Determines the amount of particles that emit from the emitter.

![rate.gif](/user-pictures/vector/general-guides/vfxdictionary/rate.gif)

Adjusting the rate on Evelynn’s sparkles. If the value is increased, more sparkles will appear. If the value is decreased, less sparkles will appear.
## dynamics
Gives a list of RGBA values, rotation, position, AND/OR times. Given RGBA values which define changes in color. Times which relate back to RGBA by defining when each value change occurs within the emitter’s lifetime.

![dynamics.webp](/user-pictures/vector/general-guides/vfxdictionary/dynamics.webp)
IF these values are related to **position**, the particle will change position during its lifetime.
IF these values are related to **rotation**, the particle will change rotation during its lifetime.

You will be able to tell what these values are related to by reading what follows after `dynamics: pointer =`
## erosion map
This is a map which defines how an ability, effect, or mesh appears.
It is typically a black and white texture. White represents what appears first while black is what appears last. 

![erosion1.webp](/user-pictures/vector/general-guides/vfxdictionary/erosion1.webp)

Sometimes this can also use a green, red, and even blue texture. Each erosion pattern is defined by their own color channels. So X has it’s own erosion pattern as well as the green. The full on green or red appears first while the darker shades appear last.

- In combination with a pink and yellow texture map, this is what is used to define what the erosion map is constrained to. The yellow is the strongest visibility.

![erosion2.gif](/user-pictures/vector/general-guides/vfxdictionary/erosion2.gif)
## normal map
As it is specifically used in League, this defines distortions for anything behind the actual effect. Commonly used for explosions and puddles. Has a shockwave or airy appearance.

![normalmap.webp](/user-pictures/vector/general-guides/vfxdictionary/normalmap.webp)
## numframes: u16
Always found directly underneath a `texture: string` to define how many frames the animated texture will cycle through.
# Sources

- Bearded Shepherd