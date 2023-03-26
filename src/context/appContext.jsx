import { createContext, useContext, useReducer } from "react";
import { CREATE, DELETE, UPDATE } from "./actions";
import reducer from "./reducer";
import Swal from 'sweetalert2'

export const AppContext = createContext()

const initialState = {
    students: [
        {id: 1, name: "Juan Perez", edad: 25},
        {id: 2, name: "Maria Martinez", edad: 40},
        {id: 3, name: "Alexa Loqued", edad: 35},
        {id: 4, name: "Tatiana Morillo", edad: 10},
    ]
}

export const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const createStudent = (student)=> dispatch({
        type: CREATE,
        payload: student,
        msj: Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `El estudiante ${student.name} fue creado`,
            showConfirmButton: false,
            timer: 2500
        })
    });

    const updateStudent = (student)=> dispatch({
        type: UPDATE,
        payload: student,  
        msj: Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `El estudiante ${student.name} <br/> fue Actualizado`,
            showConfirmButton: false,
            timer: 2500
        })      
    });

    const deleteStudent = (id)=> {
        Swal.fire({
            title: 'Deseas Eliminar?',
            text: "No se podra recuperar el estudiante eliminado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.isConfirmed) {
            dispatch({
                type: DELETE,
                payload: id
            })
            Swal.fire(
            'Eliminado!',
            'Se elimino el Estudiante.',
            'success'
            )
        }
        })        
    }

    const values = ''
    return(
        <AppContext.Provider
            value={{
                students: state.students,
                createStudent,
                updateStudent,
                deleteStudent,
                dispatch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}

//export default AppProvider;

