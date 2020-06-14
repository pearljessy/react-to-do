import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from "./listitems";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
// import  speechrecognition from "./speech-recognition"

library.add(faTrash);


const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.start();

const voiceCommands = () => {
    recognition.onstart = () => {
       console.log('voice is activavted')
    }
  }




class App extends React.Component{


   constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:"",
        key:"",
      }
    }
    this.handleInput = this.handleInput.bind(this);
     this.addItem = this.addItem.bind(this);
     this.deleteItem = this.deleteItem.bind(this);
   }

   handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
   }

   addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }
   }
   deleteItem(key){
    const filteredItems = this.state.items.filter(items =>
      items.key!==key);
      this.setState({
        items:filteredItems,
      })
   

   // const propTypes = {
   //  transcript: propTypes.string,
   //  resetTranscript: propTypes.func,
   //  browserSupportsSpeechRecgnition:propTypes.bool
   // };

   // const Dictaphone = ({
   //  transcript,
   //  resetTranscript,
   //  browserSupportsSpeechRecgnition
   // }) => {
   //  if (!browserSupportsSpeechRecgnition) {
   //    return null;
   //  }
   // }
   // resetTranscript(){

   // }
   
}
  render(){
    return (

      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
             <input type="text" placeholder="Enter Text" 
             value={this.state.currentItem.text}
             onChange={this.handleInput} for="speechRecognition"/>
             <button type="submit">Add</button>
          </form>   
        </header>
        
        <ListItems items = {this.state.items} 
        deleteItem={this.deleteItem}>
        </ListItems>
      

      </div>

      );
  }
}

export default App;
