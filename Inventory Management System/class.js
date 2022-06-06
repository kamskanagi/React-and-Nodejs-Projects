import React from "react"




class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }


    clickedButton = () => {
        this.setState({ count: this.state.count + 1 })
        console.log("clicked")
    }

    
    render() { 
        return (
            <div>

                <p> Click: {this.state.count}</p>
                <button className=" btn btn-primary" onClick={ ()=> clickedButton()}> Click me</button>
            </div>
         );
    }
}
 
export default test;