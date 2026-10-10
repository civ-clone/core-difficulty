import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Difficulty from './Difficulty';
import GameDifficulty from './GameDifficulty';

export interface IGameDifficultyRegistry
  extends IEntityRegistry<GameDifficulty> {
  get(): typeof Difficulty | null;
  set(difficulty: typeof Difficulty): GameDifficulty;
}

/**
 * Holds the game's level: one `GameDifficulty`, or none before a level is chosen (and in a save made before levels
 * existed). A registry rather than a field so that the game's slot is saved like every other piece of runtime state.
 */
export class GameDifficultyRegistry
  extends EntityRegistry<GameDifficulty>
  implements IGameDifficultyRegistry
{
  constructor() {
    super(GameDifficulty);
  }

  get(): typeof Difficulty | null {
    const [gameDifficulty] = this.entries();

    return gameDifficulty ? gameDifficulty.difficulty() : null;
  }

  register(...entities: GameDifficulty[]): void {
    if (this.length + entities.length > 1) {
      throw new TypeError(
        'A game has one difficulty level: use `set` to change it.'
      );
    }

    super.register(...entities);
  }

  set(difficulty: typeof Difficulty): GameDifficulty {
    this.unregister(...this.entries());

    const gameDifficulty = new GameDifficulty(difficulty);

    this.register(gameDifficulty);

    return gameDifficulty;
  }
}

export const instance: GameDifficultyRegistry = new GameDifficultyRegistry();

export default GameDifficultyRegistry;
