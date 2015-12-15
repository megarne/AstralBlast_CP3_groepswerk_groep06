export default class Space extends Phaser.TileSprite {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'space');

    this.game.physics.arcade.enableBody(this);
    this.animations.add('sparkle');
    this.animations.play('sparkle', 1, true);
    this.body.allowGravity = false;
    this.body.immovable = true;
  }
}
