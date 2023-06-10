import { createContext, useReducer } from "react"
import { OPEN_FORM, OPEN_UPDATE_FORM } from "../constants/studenConstant"
import { Outlet } from "react-router-dom"

export const AdminContext=createContext()
const initialState={
    openForm: false,
    isUpdate: false
}
const adminReducer=(state, action)=>{
    switch(action.type){
        case OPEN_FORM:return{
            ...state,
            openForm:!state.openForm,
        }
        case OPEN_UPDATE_FORM:return{
            ...state,
            openForm:!state.openForm,
            isUpdate:!state.isUpdate
        }
    }
}


const AdminContextProvider = () => {
    const [state, adminContextDispatch]=useReducer(adminReducer, initialState)
  return (
    <AdminContext.Provider value={{...state, adminContextDispatch}}>
       <Outlet/>
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
