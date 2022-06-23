import React from 'react';
import Image from '../../Image/Image';
import { Label } from '../../../utils/typography';
import { StyledMenu, StyledMenuActions, StyledMenuAction, StyledMenuLogo, StyledLogoInner } from './Menu.style';

const MENU_LINKS = [
    {
        "id": 1,
        "label": "Students",
        "state_label": "students"
    },
    {
        "id": 2,
        "label": "Create users",
        "state_label": "create-users"
    },
    {
        "id": 3,
        "label": "Update Account",
        "state_label": "update-account"
    },
    {
        "id": 4,
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