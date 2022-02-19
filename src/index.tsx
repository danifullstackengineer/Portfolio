import ReactDOM from "react-dom";
import GuestList from './state/Guest_List';
import UserSearch from './state/UserSearch';

const App = () => {
    return (
       <div>
           <UserSearch/>
       </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);