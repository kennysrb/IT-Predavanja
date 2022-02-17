import React, { createContext, useReducer } from "react"
import { BookReducer } from "../reducer";

export const BookContext = createContext();



const BookContextProvider = ({children}) => {
const [books, dispatch] = useReducer(BookReducer, [
    {id:0, title: "Na Drini cuprija", author: "Ivo Andric"}
]);

return(
    <BookContext.Provider value= {{books, dispatch}}>{children}</BookContext.Provider>
)
}

export default BookContextProvider
