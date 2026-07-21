---
title: Adobe Photoshop
description: A guide on how to install and use Adobe Photoshop
published: true
date: 2024-08-26T10:56:09.048Z
tags: guide, photoshop, install, adobe
editor: markdown
dateCreated: 2024-02-11T19:32:06.351Z
---


# Photoshop
Photoshop is a subscription based tool to edit 2D files. 
- [View Photoshop Subscriptions *External Link*](https://www.adobe.com/de/products/photoshop.html)
{.links-list}

In order to edit [dds](/specific-guide/filetypes) files, you need to install a corresponding plugin.

# Intel Texture Works
### Download
Head to Intel's website on the link below and click the download link at the top of the page.
When redirected to the second page click the <kbd style="background:#7cad18">ZIP</kbd> button at the top.
- <a href="https://www.intel.com/content/www/us/en/developer/articles/tool/intel-texture-works-plugin.html">Intel Texture Works download*Works with both Intel&reg; and AMD processors*</a>
{.links-list}
### Installation
1. Close Photoshop.
2. Extract the plugin .zip file you downloaded.
3. Copy the desired plugin from one of the folders depending on if you are using a 64bit or a 32bit version of windows:
<kbd style="background-color:#343942"> .../IntelTextureWorks_1.0.4\Plugins\x64\IntelTextureWorks.8bi</kbd>
<kbd style="background-color:#343942">	 .../IntelTextureWorks_1.0.4\Plugins\Win32\IntelTextureWorks.8bi</kbd>
4. Paste the plugin into the appropriate Photoshop Plugin folder.
<kbd style="background-color:#343942">	C:\Program Files\Adobe\Adobe Photoshop 2024\Required\Plug-Ins\File Formats</kbd>
<kbd style="background-color:#343942">	 C:\Program Files\Adobe\Adobe Photoshop CS6 (64 Bit)\Plug-ins\File Formats</kbd>
5. Copy the cubemap scripts from:
<kbd style="background-color:#343942">	.../IntelTextureWorks_1.0.4\PhotoshopScripts\IntelTextureWorks-ConvertCubeMap.jsx</kbd>
<kbd style="background-color:#343942">	 .../IntelTextureWorks_1.0.4\PhotoshopScripts\IntelTextureWorks-CubeMapGaussianBlur.jsx</kbd>
6. Paste the cubemap scripts into:
<kbd style="background-color:#343942">	 C:\Program Files\Adobe Photoshop 2024\Presets\Scripts</kbd>
### Saving files
1. File > Save As
2. Select "Save as type" > **Intel&reg; Texture Works (\*.DDS;\*.DDS)**
3. Navigate to the location where you want the file to be saved.
4. Assign file name.
5. Save.
6. Inside the plugin options select these settings:
- Texture Type: <kbd style="background-color:#343942">Color + Alpha</kbd>
- Compression: <kbd style="background-color:#343942">BC3   8bpp  (Linear)</kbd>
- Mip Maps: <kbd style="background-color:#343942"> None</kbd>
- <u>You can make a preset of these settings to use every time, name the preset and press Save at the top.</u>
7. Press OK.

# Nvidia Texture Tools

### Download
- [Download Nvidia Texture Tools *Only if you have a Nvidia Graphics Card*](https://developer.nvidia.com/nvidia-texture-tools-exporter)
{.links-list}

Scroll down and download the Photoshop extension. You need a developer account for that, but you can simply create one following the site's instructions.

### Installation

1. Close Photoshop
2. Double click the installer and follow the instruction given. *It usually automatically detects your Photoshop file location*
3. Once the installation is finished you can re-open Photoshop and you're done.

### Export files as .dds
Once you're done editing your file you need to export it as `.dds`.

1. Click `File` >> `Save as` **OR** <kbd>CTRL</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>
2. Select Filetype: `DDS - NVIDIA Texture Tools Exporter (*.DDS;*.DDS)`

**In the exporter settings you need to follow the instruction given in your specific guide! The following instructions are the standard settings used for most but not all .dds files.**

3. Format: `BC3 RGBA 8bpp | DXT5: interpolated alpha` 
4. Compression Quality: `Highest`

Leave the rest as it is >> Click Save. Done.

![nvidia_txt_showcase.png](/user-pictures/vector/general-guides/nvidia_txt_showcase.png)

# Simple DDS Plugin


This plugin is a generic .dds plugin and has no name.
Its simplicity makes it easy to use and fast to save files.
It's useful when doing batch export as it doesn't require you to confirm file saving.

### Download
- [DDS Plugin Download](/user-pictures/bud/dds.8bi)
{.links-list}

### Installation
 Simply download the file and place it in the following address:
 <kbd style="background-color:#343942">	C:\Program Files\Adobe\Adobe Photoshop 2024\Required\Plug-Ins\File Formats</kbd>

### Saving Files

1. File > Save As
2. Select "Save as type" > **DDS (\*.DDS;\*.DDS)**
3. Navigate to the location where you want the file to be saved.
4. Assign file name.
5. Save.
6. Inside the plugin options select Format to be DXT5:
7. Press OK.

![ddsplg.png](/user-pictures/bud/ddsplg.png)
