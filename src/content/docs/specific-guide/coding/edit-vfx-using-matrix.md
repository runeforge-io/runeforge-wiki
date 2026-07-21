---
title: Using Matrix to edit VFX
description: A guide on how to add and edit the matrix system in bin files.
published: true
date: 2024-08-26T10:57:01.056Z
tags: vfx, bin, matrix
editor: markdown
dateCreated: 2024-02-21T22:39:18.777Z
---

If you encounter any issues with this tip or you don’t understand part of it, you can ask for help on the Runeforge Discord Server.

or you can contact guisai directly on discord

# Required Tools
- [Ritobin *Tools to translate bin files into Python files*](/core-guides/tools/rito-bin)
{.links-list}

An code editor of your choice:
- [Choose any Code Editor *Visual Studio recommended*](/core-guides/tools#coding-bin-editing)
{.links-list}

If you choose Visual Studio Code, you need the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) aswell!
*Other editors work aswell, aslong as they can edit .py (Python) files.*

You also **might** need Maya:
- [Maya 2023 *Plus LolMaya Plugin*](/core-guides/tools/maya)
{.links-list}

# Written Guide
## Add matrix to your bin
The first step is adding one default matrix that doesn’t change anything, it is just a blank matrix.
You will add that at the end of your `VfxSystemDefinitionData` as the video shows here
```
Transform: mtx44 = {
        1, 0, 0, 0
        0, 1, 0, 0
        0, 0, 1, 0
        0, 0, 0, 1
    }
```

- [Step one Video *External Youtube Link*](https://www.youtube.com/watch?v=VZ1L7Y_78-8)
{.links-list}

## How to use matrix
Transformation matrices are usually used in rendering applications due  to their mathematical properties. In games, their dimensions are usually  4×4 (16 floating point numbers) and they’re in row-major order (unlike  the typical matrices used in classical math which tend to be  column-major). They are called “transformation” matrices because they’re  a composition of translation, rotation and scale hence they can be used  to transform points in a rendering scene.

So you can use these transformation matrices while doing custom particles for any league character.

You can read more about [here](https://gamedev.stackexchange.com/questions/68522/what-does-a-matrix-represent)
### Editing the size

![matrixstep1.webp](/user-pictures/vector/general-guides/matrixstep1.webp)

#### Decrease
You just need to use a value that is smaller than 1, example of making a particle 2x smaller:
```
Transform: mtx44 = {
        0.5, 0, 0, 0
        0, 0.5, 0, 0
        0, 0, 0.5, 0
        0, 0, 0, 1
    }
```
#### Increase
Same thing as before, but now you use a value that is bigger than 1,  here is a example of making one particle 4x or 2x bigger:
```
Transform: mtx44 = {
        2, 0, 0, 0
        0, 2, 0, 0
        0, 0, 2, 0
        0, 0, 0, 1
    }
```
**Result**
![matrix2.webp](/user-pictures/vector/general-guides/matrix2.webp)

### Moving/ Editing xyz values

![matrix3.webp](/user-pictures/vector/general-guides/matrix3.webp)
#### Editing the height (Y-value)
By doing so, you move the Visual effect upwards.
```
Transform: mtx44 = {
        1, 0, 0, 0
        0, 1, 0, 0
        0, 0, 1, 0
        0, 250, 0, 1
    }
```
#### Editing the position (Z-value)
Doing that, moves the particle more to the left or the right.
```
Transform: mtx44 = {
        1, 0, 0, 0
        0, 1, 0, 0
        0, 0, 1, 0
        0, 0, 250, 1
    }
```
**Result**
*May vary, you need to test it a bit in order to get it right*
![matrix4.webp](/user-pictures/vector/general-guides/matrix4.webp)

### Rotation
For rotating matrix or any complex matrix you can use Maya to do it.
Using this code made by Crauzer to get a transformation as a matrix format.
```
global proc getTransform()
{
    string $objects[] = `ls -sl -l`;
    
    for($obj in $objects)
    {
        float $matrix[] = `xform -q -m`;
        print("Transform for '" + $obj + "':\n");
        print("Transform: mtx44 = {\n");
    
        for ($i=0; $i<16; $i++)
        {   
            $value = $matrix[$i];
            //$padded = python("'" + $value + "'" + ".ljust(12)");
            print($value);
            
            if ($i % 4 == 3)
            {
                print("\n");
            }
            else
            {
                print(", ");
            }
        }
        
        print("}\n");
    }
};
```
And then you type `getTransform` with the mesh selected.
- [Create Rotation Matrix Video Guide *External Youtube Link*](https://www.youtube.com/watch?v=VJlGIb_pQ14)
{.links-list}
# Sources

- GuiSai
- BlooJae