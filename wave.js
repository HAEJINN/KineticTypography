import { Point } from "./point.js";

export class Wave {
  constructor() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.centerx = this.stageWidth / 2;
    this.centery = this.stageHeight / 2;
    this.point = new Point(this.centerx, this.centery);
  }

  resize(stageWidth, stageHeight) {
    // 스테이지의 넓이와 높이 가져오기
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    // 화면의 중간에 그리기 위함
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    // this.init();
  }

  init() {
    // 각각의 포인트가 화면 중간을 기준으로 그려지도록 정의
    // /this.point = new Point(this.centerX, this.centerY);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";

    this.point.update();

    ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    ctx.fill();
  }
}
