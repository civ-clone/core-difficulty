"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.GameDifficultyRegistry = void 0;
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
const GameDifficulty_1 = require("./GameDifficulty");
/**
 * Holds the game's level: one `GameDifficulty`, or none before a level is chosen (and in a save made before levels
 * existed). A registry rather than a field so that the game's slot is saved like every other piece of runtime state.
 */
class GameDifficultyRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(GameDifficulty_1.default);
    }
    get() {
        const [gameDifficulty] = this.entries();
        return gameDifficulty ? gameDifficulty.difficulty() : null;
    }
    register(...entities) {
        if (this.length + entities.length > 1) {
            throw new TypeError('A game has one difficulty level: use `set` to change it.');
        }
        super.register(...entities);
    }
    set(difficulty) {
        this.unregister(...this.entries());
        const gameDifficulty = new GameDifficulty_1.default(difficulty);
        this.register(gameDifficulty);
        return gameDifficulty;
    }
}
exports.GameDifficultyRegistry = GameDifficultyRegistry;
exports.instance = new GameDifficultyRegistry();
exports.default = GameDifficultyRegistry;
//# sourceMappingURL=GameDifficultyRegistry.js.map