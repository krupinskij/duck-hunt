import Level from "../shared/models/level";

class GameConfig {
  levels: Level[] = [
    {
      targets: {
        ducks: 3
      },
      bullets: 5
    }
  ];
  height = 65;
  width = 100;
}

export default new GameConfig();