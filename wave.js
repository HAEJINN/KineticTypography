import { Point } from "./point.js";

export class Wave {
  constructor(index, totalPoints, color) {
    // 고유의 인덱스를 가지고 웨이브가 차이를 두고 움직일 수 있도록
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    // 스테이지의 넓이와 높이 가져오기
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    // 화면의 중간에 그리기 위함
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // 포인트의 간격은 스테이지 넓이에서 토탈 포인트만큼을 나눈 값
    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    for (let i = 0; i < this.totalPoints; i++) {
      this.points[i] = new Point(
        this.index + i,
        this.pointGap * i,
        this.centerY
      );
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 0; i < this.totalPoints; i++) {
      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;

      if (i > 0 && i < this.totalPoints - 1) {
        this.points[i].update();
      }
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }
}
