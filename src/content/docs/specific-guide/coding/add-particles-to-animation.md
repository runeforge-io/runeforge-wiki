---
title: Adding Particle events to specific animations
description: A guide on how to add particles to animations.
published: true
date: 2024-08-26T10:57:23.490Z
tags: animation, bin, particle
editor: markdown
dateCreated: 2024-02-22T17:31:46.922Z
---

# Overview
Adding Particle Events to Specific Animations (Specifically Recall but the method is applicable for any animation) This does not show you how to create idle particles, only particles that show up in animations like Dance, Recall, Joke, CAS_Effects, etc.


If you encounter any issues with this tutorial or you don’t understand part of it, you can ask for help on the Runeforge-Discord server

# Required Tools

An code editor of your choice, we recommend **Visual Studio Code**:
- [Choose any Code Editor *Visual Studio Code is recommended*](/core-guides/tools#code-bin-editing)
{.links-list}

If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
*Other editors work aswell, aslong as they can edit .py (Python) files.*

- [Ritobin *Tools to convert bin files into Python files*](/core-guides/tools/rito-bin)
{.links-list}

# Written Guide
You will need the `skin0.bin` inside data for both skin and animation bin.

For this example, I will just simply throw in the recall effects from Star Guardian Kai’sa (skin40) for Base Graves. The first thing I would recommend doing is adding your new particle system ([vfxsystemdefinitiondata](/specific-guide/coding/particle-dictionary#vfxsystemdefinitiondata)) to your skin0.bin DATA. We are grabbing the entire system, from the bracket above [vfxsystemdefinitiondata](/specific-guide/coding/particle-dictionary#vfxsystemdefinitiondata) all the way to the very last bracket after `particlepath`.

Note that some champions, especially older ones may not have any VFX in their skin0 bin, so be mindful of where you paste the new container. Below are examples of how you can navigate each case.


## **SKIN0.bin [...]/champion-name/_skins_**

**Old Champion with no VFX in skin0 bin**
![ptcl1.webp](/user-pictures/vector/general-guides/particle-animation/ptcl1.webp)
after that ^


**paste right here**


and before this v
![ptcl2.webp](/user-pictures/vector/general-guides/particle-animation/ptcl2.webp)

---

**New Champion with VFX in skin0 bin**

![ptcl3.webp](/user-pictures/vector/general-guides/particle-animation/ptcl3.webp)
after that, the very last particle container in the bin ^


**paste right here**


and before this v
![ptcl4.webp](/user-pictures/vector/general-guides/particle-animation/ptcl4.webp)

**After you’ve pasted**, Delete the 2nd and 3rd bracket at the end so there’s only one. It should look like:
![ptcl5.webp](/user-pictures/vector/general-guides/particle-animation/ptcl5.webp)

---
After pasting your particle system, make sure to check that there are no double brackets at the beginning and end.

![ptcl6.webp](/user-pictures/vector/general-guides/particle-animation/ptcl6.webp)

Once you have added your new particle system, for organiziation purposes, I recommend changing the system name which comes before “vfxsystemdefinitiondata” to whatever name you would like to give it. In this case I will be naming it `GravesRecall_VFX` and I will make sure to use the quotes as well.

![ptcl7.webp](/user-pictures/vector/general-guides/particle-animation/ptcl7.webp)

Then, you need to change at the bottom of the particle system, the `ParticleName` and `ParticleString`


These can be renamed to virtually anything, however I recommend using the same name as the VFX system at the top because that name may become hashed later on. These will not.


Do keep in mind that after converting the two files to bins, your names for the particle systems may become hashed in both the regular data bin AND animation when you open them back up again. This is totally normal. So if you aren’t doing all of this in one session, then I recommend taking screenshots of your names so you know how everything relates when you come back to do more editing at another time. Now, if you want to make changes to your vfxsystem, you will look for `particlename` instead and your name should be as it was before instead of being hashed.

![ptcl8.webp](/user-pictures/vector/general-guides/particle-animation/ptcl8.webp)

Once those steps are completed, navigate to your ResourceResolver section. Once again, make sure to use quotation marks when naming these. The first name can be anything but make sure that whatever comes after the equal sign matches with your VFX system name.

![ptcl9.webp](/user-pictures/vector/general-guides/particle-animation/ptcl9.webp)
*You are now done with skin0.bin in the skins folder.*

## **SKIN0.bin [...]/champion-name/_animations_**
now you will need to open the skin0.bin in animations.


In your animation bin, you will need to search for the animation that you would like to put the particles in. I am looking for anything with `recall`. You can search for `atomicclipdata` however these names may be hashed so you can instead look for the “.anm” file that is being used for that animation.

![ptcl10.webp](/user-pictures/vector/general-guides/particle-animation/ptcl10.webp)

From here, in order to add a `particleeventdata`, you will need to copy the following code below and paste underneath `mTrackDataName: hash = “Default`

```
		mEventDataMap: map[hash,pointer] = { 
			"GravesRecall_VFX" = ParticleEventData { 
  				mEffectKey: hash = "GravesRecall"                         
      		mParticleEventDataPairList: list[embed] = {                             
      				ParticleEventDataPair {                                 
          				mBoneName: hash = "C_Buffbone_GLB_Layout_Loc"                            
          		}                         
      		}                         
      		mStartFrame: f32 = 1                     
   		}                 
		}
  }
}        
```

![ptcl11.webp](/user-pictures/vector/general-guides/particle-animation/ptcl11.webp)

Graves by default has no particles in his recall.

If your champion already have an “mEventDataMap,” then you only need the particle event data part. Be mindful of the brackets, Visual Studio Code should be able to show you if there’s an issue.

![ptcl12.webp](/user-pictures/vector/general-guides/particle-animation/ptcl12.webp)

If your naming is not correct, the VFX simply won’t show in-game. It won’t cause a crash.
Make sure that the name before `ParticleEventData` matches the same as your VFX system name (GravesRecall_VFX)
and that the `mEffectKey` is the same as you listed in your bin resources for animation clip (GravesRecall)

*You are now done with skin0.bin in the animation folder.*

---
Convert both python files to bins and test!
<br>

<div align="left">
  <a href="https://www.youtube.com/watch?v=yrvOLr754HQ"><img src="https://img.youtube.com/vi/yrvOLr754HQ/0.jpg" alt="Guide on how to install LOL Maya Plugin"
style="width:75%"></a>
</div>

*External link to Youtube!*

---
Couple things to note, `mStartFrame` defines at what frame your particle will start. If you are unsure what frame you want it to start, load your skn/skl in Maya, load the anim, and then check which frame on the timeline. This is most useful for when you want an emote, a burst, or something to pop up in the middle of the recall rather than at the beginning. If you want this separate from your recall VFX system then you will have to create a new system and link again in resources, repeating all the same processes.

![ptcl13.webp](/user-pictures/vector/general-guides/particle-animation/ptcl13.webp)

There’s also `mEndFrame` which is self-explanatory.


Then also `mIsLoop`. This will basically make your particle loop. `mIsKillEvent` means that your particles will stop as soon as the animation stops. So for example, if I cancel my recall, then the VFX will stop completely (Not always needed).

![ptcl14.webp](/user-pictures/vector/general-guides/particle-animation/ptcl14.webp)

You can also show/hide submeshes during these events. In this example you can that Ahri has a `recall_fox` and a `recall_spirit` for material overrides that are initially hidden. We can tell the animation bin to show these at a certain frame for our recall animation.

![ptcl15.webp](/user-pictures/vector/general-guides/particle-animation/ptcl15.webp)

Here I’m adding a recall material for Katarina’s recall animation.

![ptcl16.webp](/user-pictures/vector/general-guides/particle-animation/ptcl16.webp)
# Sources

- Bearded Shepherd