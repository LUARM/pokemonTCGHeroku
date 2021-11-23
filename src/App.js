import logo from './logo.svg';
import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Title from './HeaderBar';

function App() {

  const [my_cards, setCardData] = React.useState(null);
  
  const cardTypeFairy = "fairy"

  async function  onMountFetchCards(){
    try {
    const response = await fetch("/load_cards/?card_type=" + cardTypeFairy, {     
      method: 'GET',
      mode:'cors',    
      headers: {
        'Content-Type': 'application/json',  
      },
    })
    console.log("status: " +response.status)
    if (response.status == 200) {
      const responseJson = await response.json();
      const my_cards = responseJson
      //console.log("my card data: " + my_cards);
      setCardData(my_cards)
    }
  } catch (error) {
    console.log("fetch error is: "+ error);
  }
  }

  useEffect(() => {
    onMountFetchCards();
  }, []);


  return (

    <div className="App">
       <Title></Title>
      <header className="App-header">
        { my_cards  && 
        <h1>results: {JSON.stringify(my_cards.cards[0].name)}</h1>}
      </header>
    </div>
  );
}

export default App;
