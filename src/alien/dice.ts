import {IMonoid} from '../lang';
import {Roll} from '../roller';

export enum Dice {
    STRESS,
    SKILL,
}

export enum Faces {
    STRESS_FAILURE_1,
    FAILURE,
    SUCCESS,
}

export const SKILL_ROLL_TABLE: Faces[] = [
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.SUCCESS,
];

export const STRESS_ROLL_TABLE: Faces[] = [
    Faces.STRESS_FAILURE_1,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.FAILURE,
    Faces.SUCCESS,
];

export class DicePool {
    constructor(
        public skills: number = 0,
        public stress: number = 0,
    ) {
    }

    public toString(): string {
        return `skills: ${this.skills}, stress: ${this.stress}`;
    }
}

export class RollValues {
    constructor(
        public successes: number = 0,
        public failures: number = 0,
        public stressFailures: number = 0,
    ) {
    }
}

const skillAlienImages = new Map<Faces, string>();
skillAlienImages.set(Faces.SUCCESS, 'skill6')
skillAlienImages.set(Faces.FAILURE, 'skillfail');

const stressAlienImages = new Map<Faces, string>();
stressAlienImages.set(Faces.FAILURE, 'stressfail');
stressAlienImages.set(Faces.SUCCESS, 'stress6');
stressAlienImages.set(Faces.STRESS_FAILURE_1, 'stress1');

export const dieRollImages = new Map<Dice, Map<Faces, string>>();
dieRollImages.set(Dice.STRESS, stressAlienImages);
dieRollImages.set(Dice.SKILL, skillAlienImages);

const rollToRollResultMapping = new Map<Faces, Partial<RollValues>>();
rollToRollResultMapping.set(Faces.SUCCESS, {successes: 1});
rollToRollResultMapping.set(Faces.FAILURE, {failures: 1});
rollToRollResultMapping.set(Faces.STRESS_FAILURE_1, {stressFailures: 1});

export class InterpretedResult {
    constructor(
        public successes: number = 0,
        public failures: number = 0,
        public stressFailures: number = 0,
    ) {
    }
}

export function InterpretResult(result: RollValues): InterpretedResult {
    return new InterpretedResult(
        result.successes,
        result.failures,
        result.stressFailures,
    );
}

export function parseRollValues(roll: Roll<Dice, Faces>): RollValues {
    const result = rollToRollResultMapping.get(roll.face);
    if (result !== undefined) {
        return toRollResult(result);
    } else {
        throw new Error(`Unhandled Face ${roll.face}`);
    }
}

export function toRollResult(partial: Partial<RollValues>): RollValues {
    return Object.assign(new RollValues(), partial);
}

export const rollValuesMonoid: IMonoid<RollValues> = {
    identity: new RollValues(),
    combine: (roll1: RollValues, roll2: RollValues) => new RollValues(
        roll1.successes + roll2.successes,
        roll1.failures + roll2.failures,
        roll1.stressFailures + roll2.stressFailures,
    ),
};

export const dicePoolMonoid: IMonoid<DicePool> = {
    identity: new DicePool(),
    combine: (roll1: DicePool, roll2: DicePool) => new DicePool(
        roll1.skills + roll2.skills,
        roll1.stress + roll2.stress,
    ),
};
