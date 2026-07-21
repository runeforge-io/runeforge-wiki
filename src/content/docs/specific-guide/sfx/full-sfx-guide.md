---
title: Full sound modding guide
description: A full overview of sound modding for League of Legends.
published: true
date: 2024-10-30T04:44:09.005Z
tags: sfx, sound fx, sound effects, sound
editor: markdown
dateCreated: 2024-02-22T20:47:04.714Z
---

# Required Tools
Download: **BNK-extract**, **Audacity**, **Wwise** 

- [Audio Tools](/core-guides/tools#sound-fx-audio)
{.links-list}

Optional:
- [Foobar2000 *Convert Leagues file format into common ones.*](https://www.foobar2000.org/)
- [Foobar2000 League Plugin *Nessecary if you want to use Foobar*](https://vgmstream.org/)
{.links-list}

# Written Guide
## Preparation

### Acquiring the new sound you want in-game 
The first real step and already you are on your own. Not really, but you do have to have an idea for a mod first. Once you do, and you know what sounds you want to replace and for which champion, you still need to get those sounds. How you get them is up to you, and it wholly depends on what you want to do. Perhaps you can simply find them by googling, maybe you can get them from a Youtube video, or maybe you can rip them from a game. Once you do have your new audio files, the proper modding can commence.

### Extracting League's files with Obsidian
Now that you have chosen your champion, open up Obsidian, then click on "File" and "Open". Now navigate to your League's install folder, which usually is under C:\Riot Games\League of Legends. From there, open the folder "Game", then "DATA", then "FINAL" and then "Champions". It should look like this: 

![sg1.webp](/user-pictures/vector/general-guides/sfxguide/sg1.webp)

Locate the name of the champion you've chosen. Note, however, that while the majority of the champions are named the same in-game as here, there is an exception! Wukong is named MonkeyKing. Pretty sure this is the only one.

For the purpose of this tutorial, we will make a sound mod for Kha'Zix, but it works for him the same as for any other champion. Once you've located your champion on the list, you'll notice there are two files for them - "(Name).wad.client" and "(Name).en_US.wad.client". If instead of en_US you have something else, like pl_PL or whatever, this just signifies which language you have your League client in. All the main files for a champion are stored in the "(Name).wad.client" file, but their voice-overs are stored in the "(Name).en_US.wad.client". That's why if you intend to make a voice-over be wary of your client's language - it will only extract the voice-over in your set language. But don't worry you can make a voice-over for any and all languages easily! But we will get to that later.

If you only want to edit the SFX, simply open the (Name).wad.client file, however, if you wish to edit the voice-over, you will need to open both of the files, not just the (Name).en_US.wad.client. Once you have them open in Obsidian, you want to do the following:

- For (Name).wad.client: Select the same stuff as on the screenshot, and then click on `File -> Extract Selected`, and choose your preferred destination. Please note: you have to select **skin0.bin** if you are editing the default skin, if you are editing a different skin, then you need to select the appropriately named bin file. 

![sg2.webp](/user-pictures/vector/general-guides/sfxguide/sg2.webp)

- For (Name).en_US.wad.client: simply click on `File -> Extract all`, then choose your preferred destination, it can be the same as for the previous file if you want.

## Editing and converting 
### Editing your sound files using Audacity

Now, it's time to prepare your custom sounds for their implementation into League. Launch Audacity and import your sound file into it (if you have a lot of files, e.g. a lot of new voice lines, you'll have to repeat the following process for every file)

For now, I have imported a voice line belonging to Kars, ripped from JoJo ASBR. My Audacity looks like this: 

![sg3.webp](/user-pictures/vector/general-guides/sfxguide/sg3.webp)

As a golden rule, you should strive to keep the custom sound about the same length as the original sound. This is most important for SFX, less so for voice-overs. In the case of the latter, the game will play out the voice to the end anyway, so if it's longer than the original then it will simply last longer. Which is fine by itself, but if that voice line is supposed to play during an ability, then it may be weird to have it play much longer than the ability's duration. However, in the case of the former, the SFX, if the sound is too long the game will cut it short, if it's too short, then it might not blend properly, so in both cases it will sound weird. If you are not sure how long is the sound effect you want to replace, you can wait until we get to using BNK Extract later in the tutorial and then come back to this section. If you, however, know the duration and/or you are focusing on the voice-over, then continue reading this section.

Whether you just want a specific part from your sound file, the track has silent, unnecessary parts, or whatever else might be the reason, what you have to do is trim it. Left-click on the start of the part you want to cut, then right-click and split clip. Then, left click and the end of the part you want to cut, then right-click and split clip again. Now you have a part of your found split from the rest.  Click on it, then press delete. Remember to align the rest of the timeline, so that everything begins at 0.0 and doesn't have any gaps in between. The GIF below shows this process:

![sg4.gif](/user-pictures/vector/general-guides/sfxguide/sg4.gif)

After you are done trimming your file, there is one more thing to do. Generally speaking, League's raw audio files are pretty loud, so our clip will have to match them in volume. In most cases, the volume of our clip will have to be increased. As a rule of thumb, you can first try increasing it by 5 dB and see (hear?) how it sounds. This is, unfortunately, quite a varied process, and it depends on your original sound file. For example, something ripped from a game won't need its volume increased by too much, but something, say taken from a Youtube video, might. So experiment until it sounds right.  The gauge to adjust the volume is under the Effects tab on the track: 

![sg5.webp](/user-pictures/vector/general-guides/sfxguide/sg5.webp)

nce that's done, all you have to do is go to `File -> Export -> Export as WAV`, then select your preferred destination. I also advise you to name the file accordingly. For example, if you are doing SFX, then name it for what you want to use this sound for, e.g. "Recall" or "Ult". If you are doing voice lines, what I like to do is type out what I hear in the voice line. If I hear, say, "I'm Batman", then I'll name the file "I'm Batman". Just don't make the name too long.

Remember to repeat the process for every file you have!

### Converting your edited files with Wwise
Now has come the time to convert all of our .wav files into .wem files, which is the format League uses for all its sound. To achieve that, open your Wwise Launcher. Go to the tab "Wwise". From there, click on the Install button and choose the 2016 version. If it gives you a choice, the one I'm using is "2016.2.6.6153" You might have to create an account for it. If you are annoyed by such practices, just create a throwaway email for this kind of stuff, as I did. Anyway, once you have the 2016 version installed, open it. We are using the 2016 version not because we live in the past and can't move on, but because Riot Games lives in the past and can't move on. In other words, LoL uses this specific version of Wwise and so we have to as well. 

First, it's gonna ask you to create a new project. Do so, name it however you want. Next, you will receive a pop-up that you are not operating on a full license. Ignore this, of course. The first thing you need to do once inside Wwise, is to head over to `Project -> Project Settings -> Source Settings`, then change the Default Conversion Settings to `Vorbis Quality High`. It's crucial to do so before importing any files. The GIF below shows you how to do it: 

![sg6.gif](/user-pictures/vector/general-guides/sfxguide/sg6.gif)

Then, click on `Project -> Import Audio Files`. A window will pop up, giving you an option to either import files or folders. If you have a lot files, categorized under different folders, then click add folders and select the parent folder. Wwise will automatically detect every file in every folder under your selected folder. The GIF below visualizes this:

![sg7.gif](/user-pictures/vector/general-guides/sfxguide/sg7.gif)

Now just go to `Project -> Convert All Audio Files`. Click Ok. To quickly find your converted files, go to `Project -> File Manager`, then right-click on the displayed file path and click Open Containing Folder. a File Explorer window will pop up. your converted files are in `.cache\Windows\SFX`. I recommend copying all those files into the original folder you imported into Wwise. You can now also close Wwise.

## Importing your sound to League
### Open League's audio files using BNK-extract
This section will have parts that differ between SFX and Voice-over editing.
What you want to do first is open up the BNK Extract (file is simply named gui.exe)

![sg8.webp](/user-pictures/vector/general-guides/sfxguide/sg8.webp)

You'll see three "select" buttons on the top. The bin file is the same for both SFX and voice-over, that's why I made you all extract the bin file from Obsidian at the beginning of the tutorial, no matter what you are editing. Now, click the "select bin file" button. Locate the folder you have extracted files from Obsidian to. Once you are there, you should see two folders: assets and data. Go to data and click through the folders until you arrive at the file called skin0.bin (this is for the default skin, if you are editing a different one then the number will be different too).

**For SFX**: click on "select audio file", locate the place you extracted the Obsidian files to, then click on assets -> sounds -> wwise2016 -> sfx -> characters -> (your champion name) -> skins -> base (if you are editing the default skin). There you will see two files. Select the one that ends with "audio". Afterward, click on "select events file". In the same directory as the previous file, select the file ending with "events".

**For voice-over**: click on "select audio file", locate the place you extracted the Obsidian files to, then click on `assets -> sounds -> wwise2016 -> vo -> en_us (or whatever other language you use) -> characters -> (your champion name) -> skins -> base (if you are editing the default skin)`. There you will see three files. Select the one that ends with "audio" and is a WPK file, it should also weigh more. Afterward, click on "select events file". In the same directory as the previous file, select the file ending with "events".

For both: once you have all three files selected, click "parse files" on the right. 

The window should look something like this for **SFX:** 

![sg9.webp](/user-pictures/vector/general-guides/sfxguide/sg9.webp)

The window should look something like this for **voice-over:**

![sg10.webp](/user-pictures/vector/general-guides/sfxguide/sg10.webp)

Bear in mind, however, that's how it looks for Kha'Zix, for the champion of your choice it might look a bit different. Now, as you can see, every line has a small plus button next to it. Clicking it will expand the list and show you the individual files. Clicking on them will automatically play the associated sound file. Beware! Those are really damn loud. If you don't want the sound to play automatically on clicking the file, you can disable it in Settings. 

The lines tell us more or less about the circumstance a given sound should play in. Some are a bit more straightforward, like `Play_vo_Khazix_Taunt3DGeneral`. The voice lines there play when you do Ctrl+2 Taunt with your character. `Play_sfx_Khazix_KhazixBasicAttack_OnCast` are the sound effects that play once Kha'Zix swings his blades, not when they hit the target, just when he starts swinging. Sometimes the sound may be a bit difficult to identify, you can always just hit the Practice Tool and try to get that sound in-game.

If there are multiple files under one list, and most often there will be, then it usually means the game will randomize which file to play in-game from the ones within that list. In other, rarer cases, it means one will be played immediately after the other has ended.

### Optional: Extracting League's audio files

Say, you wanted to take a sound from Pyke's Ult, make it louder, and put it on Pantheon's Q, for whatever reason. Then you would need to first extract Pyke's ult sound, right? So, you'd locate the specific sound you want in the gui, click on it, then click "extract selection" on the right. Choose your preferred destination. Now, what you are left with is the wem file, which cannot be read by Audacity or any other common audio software. That's when Foobar2000 comes in. Assuming you have the LoL plugin downloaded and implemented, open Foobar and drag your file onto it. Right-click on it in Foobar, press Convert -> Quick Convert, make sure WAV is selected, and press convert. Now your output file is ready to be edited with Audacity or whatever else. If you, however, don't want to edit it, don't want to use it anywhere outside League, and just want to replace it, then you won't need to use Foobar, as you can just import the wem file straight away into whatever other champion you wanted it in the first place.

### Replacing sound files

Replacing the sound files is rather simple. Simply click the sound file you want to replace, then click "Replace wem data", locate the file you wanted to replace it with (converted to .wem with Wwise), and simply click open. The file is now replaced. You can play the sound of this file again to confirm it has indeed changed. Once you have done that for every file you wished to replace, click on the higher most line in the gui, the one that is selected on the screenshots above, then place "Save as bnk/wpk" and choose your preferred destination. Please note, that even though you have initially selected three files, the bin, the audio and the events, you only modify the audio file, hence that's the only one that will get extracted.

## Place your modded files in-game
### Creating .wad file
This is it, we are almost there! Now has come the time to create the wad files. You have already seen them at the very beginning of this tutorial - these are the files in League's install folder, the ones that store all the champion info, the ones we extracted with Obsidian. Now we need to create them ourselves.

#### For SFX
this file goes into the main wad file, the (Name).wad.client. As you might remember, this is the main file, so it stores all other info about a champion except for their voice-over. So, if you are just editing the sounds for your own custom skin mod, then you put both in the same wad file. But, to the point: you need to create a very specific path in your file explorer. Navigate to a folder of your choosing, then create a folder with your champion's name, exactly as it appeared in the original files. So, for my case, I have to name my folder "Khazix". In there create another folder, called "assets". In it, a folder called "sounds". In it, a folder called "wwise2016". In it, a folder called "sfx". In it, a folder called "characters". In it, a folder with the name of your champion, so for me, "khazix". In it, a folder called "skins". In it, a folder called "base" (if you are doing the default skin). And inside of that is where you put the file you extracted from BNK Extract gui.

#### For Voice-over
this file goes into the other file, the one named "(Name).en_US.wad.client". Again, remember that the en_US part will be different for you if you are using a different language. So, you need to create a very specific path in your file explorer. Navigate to a folder of your choosing, then create a folder with your champion's name, exactly as it appeared in the original files, and add ".en_US" after the name, or whatever other language you have. So, for my case, I have to name my folder "Khazix.en_US". In there create another folder, called "assets". In it, a folder called "sounds". In it, a folder called "wwise2016". In it, a folder called "vo". In it, a folder called "en_us". In it, a folder called "characters". In it, a folder with the name of your champion, so for me, "khazix". In it, a folder called "skins". In it, a folder called "base" (if you are doing the default skin). And inside of that is where you put the file you extracted from BNK Extract gui.

#### For both
Now head over to the place where you have your LCSManager installed. There, you should see a folder called "cslol-tools":

![sg12.webp](/user-pictures/vector/general-guides/sfxguide/sg12.webp)

Inside, you will find a file called "wad-make.exe". Drag your parent folder (so Name for sfx and Name.en_US for voice-over) over the said file, and it will create a wad file next to your parent folder. So it should look like this:

![sg13.webp](/user-pictures/vector/general-guides/sfxguide/sg13.webp)

## Merging sound mods
Imagine a situation in which you're trying to install two sound effect mods. You downloaded them, added to cslol, and then this happens:
![problem.png](/user-pictures/wiko/problem.png)
You're confused. A mod changing Flash conflicts with a mod changing Recall? You turn on "Suppress install conflicts", and then one of the mods just doesn't work.
What should you do in this situation? Read what's below to find the answer.

### Extracting sounds from the first mod's soundbank file
First thing you wanna do is opening one of the files, and extracting all the sounds from it. To learn how to do this, I recommend scrolling up to these parts of the sound modding tutorial:
- [Opening the soundbank file](/specific-guide/sfx/full-sfx-guide#open-leagues-audio-files-using-bnk-extract)
- [Extracting sounds from the file](/specific-guide/sfx/full-sfx-guide#optional-extracting-leagues-audio-files)

After you do that, you will have a bunch of .wem files extracted. What you want to do is importing them into into the second mod's soundbank file.

### Importing the sounds to the second mod's soundbank file
Take the .wem files you just extracted. Using the bnk-gui, replace the ones with **names identical to the extracted .wem files** within the second mod file.
Replacing sounds has also been already covered in this tutorial. Check it out!
- [Replacing .wem files within the soundbank](/specific-guide/sfx/full-sfx-guide#replacing-sound-files)

Once you're done, just save your file (press the "Save as bnk/wpk" button) and add it to the game. How, you ask? Well, this has also been already covered! Just check this out:
- [Adding your sound mod to the game](/specific-guide/sfx/full-sfx-guide#place-your-modded-files-in-game)

If you did all of the steps above properly, you should have one mod file. Add it to league and enjoy.

## Sound Cutoff Info

Generally sounds play upon an event happening. Here's what cuts them off.
- If a sound is tied to a buff it will cut off when that buff wears off (Darius passive for example)
- mIsKillEvent: Decides if the audio cuts off when the animation ends. true = yes, false = no. True is the default value if the parameter doesn't exist.
 

# Sources

- Kaizen (JesusMessiah)
- Wiko
- Bud