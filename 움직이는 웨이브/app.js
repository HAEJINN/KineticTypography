import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    //
    this.canvas = document.createElement("canvas");
    // ctx는 context를 뜻한다.
    // 컨텍스트는 캔버스의 그리기 영역이면서 그리기 메서드를 가지는 객체 -> 인자로 원하는 컨텍스트의 종류를 전달한다.
    // '2d'로 지정시 CanvasRenderingContext2D 를 얻는다.
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    this.resize();

    /* requestAnimationFrame() 은
      브라우저에게 수행하기를 원하는 애니메이션을 알리고 다음 리페인트가 진행되기 전에 해당 애니메이션을 업데이트하는 함수를 호출
      이 메소드는 리페인트 이전에 실행할 콜백을 인자로 받는다.

      브라우저 화면 상에 무언가를 렌더할 때, 위치나 색을 계산하는 과정을 '리플로우'라고 하며 이 계산을 실제로 수행하여 브라우저상에 그리는 것을 '리페인트'라고 한다.
      */
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 캔버스를 더블사이즈로 지정해 레티나 디스플레이에서도 잘 보일 수 있게 만들어준다.
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    // 캔버스 클리어
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
