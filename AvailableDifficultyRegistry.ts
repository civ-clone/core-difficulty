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

export class AvailableDifficultyRegistry
  extends ConstructorRegistry<Difficulty>
  implements IAvailableDifficultyRegistry
{
  constructor() {
    super(Difficulty);
  }

  sorted(): (typeof Difficulty)[] {
    return (this.entries() as unknown as (typeof Difficulty)[]).sort(
      (a: typeof Difficulty, b: typeof Difficulty): number =>
        a.level() - b.level()
    );
  }
}

export const instance: AvailableDifficultyRegistry =
  new AvailableDifficultyRegistry();

export default AvailableDifficultyRegistry;
