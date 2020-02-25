import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hii there"
        }
        // binding using the constructor
        this.clickhandler = this.clickhandler.bind(this)
    }
    
// clickhandler(){
//     this.setState({
//         message:"Bye There"
//     })
// }

// alternate way to write clickhandler

clickhandler = () => {
    this.setState({
        message:"Goodbye"
    })
}

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* direct binding to the event ie.. clickhandler using the bind keyword */}
                {/* <button onClick ={this.clickhandler.bind(this)}> Binding using bind keyword</button> */}

                {/* Binding to clickhandler using the arrow function */}
                {/* <button onClick ={()=> this.clickhandler()}>Binding using arrow functions</button> */}

                {/* binding using the constructor */}
                <button onClick ={this.clickhandler}> Binding using constructor</button>
            </div>
        )
    }
}

export default EventBind
