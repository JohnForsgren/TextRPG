import { DecisionButtonProps } from "./Interfaces";

export const DecisionButton = (props: DecisionButtonProps) => {


    const onClick = () => {
        console.log("You have now pressed button number: " + props.buttonID);


        // TODO: UPDATE THE CURRENT PLAYER OBJECT, then CALL the async method using the player object. 
        
        props.gameProps.putFunction(props.gameProps.currentUser); // RUNS the putfunction wit hthe current user. 

        // If you collect 100 gold coins, YOU WIN and you are removed from the database.  

    }

    return (
        <div>
            <button onClick={onClick}>{props.buttonID}</button>
        </div>
    )


}

