---
title: Maya's Skin Binding Settings
description: This guide will explain all the Skin Binding settings in Maya and what each one does.
published: true
date: 2024-12-31T17:18:01.303Z
tags: maya, 3d, modelling
editor: markdown
dateCreated: 2024-04-19T20:00:26.001Z
---

<!--SOMEONE ADD IMAGES, PLEASE-->
# Bind Skin Options
Select Skin > Bind Skin> □ in the Rigging menu set to open the Bind Skin Options window.

# Bind To:
Specifies whether to bind to an entire skeleton or only to selected joints.

## Joint Hierarchy
Specifies that the selected deformable objects will be bound to the entire skeleton, from the root joint on down through the skeleton’s hierarchy, even if you have selected some joint other than the root joint. Binding the entire joint hierarchy is the usual way to bind a character’s skin.

This is the default.

## Selected Joints
Specifies that the selected deformable objects will be bound to only the selected joints, not the entire skeleton.

## Object Hierarchy
Specifies that the selected deformable geometry is bound to the entire hierarchy of the selected joint or non-joint transform node, from the top node down through the entire node hierarchy. If there are any joints in the node hierarchy, they are also included in the bind. With this option, you can bind entire pieces of geometry to nodes like groups or locators.

*Note: When using the Object Hierarchy option, you can only select joints or objects that cannot be skinned (for example, group nodes or locators—not pieces of geometry) as the initial influences in the bind.*

# Bind Method:
Specifies how joints influence nearby skin points during initial skinning.

## Closest Distance:
This method specifies that joint influence is based only on proximity to the skin points. When binding skin, Maya ignores the hierarchy of the skeleton. This method can cause inappropriate joint influences, such as a right thigh joint influencing nearby skin points on the left thigh.

## Closest In Hierarchy: 
This method specifies that joint influence is based on the skeleton’s hierarchy. This method can prevent inappropriate joint influences. For example, this method can prevent a right thigh joint from influencing nearby skin points on the left thigh.

## Heat Map:
This method uses a heat diffusion technique to distribute influence weights. Initial weights are set based on each influence object inside the mesh acting as a heat source, emitting weight values onto the surrounding mesh. Higher (hotter) weight values occur closest to the joint, and dissipate to lower (cooler) values as you move away from the object.

*Note: The heat map setting often fails on alot of meshes.*

## Geodesic Voxel:
While legacy bind methods create artifacts, the Geodesic Voxel bind method addresses these issues by using a voxelized representation of your character, computing the bind weights, and then applying the resulting weights to the existing closed-form skinning method, deforming the character's geometry. There is a falloff control available only for Geodesic Voxel binding, which controls how rigid the bind is applied to the geometry.

*Note: This setting can break if used impropely.*

# Skinning Method:
Specify which skinning method you want to use for the selected deformable object.

## Classic Linear Smooth Skinning:
This traditional method in Maya uses linear skinning to make a mesh follow a character’s joints. However, in areas such as the wrist or elbow, this method can result in a ‘bow tie’ or ‘candy wrapper’ effect where the mesh loses volume as a bone twists on its axis.

## Dual Quaternion Smooth Skinning:
This method is designed to eliminate the undesirable deformation effects that can occur with linear skinning. While linear smooth skinning allows a mesh to collapse or shrink when a bone twists, dual quaternion skinning helps to preserve volume in the mesh, creating more realistic deformation in those problem areas.

## Weight Blended:
Sets the object to use a blend of classic linear and dual quaternion skinning, based on a per-vertex weight map that you paint.

# Normalize Weights:
This drop-down list lets you set how you want smooth skin weights normalized. These options can help you avoid letting the normalization process unintentionally set small weight values across many vertices.

## Interactive: 
When on, Maya normalizes skin weight values as you add or remove influences, and as you paint skin weights. (This is the default.)

As you work, Maya adds or removes weights from other influences in order to make the total weights on all influences add up to 1.0

For example, if you change a weight from 1.0 to 0.5, Maya distributes the remaining 0.5 amongst neighboring influences

## None:
Turns off smooth skin weight normalization.

**Important:** Be aware that this option lets you create weights of greater than one or less than one, which can allow for odd or incorrect deformation as you exercise the character.

## Post:
When on, Maya calculates normalized skin weight values as you deform the mesh, preventing any odd or incorrect deformation. No normalized weight values are stored on the mesh, which lets you continue painting weights or adjusting interactive bind manipulators without having the normalization process change your previous skin weighting work.

