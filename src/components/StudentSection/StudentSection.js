import React, { useState, useEffect } from 'react';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Menu from './Menu/Menu';
import { StyledSection, StyledSectionInner, SectionContent } from './StudentSection.style';

function StudentSection() {
    // State
    const [ activeSection, setActiveSection ] = useState('profile');
    // Effect

    return (
        <StyledSection>
            <StyledSectionInner>
                <Menu activeAction={activeSection} setActiveAction={setActiveSection} />
                <ContentWrapper activeSection={activeSection} />
            </StyledSectionInner>
        </StyledSection>
    )
}

export default StudentSection;