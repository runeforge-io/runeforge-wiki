---
title: T/A posing older champions in Maya
description: This guide shows you how to T/A pose an older champion that might not be posed.
lastUpdated: 2024-12-31
tags:
  type: guide
  level: advanced
  subject: [3d-modelling, skeletons]
  tool: [maya]
---

This short guide will show you how to T/A pose older champions.

## 1. Import the champion you want to pose

Import the bound champion [.skn](/specific-guide/filetypes) and [.skl](/specific-guide/filetypes) you want to T/A-pose.

![Imported older champion standing in its default unposed stance](/user-pictures/bud/trynanopose.png)

## 2. Find a posed skin of the same champion

Find a skin that is in T/A pose and uses the same animations as the skin you want to pose (aka no legendary+ skin, just a more recent skin of the same champion).

Don't open it in the same Maya scene.

## 3. Import that skin's SKL

Import that skin's SKL to the scene with the champion you want to T/A-pose.

![Champion now T-posed after importing the newer skin's SKL](/user-pictures/bud/tryndapose.png)

:::note
Results may vary depending on the skeleton used, some parts may break.
If so try using a different skeleton from an older skin, yet newer than default.
:::
