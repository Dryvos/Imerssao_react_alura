import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function Formfield({ 
    label, type, name, value, onChange 
}){
    const fieldId = `id_${ name }`;
    return(
        <div>
            <label htmlFor={ fieldId } >
                { `${ label }: ` }
                
                <Input
                    id={ fieldId }
                    type={ type }
                    value={ value }
                    name={ name }
                    onChange={ onChange }
                />
            </label>
        </div>
    )
}

Formfield.defaultProps = {
    type: 'text',
    value : '',
    onChange : () =>{

    }
}

Formfield.propTypes = {
    label    : PropTypes.string.isRequired,
    type     : PropTypes.string,
    name     : PropTypes.string.isRequired,
    value    : PropTypes.string,
    onChange : PropTypes.func,
}

export default Formfield;