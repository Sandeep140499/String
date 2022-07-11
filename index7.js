const Game_Winner = (S) => {
    let playerOne = 0; playerTwo = 0;
    for(let i = 0; i < S.length; i++)
    {
        if( S.charAt(i) === "A" )
        {
            playerOne += 1;
        }
        else{
            playerTwo += 1;
        }
    }
    if(playerOne > playerTwo)
    {
        return "Aditya"
    }
    else if(playerOne < playerTwo)
    {
        return "Danish"
    }
    else{
        return "Draw"
    }
};
console.log(Game_Winner("ADDAAADDDDD"));
console.log(Game_Winner("ADDAAADD"));