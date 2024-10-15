import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducers";  // corrected import name

const NotesContext = createContext(null);  // Added a default value

// eslint-disable-next-line react/prop-types
const NotesProvider = ({ children }) => {

    const initialState = {
        title: "",
        text: "",
        notes: [],
    };
    
    const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{ title, text, notes, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    );
};

const useNotes = () => useContext(NotesContext);

// eslint-disable-next-line react-refresh/only-export-components
export { NotesProvider, useNotes };
