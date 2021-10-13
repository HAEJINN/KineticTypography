import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3; // 웨이브 수
    this.totalPoints = 6; // 웨이브 당 포인트 수

    this.color = [
      "rgba(255,0,0,0.1)",
      "rgba(0,255,0,0.1)",
      "rgba(0,0,255,0.1)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
