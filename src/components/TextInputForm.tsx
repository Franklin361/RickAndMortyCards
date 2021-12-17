import { ErrorMessage, useField } from "formik"

interface ITextInputFormProps{
    label:string;
    id:string;
    name:string;
    type: 'text' | 'password' | 'email';
    placeholder:string;
    children?: React.ReactNode
}

export const TextInputForm = ({ label, children, ...props}: ITextInputFormProps) => {

    const [field] = useField(props)

    return (
        <div className='input_container'>
            <label htmlFor={props.id}>{ label }</label>
            <div className="input_item">
                { children }
                <input {...field} {...props}/>
            </div>
            <ErrorMessage name={props.name} component="span" className="error_form" />
        </div>
    )
}
