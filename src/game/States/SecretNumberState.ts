export class SecretNumberState extends Phaser.State {
  public game: Phaser.Game;
  public background: Phaser.Sprite;
  public inputSecretNumber: HTMLInputElement;

  constructor() {
    super();
  }

  public preload(): void {
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('button', 'assets/button.png', 193, 71);
  }

  public create(): void {
      this.background = this.add.sprite(0, 0, 'background');
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;

      let divState = document.getElementById('secretNumberState');
      divState.style.display = 'block';

      this.inputSecretNumber = <HTMLInputElement>document.getElementById('secret-number-input');
  }

  public update(): void {

  }

  private submitSecretNumber(): void {


  }
};
