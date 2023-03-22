import { useState } from 'react'
import { Game } from './Components/Game';
import { UserData } from './Components/Interfaces';
import { Login } from './Components/Login';
import './Styles/Style.css';

function App() {
  // ==== STATES ==== 
  // const [ userData, setUserData ] = useState<UserData[]>(); // Variable that contains all users from the database. 
  const [ currentUser, setCurrentUser ] = useState<UserData>();  
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
 

  // useEffect(()  => {
  //     fetch("http://localhost:5198/api/UserData") // Currently fetches ALL DATA -> This is not best practice, but works for this project. 
  //       .then(data => data.json()) // Converts to json
  //       .then(data => setUserData(data)) // Stores in the useState "userData". 
  // }, []);



  const handleButtonClick = (newUserData: UserData) => {
    setCurrentUser(prevUser => {
      return { ...prevUser, ...newUserData };
    });
  };


  // ==== HTTP REQUESTS === 
  const foundUserInDatabase = async (username: string): Promise<UserData | undefined> => { 
    const response = await fetch("http://localhost:5198/api/UserData");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].userName === username) {
        return data[i];
      }
    }
    return undefined; 
  }

  const POSTUserData = async (name: string) => {
      console.log(`ATTEMTING TO SEND USER DATA FOR ${name}`)
      const foundUser = await foundUserInDatabase(name) 
      if(foundUser) {
        console.log(`USER WITH NAME ${foundUser.userName} ALREADY EXISTED IN DATABASE`); 
        setCurrentUser(foundUser);  // Sets the current user so that it can be sent into the game method. 
        setHasLoggedIn(true); 
        return; 
      }
      let newUser = {
        userName: name, // Assigns the name to the current user.  
        storyProgress: "0",
        strength: 0,
        wisdom: 0,
        coins: 0 }; 
      setCurrentUser(newUser); // Sets the current user so that it can be SENT into the game method. 

      const response = await fetch("http://localhost:5198/api/UserData", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName: name
        })
      });
      const data = await response.json();
      // OPTIONAL: Return error here if user wasn't added 
      console.log(data); // do something with the response data

      setHasLoggedIn(true); // AFTER the currentUser is assigned it can be sent to the "Game" component, so then we login like this. 
    
  };


  const findUserIdAsync = async (userName: string): Promise<number> => { // Finds the ID of the user.  
    const response = await fetch("http://localhost:5198/api/UserData");
    const data = await response.json();
    for (let i = 0; i < data.length; i++) {
      if (data[i].userName === userName) {
        return data[i].id; 
      }
    }
    return -1; 
  }
  
    /*
    SWAGGER POST: 

    ID: http://localhost:5198/api/UserData/{id}
    BODY: 
    {
      "id": 1,
      "userName": "New Name",
      "storyProgress": "143",
      "strength": 5,
      "wisdom": 5,
      "coins": 5
    }
    
    */
  const PUTUserData = async (userData: UserData) => {
    console.log(`ATTEMTING TO POST USER DATA FOR ${userData.userName}`); 
    const USER_ID = await findUserIdAsync (userData.userName); 
    console.log(`User ${userData.userName} had id ${USER_ID}`)

    const response = await fetch(`http://localhost:5198/api/UserData/${USER_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: USER_ID, 
          userName: userData.userName, 
          storyProgress: userData.storyProgress,
          strength: userData.strength,
          wisdom: userData.wisdom,
          coins: userData.coins
        })
      });

      console.log(response); 

      // const data = await response.json(); // NOTE: This will give an ERROR (even though nothing is wrong) if the PUT succeeds; This is because PUT resturns nothing, which makes this try to access this. 
      // console.log(data); // do something with the response data

  }

  const DELETEUserData = async (userData: UserData) => {
    console.log(`ATTEMTING TO DELETE USER DATA FOR ${userData.userName}`); 
    const USER_ID = await findUserIdAsync (userData.userName); 
    console.log(`User ${userData.userName} had id ${USER_ID}`)

    const response = await fetch(`http://localhost:5198/api/UserData/${USER_ID}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });

      console.log(response); 

    //   const data = await response.json(); // NOTE: This will give an ERROR (even though nothing is wrong) if the PUT succeeds; This is because PUT resturns nothing, which makes this try to access this. 
    //   console.log(data); // do something with the response data

  }


  return (
    <div className='app--body'>

      {/* <p>=== LIST OF CURRENT USERS (Debugging) === </p>
      {userData.map(value => // The map is important because if the list is empty, it returns null instead of BREATKING (The code otherwise breaks if trying to access a variable that has not yet loaded from the database)  
        <p>{value.userName}</p> // NOTE: The key is just used by react to improve performance (and remove a warning message). It has no other function atm. 
      )} */}
      
      {hasLoggedIn ? (
        <Game 
          putFunction={PUTUserData} 
          deleteFunction={DELETEUserData} 
          currentUser={currentUser!}  
          updateUserData={handleButtonClick}
        />
        ) : (
          <Login postFunction={POSTUserData}  />
        )}
    </div>
  );

}

export default App;
