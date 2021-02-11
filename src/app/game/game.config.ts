import Level from "../shared/models/level";

class GameConfig {
  levels: Level[] = [
    {
      targets: {
        ducks: 3
      },
      bullets: 5
    }
  ]
}

export default new GameConfig();