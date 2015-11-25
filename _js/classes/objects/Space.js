export default class Space extends Phaser.TileSprite {
  constructor(game, x, y, width, height) {
    super(game, x, y, width, height, 'space');
    this.autoScroll(0,200);
    this.game.physics.arcade.enableBody(this);

    this.body.allowGravity = false;
    this.body.immovable = true;
  }
}
