
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useState} from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import {TURNS} from "./constants.js"
import { checkWinner, checkEndGame } from "./logic/Board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { resetGameStorage, saveGameStorage } from "./storage/index.js"


function App() {

  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null) //Cargar el tablero cargado si existe
  })

  const [turn,setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X //Cargar el tuerno actual, si no existe => se empieza con el x
  })

  const [winner,setWinner] = useState(null) // null => Jugando | false => Empate | X o O => Ganador

  const updateBoard = (index) => {
    if (board[index] != null || winner != null) return //Si ya hay elem en ese casillero, no hace nada
    
    //Actualiza el tablero
    const newBoard = [...board] //Copia independiente del board
    newBoard[index] = turn //Inserta x o y donde antes habia null
    setBoard(newBoard) //Cambio de estado

    const newTurn = turn == TURNS.X ? TURNS.O: TURNS.X //Cambia de turno 
    setTurn(newTurn)

    //Guarda partida
    saveGameStorage({board: newBoard, turn:newTurn}) 

    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner != null) { //Si se ganó(x o y) 
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) { //Si hay empate (Todos los casilleros llenos)
      setWinner(false) // Empate => False
    }

  }

  const resetGame = () => {
    //Pongo todos los estados usados en su estado inicial
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(TURNS.X)
    resetGameStorage()
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className="game">
          {
            board.map((square, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard} //Le enviamos una función (pero no se ejecuta)
                >
                  {square}
                </Square>
              )
            })
          }
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn == TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
      <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Tic Tac Toe website. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#">Sobre mi</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Política de privacidad</a></li>
        </ul>
      </div>
    </footer>   
    </>
    
  )
}
export default App
