import { DecisionButtonProps } from "./Interfaces";

export const DecisionButton = (props: DecisionButtonProps) => {


    const handleClick = () => {
        console.log("You have now pressed button number: " + props.buttonID);
    }

    return (
        <div>
            <button onClick={handleClick}>{props.buttonID}</button>
        </div>
    )


}

