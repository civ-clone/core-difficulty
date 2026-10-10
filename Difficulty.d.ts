/**
 * A difficulty level. A ruleset declares its levels as subclasses and registers them in the
 * `AvailableDifficultyRegistry`; a game holds the one chosen in its `GameDifficultyRegistry`.
 *
 * The level is a class rather than an instance, like a `Government` or an `Advance` a player is researching, so a save
 * records it by name and a rule compares it by identity or by `level()`.
 */
export declare class Difficulty {
  /**
   * Where the level sits among the ruleset's levels: 0 is the easiest, and each step up is harder.
   */
  static level(): number;
}
export default Difficulty;
