/* eslint-disable react/prop-types */
import { Square } from "./Square"
export function WinnerModal({winner,resetGame}) {
    if (winner == null) return null //Si no hay winner => No renderiza este componente
    const winnerText = winner == false ? 'Empate' : 'Ganó'  //Nos fijamos si empató o ganó                         
    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>
                <header className="win">
                    {winner != null && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>

            </div>
        </section>
    )
}