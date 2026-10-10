"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDifficulty = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
/**
 * The level a game is played at. An entity so that it's saved with the game: the level is a class, which a save writes
 * by name.
 */
class GameDifficulty extends DataObject_1.DataObject {
    constructor(difficulty) {
        super();
        this._difficulty = difficulty;
        this.addKey('difficulty');
    }
    difficulty() {
        return this._difficulty;
    }
}
exports.GameDifficulty = GameDifficulty;
exports.default = GameDifficulty;
//# sourceMappingURL=GameDifficulty.js.map