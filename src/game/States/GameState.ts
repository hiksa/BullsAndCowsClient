export class GameState extends Phaser.State {
  public game: Phaser.Game;
  public background: Phaser.Sprite;

  public preload(): void {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('button', 'assets/button.png', 193, 71);
    this.background = this.add.sprite(0, 0, 'background');
  };

  public create(): void {
  };

  public update(): void {

  };
};
