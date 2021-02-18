import Level from "../shared/models/level";

class GameConfig {
  levels: Level[] = [
    {
      all: 10,
      batch: 1,
      bullets: 3,
      timeout: 10
    },
    {
      all: 10,
      batch: 2,
      bullets: 3,
      timeout: 10
    },
    {
      all: 15,
      batch: 3,
      bullets: 3,
      timeout: 10
    }
  ];
  height = 65;
  width = 100;
}

export default new GameConfig();