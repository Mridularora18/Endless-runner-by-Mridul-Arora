// Code was written with the help of the documentation and a bit of googling along with a few tutorials
//Out there on youtube and blogs to get hands on and learn the engine to make a short game.
//Creator : Mridul Arora
//NOTE THIS GAME PROJECT WAS MADE using version 2.3.2 using JS, you might have to update it .

let Globals = require('Globals');

cc.Class({
    extends: cc.Component,

    properties: {
        hero: {
            default: null,
            type: cc.Node
        },
        score: {
            default: null,
            type: cc.Label
        },
        music: {
            default: null,
            type: cc.AudioClip    
        },
        sound: {
            default: null,
            type: cc.AudioClip
        }
    },

    onLoad () {
        if (!cc.audioEngine.isMusicPlaying()) {
            cc.audioEngine.playMusic(this.music, true);
        }

        this.enablePhyscis();
        Globals.score = 0;

        this.hero.on('score', () => {
            cc.audioEngine.play(this.sound);
            ++Globals.score;
            this.score.string = Globals.score.toString();
        });

        this.hero.once('die', () => {
            cc.director.loadScene('Score');
        });
    },

    enablePhyscis() {
        let physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;

        let collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;

        // cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
        //     cc.PhysicsManager.DrawBits.e_pairBit |
        //     cc.PhysicsManager.DrawBits.e_centerOfMassBit |
        //     cc.PhysicsManager.DrawBits.e_jointBit |
        //     cc.PhysicsManager.DrawBits.e_shapeBit;
    },

    start () {

    },

    // update (dt) {},
});
