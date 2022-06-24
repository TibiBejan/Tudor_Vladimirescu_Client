import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NavbarWrapper, NavbarWrapperInner, NavbarLogo, StyledLink, NavbarActions, NavbarAction, BeforePseudo, AfterPseudo, ActionLink, StyledAction, Label } from './Navbar.styles';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { userSelector, requestLogout, receiveLogoutError } from '../../features/user/userSlice';

function Navbar() {
    // History router
    const history = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // Redux
    const dispatch = useDispatch();
    const {user: userSession} = useSelector(userSelector);
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
    // Functions
    const logout = async () => {
        try {
            // INIT REQ
            dispatch(requestLogout);
            const response = await axios.request({
              method: 'GET', 
              url: `${process.env.REACT_APP_API_URL}/auth/logout`,
              withCredentials: true,
            });
            if(response.status === 200 || response.status === 201) {
                history(from, { replace: true });
                window.location.reload(true);
            } else {
              dispatch(receiveLogoutError('There is an error with current session, please reload'));
            }
          } catch (error) {
            dispatch(receiveLogoutError(error.message));
          }
    }

    return (
        <NavbarWrapper sticky={scrollPos > 0}>
            <NavbarWrapperInner>
                <NavbarActions justify="flex-start">
                    {/* {
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
                    } */}
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/about-us" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>01</Label>
                            About Us
                        </ActionLink>
                    </NavbarAction>
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/canteen" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>02</Label>
                            Canteen
                        </ActionLink>
                    </NavbarAction>
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/sportbase" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>03</Label>
                            Sportbase
                        </ActionLink>
                    </NavbarAction>
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/news" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>04</Label>
                            News
                        </ActionLink>
                        <AfterPseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                    </NavbarAction>
                </NavbarActions>
                <NavbarLogo>
                    <StyledLink to='/' invertcolor={scrollPos > 0 ? "scrolled" : undefined}>Vladimirescu</StyledLink>
                </NavbarLogo>
                <NavbarActions justify="flex-end">
                    {/* {
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
                    } */}
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/halls" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="start">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>01</Label>
                            Halls
                        </ActionLink>
                    </NavbarAction>
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink to="/accommodation" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="start">
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>02</Label>
                            Accommodation
                        </ActionLink>
                    </NavbarAction>
                    <NavbarAction>
                        <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                        <ActionLink 
                            to={
                                userSession?.token 
                                    ? userSession?.user?.role === 'admin' 
                                        ? "/admin"
                                        : "/student"
                                    : "/login"
                            } 
                            invertcolor={scrollPos > 0 ? "scrolled" : undefined} 
                            align="start"
                        >
                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>03</Label>
                            {
                                userSession?.token 
                                    ? userSession?.user?.role === 'admin' 
                                        ? "Admin"
                                        : "Student"
                                    : "Account"
                            } 
                        </ActionLink>
                    </NavbarAction>
                    {
                        userSession?.token 
                            ? (
                                <NavbarAction>
                                    <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                        <StyledAction onClick={() => logout()} invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                                            <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>04</Label>
                                            Logout
                                        </StyledAction>
                                    <AfterPseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                </NavbarAction>
                            )
                            : (
                                <NavbarAction>
                                    <BeforePseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                    <ActionLink to="/contact-us" invertcolor={scrollPos > 0 ? "scrolled" : undefined} align="end">
                                        <Label invertcolor={scrollPos > 0 ? "scrolled" : undefined}>04</Label>
                                        Contact
                                    </ActionLink>
                                    <AfterPseudo invertcolor={scrollPos > 0 ? "scrolled" : undefined} />
                                </NavbarAction>
                            )
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