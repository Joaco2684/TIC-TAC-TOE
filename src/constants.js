/* eslint-disable no-unused-vars */
export const TURNS = {
    X:'✖️',
    O:'⭕'
  }
  
// Matriz de combinaciones ganadoras predefinida
export  const WINNER_COMBOS = [
    [0, 1, 2],  // Fila 1
    [3, 4, 5],  // Fila 2
    [6, 7, 8],  // Fila 3
    [0, 3, 6],  // Columna 1
    [1, 4, 7],  // Columna 2
    [2, 5, 8],  // Columna 3
    [0, 4, 8],  // Diagonal \
    [2, 4, 6]   // Diagonal /
  ]