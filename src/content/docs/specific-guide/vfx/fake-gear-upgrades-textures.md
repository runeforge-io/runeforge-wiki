---
title: A texture swapping tutorial
description: An advanced tutorial on how to swap textures using Static Materials and Particle events
published: true
date: 2025-04-01T14:26:30.281Z
tags: vfx, bin, material
editor: markdown
dateCreated: 2025-01-29T08:25:10.357Z
---

# Texture swapping with bins
> This is a complex tutorial involving bin editing.
{.is-warning}


## 1. Getting ur staticmaterials ready
U thought we were swapping textures? I wish it was that simple.
You need to copy the existing staticmaterial associated for the base texture for that mesh. For Yuumi's body, its ```Orb_Cat_inst```. U can find it by searching for the texture name in the skin bin
![findstaticmat.png](/user-pictures/fbs/findstaticmat.png)
After that, you copy the entire thing, paste it somewhere, rename things and add your texture file to it. In my case, the name is gonna be "mine", as well as the texture file.
![examplestaticmat.png](/user-pictures/fbs/examplestaticmat.png)

## 2. Vfx

You will need this code snippet. I recommend pasting it close to your staticmaterial so you have everything in one place

```
    "Hide" = VfxSystemDefinitionData {
        timeBeforeFirstEmission: f32 = 1
        complexEmitterDefinitionData: list[pointer] = {
            VfxEmitterDefinitionData {
                rate: embed = ValueFloat {
                    constantValue: f32 = 1
                }
                particleLifetime: embed = ValueFloat {
                    constantValue: f32 = 1e+14
                }
                isSingleParticle: flag = true
                emitterName: string = "Override"
                meshRenderFlags: u8 = 0
                materialOverrideDefinitions: list[embed] = {
                    VfxMaterialOverrideDefinitionData {
                        priority: i32 = 1
                        subMeshName: option[string] = {
                            "Yourmaterialnamefrommaya"
                        }
                        material: link = "Characters/urchamp/Skins/urskin/Materials/urstaticmaterial"
                        transitionSample: f32 = 1
                    }
                }
            }
        }
        particleName: string = "Hide"
        particlePath: string = "Hide"
    }
    "Show" = VfxSystemDefinitionData {
        timeBeforeFirstEmission: f32 = 1
        complexEmitterDefinitionData: list[pointer] = {
            VfxEmitterDefinitionData {
                rate: embed = ValueFloat {
                    constantValue: f32 = 1
                }
                particleLifetime: embed = ValueFloat {
                    constantValue: f32 = 1e+14
                }
                isSingleParticle: flag = true
                emitterName: string = "Override"
                meshRenderFlags: u8 = 0
                materialOverrideDefinitions: list[embed] = {
                    VfxMaterialOverrideDefinitionData {
                        priority: i32 = 1
                        subMeshName: option[string] = {
                            "Yourmaterialnamefrommaya"
                        }
                        material: link = "Characters/urchamp/Skins/urskin/Materials/defaultstaticmaterial"
                        transitionSample: f32 = 1
                    }
                }
            }
        }
        particleName: string = "Show"
        particlePath: string = "Show"
    }
```
You will also need this in ResourceResolver

```
            "Hide" = "Hide"
            "Show" = "Show"
```
After this, you need the animation bin. Find the animation you want to use as a toggle and paste these code snippets like this.
![animbinex.png](/user-pictures/fbs/animbinex.png)
1.
```
                    "Hide" = ParticleEventData {
                        mEffectKey: hash = "Hide"
                        mParticleEventDataPairList: list[embed] = {
                            ParticleEventDataPair {}
                        }
                        mIsLoop: bool = false
                        mIsKillEvent: bool = false
                    }
```

2.
```
                    "Show" = ParticleEventData {
                        mEffectKey: hash = "Show"
                        mParticleEventDataPairList: list[embed] = {
                            ParticleEventDataPair {}
                        }
                        mIsLoop: bool = false
                        mIsKillEvent: bool = false
                    }
```
![2025-02-14_02-47.png](/user-pictures/fbs/2025-02-14_02-47.png)

After this, you should be good to go if you did everything right and replaced everything right.
    