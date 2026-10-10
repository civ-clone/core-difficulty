import {
  ConstructorRegistry,
  IConstructorRegistry,
} from '@civ-clone/core-registry/ConstructorRegistry';
import Difficulty from './Difficulty';
export interface IAvailableDifficultyRegistry
  extends IConstructorRegistry<Difficulty> {
  /** The levels, easiest first. */
  sorted(): (typeof Difficulty)[];
}
export declare class AvailableDifficultyRegistry
  extends ConstructorRegistry<Difficulty>
  implements IAvailableDifficultyRegistry
{
  constructor();
  sorted(): (typeof Difficulty)[];
}
export declare const instance: AvailableDifficultyRegistry;
export default AvailableDifficultyRegistry;
