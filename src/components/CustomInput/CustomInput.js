import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";
import { Label } from '../../utils/typography';
import { StyledFormGroup, StyledInputWrapper, StyledInput, StyledButton, StyledMessageWrapper, StyledMessage } from './CustomInput.style';

function CustomInput({ type, id, name, value, onChange, error, placeholder }) {
    // State
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    return (
        <StyledFormGroup>
            <Label color="black" htmlFor={id}>{placeholder}</Label>
            <StyledInputWrapper>
                <StyledInput 
                    type={visiblePassword ? 'text' : type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {
                    type === "password" && (
                        <StyledButton type="button" onClick={() => setVisiblePassword(prevState => !prevState)}>
                            <IconContext.Provider value={{size: '3rem', color: visiblePassword ? '#464646' : '#cfa556'}}>
                                <ImEye />
                            </IconContext.Provider>
                        </StyledButton>
                    )
                }
            </StyledInputWrapper>
            {error && 
                <StyledMessageWrapper>
                    <StyledMessage>{error}</StyledMessage>
                </StyledMessageWrapper>
            }  
        </StyledFormGroup>
    )
}

export default CustomInput;