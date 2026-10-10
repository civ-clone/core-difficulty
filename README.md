# core-difficulty

Difficulty levels. A ruleset declares its levels as subclasses of `Difficulty`, each with a static `level()` (0 is the
easiest), and registers them in the `AvailableDifficultyRegistry`. A game keeps the one it is played at in its
`GameDifficultyRegistry`, which holds a single `GameDifficulty` entity so that the level is saved with the game.

Rules read the level from the game's registry (`get()`), which is `null` until a level is chosen.
