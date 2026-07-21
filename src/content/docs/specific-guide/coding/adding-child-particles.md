---
title: Add child Particles
description: A guide on how to add child particles to existing ones.
published: true
date: 2024-08-26T10:57:03.261Z
tags: guide, vfx, bin, particle
editor: markdown
dateCreated: 2024-02-22T01:20:08.357Z
---

# Overview
Adding child VFX to main VFX systems to create variations and elaborate particles.


*If you encounter any issues with this tutorial or you don’t understand part of it, you can ask for help on the Runeforge-Discord server*
# Required Tools
- [Ritobin *Tools to translate bin files into Python files*](/core-guides/tools/rito-bin)
- [Choose any Code Editor *Visual Studio recommended*](/core-guides/tools#coding-bin-editing)
{.links-list}

*If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
Other editors work aswell, aslong as they can edit .py (Python) files.*

# Written Guide

We will be focusing on how to add Pool Party Braum’s castles from his Pool Party skin to his base skin. The reason is because BASE Braum utilizes the same mesh with different scales, while Pool Party actually has randomized objects that it pulls from.

The vfx in Pool Party has a probability selection between two children systems.
We will have to add these to one of BASE Braum’s bins, link in resources, and add the linking emitter.

**BASE** – Refers to any bins related to the base skin. In our case:
`braum_skins_skin0_skins_skin3.bin`
`skin0.bin` from the DATA folder

**SKIN** – Refers to any bins related to the base skin. In our case: `braum_skins_skin33_skins_skin34_skins_skin35_skins_skin36_skins_skin37_skins_skin38_skins_skin39_skins_skin40_skins_skin41.bin`
`Skin33.bin` from the DATA folder

**Following steps which we’ll go over in detail throughout the post:**
1. Grab related bins. Regular and DATA for BASE and SKIN you want to pull from.
2. Find child systems (R_mis from SKIN and paste as new ones to your BASE bin.
3. Copy hashes for each child system’s name and find in the DATA resources of SKIN
4. Paste hashes from resources to BASE resources
5. Find linking emitter from primary VFX system of that ability in SKIN and paste to BASE version’s.


I recommend pasting to the same bin as your targeted VFX (Our case – `R_Mis`).
*Yes, you can paste the child systems to virtually any bin of Braum’s that you wish, however this makes it easier to stay organized.*

In this case, we are grabbing **TWO** children systems, not just one (since our probability is mixed between two).

Make sure to copy from the bracket below `Particle Path`

![part1.webp](/user-pictures/vector/general-guides/child-particles/part1.webp)

ALL the way up to the `VfxSystemDefinitionData`

![part2.webp](/user-pictures/vector/general-guides/child-particles/part2.webp)

And paste below the last bracket of your targeted VFX system (It's recommended to place it there for organization).

![part3.webp](/user-pictures/vector/general-guides/child-particles/part3.webp)

Our BASE bin should look like this now once we have added the new VFX systems and search for `particleName: string`

![part4.webp](/user-pictures/vector/general-guides/child-particles/part4.webp)

Now that we have the new systems added, we immediately have to link them in our resources for **skin0.bin** from DATA.

Copy the hash name before `VfxSystemDefinitionData` of one child system and search for it in resources of **skin33.bin** from DATA.

![part5.webp](/user-pictures/vector/general-guides/child-particles/part5.webp)

Now copy and paste that to skin0.bin’s resources.

![part6.webp](/user-pictures/vector/general-guides/child-particles/part6.webp)

***Here I have both of my child systems highlighted***.

*Now that I have copied both child system hashes over, I will need to find the linking emitter for both. I can find this in Braum’s bin that contains the VFX system for his `R_Mis` on his Pool Party skin.*
*You can search for `VfxChildIdentifier` to find it easier.*


*Make sure the hashes are the same as the ones you linked in resources.*
*Note that this emitter does not have any textures linked (may not always be the case but is most likely). It basically acts as a `linking` emitter that tells the VFX to pull from another system.*

![part7.webp](/user-pictures/vector/general-guides/child-particles/part7.webp)

Now that this has been copied to my **BASE**‘s `R_Mis` vfx system, I can now test the mod.


For clarity’s sake, I have removed Braum’s original Ice Spikes that appear in the middle of his ult so that we can see the new children.

![part8.webp](/user-pictures/vector/general-guides/child-particles/part8.webp)

# Sources

- Bearded Shepherd