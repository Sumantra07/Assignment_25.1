import React,{Component} from 'react'
import {Label,ButtonGroup,Button} from 'react-bootstrap'
import propTypes from 'prop-types'
 class User extends Component 
 {
     constructor(props){
        super(props);
        this.state = { name:"Suresh", age : 21, interests : ["coding","sleeping"]};

     }
     incrementAge = () => {
        this.setState((prevState, props) => ({
            age: prevState.age + 3
          }));
      };
     render()
     {
        return( <div>
         <h5><label>Your name is {this. state.name} and you are {this.state.age} years old</label></h5>
         <h1><label>Skills</label></h1>
         <ul>
         {this.state.interests.map(interest => (
          <li>
             {interest} 
          </li>
        ))}
         </ul>
         <ButtonGroup>
         <Button bsStyle="info" onClick={this.incrementAge}>Make me older</Button>
         <Button bsStyle="info">Greet</Button>
      </ButtonGroup>
         </div>
        );
     }
 }
User.propTypes = {
    name: propTypes.String,
    Age: propTypes.number

};
 export default User;