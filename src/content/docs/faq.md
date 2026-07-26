---
title: FAQ
description: All information about becoming a Creator, posting mods, and frequently asked questions.
lastUpdated: 2026-07-26
tags:
  type: faq
  level: beginner
  subject: [posting, getting-started]
  tool: [cslol-manager]
---

## How to become a Creator

### Register an Account

- Create an Account by clicking "register" in the top right corner

### Create a Mod

_See [how to post a Mod](/faq#how-to-post-a-mod)_

- Go to your dashboard (top right corner and click dashboard)
- Click "Create mod" & follow the steps

### Review your mod

- Once finished, click "Send for Review"

After some time, once the mod got reviewed, you can get either of the following responses:

- **Review rejected**
  We tell you why your mod got rejected, fix those issues and resend for another review

- **Review approved**
  After you got your first mod approved, you can continue to post more afterwards without the waittime. You also automatically get the Creator role on your account.

## How to post a Mod

<a href="https://www.youtube.com/watch?v=BwR6KMdsHhU"><img src="https://img.youtube.com/vi/BwR6KMdsHhU/0.jpg" alt="Guide on how to post a mod"
style="width:50%" /></a>

_Video will open externally_

## Which license should I use?

The license tells everyone else what they may do with your mod without asking you first. Put the name from the first column below into the **License** field on Runeforge.

Every license listed here requires credit, so that part is never in question. What changes between them is the answer to three questions:

- **Commercial use** - may someone earn money from your work? `NC`, for non-commercial, says no.
- **Modifications** - may someone edit your mod and release their own version? `ND`, for no derivatives, says no.
- **Share-alike** - must an edited version carry this same license? `SA` says yes.

| License                                                               | Commercial use                      | Modifications                       | Share-alike                         |
| --------------------------------------------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)             | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-no">No</span>   |
| [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)       | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-yes">Yes</span> |
| [CC-BY-NC-4.0](https://creativecommons.org/licenses/by-nc/4.0/)       | <span class="rf-dot-no">No</span>   | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-no">No</span>   |
| [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | <span class="rf-dot-no">No</span>   | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-yes">Yes</span> |
| [CC-BY-ND-4.0](https://creativecommons.org/licenses/by-nd/4.0/)       | <span class="rf-dot-yes">Yes</span> | <span class="rf-dot-no">No</span>   | <span class="rf-dot-na">n/a</span>  |
| [CC-BY-NC-ND-4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) | <span class="rf-dot-no">No</span>   | <span class="rf-dot-no">No</span>   | <span class="rf-dot-na">n/a</span>  |

Share-alike reads n/a on the two `ND` licenses because they permit no edited version for it to apply to.

Two common picks:

- **CC-BY-4.0** if you want your work built on and only ask to be named for it.
- **CC-BY-NC-ND-4.0** if you want people to play your skin, but not sell it and not publish their own edit of it.

### Keep the package and the page in sync

Set the same license in your mod package as you set on the project page. A package travels on its own once it is downloaded - reuploaded somewhere else, passed around in a Discord, sitting in a mod folder a year later - and the license it carries is the only one anyone still has.

Every name in the table above is an SPDX identifier, which is what a mod project's manifest takes:

```json
"license": "CC-BY-NC-ND-4.0"
```

`.fantome` has nowhere to put it. Its `META/info.json` carries no license field, so if you publish fantome the project page is the only place the license exists. Worth stating it in the package's `META/README.md` too.

The LTK Wiki documents both in full: the [manifest schema](https://wiki.leaguetoolkit.dev/making-mods/mod-projects/#the-manifest) and the [fantome format](https://wiki.leaguetoolkit.dev/reference/mod-packages/fantome/).

### What the license does not cover

A Creative Commons license only covers the parts of the mod you made yourself. It grants nobody any right to Riot Games' assets, so a skin built on an existing champion's files is not yours to relicense in full.

## FAQ

### Safety & Security

#### Are custom skins safe to use?

- Riot's official statement is "Use at your own risk", which means, it is allowed to use them but Riot does not take responsibility with any third party problems occuring in game or affect your PC

- Runeforge has a moderation team and allows players to post mods for everyone else. We work with a Trusted status, which is a compromise between fast moderation and security

#### Can I get banned for using custom skins?

- As of right now, no bans regarding skins provided by Runeforge are registered

- Custom skin bans occured on **Korea** servers, on which all third party apps are prohibited including cs-lol

- Cs-lol is not tested on **Chinese** servers, if you want to try it there, use it at your own risk

- Bans can and will occur if you used "free" paid skins also know as [Skin Hacking](/faq#can-i-get-paid-skins-through-custom-skins-skin-hacking)

#### Vanguard was added, is it dangerous to use cs-lol?

- cs-lol does work with Vanguard, since its release in Patch 14.9, no bans or records regarding custom skins have been reported

- Make sure you always run the latest version:
  [Download the latest Cslol](https://github.com/LeagueToolkit/cslol-manager/releases)

### Skins

#### My favorite skin is missing

Sometimes Creators leave the community or stop maintaining them. If the skin isn't on the website, you can try and ask in our Discord Skin recovery Forum for help.

#### Can I get Paid skins through custom skins? (Skin Hacking)

No Skin hacking is prohibited by Riot Games. We highly recommend to not download and use those skins, since this can and will lead to bans from Runeforge and League of Legends.

### Help & Support

#### My cs-lol/skin/game is broken

Regarding any issue you might have with cs-lol you can either go to this [page](/core-guides/tools/cslolmanager#misc-guides) or visit our help forum in our Discord server.
For any other issue regarding crashes, broken skins or missing sounds, etc. please visit our Discord server for further help.

We have the Help Forum where you can ask for help about but not limited to:

- CsLol issues
- Broken skins
- Help with creating
- Issues regarding modding software we use

#### What happened to Killerskins?

- Killerskins had to shut down, Runeforge is its successor.
