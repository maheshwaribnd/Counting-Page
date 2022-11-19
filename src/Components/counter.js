import { useState } from "react";

const Counting = (props) =>{
    let [count, setCount] = useState(0)

    function Increment() {
        setCount(count + 1)

        // if(setCount > 10) {
            
        // }
    }

    function Decrement() {
        
        if(count < 1) {
            alert(`You cann't Decrement value in Negative`)
        }
        else{
            setCount(count - 1)
        }
    }
    function GoToBack() {
        setCount(0)
    }

    let countStyle = {fontSize: '4em', margin: '75px', color: 'rgb(27, 25, 25)'}
    let buttonStyle = {fontSize : '1.8em',margin: '15px', borderRadius:'9px', padding:'6px 12px', boxShadow: '4px 4px 12px', border: '1px solid grey', textShadow: '1px 1px 5px', backgroundColor: 'rgb(125, 72, 99)'}

    return(
        <div className="countClass">
            <p style ={ countStyle }> {count} </p>
            <button style={ buttonStyle } onClick = {Increment}>{props.btn1Name}</button>
            <button style={ buttonStyle } onClick = {Decrement}>{props.btn2Name}</button>
            {count > 10 ? <button style={ buttonStyle } onClick = {GoToBack}>{props.btn3Name}</button> : null}
        </div>
    );
}

export default Counting;