# OpenRCT2-PauseToggle-For-Multiplayer
Simple OpenRCT2 plugin that allows clients to pause multiplayer games via chat message.

## ✔️ Features
* Allows players to pause the game by sending a trigger word in the chat
* Default trigger words are "p" and "pause"
* Permissions are taken into account: only members of a group that has the "toggle_pause" permission can use the pause toggle (by default spectactors don't have this permission)
* A confirmation chat message is sent after the game was paused or unpaused

## 💡 Usage
* Download the latest Release and drop `PauseToggle-For-Multplayer.js` in the server's OpenRCT2 plugin folder (e.g. `...\documents\OpenRCT2\plugin\` when you host your game on Windows)
* That's it :) Now any player can pause or unpause the game by typing "pause" into the chat (or any other trigger word). But keep in mind that the cheat "Allow building in pause mode" only works for the host.

## 🛠 Customizing
You can change the trigger words or the confirmation messages (or anything else..) by editing the plugin with an editor.
* To change the trigger words, edit their Array: `const CNST_TriggerMessages = ["p", "pause", "YourTriggerWord"];`
* to change the confirmation messages, find and edit the two lines starting with `network.sendMessage("...`. Available colors are listed in the [OpenRCT2 source code](https://github.com/OpenRCT2/OpenRCT2/blob/develop/src/openrct2/localisation/FormatCodes.cpp).

Have fun! :)
