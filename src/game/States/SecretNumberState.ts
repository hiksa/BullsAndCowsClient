export class SecretNumberState extends Phaser.State {
  public game: PhaserInput.InputFieldGame;
  public background: Phaser.Sprite;
  public inputButton: Phaser.Button;
  public secretNumber: Phaser.KeyCode;
  public displayNumber: Phaser.Text;
  public input: any;

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

      this.game.add.plugin(new PhaserInput.Plugin(this.game, this.game.plugins));

      this.input = this.game.add.inputField(100, 200);
      this.attackButtonEventListeners();

      let text = "Enter a 4 digit number";
      let headerStyle = { font: "40px Arial", fill: "#006699", align: "center" };
      let displayNumberStyle = { font: "40px Arial", fill: "#003300", align: "center" };

      this.game.add.text(this.game.world.centerX - 220, 250, text, headerStyle);
      this.displayNumber = this.game.add.text(this.game.world.centerX - 75, 350, null, displayNumberStyle);

      this.inputButton = this.game.add.button(this.game.world.centerX - 95, 450, 'button', this.submitSecretNumber, this, 0);
  }

  public update(): void {
  }

  private numberButtonClick(key, number): void {
    if (this.displayNumber.text.length > 3) {
      return
    }

    this.displayNumber.setText(this.displayNumber.text.concat(number));
  }

  private backspaceButtonClick(key): void {
    let currentText = this.displayNumber.text;
    let newText = currentText.slice(0, -1);

    this.displayNumber.setText(currentText.slice(0, -1));
  }

  private submitSecretNumber(): void {
    if (this.displayNumber.text.length !== 4) {
      return
    }

    console.log('submitted');
  }

  private attackButtonEventListeners(): void {
    // Buttons
    let num0 = this.game.input.keyboard.addKey(Phaser.KeyCode.ZERO);
    let num1 = this.game.input.keyboard.addKey(Phaser.KeyCode.ONE);
    let num2 = this.game.input.keyboard.addKey(Phaser.KeyCode.TWO);
    let num3 = this.game.input.keyboard.addKey(Phaser.KeyCode.THREE);
    let num4 = this.game.input.keyboard.addKey(Phaser.KeyCode.FOUR);
    let num5 = this.game.input.keyboard.addKey(Phaser.KeyCode.FIVE);
    let num6 = this.game.input.keyboard.addKey(Phaser.KeyCode.SIX);
    let num7 = this.game.input.keyboard.addKey(Phaser.KeyCode.SEVEN);
    let num8 = this.game.input.keyboard.addKey(Phaser.KeyCode.EIGHT);
    let num9 = this.game.input.keyboard.addKey(Phaser.KeyCode.NINE);
    let backspace = this.game.input.keyboard.addKey(Phaser.KeyCode.BACKSPACE);
    let enter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);

    // Button click events
    num0.onDown.add(this.numberButtonClick, this, undefined, 0);
    num1.onDown.add(this.numberButtonClick, this, undefined, 1);
    num2.onDown.add(this.numberButtonClick, this, undefined, 2);
    num3.onDown.add(this.numberButtonClick, this, undefined, 3);
    num4.onDown.add(this.numberButtonClick, this, undefined, 4);
    num5.onDown.add(this.numberButtonClick, this, undefined, 5);
    num6.onDown.add(this.numberButtonClick, this, undefined, 6);
    num7.onDown.add(this.numberButtonClick, this, undefined, 7);
    num8.onDown.add(this.numberButtonClick, this, undefined, 8);
    num9.onDown.add(this.numberButtonClick, this, undefined, 9);
    backspace.onDown.add(this.backspaceButtonClick, this);
    enter.onDown.add(this.submitSecretNumber, this);
  }
};
