import reducer from './reducer';
import { generateAuralUpdate, restartGame, makeGuess } from './actions';

describe('reducer', function() {
    const guesses = [];
    const feedback = 'Make your guess!';
    const auralStatus = '';

    it('Should set the initial state when nothing is passed in', function() {
        const state = reducer(undefined, { type: '__UNKOWN' });
        expect(state.guesses).toEqual(guesses);
        expect(state.feedback).toEqual(feedback);
        expect(state.auralStatus).toEqual(auralStatus);
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    });

    it('Should return the current state on an unkown action', function() {
        let currentState = {};
        const state = reducer(currentState, { type: '__UNKOWN' });
        expect(state).toBe(currentState);
    });

    describe('restartGame', function() {
        it('Should start a new game', function() {
            let state = {
                guesses: [0, 2, 4, 7],
                feedback: 'You got it!',
                auralStatus: 'You have made 4 guesses',
                correctAnswer: 7
            };
            const correctAnswer = 21;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual(guesses);
            expect(state.feedback).toEqual(feedback);
            expect(state.auralStatus).toEqual(auralStatus);
            expect(state.correctAnswer).toEqual(correctAnswer);
        });
    });

    describe('makeGuess', function() {
        it('Should make a guess', function() {
            let state = {
                guesses,
                feedback,
                correctAnswer: 100
            };

            state = reducer(state, makeGuess(25));
            expect(state.guesses).toEqual([25]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([25, 60]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([25, 60, 80]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([25, 60, 80, 95]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
            expect(state.feedback).toEqual("You got it!");
        });

        it('Can generate aural updates', function() {
            let state = {
                guesses: [21, 80, 7],
                feedback: "You're Hot!",
                auralStatus: ''
            };

            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(
                "Here's the status of the game right now: You're Hot! You've made 3 guesses. In order of most- to least-recent, they are: 7, 80, 21"
            );
        });
    });
});