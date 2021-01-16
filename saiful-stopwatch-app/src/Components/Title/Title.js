
import React, {Component} from 'react'
import './Title.css'
class Title extends Component {                            
    constructor(props) {
        super(props)
        this.state = {
            title: 'React stopwatch',
            isInput: false
        }
    }
    editHandler() {
        this.setState({
            ...this.state,
            isInput:true

        })
    }
    inputChange(event){
        this.setState({
            ...this.state,
        title: event.target.value
        })
        
    }
    onKeyPressHandler(event){
        if (event.key ==='Enter'){
            this.setState({
                ...this.state,
                isInput: false

            })
        }
    }
    BlurHandler(event){
        this.setState({
            ...this.state,
            isInput: false

        })
    }
    
                                                       
    render(){ 
        let output = null
        if (this.state.isInput) {
            output = (
                <div className='Title'>
                <input 
                className='form-control' 
                onChange= { event => this.inputChange(event) }
                onKeyPress= {event => this.onKeyPressHandler(event)}
                onBlur= {event => this.BlurHandler(event)}
                type='text'
                 value ={this.state.title}/>
                </div>
            )
} else{
    output = (
        <div className='d-flex Title'>
        <h1 className ='display-4'>{this.state.title} </h1>
        <span onClick ={() => this.editHandler()} className=' ml-auto edit-icon'>
        <i className='fas fa-pencil-alt'></i>
        </span>
        </div>  
    )   
}                                 
     return(                                     
       <div>{ output }</div>                                         
     )
    }
}

export default Title // as we exported, then we can import it anywhere.