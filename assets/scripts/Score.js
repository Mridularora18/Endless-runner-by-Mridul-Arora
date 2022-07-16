// Code was written with the help of the documentation and a bit of googling along with a few tutorials
//Out there on youtube and blogs to get hands on and learn the engine to make a short game.
//Creator : Mridul Arora
//NOTE THIS GAME PROJECT WAS MADE using version 2.2 using JS, you might have to update it .

let Globals = require('Globals');

cc.Class({
    extends: cc.Component,

    properties: {
        scoreLabel: {
            default: null,
            type: cc.Label
        },
        bestScoreLabel: {
            default: null,
            type: cc.Label
        }
    },

    // onLoad () {},

    start () {
        let bestScore = localStorage.getItem('score') || 0;

        if (!bestScore || Globals.score > bestScore) {
            bestScore = Globals.score;
            localStorage.setItem('score', bestScore);
        }

        this.scoreLabel.string = `Score: ${Globals.score.toString()}`;
        this.bestScoreLabel.string = `Best Score: ${bestScore.toString()}`;
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            cc.director.loadScene('Game');
        });
    },

    // update (dt) {},
});
