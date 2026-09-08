---
title: Exporting and Fixing Blender animations
description: This guide will explain the process or exporting an animation from Blender and fix it in Maya so that it can be used in a mod.
draft: true
lastUpdated: 2024-08-26
tags:
  type: guide
  level: advanced
  subject: [animation, exporting]
  tool: [blender, maya]
---


## Exporting from Blender

### Export
Upon completing your work in Blender export the file as FBX and make sure to change the following settings:
- In the Transformation dropdown put Forward to be "-Z Forward" and up to be "Y up".
- Open the Armature dropdown and *uncheck* Add Leaf Bones.
- Other FBX settings should be fine as they are by default.

## Importing and Fixing in Maya

### Import

1. Import your FBX file in the Maya scene. You will see the mesh and a grouped armature.
2. Click the armature and ungroup it.
3. Delete the empty group.

### Fixing
1. Select the root bone and play the animation. You will see that the skeleton is small and rotated.
2. Select the rotate tool (E) and select Absolute Transform. Input -90 in the box for X and hit Enter.
3. Press S to save the frame and do the same in the last frame of the animation.
4. Import the mesh of the champion you are making the mod for.
5. Select the root again and go to frame 0. Resize the skeleton so it matches the champion roughly.
6. Hit S then open the Attribute Editor and copy the number inside Scale when you scale your model up.
7. Go to the last frame and paste the number you copied into the scale boxes.
8. Press export all and select league .anm.