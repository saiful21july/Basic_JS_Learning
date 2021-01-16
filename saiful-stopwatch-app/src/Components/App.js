import React, {Component} from 'react'
import './App.css';
import Title from './Title/Title'
import CountDown from './CountDown/CountDown'
import Controller from './Controller/Controller'
import Laps from './Laps/Laps'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: {
        min:0,
        sec:0,
        mili:0,
      },
      laps: []
    }
  }
  getStart(){
   this.intervalID = setInterval(() =>{
let min = this.state.time.min
let sec = this.state.time.sec
let mili =this.state.time.mili
if (mili >= 10){
  sec = sec + 1
  mili = 0
}
if (sec >= 60){
  min = min + 1
  sec = 0
}
this.setState({
  ...this.state,
  time:{
min,
sec,
mili: mili + 1

  }
})
    }, 100)
  }
  getPause(){
    clearInterval(this.intervalID)
  }
  getLap(){
let time = {
  ...this.state.time
}
this.setState({
  ...this.state,
  laps: [time, ...this.state.laps]
})
console.log(this.state.laps);

  }
  getReset(){
    this.setState({
      time: {
        min:0,
        sec:0,
        mili:0,
      },
      laps: []
    })
  }

  render(){  // here classsname used because two class cannot be executed at the same time and classname works as a html code with the help of jsx under the hood which transfers into normal javascript.Basically we are getting flavour of javascripit in html through jsx.Furthermore, we can write any html code but one provision is that all the element should be nested by parent element.I mean that JSX expressions must have one parent element. 
  return (             
    <div className="App">
    <div className= 'container py-5'>
     <div className='row'>
      <div className='.col-sm-8.offset-sm-2'>
      <Title />
      <CountDown  time={ this.state.time } />
      <Controller
      start= {this.getStart.bind(this)}
      pause= {this.getPause.bind(this)}
      reset= { this.getReset.bind(this)}
      lap=  {this.getLap.bind(this)}
      />
      <Laps className='my-5' laps={this.state.laps}/>
      </div>
                            
    </div>
    </div>
    </div>
  );
  }
}

export default App;
