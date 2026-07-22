---
title: A texture swapping tutorial
description: An advanced tutorial on how to swap textures using Static Materials and Particle events
lastUpdated: 2025-04-01
---

## Texture swapping with bins
:::caution
This is a complex tutorial involving bin editing.
:::


### 1. Getting ur staticmaterials ready
U thought we were swapping textures? I wish it was that simple.
You need to copy the existing staticmaterial associated for the base texture for that mesh. For Yuumi's body, its ```Orb_Cat_inst```. U can find it by searching for the texture name in the skin bin
![Searching the skin bin for the base texture's StaticMaterial](/user-pictures/fbs/findstaticmat.png)
After that, you copy the entire thing, paste it somewhere, rename things and add your texture file to it. In my case, the name is gonna be "mine", as well as the texture file.
![Copied StaticMaterial renamed and pointing to the new texture](/user-pictures/fbs/examplestaticmat.png)

### 2. Vfx

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
![Animation bin showing where to paste the event snippets](/user-pictures/fbs/animbinex.png)
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
![Hide and Show ParticleEventData entries pasted into the animation bin](/user-pictures/fbs/2025-02-14_02-47.png)

After this, you should be good to go if you did everything right and replaced everything right.
    