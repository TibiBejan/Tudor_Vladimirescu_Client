import React from 'react';
import Image from '../../Image/Image';
import { Label } from '../../../utils/typography';
import { StyledMenu, StyledMenuActions, StyledMenuAction, StyledMenuLogo, StyledLogoInner } from './Menu.style';

const MENU_LINKS = [
    {
        "id": 1,
        "label": "Allocation"
    },
    {
        "id": 2,
        "label": "Profile"
    },
    {
        "id": 3,
        "label": "Relatives"
    },
    {
        "id": 4,
        "label": "Enrollment"
    }
];

function Menu({ activeAction, setActiveAction }) {
  return (
    <StyledMenu>
        <StyledMenuActions>
            {
                MENU_LINKS.map(l => (
                    <StyledMenuAction 
                        key={l.id}
                        active={activeAction === l.label.toLowerCase()}
                        onClick={() => setActiveAction(l.label.toLowerCase())}
                    >
                        <Label color="black" weight="bold" uppercase>{l.label}</Label>
                    </StyledMenuAction>
                ))
            }
        </StyledMenuActions>
        <StyledMenuLogo>
            <StyledLogoInner>
                <Image fileName="logo/logo-tuiasi.png" alt="Gheorghe Asachi University logo" />
            </StyledLogoInner>
        </StyledMenuLogo>
    </StyledMenu>
  )
}

export default Menu;