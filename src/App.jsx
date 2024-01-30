import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { data } from './data.js'
import Cardform from './components/Cardform.jsx'

function App() {
  const [cards, setCards] = useState(data);
  const [filteredCards, setFilteredCards] = useState(data);

  function handleAddCard(newCard){
    setCards([...cards, newCard])
    setFilteredCards([...filteredCards, newCard])
  }

  function handleSearch(searchCard){
    const filtered = cards.filter(
      (card) => 
      card.country.toLowerCase().includes(searchCard.toLowerCase()) || card.location.toLowerCase().includes(searchCard.toLowerCase())
        
    );
    setFilteredCards(filtered);
  }

  return (
    <>
      <Navbar cards={data} onSearch={handleSearch}/>

      <div className='card-form'>
        <Cardform addCard={handleAddCard}/>
      </div>

      <div className='cards-grid'>{filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </>
  )
}

export default App;