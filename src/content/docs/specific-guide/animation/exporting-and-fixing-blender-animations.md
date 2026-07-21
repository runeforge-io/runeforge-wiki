---
title: Exporting and Fixing Blender animations
description: This guide will explain the process or exporting an animation from Blender and fix it in Maya so that it can be used in a mod.
published: false
date: 2024-08-26T10:57:40.647Z
tags: maya, animation, blender
editor: markdown
dateCreated: 2024-03-03T21:40:03.459Z
---


# Exporting from Blender

## Export
Upon completing your work in Blender export the file as FBX and make sure to change the following settings:
- In the Transformation dropdown put Forward to be "-Z Forward" and up to be "Y up".
- Open the Armature dropdown and *uncheck* Add Leaf Bones.
- Other FBX settings should be fine as they are by default.

# Importing and Fixing in Maya

## Import

Import your FBX file in the Maya scene.
You will see the mesh and a grouped armature. Click the armature and ungroup it. Delete the empty group.

## Fixing
Select the root bone and play the animation. You will see that the skeleton is small and rotated.
Select the rotate tool (E) and select Absolute Transform. Input -90 in the box for X and hit Enter.
Press S to save the frame and do the same in the last frame of the animation.

Import the mesh of the champion you are making the mod for.
Select the root again and go to frame 0. Resize the skeleton so it matches the champion roughly.
Hit S then open the Attribute Editor and copy the number inside Scale when you scale your model up.
Go to the last frame and paste the number you copied into the scale boxes.
Press export all and select league .anm.