import { GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess } from './actions';

describe('generateAuralUpdate', function() {
    it('Should return the action', function() {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', function() {
    it('Should return the action', function() {
        const correctAnswer = 77;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', function() {
    it('Should return the action', function() {
        const guess = 7;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);    
    });
});