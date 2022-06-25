import React from "react";

class MainPageClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0, buttonStatus: false}
    }

    increment = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            ...this.state,
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <div>
                    <h5>{this.state.count}</h5>
                    <button onClick={this.increment}> + </button>
                    <button
                        onClick={this.decrement}
                    > - </button>
                </div>
            </div>
        );
    }
}

export default MainPageClass;