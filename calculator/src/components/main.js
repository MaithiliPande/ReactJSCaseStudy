import React from 'react';
import OutputBox from './outputBox';


class MainComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            result : '' 
        }
    }
    addToResult = (event) => {

        console.log(event.target.value);
        this.setState({
            result : this.state.result + event.target.value
        })
    }
    calculate = () => {
        console.log("calculate method called");
        
        this.setState({
            result: eval(this.state.result).toString()
        })
        console.log(this.state.result);
    }
    allClear = () => {
        this.setState({
            result : ''
        })
    }
    render(){
        return(
            <div>
                    <div style={{marginBottom:"30px"}}>
                        <OutputBox result = {this.state.result}/>
                    </div>
                    <div>
                        <div style={{marginBottom:"5px"}}>
                            <button value="1" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>1</button>
                            <button value="2" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>2</button>
                            <button value="3" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>3</button>
                            <button value="+" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>+</button>
                        </div>
                        <div style={{marginBottom:"5px"}}>
                            <button value="4" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>4</button>
                            <button value="5" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>5</button>
                            <button value="6" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>6</button>
                            <button value="-" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>-</button>
                        </div>
                        <div style={{marginBottom:"5px"}}>
                            <button value="7" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>7</button>
                            <button value="8" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>8</button>
                            <button value="9" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>9</button>
                            <button value="*" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>*</button>  
                        </div>
                        <div style={{marginBottom:"5px"}}>
                            <button value="0" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>0</button>                        
                            <button value="/" onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>/</button>                        
                            <button value="." onClick={this.addToResult} style={{marginRight:"5px",width:"35px",height:"35px"}}>.</button>                       
                            <button value="=" onClick={this.calculate} style={{marginRight:"5px",width:"35px",height:"35px"}}>=</button>                  
                        </div>
                        <div style={{marginBottom:"5px"}}>
                            <button value="AC" onClick={this.allClear} style={{marginRight:"5px",width:"35px",height:"35px"}}>AC</button>                        
                            
                        </div>
                    </div>
            </div>
        );
    }
}
export default MainComponent;
