import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { data } from './data.js'
import Cardform from './components/Cardform.jsx'

function App() {
  /*const cardItem = data.map(item => {
    return (
      <Card
        key={item.id}
        location={item.location}
        country={item.country}
        description={item.description}
        src={item.src}
        isVisited={item.isVisited}
      />
    )
  })*/

  const [cards, setCards] = useState(data);

  function handleAddCard(newCard){
    setCards([...cards, newCard])
  }

  /*const cardItem = cards.map((card, index) => {
    <Card
      key={index} {...card} />
  })*/

  const cardItem = cards.map(item => {
    return (
      <Card
        key={item.id}
        location={item.location}
        country={item.country}
        description={item.description}
        src={item.src}
        isVisited={item.isVisited}
      />
    )
  })

  const [filteredCards, setFilteredCards] = useState(data);

  const handleSearch = (searchCard) => {
    const filtered = data.filter(
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

      {/*<div className='cards-grid'>{cardItem}</div>*/}
      <div className='cards-grid'>{filteredCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
        </div>
    </>
  )
}

export default App
