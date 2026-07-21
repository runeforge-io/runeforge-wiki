---
title: Update Hashes
description: How to update hashes
published: false
date: 2025-06-05T20:49:44.949Z
tags: 
editor: markdown
dateCreated: 2025-03-19T13:33:26.686Z
---

# How to Update Your Hashes for Modding Tools

## Overview
Hashes are required for three main tools. This guide will cover multiple ways to update and actually provide these tools with your new hashes.
* [Obsidian](https://github.com/Crauzer/Obsidian) for browsing wad files in a familiar File Explorer interace.
* [Ritobin](/https://github.com/moonshadow565/ritobin/releases) for decoding riot's `bin` files.
* `wad-extract` shipped alongside CSLOL in `CSLOL\cslol-tools`.

Obsidian and Ritobin both use a folder in it's installed directory called `hashes` to store it's hash files. CSLOL simply includes it's hash files next to the tool files in `cslol-tools`.

![update_hashes_hash_location.png](/user-pictures/moga/update_hashes_hash_location.png =x250)

# Method 1: Take Hashes From Obsidian

Directly copying files from your `Obsidian\hashes` folder is probably the simplest method for most people to get new hashes, but is also the slowest way to get hashes.

1. Download and install [Obsidian](https://github.com/Crauzer/Obsidian). Make sure you download the latest **stable** release marked in *green*, and **not** the most recent beta release marked with a *yellow* highlight.
2. If you already have Obsidian installed or just installed it, navigate to wherever it's is and delete the folder called `hashes` and the file called `config.json`.
3. Open Obsidian and wait for it to redownload your hashes into the hashes folder.
4. Go to `Obsidian\hashes` and there are your hash files.

> Obsidian does not download the three `hashes.rst.txt` files found in the actual [CDTB data repository](https://github.com/CommunityDragon/Data/tree/master/hashes/lol). 
{.is-info}


have obsidian auto-update it's hashes and then copy it's hashes into your tool's folderr.

