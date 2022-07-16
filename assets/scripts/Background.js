// Code was written with the help of the documentation and a bit of googling along with a few tutorials
//Out there on youtube and blogs to get hands on and learn the engine to make a short game.
//Creator : Mridul Arora
//NOTE THIS GAME PROJECT WAS MADE using version 2.2 using JS, you might have to update it .

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 150
    },

    // onLoad () {},

    start () {

    },

    move(node, offset) {
        // find the X coord of the right edge of the current sprite
        const spriteRightX = node.x + node.width / 2;
        // find the X coord of the left edge of the screen
        const screenLeftX = -cc.winSize.width / 2;

        // if the right X of the sprite is less than left X of the screen
        if (spriteRightX <= screenLeftX) {
            // swap the images
            node.x += node.width * 2 - offset;
        } else {
            // else shift current node with the specified offset
            node.x -= offset;
        }
    },

    update (dt) {
        this.node.children.forEach(node => {
            this.move(node, dt * this.speed);
        });
    },
});
