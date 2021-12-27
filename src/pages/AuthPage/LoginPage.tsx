import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextInputForm } from '../../components/TextInputForm';
import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineKey, AiOutlineLogin } from 'react-icons/ai';
import { showToast } from '../../helper/toast';

import back_form from "../../assets/back_form.jpg";

import './styles.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const LoginPage = () => {
    
    const { handleLogin, loading } = useContext(AuthContext);

    return (
        <div className='container_body'>
            <div className="container_form">
                <Formik
                    initialValues={{
                        username : '',
                        password : ''
                    }}
                    onSubmit={({ username, password}) => {  
                        handleLogin(username, password);
                    }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string().required('Este campo es requerido'),
                            password: Yup.string().min(6, 'Debe tener minimo 6 letras').required('Este campo es requerido'),
                        })
                    }
                >
                    {
                        ({ }) => (
                            <Form className='form' noValidate>
                                <div className='container_titles'>
                                    <h2 className='title_page_auth'>Inicio de sesión</h2>
                                    <span className='instructions'>Por favor ingrese su nombre de usuario y contraseña para poder ingresar.</span>
                                </div>

                                <TextInputForm
                                    label='Nombre de usuario:'
                                    type='text'
                                    id='user'
                                    name='username'
                                    placeholder='username'
                                >
                                    <AiOutlineUser className='icon' />
                                </TextInputForm>

                                <TextInputForm
                                    name='password'
                                    label='Contraseña:'
                                    type='password'
                                    id='password'
                                    placeholder=' ****** '
                                >
                                    <AiOutlineKey className='icon' />
                                </TextInputForm>

                                <button type="submit" className='btn_login' disabled={loading}>
                                    {
                                        !loading 
                                        ? <>Ingresar<AiOutlineLogin className='icon' /></>
                                        : 'Validando ...'
                                    }
                                </button>

                                <span className='sign_up_link'>¿Aún no tienes cuenta 🤔? <Link to="/sign-up">Crea una aquí</Link></span>
                            </Form>
                        )
                    }
                </Formik>
                <div className='img_form'>
                    <img src={back_form} alt="Background for Form" draggable={false} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage