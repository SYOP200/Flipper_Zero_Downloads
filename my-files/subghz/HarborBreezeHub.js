const Fan = require('./Fan.js');
const FanRemote = require('./FanRemote.js');

function HarborBreezeHub(transmitter, fans) {
    this.transmitter = transmitter;
    this.fans = {};

    // Load all fans
    for (var fan in fans) {
        // Check if fan remote id has been already added.
        if (this.fans[fan] != null) {
            console.log("Warning, duplicate fan remote id detected: '" + fan + "'. Skipping fan.");
            continue;
        }
        console.log("Initializing fan remote id '" + fan + "'.");
        var fanObj = fans[fan];
        // Create new remote for fan.
        var remote = new FanRemote(this.transmitter, fan);
        // Create fan.
        this.fans[fan] = new Fan(fanObj.name, remote, fanObj.has_light, fanObj.dimmable, fanObj.max_dim_steps,
            fanObj.max_peed, fanObj.has_breeze, fanObj.has_rotation);
    }
    console.log("\nAuto fan initialization is disabled due to bugs.");
    console.log("Make sure all fans are in an off state before using the hub.");
}

module.exports = HarborBreezeHub;
