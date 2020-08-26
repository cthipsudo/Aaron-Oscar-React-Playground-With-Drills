import React from 'react';

const milliseconds = 1000; 
setInterval(function callback(){}, milliseconds);

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     foo: 'foo',
        //     hello: 'Hello, World',
        //     list: [1, 2, 3],
        //     obj: { nested: 'object', yes: true },
        // }
        this.state = {
            datetime: new Date() 
        };
        console.log('constructor');
    }
    componentDidMount(){
        console.log('componentDidMount');
        setInterval(()=>{
            //console.log('setInterval');
            this.setState({
                datetime: new Date()
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
        //console.log('render');
        return <div>{this.state.datetime.toLocaleString()}</div>
    }
}

export default TheDate;