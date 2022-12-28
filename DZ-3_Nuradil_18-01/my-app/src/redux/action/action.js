import {types} from "../types";


export const changeInput = (value) => {
    return {
        type: types.INPUT,
        payload: value
    }
}

export const numberUser = (value) => {
    return {
        type: types.NUMBER_USER,
        payload: value
    }
}

export const deleteNumber = () => {
    return {
        type: types.DELETE_NUMBER
    }
}

