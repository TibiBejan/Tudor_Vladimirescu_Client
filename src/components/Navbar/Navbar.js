import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavbarWrapper, NavbarWrapperInner, NavbarLogo, StyledLink, NavbarActions, NavbarAction, BeforePseudo, AfterPseudo, ActionLink, Label } from './Navbar.styles';

function Navbar({ data }) {
    // State
    const [ scrollPos, setScrollPos ] = useState(0);
    // Effect
    useEffect(() => {
        const watchScrollPos = () => {
            setScrollPos(window.scrollY);
        }
        window.addEventListener('scroll', watchScrollPos);
        return () => {
            window.removeEventListener('scroll', watchScrollPos);
        }
    }, []);

    return (
        <NavbarWrapper sticky={scrollPos > 0}>
            <NavbarWrapperInner>
                <NavbarActions justify="flex-start">
                    {
                        data.leftGroup.map((entry, key) => (
                            <NavbarAction key={entry.id}>
                                <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                <ActionLink to={entry.linkPath} invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                                    <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>{entry.label}</Label>
                                    {entry.linkLabel}
                                </ActionLink>
                                {
                                    key === (data.rightGroup.length -1) && (
                                        <AfterPseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                    )
                                }
                            </NavbarAction>
                        ))
                    }
                </NavbarActions>
                <NavbarLogo>
                    <StyledLink to='/' invertcolor={scrollPos > 0 ? "scrolled" : undefined}>Vladimirescu</StyledLink>
                </NavbarLogo>
                <NavbarActions justify="flex-end">
                    {
                        data.rightGroup.map((entry, key) => (
                            <NavbarAction key={entry.id}>
                                <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                <ActionLink to={entry.linkPath} invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="start">
                                    <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>{entry.label}</Label>
                                    {entry.linkLabel}
                                </ActionLink>
                                {
                                    key === (data.rightGroup.length -1) && (
                                        <AfterPseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                    )
                                }
                            </NavbarAction>
                        ))
                    }
                </NavbarActions>
            </NavbarWrapperInner>
        </NavbarWrapper>
    )
}

Navbar.propTypes = {
    data: PropTypes.object,
}

export default Navbar