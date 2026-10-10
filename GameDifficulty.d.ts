import {
  DataObject,
  IDataObject,
} from '@civ-clone/core-data-object/DataObject';
import Difficulty from './Difficulty';
export interface IGameDifficulty extends IDataObject {
  difficulty(): typeof Difficulty;
}
/**
 * The level a game is played at. An entity so that it's saved with the game: the level is a class, which a save writes
 * by name.
 */
export declare class GameDifficulty
  extends DataObject
  implements IGameDifficulty
{
  private _difficulty;
  constructor(difficulty: typeof Difficulty);
  difficulty(): typeof Difficulty;
}
export default GameDifficulty;
