import React from 'react';
import Image from '../../Image/Image';
import { Label } from '../../../utils/typography';
import { StyledMenu, StyledMenuActions, StyledMenuAction, StyledMenuLogo, StyledLogoInner } from './Menu.style';

const MENU_LINKS = [
    {
        "id": 1,
        "label": "Allocation",
        "state_label": "allocation"
    },
    {
        "id": 2,
        "label": "1 - Profile",
        "state_label": "profile"
    },
    {
        "id": 3,
        "label": "2 - Relatives",
        "state_label": "relatives"
    },
    {
        "id": 4,
        "label": "3 - Enrollment",
        "state_label": "enrollment"
    },
    {
        "id": 5,
        "label": "4 - Accommodate",
        "state_label": "accommodate"
    },
    {
        "id": 6,
        "label": "Update Account",
        "state_label": "update-account"
    },
    {
        "id": 7,
        "label": "Update Password",
        "state_label": "update-password"
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
                        active={activeAction === l.state_label.toLowerCase()}
                        onClick={() => setActiveAction(l.state_label)}
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