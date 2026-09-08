---
title: Lolmaya Errorlist
description: All common and uncommon errors listed and their solutions
lastUpdated: 2025-01-23
tags:
  type: troubleshooting
  level: intermediate
  subject: [3d-modelling]
  tool: [maya]
---

<center>

:::caution
This page is still W.I.P. we will add/update more errors in time.
:::

</center>




:::note
Disclaimer: This list is only featuring Errors that are caused by lolmaya! If you need help with common Maya errors, please click the link below.
:::

- [Maya errorlist](/core-guides/tools/maya/errorlist)

## Common Errors

### No skin cluster found
![No skin cluster found error message in Maya](./no_skin_cluster.png)
This error occurs when the mesh/group inside the scene is not bound with the skeleton. 

- **Fix**
To fix this simply select the mesh/group and bind it together with the scene's armature in the skin -> bind skin menu.

### Mesh contains vertices that have weight on 4+ influences
![Error about vertices weighted to more than 4 influences](./4_influences.png)
This error occurs when the mesh that was bound to the skeleton is bound with settings allowing for vertices to have influences from more than 4 bones. League only supports up to 4 influences and you should be binding/weighting your skin around that. 

- **Fix**
The easiest solution if you run into this issue is to open the LoLMaya shelf in Maya and press the button with the icon of the number 4. This will force every vertex that has 4+ influence to only 4.

### Too many vertices found
![Too many vertices found error message in Maya](./too_many_verts.png)
This error occurs when the vertex count exceeds 65535. League .skn format only supports up to 16^^4^ vertices which is 65356. 

- **Fix**
The only way to resolve this error is to delete parts or decimate your mesh until it's under the limit. This error can also occur if your model has too many UVs. Around 50k UV's is the limit.

### Mesh contains X vertices shared by multiple materials
![Error about vertices shared by multiple materials](./multiplemats.png)
This error occurs when any vertices on the mesh have more than 1 material applied and making the mesh itself have more than 1 material in total.

- **Fix**
This error can be fixed in multiple ways. If you haven't started weighting your skin yet you can use the recommended auto fix shared vertices button on the LolMaya shelf.
If you however did weights this isn't recommended because the option will unbind your skin making you redo the weighting.
.
Instead you can adjust the UV if needed then select the mesh and assign a new material. This will keep your weights while overriding the old materials and making the mesh have only one.