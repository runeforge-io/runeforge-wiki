---
title: Handling/Fixing weird .dds files
description: 
published: true
date: 2025-02-04T02:00:48.113Z
tags: photoshop, texturing, gimp
editor: markdown
dateCreated: 2024-02-22T03:44:52.272Z
---

# Handling/Fixing weird .dds files

## Explanation of these strange .dds files

Some textures appear like this after you extracted them: They’re just mostly empty.

![1.webp](/user-pictures/goat/handlingfixingdds/1.webp)

And if you edit them incorrectly, it could end up looking like this:

![2.webp](/user-pictures/goat/handlingfixingdds/2.webp)

In Yuumi’s case the yellow color shows, what glows when her passive is up.

However, there are multiple textures which have that effect, so you  will need to figure out what exactly the texture and the effect do.

## Required tools
-   [Adobe Photoshop + .dds Plug-in: NVIDIA Texture Tools / Intel Texture Works *Program to edit 2D files*](/core-guides/tools/adobe/photoshop)
{.links-list}

Or
 
-   [Gimp *Program to edit 2D files*](/core-guides/tools/gimp)
{.links-list}


## Tutorial for Photoshop:
If you open the image, you can actually see that all the texture is there:

![3.webp](/user-pictures/goat/handlingfixingdds/3.webp)

And it’s all handled by an Alpha channel (black means invisible, white means visible):

![4.webp](/user-pictures/goat/handlingfixingdds/4.webp =x400)

Only the small ball on her “antenna” glows when her passive is up.

In order to make her eyes glow with the passive, I will paint the alpha layer on top of her eyes white too.

![5.webp](/user-pictures/goat/handlingfixingdds/5.webp =x400)

When I save it now, it looks like this:

![6.webp](/user-pictures/goat/handlingfixingdds/6.webp =x400)

It reproduces the effect of the Riot texture.

## Tutorial for Gimp
When you open the file you are greeted with the same mysterious invisible image you saw in the thumbnail:

![7.webp](/user-pictures/goat/handlingfixingdds/7.webp)
To see original texture go over to “CHANNELS” tab and disable alpha channel:

![8.webp](/user-pictures/goat/handlingfixingdds/8.webp =x400)

Now go back to layers tab and right click > new from visible:

![9.webp](/user-pictures/goat/handlingfixingdds/9.webp)

After doing that go back to “CHANNELS” tab and enable alpha channel again.

Now you can edit the texture, however now Yuumi passive glow will be  broken since it is controlled by alpha channel, to enable glow on  certain parts of her texture we need to make a new layer mask. 

First right click on any layer  > Flatten Image.
Then we make a selection using free select tool:

![10.webp](/user-pictures/goat/handlingfixingdds/10.webp)

Then right click on layer > Add layer mask:

![11.webp](/user-pictures/goat/handlingfixingdds/11.webp)

Now when I save the file looks like this:

![12.webp](/user-pictures/goat/handlingfixingdds/12.webp)

It reproduces the effect of a riot texture.

# Sources

- Yoru Queen of Night




