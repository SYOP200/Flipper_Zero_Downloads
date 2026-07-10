var Power = {
    "OFF": 'off',
    "ON": 'on'
};
module.exports.Power = Power;

var FanMode = {
    "SUMMER": 'ccw',
    "WINTER": 'cw'
};
module.exports.FanMode = FanMode;

function Fan(name, remote, hasLight, isDimmable, maxDimSteps, maxSpeed, hasBreeze, hasRotation) {
    this.name = name;
    this.remote = remote;

    // Store fan capabilities.
    this.hasLight = hasLight;
    this.dimmable = isDimmable;
    this.maxDimSteps = maxDimSteps;
    this.maxSpeed = maxSpeed;
    this.hasBreeze = hasBreeze;
    this.hasRotation = hasRotation;

    // Disable auto-init fan due to bugs.
    //this.resetFan();
}

module.exports = Fan;

// Reset fan states.
Fan.prototype.resetFan = function() {
    this.light = (this.hasLight) ? Power.OFF : null;
    this.lightBrightness = (this.hasLight) ? 0.01 : 0.0;
    this.fan = Power.OFF;
    this.fanSpeed = 3;
    this.fan_direction = FanMode.SUMMER;

    // Fan dimming disabled for now, due to bugs
    if (this.dimmable&&false) {
        // Reset fan light to off and set to 50% brightness.
        this.remote.adjustLight(12);
        this.remote.toggleLight();
        this.remote.adjustLight(Math.round(this.maxDimSteps/2));
        this.remote.toggleLight();
    } else {
        // if not dimmable, cannot force light off automatically
        console.log("Assuming fan (" + this.name + ") has it's light turned off.");
    }
    
    // Set fan direction to summer.
    this.remote.setFanRotation(FanMode.SUMMER);
    // Set fan speed to 3.
    this.remote.setFanSpeed(3);
    // Turn off fan.
    this.remote.toggleFan();
}

Fan.prototype.getJsonFan = function() {
    return {
        "remote_id": this.remote.remoteId,
        "has_light": this.hasLight,
        "dimmable": this.dimmable,
        "max_dim_steps": this.maxDimSteps,
        "max_speed": this.maxSpeed,
        "has_breeze": this.hasBreeze,
        "has_rotation": this.hasRotation
    };
};

Fan.prototype.turnOnLight = function() {
    if (!this.hasLight || this.light == Power.ON) {
        return;
    }
    this.remote.toggleLight();
    this.light = Power.ON;
};

Fan.prototype.adjustLightBrightness = function(brightness) {
    // Fan dimming disabled for now, due to bugs
    return;
    if (!this.hasLight || this.light != Power.ON) {
        return;
    }
    brightness = this.maxDimSteps * brightness;
    this.remote.adjustLight(brightness);
};

Fan.prototype.turnOffLight = function() {
    if (!this.hasLight || this.light == Power.OFF) {
        return;
    }
    this.remote.toggleLight();
    this.light = Power.OFF;
};

Fan.prototype.turnOnFan = function(speed=null) {
    if (this.fan == Power.ON) {
        if (speed == null) {
            this.setFanRotation(this.fan_direction);
            this.remote.setFanSpeed(this.fanSpeed); // set fan to saved speed.
            return;
        }
        speed = parseInt(speed);
        if (isNaN(speed) || this.fanSpeed == speed || speed < 1 || speed > this.maxSpeed) {
            return;
        }
        this.setFanRotation(this.fan_direction);
        this.remote.setFanSpeed(speed);
        this.fanSpeed = speed;
    } else {
        if (speed == null) {
            this.setFanRotation(this.fan_direction);
            this.remote.toggleFan();
            this.fan = Power.ON;
        } else {
            speed = parseInt(speed);
            if (isNaN(speed) || speed < 1 || speed > this.maxSpeed) {
                return;
            }
            this.setFanRotation(this.fan_direction);
            this.remote.setFanSpeed(speed);
            this.fan = Power.ON;
            this.fanSpeed = speed;
        }
    }
};

Fan.prototype.turnOffFan = function() {
    if (this.fan == Power.OFF) {
        return;
    }
    this.remote.toggleFan();
    this.fan = Power.OFF;
};

Fan.prototype.setFanRotation = function(rotateDir) { 
    if (rotateDir != FanMode.SUMMER && rotateDir != FanMode.WINTER) {
        return;
    }
    this.remote.setFanRotation(rotateDir);
    this.fan_direction = rotateDir;
};
