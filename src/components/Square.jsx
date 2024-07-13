/* eslint-disable react/prop-types */
export const Square = ({children,isSelected,updateBoard,index}) => {
    const className = `square ${isSelected ? 'is-selected': ''}` //Esto es para jugar con el css
  
    const handleClick = () => {
      updateBoard(index) //Ejecuto la función que fue pasada por parametro
    }
  
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }