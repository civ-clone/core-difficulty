import AvailableDifficultyRegistry from '../AvailableDifficultyRegistry';
import Difficulty from '../Difficulty';
import GameDifficulty from '../GameDifficulty';
import GameDifficultyRegistry from '../GameDifficultyRegistry';
import { expect } from 'chai';

class Easy extends Difficulty {
  static level(): number {
    return 0;
  }
}

class Hard extends Difficulty {
  static level(): number {
    return 1;
  }
}

describe('GameDifficultyRegistry', (): void => {
  it('has no level until one is set', (): void => {
    expect(new GameDifficultyRegistry().get()).null;
  });

  it('holds the level that was set, replacing any before it', (): void => {
    const registry = new GameDifficultyRegistry();

    registry.set(Easy);
    registry.set(Hard);

    expect(registry.get()).equal(Hard);
    expect(registry.length).equal(1);
  });

  it('refuses a second entry', (): void => {
    const registry = new GameDifficultyRegistry();

    registry.register(new GameDifficulty(Easy));

    expect(() => registry.register(new GameDifficulty(Hard))).throw(TypeError);
  });
});

describe('AvailableDifficultyRegistry', (): void => {
  it('lists the levels easiest first', (): void => {
    const registry = new AvailableDifficultyRegistry();

    registry.register(Hard, Easy);

    expect(registry.sorted()).eql([Easy, Hard]);
  });
});
