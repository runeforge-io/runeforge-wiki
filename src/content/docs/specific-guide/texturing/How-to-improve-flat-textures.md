---
title: How to improve flat textures
description: This tutorial shows you how you can improve flat, textures without shadows, specifically Wild Rift textures, by baking an occlusion map in Maya and editing the texture in Photoshop.
published: true
date: 2024-08-26T10:57:14.128Z
tags: photoshop, texturing, texture, gimp
editor: markdown
dateCreated: 2024-02-22T05:01:56.625Z
---

# How to improve flat textures
Original Wild Rift textures:

![1.webp](/user-pictures/goat/improvingtextures/1.webp)

My edit:

![2.webp](/user-pictures/goat/improvingtextures/2.webp)

This tutorial was made with the help of this video: https://www.youtube.com/watch?v=N14WqEovkWs


## Required Tools

-   [Autodesk Maya + Arnold *Program to create, edit, animate or rig 3D models*](/core-guides/tools/maya)
{.links-list}
### One of these
-   [Adobe Photoshop + .dds Plug-in: NVIDIA Texture Tools / Intel Texture Works *Program to edit 2D files*](/core-guides/tools/adobe/photoshop)
-   [Gimp *Program to edit 2D files*](/core-guides/tools/gimp)
-   [Photopea (Browser) *Close Photoshop clone as a web application*](https://www.photopea.com/)
-   [paint.net *Program to edit 2D files*](/core-guides/tools/paint-net)
{.links-list}

# Writen Tutorial

First you need to check if you have Arnold installed with your Maya.

![3.webp](/user-pictures/goat/improvingtextures/3.webp)

<details>
<summary>If not: How to install Arnold</summary>
<br>
You can install Arnold right when you install Maya for the first time. If you didn’t do that you can do it this way:

Go to your Windows – Apps and Features and search for Maya 20xx.

![23.webp](/user-pictures/goat/improvingtextures/23.webp)

Select Maya and click on “Change”.

![24.webp](/user-pictures/goat/improvingtextures/24.webp)

Now you get a Autodesk pop-up. Select the Arnold renderer (which is not installed in your case) and press install.

![25.webp](/user-pictures/goat/improvingtextures/25.webp)
</details>


## Checking and/or fixing normals in Maya
Now you wanna load your model in Maya, you don’t need to load textures.
First you wanna check the Normals of your model: LoL skins need to have the Normals facing inwards, but the Maya default is outwards and we need them to be facing outwards.
<details>
<summary>If you don’t know how to do it: Showing and reversing Normals in Maya</summary>
<br>
Select your mesh, go to Display – Polgyons – Face Normals

![26.webp](/user-pictures/goat/improvingtextures/26.webp)
  
If you don’t see any small green lines poking outside your model, you need to reverse Normals. Go to Mesh Display – Reverse.
  
![27.webp](/user-pictures/goat/improvingtextures/27.webp)
</details>

## Rendering an occlusion texture in Maya
Now we will render the occlusion map. This will create contact shadows on the model and give it a lot more depth.

First we need to add a new material to the model. Select your mesh, right click and hold and let go on “Assign new material”

![4.webp](/user-pictures/goat/improvingtextures/4.webp)

Select **“aiAmbientOcclusion”**.

![5.webp](/user-pictures/goat/improvingtextures/5.webp)

Now if you click on Arnold – Render you will see a rendered image of your current Maya scene. It has soft, black shadows on the edges were shadows would naturall occur, which Wild Rift textures lack.

![6.webp](/user-pictures/goat/improvingtextures/6.webp)

Next click on **Arnold – Utilities – Render Selection to Texture**.

![7.webp](/user-pictures/goat/improvingtextures/7.webp)

In the next window you specify any output folder for the texture you want.

For **resolution it’s recommend to choose 4k – 4096px** or even 8k – 8192px. If your PC is not that great, you can go down to 2k – 2048px. I would not recommend 1024px.

For **Camera Samples raise it to 4.**

You don’t have to edit the other settings at all.

![8.webp](/user-pictures/goat/improvingtextures/8.webp)

Then press Render and let your PC work. If you are stuck and your PC is struggeling, kill Maya with the Task Manager and try again with a lower resolution.

## Applying the occlusion map to your texture in photoshop
Maya will give you a .exr file which can be opened simply in Photoshop.
Load your texture in photoshop and load the .exr on top of it. Load the **Alpha Channel Data as Transparency**.
![9.webp](/user-pictures/goat/improvingtextures/9.webp)

If your file looks something like this means it worked:

![10.webp](/user-pictures/goat/improvingtextures/10.webp)

Set the **layer style to “Multiply”**. Now the white parts are gone and the black shadows get applied on top of it, but are too harsh.

![11.webp](/user-pictures/goat/improvingtextures/11.webp)

Add a **Curves adjustment layer** on top of it. Press alt between the layers to **create a clipping mask** so the curves layer only gets applied to the map and not the texture.

Roughly **copy my Curves settings** on the left by dragging the left point above the middle line of the square. This lightens the shadows aka black color.

![12.webp](/user-pictures/goat/improvingtextures/12.webp)

## Coloring the shadows
Now the texture already looks a lot better. But now we have the issue that all the shadows are really gray compared to for example the skin color.

![13.webp](/user-pictures/goat/improvingtextures/13.webp)

Create a **new empty layer on top of the curves layer** and also make it a clipping mask. Set the **layer style to “Color”** and lower the **opacity to like 50%**.

![14.webp](/user-pictures/goat/improvingtextures/14.webp)

Select your paint brush and pick the color from the original texture, let’s say the skin color.
Now you wanna paint roughly over all the areas with skin color to color your occlusion map to make it adjust better to the color below.

In general, you want to adjust the skin color and areas which should be pretty vibrant in color.

An example of how you might paint:

![15.webp](/user-pictures/goat/improvingtextures/15.webp)![16.webp](/user-pictures/goat/improvingtextures/16.webp)

![17.webp](/user-pictures/goat/improvingtextures/17.webp)

Left side is painted, right is not. The shadow now has an actual skin color.

The skincolor however gets changed a bit, so try not to paint everywhere and color match as best as possible.

**Another way to prevent the added color from showing up on light areas you do not want to paint:
Double click on the right side of the layer you are painting on.**

![18.webp](/user-pictures/goat/improvingtextures/18.webp)

In the popup, go to the “Blend if” section. Now you want to drag the bottom slider arrow from the right side around towards the left.

You will see your painted color fade and some “crunchy” edges. Play around and see where the highlights of the texture are not colored completely.

![19.webp](/user-pictures/goat/improvingtextures/19.webp)

Next, hold down the Alt key and press on the arrow you just moved around. It will now split in two.

Move the left half arrow towards the left and the right half arrow towards the right until you no longer see a “crunchy” edge. A value difference of 30-40 seems good.

![20.webp](/user-pictures/goat/improvingtextures/20.webp)

## Other improvements in Photoshop
What I also think helps is adding another Curves adjustment layer above the texture and below the occlusion map and setting the Preset to “Medium Contrast”.

![21.webp](/user-pictures/goat/improvingtextures/21.webp)

Another thing you can try is blurring the occlusion map if some shadows appear too harsh using Gaussian Blur.

![22.webp](/user-pictures/goat/improvingtextures/22.webp)

# Sources

- Yoru Queen of Night
- Bearded Shepherd


