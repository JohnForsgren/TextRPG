import React from "react";
import { prompts } from "../Story/StoryData";
import { StoryProps } from "./Interfaces";

type PromptKey = keyof typeof prompts;
  
export const Story = (props: StoryProps) => {

    let currentPrompt = prompts[props.gameProps.currentUser.storyProgress as PromptKey] || '[No story for this has been added yet.]'; 
      return (
        <article> 
          <p>{currentPrompt.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
            ))}
            </p>
    
        </article>
      );
    };

    