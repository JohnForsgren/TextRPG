import { DecisionButton } from "./DecisionButton";
import { GameProps } from "./Interfaces";
import { Story } from "./Story";

export const Game = (props: GameProps) => {
    return (
      <article> 

        <Story gameProps={props}/>

        <div className="button-container">

          <DecisionButton gameProps={props} buttonID={1}/>
          <DecisionButton gameProps={props} buttonID={2}/>
          <DecisionButton gameProps={props} buttonID={3}/>


        </div>



        <div className="character-stats">
          <p>Character stats:<br/>
          Strength: {props.currentUser.strength} <br/>
          Wisdom: {props.currentUser.wisdom} <br/>
          Coins: {props.currentUser.coins} <br/>
          </p>
        </div>


        <p>Account Data<br/>
        Name: {props.currentUser.userName} <br/>
        Story Path: {props.currentUser.storyProgress} <br/>
        </p>

      </article>
    );
  };