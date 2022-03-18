import { useState } from 'react';


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = (e, nameSelect = '') => {

        if(e.target){ 
            setValues({
                ...values,
                [ e.target.name ]: e.target.value
            });
        }else{
            setValues({
                ...values,
                [ nameSelect ]: e
            });
        }

    }

    return [ values, handleInputChange, reset ];

}