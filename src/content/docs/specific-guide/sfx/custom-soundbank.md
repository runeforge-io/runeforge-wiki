---
title: Custom Soundbanks
description: Learn how to create custom soundbanks to add your own sound events in League of Legends! This guide will teach you to prepare audio files, package them using Wwise, and link them to in-game events like abilities, animations, and more.
lastUpdated: 2026-03-05
---

## How to create your own events/soundbanks

### Required Tools
- [Wwise2022.1.3 *Program to create or edit Sound banks for games*](/core-guides/tools/wwise)
- [Audacity *Audio Editor*](https://www.audacityteam.org/)
-   [BNK Extract *Program to extract.bnk files*](https://github.com/Morilli/bnk-extract-GUI/releases)
- [Visual Studio Code *Feature rich tool to read, create or edit code*](/core-guides/tools/visual-studio)
- [Notepad++ *Simple program to read, create or edit code*](/core-guides/tools/notepadplusplus)

## Tutorial 

### Adding the .wav files to Wwise2022.1.3
First, drag your `.wav` audio files into `Actor-Mixer Hierarchy` (or `Interactive Music Hierarchy` for Music) > `Default Work Unit*`, then click `Import`. 

Make sure all sounds are imported as object of mathing type. (switch will be on top of import window)
- Sound effects -> `Sound SFX` 
- Dialogues -> `Sound Voice`
- Music -> `Music Segment`
 and the `Audio Tab` is open shown on the left side.
![Importing .wav files into the Actor-Mixer Hierarchy in Wwise](/user-pictures/nyht/step1-ezgif.com-video-to-gif-converter.gif)

### Creating the Events
Then, select all the `SFX` that you've dragged in, right-click, hover over `New Event (One Event per Object)`, and select `Play`.

Next, go to the `Events tab` to check if the events for each audio have been created.
![Creating Play events and checking them in the Events tab](/user-pictures/nyht/step2-ezgif.com-video-to-gif-converter_(1).gif)

### Creating the Soundbanks for both Audio and Events
Then, go to the `SoundBanks tab`, right-click on `Default Work Unit*`, hover over `New Child`, and select `Soundbank`. 

Name the first soundbank something like `champion_sfx_audio` for the audio soundbank. 

After creating the first soundbank, copy and paste it, then rename the copy to something like `champion_sfx_events` for the events soundbank.

Now press `F7` to open the Soundbank Manager in the middle, where you can see the two soundbanks inside.
![Creating the two soundbanks in the SoundBank Manager](/user-pictures/nyht/step3-ezgif.com-video-to-gif-converter.gif)

### Adding the audios and the events to the soundbanks
(Split into two banks is optional, feel free to use one bank for everything)

#### Audio SoundBank

In the `SoundBanks Manager`, select `champion_sfx_audio`. You'll notice that the `Hierarchy Inclusion` is empty. 

While `champion_sfx_audio` is still selected in the `SoundBank Manager`, go to the `Audio Tab` and select all the audios that you've uploaded. 

Add them to the `champion_sfx_audio's hierarchy inclusion`. 

Then, select all of them and uncheck both `Events` and `Structures` and leave `Media` checked.

![Adding audios to the audio soundbank's hierarchy inclusion](/user-pictures/nyht/audio-ezgif.com-video-to-gif-converter.gif)
ㅤ
ㅤ
ㅤ
#### Events SoundBank

For the events, the process is the same as adding the audios to the `champion_sfx_audio`, but for this one, you’ll want to drag both the audios and events into the `champion_sfx_events' hierarchy inclusion`. 

In the `SoundBanks Manager`, select `champion_sfx_events`. You'll notice that the `Hierarchy Inclusion` is empty. 

While `champion_sfx_events` is still selected in the `SoundBank Manager`, go to the `Audio Tab` and select all the audios that you've uploaded. 

Add them to the `champion_sfx_events' hierarchy inclusion`. 

Now, go to the `Events tab`, select all the events you've created, and add them to the `champion_sfx_events' hierarchy inclusion`.

Then, select all of them and uncheck only the `Media`.

![Adding audios and events to the events soundbank's hierarchy inclusion](/user-pictures/nyht/events-ezgif.com-video-to-gif-converter.gif)

### Generating the audio and events soundbank files

Lastly, once you're ready, select both of your soundbanks, `champion_sfx_audio` and `champion_sfx_events`, and click `Generate All`. A window will pop up, and once it's done generating, you can click `Close`. 

After returning to the `SoundBank Manager`, right-click on any of your soundbanks, hover over `Open Containing Folder`, and select the `.bnk file`. 

This will open the folder, and you'll see your custom soundbank files. 

Now, it's time to add it to your custom skin.
![Generating the soundbanks and opening the containing folder](/user-pictures/nyht/finish-ezgif.com-video-to-gif-converter.gif)

## Additional Tips

### Adjusting Speaker Panning / 3D Spatialzation

Before we generate the audio and events soundbanks, let's first adjust the `3D spatialization` of the audio so it won't be heard across the entire Summoner's Rift.

First, open the `Audio Tab` and select one of your audio files to edit. Once selected, open the `Sound Property Editor` by pressing `F5`, and this window will appear.

![Sound Property Editor window in Wwise](/user-pictures/nyht/image_2024-12-09_215607665.png)

Next, switch tab from the `General Settings` tab to `Positioning`, and you'll see this. What you want to do is:

1. Enable `Listener Relative Routing`.
2. Set `3D Spatialization` to `Position + Orientation`.
3. Check `Attenuation`.

![Positioning tab with Listener Relative Routing and 3D Spatialization enabled](/user-pictures/nyht/image_2024-12-09_215828087.png)

Now you would want to click that double arrow and press `New...`

![Attenuation dropdown showing the New option](/user-pictures/nyht/image_2024-12-09_220059422.png)

The `New Attenuation` window will pop up. We want to create our own so we don’t have to repeat this step for the others. Name it something like `League_Audio3D`, and then click `OK.`

![Naming the new Attenuation in its creation window](/user-pictures/nyht/image_2024-12-09_220301661.png)

1. Now, once you've created the `Attenuation`, click `Edit....`
2. Adjust the curve to about `2000`-`3000` distance.
3. Volume should be at the top for about `1300`-`1700` units, then drop down
4. Remember to also disable `High Spread`

![Editing the attenuation curve to the recommended distances](/user-pictures/nyht/image_2024-12-09_220544127.png)



After setting up the `Attenuation`, your `Positioning` should look like this. Now, repeat these steps for your other audio files. Don't worry—the `Attenuation` you just created and edited is saved, so you can use it again without needing to recreate the graphs for each.

![Finished Positioning settings after applying the Attenuation](/user-pictures/nyht/image_2024-12-09_221600707.png)

Once you're done with all of that, you can go back and generate your soundbanks!

## Sources
- Nyht
