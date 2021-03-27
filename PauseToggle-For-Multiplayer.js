/// <reference path="../openrct2.d.ts" />

// configuration constants - feel free to change!
const CNST_TriggerMessages = ["p", "pause"];    // the chat messages that will trigger the pause toggle

// Checks if the player's group has the "toggle_pause" permission
function checkPermission(player) {
    var lcl_Group = network.getGroup(network.getPlayer(player).group)    
    return (lcl_Group.permissions.indexOf("toggle_pause") != -1);
}

function main() {
    // only the server can process the pause toggle
    if (network.mode != "server") {
        console.log("Not running as server. Plugin not needed as client or in single player.");
    } else {
        context.subscribe("network.chat", function(e) {
            if ( (CNST_TriggerMessages.indexOf(e.message) != -1) && (checkPermission(e.player)) ) {

                // kp, wofür der 2te Param da ist.. true oder false scheint egal..
                // hier hat jemand nur {} übergeben: https://github.com/CorySanin/openrct2-remote-control/blob/master/src/remote-control.ts
                context.executeAction("pausetoggle", true)

                // it seems there's no way to check if the game is paused or unpaused..
                // to check manually > wait a few ms an check how many game ticks have passed.
                var lcl_TicksEarlier = date.ticksElapsed;
                var lcl_PlayerName = network.getPlayer(e.player).name;

                context.setTimeout(function() {
                    // check if the toggle paused or unpaused the game. (Pausing the game can take a tick, so it's okay if ticks advanced by one when pausing)
                    if (date.ticksElapsed <= (lcl_TicksEarlier + 1)) {
                        // game was paused
                        network.sendMessage("{YELLOW}>> " + lcl_PlayerName + " has paused the game <<")
                    } else {
                        // game was unpaused
                        network.sendMessage("{GREEN}>> " + lcl_PlayerName + " has unpaused the game <<")
                    }
                }, 250);
            }
        });
    }
}

registerPlugin({
    name: 'PauseToggle-For-Multiplayer',
    version: '1.1',
    authors: ['kscheel'],
    type: 'remote',
    licence: 'MIT',
    main: main
});
