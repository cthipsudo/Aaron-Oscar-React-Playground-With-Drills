import React from 'react';

class Tabs extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }
    static defaultProps = {
        tabs: []
    }
    state = {
        currentTabIndex: 0
    }
    //Since we pass in index as an argument we need to format it like so.....
    handleButtonClick(index) {
        //console.log('cutton clicked!');
        this.setState({currentTabIndex:index});
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => {
            //tab.name
            //tab.content
            //console.log(tab.name);
            return (
            <button key={index}onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
            );
        });
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex];
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}

export default Tabs;