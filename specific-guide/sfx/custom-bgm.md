---
title: BGM moding guide
description: Guide on how to mod in game background music
published: true
date: 2025-06-19T20:22:51.069Z
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
![updated.png](https://media.discordapp.net/attachments/551721699368763403/1385331215703474218/image.png?ex=6855adbc&is=68545c3c&hm=6b1e65f350573c317e1c602a127a0dd43788caf338b5a6c83e73fdef10aabde6&=&format=webp&quality=lossless&width=485&height=101)

> `map11.bin`
> `mus_map11_seasonal_25s2_bloom_audio.bnk` <- game win/lose tracks
> `mus_map11_seasonal_25s2_bloom_audio.wpk` <-rest of bgm tracks
> `mus_map11_seasonal_25s2_bloom_events.bnk`

## Main BGM
### 839004754 - game_start
**Length**: `1:25` <-- this is how long track should be to get **proper loop**ing into next track, going above it will result int this track overlapping with next track
**Cut-off time**: `1:48` <-- this is maximum length, above it, game will cut the sound
**Behvaiour**: Game will always start with this track
**Looping**: this track will always be followed by `loop0` at `1:25`

**Note**: making this track longer than 1:25 is **highly not reommended**

### 31400101 - loop_0
**Length**: `4:08`
**Cut-off time**: `4:28`
**Behvaiour**: Primary loop that starts at 1:25, usually will play **early to mid game**

### 747672666 - loop_1
**Length**: `4:00`
**Cut-off time**: `4:18`
**Behvaiour**: One of events triggering this loop is pushing on T2 tower top, tho exact events triggering this loop are not known. usually plays **mid game**

### 597986489 - loop_2
**Length**: `2:50`
**Cut-off time**: `2:59`
**Behvaiour**: **2nd most frequent loop**, it seems to start when there are some objectives going up or fight incoming, not really clear yet tho. **mid to late game** usually

### 597986489 - loop_3
**Length**: `4:15.43`
**Cut-off time**: `4:24`
**Behvaiour**: 
This loops plays mainly in **late game**
Has a unique Intro-Transition track `795233166`

**Looping**: this track will loop **into itself**

## Upper River BGM
Entering upper river after `1:25` will fade Main BGM into River BGM

### 678921810 - river_loop_0
**Length**: `1:42.5`
**Cut-off time**: `1:55`
**Behvaiour**: Main upper River bgm loop

### 468086310 - river_loop_1
**Length**: `1:52.5`
**Cut-off time**: `2:07`
**Behvaiour**: Will play when **Void Grubs** are Alive

### 195200710 - river_loop_2
**Length**: `2:00`
**Cut-off time**: `2:12`
**Behvaiour**: Will play when **Herald** are Alive

### 905385918 - river_loop_3
**Length**: `2:37.5`
**Cut-off time**: `3:06`
**Behvaiour**: Will play when **Baron** are Alive

## Atakhan track
### 1068406348
**Length**: unsure, having good sync on this one is not important
**Cut-off time**: `2:16`
**Behvaiour**: Will play when fighting Atakhan. Game cuts volume of this one a bit, making **Bass hard to hear**, more vocal/higher pitch tracks are preferable

## Transitions
Most commonly they will play when killing or losing agro on void-fights, making transition back into Main or River loops
Transition tracks **Length** is **Flexible and will adjust**, sometimes game will fade them out before they fully play (even before cutoff time)

Due to flexibility, some transition tracks **can be replaced with empty (0:00 long) audio files**

**Dont leave mute parts at the end of the transition tracks**
![transition_do_dont.png](https://media.discordapp.net/attachments/551721699368763403/1385343219901923519/image.png?ex=6855b8ea&is=6854676a&hm=4b91a588122f976109625cb11e9921b3ce796d2dff3d01a601bf4ad626258ce8&=&format=webp&quality=lossless&width=864&height=826 =x385)

### 745170299 - transition_0
**Length**: flex, `4 - 6` seconds is fine, usually will fadeout ~6s, not playing out fully
**Cut-off time**: `0:08`
**Behvaiour**: losing grubbies agro will usually play this one
**Can be empty**: True


### 78388607  - transition_1
**Length**: flex, `4 - 6` seconds is fine
**Cut-off time**: `0:15`
**Behvaiour**: killing grubbies will usually play this one. it also serves as intro into loop_2

**Not verified, can be false**: killing grubbies will play short version of this loop, getting this as transition into loop_2 will play it for longer, if the file is shorter, will play it twice

**Can be empty**: True


### 783218920 - transition_2
**Length**: flex, `4 - 6` seconds is fine, usually will fadeout ~6s, not playing out fully
**Cut-off time**: `0:08`
**Behvaiour**: Killing or losing agro on **Herald/Baron**
**Can be empty**: True


### 795233166 - transition_into_loop_3
**Length**: flex, `0:11.142`
**Cut-off time**: `0:25`
**Behvaiour**: Will **play** only, and **only before loop_3**, it server as intro into this loop
**Loops**: into loop_3
**Can be empty**: False (unsure)

### unused tranistion tracks
Those are in sound bank file, but arent playing, probably old remanings??
`141769107`
`63874385` 

## Void Objectives Tracks

### General behaviour
Similarly to transitions, those **can be replaced with empty (0:00 long) audio files**
**Important**: If leaving void-objectives tracks empty, delay transition tracks audio by about half a second


Even tho those tracks are originally around 30s long, game will usually play below 20s on them (clear time are not known yet)

While fighting Void objectives, game will play tracks at random once every ~20s, when new track starts, previous track will get faded out, even tho there might be slight overlap.

### Grubbies

`759876728 `
`1069654488`
`2953661   `

The `744754279` incident
This track is outsorced from god knows where, changeing it in `mus_map11_seasonal_25s2_bloom_audio.wpk` will not affect this sound in game

Similar thing touches `686821660` which i suspect to sometimes play when standing in front of herald or to be unused


### Herald
`167154966`
`175162873`
`50404283 `
`786729186`
`904784533`

### Baron
`155843588`
`206166553`
`209630168`
`217447705`
`276676272`
`387409472`
`398155686`
`898372979`
`915147143`
`966402107`

## Win/Lose Tracks
As per name, those tracks play when triggering Victory or Defeat screen
`942963713` - Victory
`776947205` - Defeat
# Classic BGM
Old League BGM, fairly static
![classic.png](https://cdn.discordapp.com/attachments/551721699368763403/1385331392665358467/image.png?ex=6855ade6&is=68545c66&hm=3f6e9c3226246515eaa9ed871455bff58c0cbc0d0ae5eef5b254b0dcdc3567e2&)

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


