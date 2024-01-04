import React from 'react'

const Box = (props) => {

    const styles = {
        backgroundColor: props.on ? "black" : "blue",
        width: "90px",
        height: "90px",
        border: "1px solid black",
        display: "inline-block",
        margin: "10px",
        color: "white",
        textAlign: "center"
    }

    function name(event) {
        console.log(event)
    }

    return (
        <div style={styles}
            // onClick={name}
            onClick={props.toggle}
        >
            {props.on ? "On" : "Off"}
            
        </div>
    )
}

export default Box