import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faFloppyDisk,faImage} from '@fortawesome/free-solid-svg-icons';
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const SidebarExampleVisible = () => (
  <SidebarPushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <MenuItem   as={Link} to="/home">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </MenuItem>
      <MenuItem as={Link} to="/screen2">
       <FontAwesomeIcon icon={faFloppyDisk} />
        File System
      </MenuItem>
      <MenuItem as={Link} to="/reports">
       <FontAwesomeIcon icon={faImage} />
        Reportes
      </MenuItem>
    </Sidebar>

    <SidebarPusher>
      <Segment basic>
        <Header as='h3'>Application </Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </SidebarPusher>
  </SidebarPushable>
)

export default SidebarExampleVisible