import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HeadingThree, Label, Paragraph } from '../../utils/typography';

export const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-top: ${props => props.theme.margin.small};
`;

export const StyledFooterContent = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    padding: 0 ${props => props.theme.padding.medium};
    border-top: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const FooterContentInner = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: columns;
    grid-template-columns: repeat(2, 1fr);
`;

export const FooterContactBlock = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2.5rem;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.xlarge};
    border-left: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};

    ${HeadingThree} {
        max-width: 60%;
        margin: 0 auto;
    }

    ${Paragraph} {
        max-width: 60%;
        margin: 0 auto;
    }
`;

export const FooterActionsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, minmax(min-content, max-content));
    gap: 5rem;
    border-right: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;

export const StyledList = styled.ul`
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    padding: ${props => props.theme.padding.medium} ${props => props.theme.padding.large};
`;

export const StyledListItem = styled.li`
    display: flex;
`;

export const StyledLink = styled(Link)`
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 0.5rem;

    ${Label} {
        transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
        user-select: none;
        pointer-events: none;
    }

    & .footer-link-icon {
        position: absolute;
        top: 50%;
        left: -5rem;
        transform: translateY(-50%);
        opacity: 0;
        visibility: hidden;
        transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0.2rem;
        background-color: ${props => props.theme.colors.black};
        transform: scaleX(0);
        transform-origin: left;
        transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
    }

    &:hover {
        &::after {
            transform: scaleX(1);
        }

        & .footer-link-icon {
            left: 0;
            opacity: 1;
            visibility: visible;
        }

        ${Label} {
            margin-left: ${props => props.theme.margin.medium};
        }
    }
`;

export const StyledContactList = styled.ul`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 0.1rem;
        width: 100%;
        background-color:  ${props => props.theme.colors.secondaryBrown};
    }
`;

export const StyledContactListItem = styled.li`
    position: relative;
    transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);

    &:hover {
        background-color: ${props => props.theme.colors.primaryYellow};
    }

    &:not(:last-child) {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            height: 100%;
            width: 0.1rem;
            background-color:  ${props => props.theme.colors.secondaryBrown};
        }
    }

    &:last-child {
        grid-column: 5 / 7;
    }
`;  

export const ContactLink = styled.a`
    height: 100%;
    width: 100%;
     display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.padding.small};

    ${Label} {
        user-select: none;
        pointer-events: none;
    }
`;

export const StyledButton = styled.button`
    height: 100%;
    width: 100%;
     display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
`;

export const StyledContactForm = styled.div`
    width: 100%;
    max-width: 60%;
    margin: 0 auto;
    display: flex;
`;

export const StyledForm = styled.form`
    position: relative;
    width: 100%;
`;

export const StyledFormGroup = styled.div`
    position: relative;
    width: 100%;
    padding: 2.5rem 0;
`;

export const StyledInput = styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 0.2rem solid ${props => props.theme.colors.black};
    font-size: 1.6rem;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    transition: 0.35s cubic-bezier(0.47, 0, 0.745, 0.715);
    cursor: text;

    &:hover,
    &:focus,
    &:valid {
        border-color: ${props => props.theme.colors.primaryYellow}
    }
`;

export const StyledSubmitButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: min-content;
    padding-left: 2rem;
`;

export const StyledFooterInfo = styled.div`
    display: flex;
    padding: 1.5rem ${props => props.theme.padding.medium};
    border-top: 0.1rem solid ${props => props.theme.colors.secondaryBrown};
`;


export const StyledFooterInfoInner = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 0.1rem;
        height: 100%;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 0.1rem;
        height: 100%;
        background-color: ${props => props.theme.colors.secondaryBrown};
    }
`;
