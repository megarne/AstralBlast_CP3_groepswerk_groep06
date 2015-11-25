export default class Enemie extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, 'enemie', frame);

    this.animations.add('vuur');
    this.animations.play('vuur', 12, true);

    this.anchor.setTo(0.5, 0.5);

    this.game.physics.arcade.enableBody(this);

    
    
  }

}
