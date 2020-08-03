import React, { Component } from 'react';


import './App.css';
import Button from '@material-ui/core/Button';


//TASKS
// 1.get Api URL
// 2.create the layout
// 3.add event listeners
// 3.style ui
// 4. finish user stories

const API='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


 class App extends Component {
   state={
     quotes: [],
     index: 0
   }

   componentDidMount(){
     //we call the API here and update the state

     fetch(API).then(res => res.json())
                .then(res =>{

                  this.setState({
                    quotes: res.quotes
                  }, this.getRandomIndex)
                })
   }

   getRandomIndex=()=> {

    const {quotes} = this.state;
    
    if(quotes.length> 0) {
      const index = Math.floor(Math.random() * quotes.length);
          this.setState({
            index
          })
    }

   }
   getNewColor=() => {

   }
  render() {

    const {quotes, index} = this.state;
    
    const quote = quotes[index];
    
     
    const tweetURL= `https://twitter.com/intent/tweet? text=$`;
     

    return (
     <div className="container">
        <div className="wrapper d-flex align-items-center justify-content-center color ">
       <div className="col-6 box p-5 rounded" id="quote-box">
           <div >
            
            {
                quote && (
              
                <div className="mb-4 color " >
                  <p id="text">{quote.quote}</p>
                   <cite className="d-block text-right" id="author"> -{quote.author}</cite>
                  </div>
              
              )       
              
            }
            <div  className="d-flex justify-content-between">


              <a className="btn btn-sm btn-info" href={tweetURL}
                target="_blank" id="tweet-quote"><i className=" fab fa-twitter"></i> Tweet</a>
              <button className="btn btn-sm btn-info " onClick={this.getRandomIndex } id="new-quote ">More Quotes</button>
            </div>
          </div>


         </div> 
            
    
       </div>  

     </div>
  
    


    )
  }
}
//need to add fontawesome and change background color dynamically

export default App;