import styled from 'styled-components';
import { HeadingThree, Label } from '../../utils/typography';


export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    transition: 0.3s cubic-bezier(0.4, 0, 0, 1);
`;

export const SlideImage = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
    user-select: none;
    pointer-events: none;
    overflow: hidden;
`;

export const StyledSlide = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    overflow: hidden;

    &:hover {
        ${SlideImage} {
            & > div > span {
                transform: scale(1.1);
            }
        }

        ${StyledButton} {
            ${Label} {
                &:first-child {
                    transform: translate3d(0, -100%, 0);
                    opacity: 0;
                }
    
                &:last-child {
                    transform: translate3d(0, 0, 0);
                    opacity: 1;
                }
            }
        }
    }
`;

export const SlideContent = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: ${props => props.theme.padding.small};
    background-color: ${props => props.theme.colors.white};
    user-select: none;
    pointer-events: none;

    ${HeadingThree} {
        margin-bottom: ${props => props.theme.margin.small};
    }
`;

export const  LinkLabel = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: ${props => props.theme.padding.small};
    overflow: hidden;

    ${Label} {
        font-weight: 500;
        transition: opacity 0.3s cubic-bezier(0.4, 0, 0, 1),transform 0.6s cubic-bezier(0.4, 0, 0, 1);

        &:first-child {
            transform: translate3d(0, 0, 0);
            opacity: 1;
            
        }

        &:last-child {
            position: absolute;
            top: 0;
            bottom: 0;
            transform: translate3d(0, 100%, 0);
            opacity: 0;
        }
    }
`;
