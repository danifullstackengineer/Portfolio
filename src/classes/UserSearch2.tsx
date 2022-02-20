import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearch2 extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  handleClick = () => {
       const user = this.props.users.find((user) => {
         return user.name === this.state.name;
       });
       this.setState({user: user});
       this.setState({name: ""});
  }

  render() {

    const {user, name} = this.state;

    return (
      <div>
        User search
        <input value={name} onChange={(e) => this.setState({name: e.target.value})} />
        <button onClick={this.handleClick}>Find user</button>
        <div>
          Name: {user && user.name}
          <br></br>
          Age: {user && user.age}
        </div>
      </div>
    );
  }
}

export default UserSearch2;
