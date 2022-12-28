import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInput, deleteNumber, numberUser} from "../redux/action/action";
import Number from "../component/Value/Number";

function Pages(props) {
    const dispatch = useDispatch()
    const {value, numbers} = useSelector(state => state.numberReducer)

    const changeInputNumber = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const userNumber = () => {
        dispatch(numberUser(value))
    }

    const numberDelete = () => {
        dispatch(deleteNumber())
    }

    return (
        <div>
            <input onChange={changeInputNumber} type="number" value={value}/>
            <button onClick={userNumber}>add</button>
            <button onClick={numberDelete}>clear</button>
            {numbers.map((number, index) => <Number key={index} oneValue={number}/>)}
        </div>
    );
}

export default Pages;