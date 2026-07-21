---
title: Basic Information
description: Basic Information to do SFX modding!
published: true
date: 2025-02-14T16:28:04.951Z
tags: sfx, audio, voice over, sound effects, sound, effect, vo
editor: markdown
dateCreated: 2024-02-10T20:41:38.554Z
---

# Sound Effects
## Basic information
League of Legends, like many games, has a complex yet effective system to compress files that make the game possible to run. Specifically in the audio system, there are many file types that work together to store and play the sound files. To access and change data in these files, we first have to understand what we're looking at.
## Sound and Language Files
For sound modding in League of Legends we use these type of files:
- **.wad.client**: Combination of compressed files that is used to hold multiple files at once (these are not only used for sounds, as every mod for a champion changes some of these files). For sound modding, this compression system is what holds **Champion Sound Effects**. There is a variation of these files that has a language prefix before the ".wad" that contains every **Voice Line** for the champion in that specific language. For example, '**Map11.en_US.wad.client**'; with *en_US* being the prefix for the English language.

Here is a list of every prefix used and their respective language.
> ar_AE: Arabic
cs_CZ: Czech
de_DE: German
el_GR: Greek
en_US: English (Used by all English regions, as well as Indonesian, and Malaysian)
es_ES: Spanish (Spain)
es_MX: Spanish (Mexico)
fr_FR: French
hu_HU: Hungarian
it_IT: Italian
ja_JP: Japanese
ko_KR: Korean
pl_PL: Polish
pt_BR: Portuguese
ro_RO: Romanian
ru_RU: Russian
tr_TR: Turkish
vi_VN: Vietnamese
zh_CN: Chinese
zh_TW: Taiwanese

> To see any of these game files, you have to have downloaded that version of the game. To change your League Language, go into the Riot Client, then go to Settings (click the little person icon) and select League of Legends. Select and download the version that you want under 'Game Text Language' (applies to audio too), then start League and go into any game, like Practice Tool or Customs)
{.is-warning}

## File Extensions
- .wav: Generic audio file format used before converting into the format that League of Legends can read.
- .wem: File format that the game reads. You can not use any other type of audio format to replace sounds. Requires WWise to convert from wav to wem.
- .wpk: Format that contains all the compressed .wem files that the bank references (For VO).
- .bnk: Format that contains metadata and event data to play the files found in the wpk. There are usually two bnks along with the wpk: "xxx_events.bnk" and "xxx_audio.bnk." (SFX is found in a .bnk instead, because Riot.)
- .bin: Code that reads every .wem file and provides the logic to get it to work in game; something like the brain of the game. (Not only used for sounds)