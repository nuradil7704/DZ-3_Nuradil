import {types} from "../types";


const initialState = {
    value: "",
    lastValue: 0,
    numbers: []
}

export default function numberReducer (state=initialState, action) {
    switch (action.type) {
        case types.INPUT:
            return {...state, value: action.payload}
        case types.NUMBER_USER:
            return {...state, numbers: [...state.numbers, state.lastValue + + action.payload], lastValue: + state.lastValue + + action.payload, value: ""}
        case types.DELETE_NUMBER:
            return {...state, numbers: [], lastValue: 0, value: ""}
        default: return state
    }
}