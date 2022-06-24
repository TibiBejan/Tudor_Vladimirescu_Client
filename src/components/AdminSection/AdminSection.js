import React, { useState } from 'react';
import ContentWrapper from './ContentWrapper/ContentWrapper';
import Menu from './Menu/Menu';
import { StyledSection, StyledSectionInner, SectionContent } from './AdminSection.style';

function AdminSection() {
    // State
    const [ activeSection, setActiveSection ] = useState('students');

    return (
        <StyledSection>
            <StyledSectionInner>
                <Menu activeAction={activeSection} setActiveAction={setActiveSection} />
                <ContentWrapper activeSection={activeSection} />
            </StyledSectionInner>
        </StyledSection>
    )
}

export default AdminSection