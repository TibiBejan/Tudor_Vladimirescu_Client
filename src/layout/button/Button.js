import React from 'react';
import { IconContext } from 'react-icons';
import { FiArrowRight } from "react-icons/fi";
import { Label } from '../../utils/typography';
import { ActionLink, LinkLabel, StyledButton } from './Button.style';

function Button({ linkPath, type, disabled, onClick, textLabel, color, background, size }) {
    return (
        <>
            {
                linkPath ? (
                    <ActionLink to={linkPath} background={background} size={size}>
                        <LinkLabel>
                            <Label color={color} uppercase>{textLabel}</Label>
                            <Label color={color} uppercase>{textLabel}</Label>
                        </LinkLabel>
                        <IconContext.Provider value={{size: "1.6rem", color: "white"}}>
                            <FiArrowRight />
                        </IconContext.Provider>
                    </ ActionLink>
                ) : (
                    <StyledButton type={type} disabled={disabled} onClick={onClick} background={background} size={size}>
                        <LinkLabel>
                            <Label color={color} uppercase>{textLabel}</Label>
                            <Label color={color} uppercase>{textLabel}</Label>
                        </LinkLabel>
                        <IconContext.Provider value={{size: "1.6rem", color: "white"}}>
                            <FiArrowRight />
                        </IconContext.Provider>
                    </StyledButton>
                )
            }
        </>
    )
}

export default Button;