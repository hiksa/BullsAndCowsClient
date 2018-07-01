export class GameState extends Phaser.State {
  public game: Phaser.Game;
  public background: Phaser.Sprite;

  public preload(): void {
    this.background = this.add.sprite(0, 0, 'background');
    this.cleanPreviusState();
  };

  public create(): void {
    let gameState = document.getElementById('gameState');
    gameState.style.display = 'block';
  };

  public update(): void {

  };

  private transitionToGameState(): void {
  };

  private cleanPreviusState() {
    let previusStateForm = document.getElementById('secretNumberState');
    previusStateForm.style.display = 'none';
  }
};
