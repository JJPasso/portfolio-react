import React from 'react'
import { useForm } from 'react-hook-form'

const HookForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Your name</label>
                <input
                    className="form-control mb-2"
                    name="nombre"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'Nombre es requerido'
                            }, 
                        maxLength: {
                            value: 10, 
                            message: 'No más de 10 carácteres!'
                            },
                        minLength: {
                            value: 4, 
                            message: 'Mínimo 4 carácteres'
                            }
                    })}
                ></input>
                <label>Your email</label>
                <input
                    className="form-control mb-2"
                    name="mail"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'email es requerido'
                            }, 
                        maxLength: {
                            value: 30, 
                            message: 'No más de 30 carácteres!'
                            },
                        minLength: {
                            value: 10, 
                            message: 'Mínimo 10 carácteres'
                            }
                    })}
                ></input>
                <label>Your message</label>
                <textarea
                    className="form-control mb-2"
                    name="text"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'email es requerido'
                            }, 
                        maxLength: {
                            value: 30, 
                            message: 'No más de 30 carácteres!'
                            },
                        minLength: {
                            value: 10, 
                            message: 'Mínimo 10 carácteres'
                            }
                    })}
                ></textarea>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
            
        </>
    );
}
 
export default HookForm;