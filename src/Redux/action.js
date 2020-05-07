import {INCREMENT, DECREMENT} from './types';

export const incrementValue = () => ({
    type: INCREMENT,
});

export const decrementValue = () => ({
    type: DECREMENT,
});

