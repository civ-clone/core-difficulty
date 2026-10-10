"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.AvailableDifficultyRegistry = void 0;
const ConstructorRegistry_1 = require("@civ-clone/core-registry/ConstructorRegistry");
const Difficulty_1 = require("./Difficulty");
class AvailableDifficultyRegistry extends ConstructorRegistry_1.ConstructorRegistry {
    constructor() {
        super(Difficulty_1.default);
    }
    sorted() {
        return this.entries().sort((a, b) => a.level() - b.level());
    }
}
exports.AvailableDifficultyRegistry = AvailableDifficultyRegistry;
exports.instance = new AvailableDifficultyRegistry();
exports.default = AvailableDifficultyRegistry;
//# sourceMappingURL=AvailableDifficultyRegistry.js.map