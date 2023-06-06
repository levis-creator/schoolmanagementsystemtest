import { createContext, useReducer } from "react"
import { OPEN_FORM, OPEN_UPDATE_FORM } from "../constants/studenConstant"
import { Outlet } from "react-router-dom"

export const StudentsContext=createContext()
const initialState={
    openForm: false,
    isUpdate: false
}
const studentsReducer=(state, action)=>{
    switch(action.type){
        case OPEN_FORM:return{
            ...state,
            openForm:!state.openForm
        }
        case OPEN_UPDATE_FORM:return{
            ...state,
            openForm:!state.openForm,
            isUpdate:!state.isUpdate
        }
    }
}


const StudentContextProvider = () => {
    const [state, studentContextDispatch]=useReducer(studentsReducer, initialState)
  return (
    <StudentsContext.Provider value={{...state, studentContextDispatch}}>
       <Outlet/>
    </StudentsContext.Provider>
  )
}

export default StudentContextProvider
