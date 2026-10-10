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
export declare class GameDifficultyRegistry
  extends EntityRegistry<GameDifficulty>
  implements IGameDifficultyRegistry
{
  constructor();
  get(): typeof Difficulty | null;
  register(...entities: GameDifficulty[]): void;
  set(difficulty: typeof Difficulty): GameDifficulty;
}
export declare const instance: GameDifficultyRegistry;
export default GameDifficultyRegistry;
