import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { ImEye } from "react-icons/im";
import { Label } from '../../utils/typography';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { StyledFormGroup, StyledInputWrapper, StyledInput, StyledButton, StyledMessageWrapper, StyledMessage, SkeletonWrapper } from './CustomInput.style';

function CustomInput({ type, id, name, value, onChange, error, placeholder, loading }) {
    // State
    const [ visiblePassword, setVisiblePassword ] = useState(false);

    return (
        <StyledFormGroup>
            <Label color="black" htmlFor={id}>{placeholder}</Label>
            {
                loading
                    ? (
                        <SkeletonWrapper>
                            <Skeleton baseColor='rgba(124,111,99,.3)'/>
                        </SkeletonWrapper>
                    )
                    : (
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
                    )
            }
            {error && 
                <StyledMessageWrapper>
                    <StyledMessage>{error}</StyledMessage>
                </StyledMessageWrapper>
            }  
        </StyledFormGroup>
    )
}

export default CustomInput;