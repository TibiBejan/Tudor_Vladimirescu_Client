import React, { useRef } from 'react';
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import { HeadingTwo, Label, Paragraph } from '../../utils/typography';
import { ShowcaseWide, SectionHeader, SectionHeaderInner, StyledButton, StyledIcon, SectionContent, SectionContentInner, SectionShowcase, SectionShowcaseInner } from './ShowcaseWideSection.stye';

function ShowcaseWideSection({children, data, showcase}) {
    // Ref
    const showcaseVideo = useRef(null);
    // Functions
    const scrollToContent = () => {
        const showcaseVideoPosition = showcaseVideo.current.offsetTop;
        window.scrollTo(0, showcaseVideoPosition);
    }

    return (
        <ShowcaseWide>
            <SectionHeader>
              <SectionHeaderInner>
                <StyledButton type="button" onClick={scrollToContent}>
                    <StyledIcon>
                        <IconContext.Provider value={{size: "1.8rem", color: "#231f20"}}>
                            <FiArrowDown className='discover-button-icon'/>
                        </IconContext.Provider>
                    </StyledIcon>
                    <Label size="small" weight="bold" color="black">View our presentatoni</Label>
                </StyledButton>
                {children}
              </SectionHeaderInner>
            </SectionHeader>
            <SectionContent>
                <SectionContentInner>
                    <HeadingTwo dark>{data.title}</HeadingTwo>
                    <Paragraph>{data.description}</Paragraph>
                </SectionContentInner>
            </SectionContent>
            <SectionShowcase ref={showcaseVideo}>
                <SectionShowcaseInner>
                    {showcase}
                </SectionShowcaseInner>
            </SectionShowcase>
        </ShowcaseWide>
    )
}

export default ShowcaseWideSection;