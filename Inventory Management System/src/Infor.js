import React from "react";

class Infor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            title: "Hello",
        }

    }


    buttonPressed() {
        this.setState({
            count: this.state.count +1,


        })
    }

   
    render() { 
        return <div>
            
            <p>Counter: {this.state.count}</p>
            <button onClick = {() => this.buttonPressed() }  >Update Counter</button>
     

        </div>;
    }
}
 
export default Infor;