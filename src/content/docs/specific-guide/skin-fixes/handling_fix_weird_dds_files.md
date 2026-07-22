---
title: Handling/Fixing weird .dds files
lastUpdated: 2025-02-04
---


## Explanation of these strange .dds files

Some textures appear like this after you extracted them: They’re just mostly empty.

![Extracted texture appearing mostly empty and transparent](/user-pictures/goat/handlingfixingdds/1.webp)

And if you edit them incorrectly, it could end up looking like this:

![Yuumi's passive glow broken by an incorrect edit](/user-pictures/goat/handlingfixingdds/2.webp)

In Yuumi’s case the yellow color shows, what glows when her passive is up.

However, there are multiple textures which have that effect, so you  will need to figure out what exactly the texture and the effect do.

## Required tools

**One** 2D editing program of your choice:

- [Adobe Photoshop + .dds Plug-in: NVIDIA Texture Tools / Intel Texture Works *Program to edit 2D files*](/core-guides/tools/adobe/photoshop)
- [Gimp *Program to edit 2D files*](/core-guides/tools/gimp)


## Tutorial for Photoshop
If you open the image, you can actually see that all the texture is there:

![The full texture visible when opened in Photoshop](/user-pictures/goat/handlingfixingdds/3.webp)

And it’s all handled by an Alpha channel (black means invisible, white means visible):

<img src="/user-pictures/goat/handlingfixingdds/4.webp" alt="The alpha channel controlling the texture's visibility" height="400" />

Only the small ball on her “antenna” glows when her passive is up.

In order to make her eyes glow with the passive, I will paint the alpha layer on top of her eyes white too.

<img src="/user-pictures/goat/handlingfixingdds/5.webp" alt="Painting the alpha layer white over Yuumi's eyes" height="400" />

When I save it now, it looks like this:

<img src="/user-pictures/goat/handlingfixingdds/6.webp" alt="The saved texture with the updated alpha channel" height="400" />

It reproduces the effect of the Riot texture.

## Tutorial for Gimp
When you open the file you are greeted with the same mysterious invisible image you saw in the thumbnail:

![The mostly invisible texture when opened in Gimp](/user-pictures/goat/handlingfixingdds/7.webp)
To see original texture go over to “CHANNELS” tab and disable alpha channel:

<img src="/user-pictures/goat/handlingfixingdds/8.webp" alt="Disabling the alpha channel in Gimp's Channels tab" height="400" />

Now go back to layers tab and right click > new from visible:

![Creating a new layer from visible in Gimp](/user-pictures/goat/handlingfixingdds/9.webp)

After doing that go back to “CHANNELS” tab and enable alpha channel again.

Now you can edit the texture, however now Yuumi passive glow will be  broken since it is controlled by alpha channel, to enable glow on  certain parts of her texture we need to make a new layer mask. 

First right click on any layer  > Flatten Image.
Then we make a selection using free select tool:

![Making a selection with Gimp's free select tool](/user-pictures/goat/handlingfixingdds/10.webp)

Then right click on layer > Add layer mask:

![Adding a layer mask from the layer context menu](/user-pictures/goat/handlingfixingdds/11.webp)

Now when I save the file looks like this:

![The saved texture reproducing the Riot glow effect](/user-pictures/goat/handlingfixingdds/12.webp)

It reproduces the effect of a riot texture.

## Sources

- Yoru Queen of Night




