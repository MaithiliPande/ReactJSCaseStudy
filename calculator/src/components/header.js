import React from 'react';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerText : "Calculator"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.headerText}</h1>
            </div>
        );
    }
}
export default HeaderComponent;