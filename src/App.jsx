// src/App.jsx
import { useEffect, useState } from "react"
import './App.css'


const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
]);
  
    const handleAddFighter = (fighter) => {
      if (money >= fighter.price) {
        setTeam([...team, fighter]);
        setMoney(money - fighter.price);
        setTotalStrength(totalStrength + fighter.strength)
        setTotalAgility(totalAgility + fighter.agility)
      } else {
        console.log('Out of funds!')
      }
    };

    const handleRemoveFighter = (fighterRemoved) => {
        setTeam(team.filter((fighter => fighter.name !== fighterRemoved.name)));
        setMoney(money + fighterRemoved.price);
        setTotalStrength(totalStrength - fighterRemoved.strength)
        setTotalAgility(totalAgility - fighterRemoved.agility)
    };

    return (
      <div>
        <h1>Zombie Fighters Team</h1>
        <h2>Money: ${money}</h2>
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} />
              <h2>Name: {fighter.name}</h2>
              <h3>Price: ${fighter.price}</h3>
              <h3>Strength: {fighter.strength}</h3>
              <h3>Agility: {fighter.agility}</h3>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
        <h1>Your Team</h1>
        {team.length === 0 ? (
          <p>Pick team members!</p>
        ) : (
          <ul className="team-list">
            {team.map((member, index) => (
              <li key={index} className="team-member">
                <img src={member.img} alt={member.name} className="team-member-image" />
                <div className="team-member-details">
                  <h3>{member.name}</h3>
                  <p>Price: ${member.price}</p>
                  <p>Strength: {member.strength}</p>
                  <p>Agility: {member.agility}</p>
                  <button onClick={() => handleRemoveFighter(member)}>Remove</button>

                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total Team Strength: {totalStrength}</h3>
        <h3>Total Team Agility: {totalAgility}</h3>
      </div>

    )};




export default App