Selecting this mode lets you paint or change weights without affecting the weights for other influences, and still have the skin normalization occur when you deform the mesh.

# Weight Distribution:
Available only when Normalize Weights mode is set to Interactive.

When you paint weights with Interactive normalization mode, Maya re-normalizes weight values after each stroke, scaling the available weights (those that already have some value and are not locked), so that the vertex weights still add up to 1.0. When possible, weights are scaled based on their existing value.

In situations where all other unlocked, available weights are zero, this setting lets you determine how Maya creates new weights during normalization.

## Distance:
Calculates new weights based on the distance of the vertex from the various influences to which it is skinned. Closer joints are given a higher weight. (This is the default).

## Neighbors:
Calculates new weights based on the influences affecting the surrounding vertices. This prevents the vertex from getting weights to every joint in the skeleton, and gives it similar weights to the surrounding vertices. Only supported for polygon meshes.

# Allow Multiple Bind Poses

Lets you set whether you want to allow multiple bind poses per skeleton. This option can be useful if you are binding multiple pieces of geometry to the same skeleton.

When on, you can bind the separate pieces using different bind poses for each. When off, you must bind all pieces of geometry with the skeleton in the same bind pose.

# Max Influences: 
Specifies the number of joints that can influence each skin point on your smooth skin geometry. League allows up to 4 influences, however 3 should be enough and less for meshes with less polygons.

# Maintain Max Influences
When on, your smooth skinned geometry cannot have, at any time, a number of influences greater than that specified by Max Influences.

For example, if Max Influences is set to 3, and you paint or set weights for a fourth joint, one of the weights of the other three joints is set to 0 to maintain the total number of weighted influences specified by Max Influences.

# Remove Unused Influences
When on, weighted influences that would receive a zero weighting are not included in the bind. This option is useful when you want to reduce the number of calculations for your scene to increase playback speed.

# Colorize Skeleton
When on, bound skeletons and their skin vertices are colorized so that vertices appear the same color as the joints and bones that influence them.

<!--Write heatmap falloff if u figure out how that one works-->

# Include hidden selections on creation
Turn on to have the bind include geometry that is not visible, as by default, bind methods must have visible geometry to complete the bind process successfully. However, there are times when the geometry is not visible but you may still want the bind to succeed regardless of the mesh visibility state.

# Dropoff Rate:
(Available only when Bind Method is set to Closest in Hierarchy or Closest Distance.)

The influence each joint has on a particular point varies with the distance between the skin point and the joint.

This option lets you specify how sharply the influence of each joint on skin points decreases with the distance from the joint (and the joint’s bone). The greater the Dropoff Rate, the more rapid the decrease in influence. The lower the Dropoff Rate, the further the influence of each joint. Use the slider to specify values between 0.1 and 10. You can enter values up to 100, but values between 0.1 and 10 are ideal for most situations. The default is 4, which provides good deformation effects for most characters.

# Falloff:
Available only for Geodesic Voxel binding (when Bind Method is set to Geodesic Voxel).

Controls how rigid the bind is applied to the geometry. A value of 1 creates a more rigid bind, while 0 produces a smoother bind. (The default value is 0.2)

# Resolution:
Available only when Bind Method is set to Geodesic Voxel.

Increases the precision of the voxelization. Maya calculates the weighting based on the voxelized volume. Depending on the resolution sections of the mesh may become connected in voxel space, which can result in binding artifacts (similar to those that occur with the Closest Distance or Closest in Hierarchy methods).

*Note: Resolutions higher than 256 might cause binding issues.*

# Validate voxel state
Available only when Bind Method is set to Geodesic Voxel.

When on, performs a post-validation on the voxels. Activated by default, you can disable it as it is not required and causes additional processing time. However this can be a useful diagnostic tool for more complex geometry.

# Deformer Node:
The Deformer Node menu lets you select the process used for the skin bind. Choose between Skin Cluster and Proximity Wrap.

## Skin Cluster
Skin Cluster uses the "traditional skin binding" approach.

## Proximity Wrap
Proximity Wrap uses a deformer to perform the same skin binding using the Dropoff Rate Scale setting in the Proximity Wrap deformer options. Changing the Dropoff Rate Scale value lets you control the inverse distance weight from the driver.

*Note: This setting almost never works as intended.*

# Sources
- Bud
- Autodesk

 

