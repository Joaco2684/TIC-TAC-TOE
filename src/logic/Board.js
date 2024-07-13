import { WINNER_COMBOS } from "../constants";

export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) { //Recorro cada combo ganador
      const [a,b,c] = combo;
      if (boardToCheck[a] != null && 
          boardToCheck[a] == boardToCheck[b] &&
          boardToCheck[a] == boardToCheck[c]
      ) { 
        return boardToCheck[a] //Devuelve el ganador (x u 0)
      }
    }
    return null //Si no hay ganador
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square!=null) //Si en ningun cassillero hay null (empate)
  }