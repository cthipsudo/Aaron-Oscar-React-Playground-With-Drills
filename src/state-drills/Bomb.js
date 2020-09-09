import React from 'react';

class Bomb extends React.Component {
    static defaultProps = {
        tabs: [],
        count: 10
    }
    state = {
        count: this.props.count
    }
    //Since we pass in index as an argument we need to format it like so.....
    handleButtonClick(index) {
        //console.log('cutton clicked!');
        this.setState({currentTabIndex:index});
    }
    componentDidMount(){
        console.log('componentDidMount');
        if(this.state.count > 0){
            setInterval(()=>{
                //console.log('setInterval');
                this.setState({
                    count: (this.state.count-1),
                })
            }, 1000)
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
        console.log(this.state.count);
        return (
            <div>
                {this.state.count % 2 === 1 && this.state.count > 0 && <p>Tock</p>}
                {this.state.count % 2 === 0 &&  this.state.count >= 2 && <p>Tick</p>}
                {this.state.count <= 0 && <p>Boom!</p>}
            </div>
        )
    }
}

export default Bomb;