import React, {useState} from 'react'
import WarMessage from './WarMessage';

// notes
// covert flag image to standard format 
// use sweetalert to ask for next command and then add to array 








export default function War() {

  //state
  const [currentTaxRate, setCurrentTaxRate] = useState(100);
  const [warCost, setWarCost] = useState(100);
  const [winnings, setWinnings] = useState(warCost * 2);
  const [attackCost, setAttackCost] = useState({
    army: 100,
    airForce: 200,
    droneStrike: 300,
    nuke: 1000,
    retreat: warCost / 2,
})
  
  const [playerOne, setPlayerOne] = useState({player: '', fullName: 'United States of America', shortName: 'America', population: 100, health: 1000, flag:'assets/american_flag.jpeg'});
  const [playerTwo, setPlayerTwo] = useState({fullName: 'the Russian Federation', shortName: 'Russia', population: 100, health: 1000, flag: 'assets/russian_flag.png'});
  const [playerOneBudget, setPlayerOneBugdge] = useState(playerOne.population * currentTaxRate);
  const [playerTwoBudget, setPlayerTwoBugdge] = useState(playerTwo.population * currentTaxRate);
  const [moves, setMoves] = useState([{player: playerOne, move: 'army'}, {player: playerTwo, move: 'nuke'}, {player: playerOne, move: 'dronestrike'}, {player: playerTwo, move: 'airforce'}])







  return (
    <>
      <div className="row text-center bg-danger text-white m-0">
        <div className="col-12" style={{overflow: 'hidden'}}>
          <div className='py-3 scroll-text' style={{fontSize: '2em'}}>{playerOne.fullName} has declared <span className='fw-bold text'>WAR</span> on {playerTwo.fullName}!</div>
        </div>
      </div>
      <div className="row mx-0">
        <div className="col-2 px-0 pt-3 text-center border-end vh-100">
          <div className='mb-3 pb-3 border-bottom' style={{fontWeight: 'bold'}}>{playerOne.fullName}</div>
          <div className="col-12 mb-3 pb-3 border-bottom" style={{fontWeight: 'bold'}}>
            Budget: ${playerOneBudget}
          </div>
          <div className="col-12 mb-3 pb-3 border-bottom" style={{fontWeight: 'bold'}}>
            Health: {playerOne.health}
          </div>
        </div>
        <div className="col-8">
          {moves.map((m, index) => {
            return (
              <WarMessage key={index} warCost={warCost} order={index % 2 === 0 ? 'first' : 'second'} nation={m.player} move={m.move} />
            )
          })}
        </div>
        <div className="col-2 px-0 pt-3 text-center border-start vh-100">
          <div className='mb-3 pb-3 border-bottom' style={{fontWeight: 'bold'}}>{playerTwo.fullName}</div>
          <div className="col-12 mb-3 pb-3 border-bottom" style={{fontWeight: 'bold'}}>
            Budget: ${playerTwoBudget}
          </div>
          <div className="col-12 mb-3 pb-3 border-bottom" style={{fontWeight: 'bold'}}>
            Health: {playerTwo.health}
          </div>
        </div>
      </div>

      </>
  )
}
