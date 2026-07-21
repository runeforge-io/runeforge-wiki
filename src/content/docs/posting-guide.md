---
title: All Guides for Posting
description: Posting pages in this wiki can be tricky, so here is a list for all the waays you can post here!
published: true
date: 2024-09-02T13:17:21.835Z
tags: 
editor: markdown
dateCreated: 2024-02-08T13:36:33.153Z
---

How do you post at this wiki? What can you do and what is to avoid. All those questions will be answered here!

---

# How to post?

Let's start by creating a page, make sure you know what you want to create. If you want e.g. create a guide for texturing, then you have to link it accordingly.

## Step 1

1. Create a new page by selecting the "New Page" Icon at your **top** menu bar.
2. For page location, select the page which fit's the guide *(example: for texturing I would choose Texturing Landing page*. Click that and the URL will refresh at the bottom of the new window. Now you enter a dash ("/") and choose a short name for your new page.
3. Make sure you checked out the "Before you click" section at this step!
4. Click "Select"

Now you created a new page which you can edit in the next steps.
<br>
### Before you click!
Make sure you checked the following:

- You selected the correct page, this can also mean that the path would be longer:
(examples: /texture/maya/*your name*), if there are categories already, you can select the fitting folder on the left side of the window aswell!
- make sure the choosen name is not yet used, otherways you will enter the edit mode of that page
- if you are unsure what to do, don't hesitate to ask before you click, we are always here to help and this is also easy to understand once you've done it!

## Step 2
Selecting the right Editor!
Since we are using Github, we need all pages in **Markdown**, don't use the Visual editor! You can also select a template!

Once you selected "markdown", the editor will open including a new settings window. This window contains of:
- The title
- The page description
- The path (this can be changed so even if you linked something wrong, nothing is cursed, mostly we will tell you and you have to fix it ^^)
- Tags (by clicking in the Tags field, you can select tags which were already created, make sure you use them aswell, this does not mean, that you aren't allowed to create new tags!)

At the top you can also see tabs: **Scheduling**, you can "unpublish" a page if you dont want to release it yet, however, dont forget about it. You can also publish unfinished guides, thats not an issue, as long as you keep working on it.

## Step 3
Edit the page. Its pretty simple, you can use any Markdown feature thats available. You might need to get used to it, but its not that bad once you get the hang of it. All you need to know here is, that **Headers** determin an anker point. 
<br>
# Edit existing pages
You are allowed to edit existing pages, which does not mean, that you can write whatever you want. You as contributor can't see the page history, the Mods can and will check. Abusing this feature will lead into an exclusion of the Runeforge Wiki permanently.
**You dont need extra permissions to edit or alter an existing page. However, if the content you added is simply wrong, anyone else can always change it again! Including Mods**
<br>
# Uploading and Managing Files
Since some guides might need files, you may want to upload them. In order to do that, you can create a folder with your name and manage it on your own. Here is a tiny guide on how to do that.

1. Get into edit mode of any page
2. Click on "instert assets" on the sidebar (the folder Icon)
3. Click on user-pictures
4. Click on "New Folder" 
![new-folder.png](/user-pictures/vector/new-post-guide/new-folder.png)

5. Name the folder with ur name (don't use spaces! use either: "_"; "-" or no space at all) *We can only create folders, not deleting them. If you made a mistake, its there... forever* and ever
6. Done, now you can upload any picture you want to use right there. You can also add new folders in your folder to organize it your way. 

**Remember: Don't use a space in naming your files and folders. They will do extra work in the future, so keep that in mind. Atm we dont have the ability do delete or rename folders!**

# Markdown editor
The usual markdown editor as known from other sites works here partially, so sometimes you may run into issues. This part is t understand how markdown works.

In order to get the hang of it here is what you can do in wiki.js: [Link](https://docs.requarks.io/en/editors/markdown) 

---

# Linking
The most important thing in a wiki is linking. Means, you need to link every piece of knowledge we own together so user can find them easily. The good part about wiki.js is, that linking is super easy to do here some examples:

`[Text which is clickable](the link)`
Thats basically it. 


## internal Link
Wiki js also features a cool feature on how to link pages of the same wiki, you dont need to wite the domain for example. All you need is the filepath (everything behind the .../en/ of any pagelink)

Example:
`[Link me to this page](/posting-guide)`

This will be printed out so:
[Link me to this page](/posting-guide)

Another great feature is the customizability of those links. You can add an anker point for example which would directly scroll to the header you want, simply add the #(ankerlink) behind it.

Example:
`[Link me to this position](/posting-guide#how-to-post)` << keep in mind, the # needs to be the whole title, without any spaces, they become a dash "-".

This will printed out so:
[Link me to this position](/posting-guide#how-to-post)

## Link list
Also a really fancy feature which is only doable in wiki.js is making a link a list, this is a bit more complicated to remember but you will get the hang of it. You need the core structure but as a list.

Example:
```
- [A Listed Link? *How fancy*](Your link)
- [And another Link? *This is crazy!*](Your link)
{.links-list}
```

Thats the print:

- [A Listed Link? *How fancy*]()
- [And another Link? *This is crazy!*]()
{.links-list}

## Picture Link

This is very simple and combines adding pictures and linking!

`[![Picture Name](Picture Link)](Link)`
Thats basically it.

Example:
`[![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =x200](/posting-guide)`
This will be printed like this:

[![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =x200)](/posting-guide)

# Pictures
Adding pictures is easy. Sidebar > Insert Asset > select and insert. Done.
Sometimes you need to resize it since its to small, there is a simple way.

Add a `=HEIGHTxWIDTH` with a space behind the image link.

Example:
`![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =350x200)`

Now this is what happens:
![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =350x200)

whoops, sometimes images shouldnt be scaled manually so its easier to just adjust the height or width. In that case leave the number for either one free. Lets change the width for example:
`![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =x200)`

Now this is printed:
![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =x200)
Perfect, now you're ready to add pictures!

As a third option you can also choose to use percentages. By simply adding a `=Number%x`

Example:
`![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =15%x)`

The printed version:
![emote+pg.nasus_v01.png](/user-pictures/vector/new-post-guide/emote+pg.nasus_v01.png =15%x)

# Videos
## Embed Video from Youtube

Copy paste the code into your page and change `VIDEO-ID` with the youtube link ID. Which would be everything after the "=" of the link!

![ytlinkid.png](/user-pictures/vector/new-post-guide/ytlinkid.png)

```
<div align="left">
  <a href="https://www.youtube.com/watch?v=VIDEO-ID"><img src="https://img.youtube.com/vi/VIDEO-ID/0.jpg" alt="Guide on how to use the simple hud template"
style="width:75%"></a>
</div>
```
## Upload and implement video
You can adjust the **width** if the video is to small. The only allowed file formats are: .mp4 and .mov, nothing else afaik. Just upload it into your folder like a picture and replace the videolink accordingly. If you happen to use .mov, then replace the "type" with video/mov.

```
<video width="480" height="auto" controls>
  <source src="/user-pictures/[videolink]4" type="video/mp4">
</video>
```
# Code

You can add code by adding "```" at the front and the end of the code snippet

```
Code
Blahblah
```



