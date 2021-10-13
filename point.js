export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.05;
    this.cur = index;
    this.max = Math.random() * 100 + 150; // 얼만큼 움직일 것인가
  }

  update() {
    this.cur += this.speed; // 현재값을 speed만큼 증가
    this.y = this.fixedY + Math.sin(this.cur) * this.max; // 사인함수를 통해 위아래로 이동
  }
}
