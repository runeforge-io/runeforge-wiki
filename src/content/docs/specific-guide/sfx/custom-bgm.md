---
title: BGM moding guide
description: Guide on how to mod in game background music
published: true
date: 2025-08-26T12:34:12.778Z
tags: 
editor: markdown
dateCreated: 2025-06-19T20:22:51.069Z
---

# Overview
This is guide explaining how BGM in league works and what file does what.

Background music files are found in `Map11.wad.client`

## Before making the mod
{.is-info}
- [General sound modding guide *explains how to replace sound file*](/specific-guide/sfx/full-sfx-guide)
{.links-list}

Optional:
- [Sound2wem *drag'n'drop convertion of audio files to .wem format*](https://github.com/EternalLeo/sound2wem)
{.links-list}


# Updated BGM tracks
Updated BGM is **rective** to Gameplay, its still hard to pinpoint exact events that will trigger tracks to change.
All `loop` tracks will loop into itself, so keeping proper length, to get clean loop is fairly important
Using tims fast forward or jungle camp spawn in practice tool makes music change  strangely.
![updated.png](/user-pictures/aurumcoeils/updated.png)

> `map11.bin`
> `mus_map11_seasonal_25s2_bloom_audio.wpk` 
> `mus_map11_seasonal_25s2_bloom_events.bnk`

## Editing this one is atm just an insanity TT, do not problem

# Classic BGM
Old League BGM, fairly static
![classic.png](/user-pictures/aurumcoeils/clasic.png)

> `map11.bin`
> `mus_map1_audio.wpk`
> `mus_map1_events.bnk`

## Game loops
### 783239181 - game_start
**Length**: `1:39`
**Behaviour**: This will always play at the start of the game

### 119341995 - mid_game_loop
**Length**: `4:04`
**Behaviour**: This will start playing after `game_start` and then will loop with itself till ~22 minutes into the game (wil  always play out fully)

### 64540750 - late_game_loop
**Length**: `3:59`
**Behaviour**: This will start playing after `mid_game_loop` and then will loop with itself till end of the game

### Win/Lose Tracks
`625021706` - Victory
`167168496` - Defeat


