import mainScene from  './mainScene.js'
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parert: 'game',
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {y:300},
            debug: false
        }
    },
    scene:[mainScene]
}
new Phaser.Game(config);