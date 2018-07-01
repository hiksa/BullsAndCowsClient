export class TitleState extends Phaser.State {
  public game: Phaser.Game;
  public background: Phaser.Sprite;
  public buttonStart: Phaser.Button;

  constructor() {
    super();
  }

  public preload(): void {
    this.game.load.image('sky', 'assets/sky.png');
  }

  public create(): void {
    this.background = this.game.add.sprite(0, 0, 'sky');
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    this.buttonStart = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.transitionToQueueState, this, 0);
    let text = "- Click to enter queue -";
    let style = { font: "40px Arial", fill: "#ff0044", align: "center" };
    this.game.add.text(this.game.world.centerX - 220, 250, text, style);
  };

  public update(): void {

  }

  private transitionToQueueState(): void {
    this.game.state.start('SecretNumberState');
  }
};
