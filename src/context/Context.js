import React, { useReducer, createContext, useState, useContext } from "react";

const Context = createContext();

const getIndexOfObject = (arr, ...props) => arr.findIndex(
    el => props.every(([key, value]) => el[key] === value)
); 

const NotesProvider = ({children }) => {
    const [id, setId] = useState(-1);

    const notesReducer = (state, action) => {
    
        switch (action.type) {
          case "create":
          return [...state, {
                  id: id, 
                  title: action.title, 
                  content: action.content,
            }]          
                      
          case "alter":
            let index = state.findIndex((i) => (i.title === (action.oldTitle)) && i.content === (action.OldContent)); 
            var newArray = [...state];           
            newArray[index] = {
              title: action.title, 
              content: action.content,
            };
            console.log(id);

            return (newArray);
         
          case "remove":
            return  ([...state.filter((i) => (i.title != (action.title)) && i.content != (action.content))]);
          
          default:
            return [ ...state ];
        }
      };

    const [notes, dispatch] = useReducer(notesReducer, [
        
    ]); 

    const create = (title, content) => {
        dispatch({ 
            type: "create",
            payload: id, title, content
        });                 
        setId((oldId) => oldId+1)
        
    };

    const alter = (id, oldTitle, OldContent, title, content) => {
        dispatch({ type: "alter" ,
                  payload: id, oldTitle, OldContent, title, content
      });
    };

    const remove = (id, title, content) => {
        dispatch({ 
              type: "remove" ,
              payload: title, content
      });
    };


    return (
        <Context.Provider value={{ notes, create, alter, remove }}>
        {children}
        {console.log(...notes)
        }
        </Context.Provider>
    );
};

export {Context, NotesProvider};
