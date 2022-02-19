import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  const [guests, setGuests] = useState<string[]>([]);

  const handleClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const returnGuest = () => {
     return guests.map(guest=>{
         return <li key={guest}>{guest}</li>
     })
  }

  return (
    <div>
      <h3>Guest list</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <ul>{returnGuest()}</ul>

      <button onClick={handleClick}>Add guest</button>
    </div>
  );
};

export default GuestList;
