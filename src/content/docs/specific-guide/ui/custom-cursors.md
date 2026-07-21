---
title: Making Custom Cursors
description: This guide explains the creation of custom cursors using Photoshop and paint.net
published: true
date: 2024-08-26T10:56:42.137Z
tags: guide, photoshop, ui, paint.net
editor: markdown
dateCreated: 2024-02-18T21:42:47.305Z
---

# Making Custom Cursos

## Tools
You will need one of the following tools to save your custom cursors.
### Free
- <a href="/core-guides/tools/paint-net">paint.net*Explained in this guide*</a>
- <a href="/core-guides/tools/gimp">GIMP*Not included in this guide (yet)*</a>
{.links-list}

### Paid
- <a href="/core-guides/tools/adobe/photoshop">Adobe Photoshop*Explained in this guide*</a>
{.links-list}

---
## Extracting and opening League's pointers

Firstly you want to extract all the pointers using Obsidian.

The cursors are located under <kbd style="background-color:#343942">UI.wad.client/assets/ux/cursors</kbd>. Select and extract the cursors folder.

![assetsuxcursors.png](/user-pictures/bud/assetsuxcursors.png)

Once you have extracted the cursors folder navigate to the location where you extracted it and you will see all the pointers League uses which includes legacy and the new ones.

You can delete the pointers you don’t need. Ones that have a small mouse icon and “newplayer” in their name are only seen in the tutorial, delete them.

You can also delete legacy or the new pointers, depending on which ones you want to edit. In this guide the new cursors will be edited.

![cursors.png](/user-pictures/bud/cursors.png)

Prepare the pointers. See what pointers you have left in the cursors folder and prepare your own.

Legacy pointers vary in dimensions being 32×32, 48×48 (mostly) and 52×52.

New pointers are all 64 pixels by 64 pixels.

---

## Replacing Pointers

### paint.<span>net</span>

Open what pointers you want to edit one by one by simply dragging them onto paint.<span>net</span> and pressing Open.

Press <code>CTRL+SHIFT+V</code> to paste your image as a new layer on the original pointer, or you can draw on it.

![igot2layers.png](/user-pictures/bud/igot2layers.png)

After you’ve added your cursor on top as a new layer and positioned it right you can look over to the bottom right to the layers tab and uncheck the background layer.

![cursorsunckechkedlayers.png](/user-pictures/bud/cursorsunckechkedlayers.png)

Process for other pointers is the same, the paint bucket tool is used to recolor the pointers accordingly.

![rednbluecursor.png](/user-pictures/bud/rednbluecursor.png)

After you finished editing the cursors you want head over to each one and save them like this.

Press <code>CTRL+SHIFT+S</code> to save as. paint.<span>net</span> will automatically take you to the origin folder of the image. In the dropdown with the file extensions select <kbd style="background-color:#343942">TGA (*.tga)</kbd>.

Press Save and you will be prompted to replace the old file, click Yes.

![tgacompression.png](/user-pictures/bud/tgacompression.png)

Do not touch the Bit Depth setting. You can uncheck the Compress (RLE) setting if you feel like it will make a difference which will make your file around 13 Kilobytes larger. Press OK. 

![flattenimage.png](/user-pictures/bud/flattenimage.png)

You will lastly be asked to flatten the image to 1 layer. Simply press Flatten and it will save. If you have anything unfinished after flattening you can always Undo.

### Adobe Photoshop

>You do NOT need the .dds plugin for Adobe Photoshop if you wish to make custom cursors as they are saved in the .tga format.
{.is-info}

TBD

---

## Testing the mod

Once you finished editing all the pointers you will need to put the assets folder inside a folder either named UI or UI.wad.client.

![cursorspathwin.png](/user-pictures/bud/cursorspathwin.png)

The final address of the folder should look like this: 

<kbd style="background-color:#343942">UI.wad.client\assets\ux\cursors</kbd> or <kbd style="background-color:#343942">UI\assets\ux\cursors</kbd>.

Now simply create the mod in CsLoL. If you are unable to, refer to the <a href="/core-guides/tools/cslolmanager">Cslol guide</a>.

Head over to the Practice Tool and check how your cursor looks. Enable target champions only, hover the shop, ping, hover allies, etc. Check if everything is in order.

If everything is alright, congrats on creating a cursor mod!

## Windows cursors

The pointers that the Windows Operating system uses are located under <kbd style="background-color:#343942">C:\Windows\Cursors</kbd>. Using the <a href="https://forums.getpaint.net/topic/927-icon-cursor-and-animated-cursor-format-v37-may-2010/page/13/#comment-514467">.ico .cur and .ani paint.net plugin</a> and [.svg and .svgz plugin for paint.net](https://forums.getpaint.net/topic/117086-scalable-vector-graphics-filetype-alternative-plugin-svg-svgz/) you can open these pointers in paint.<span>net</span> without needing to convert any files.

## Useful Links and Resources

- [Open Cursor Library](http://www.rw-designer.com/cursor-library), there are many cursors for Windows here

 - [The Spriters Resource](https://www.spriters-resource.com/), there are cursors from some games here

 - [paint<span>.net</span>](https://forums.getpaint.net) forum, you can find useful plugins for paint<span>.net</span> here










