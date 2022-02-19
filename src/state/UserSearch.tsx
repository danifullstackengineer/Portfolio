import {useState} from 'react';

const users = [
    {
        name: 'John',
        age: 20
    },
    {
        name: 'Alex',
        age: 21
    },
    {
        name: 'Michael',
        age: 35
    }
]

const UserSearch:React.FC = ()=>{

    const [name, setName] = useState("");

    const [currentSearch, setCurrentSearch] = useState<{
        name: string,
        age: number
    } | undefined>()

    const handleClick = () => {
        const user = users.find(user=>{
            return user.name === name;
        })
        setCurrentSearch(user);
        setName("");
    };
    return(
        <div>
            User search
            <input value={name} onChange={e=> setName(e.target.value)}/>
            <button onClick={handleClick}>Find user</button>
            <div>Name: {currentSearch && currentSearch.name}<br></br>
            Age: {currentSearch && currentSearch.age}</div>
            </div>
    )
}

export default UserSearch;