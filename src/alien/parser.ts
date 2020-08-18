import {DefaultSimpleParser} from '../parser';
import {DicePool, dicePoolMonoid} from './dice';

function letterToRolls(letter: string, occurrences: number): DicePool {
    if (letter === 't') {
        return new DicePool(0, occurrences);
    } else if (letter === 'k') {
        return new DicePool(occurrences, 0 );
    } else {
        throw new Error(`Unknown letter ${letter}`);
    }
}

export class SimpleParser extends DefaultSimpleParser<DicePool> {
    constructor() {
        super(
            'tk',
            letterToRolls,
            dicePoolMonoid,
            ['stress', 'skill'],
        );
    }
}
