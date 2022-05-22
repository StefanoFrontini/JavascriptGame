export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height;
    this.vy = 0;
    this.weight = 1;
    this.image = player;
    this.speed = 0;
    this.maxSpeed = 10; //pixels per frame
  }
  update(input) {
    // horizontal movement
    this.x += this.speed;
    if (input.includes("ArrowRight")) {
      this.speed = this.maxSpeed;
    } else if (input.includes("ArrowLeft")) {
      this.speed = -this.maxSpeed;
    } else {
      this.speed = 0;
    }
    this.x < 0 && (this.x = 0);
    this.x > this.game.width - this.width &&
      (this.x = this.game.width - this.width);
    // vertical movement

    input.includes("ArrowUp") && this.onGround() && (this.vy -= 25);
    this.y += this.vy;
    !this.onGround() ? (this.vy += this.weight) : (this.vy = 0);
  }
  draw(context) {
    context.drawImage(
      this.image,
      0,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height;
  }
}
