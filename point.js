// export class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.fixedY = y;
//     this.speed = 0.1;
//     this.cur = 0;
//     this.max = Math.random() * 100 + 150; // 얼만큼 움직일 것인가
//   }

//   update() {
//     this.cur += this.speed; // 현재값을 speed만큼 증가
//     this.y = this.fixedY + Math.sin(this.cur) * this.max;
//   }
// }
export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = 0;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
