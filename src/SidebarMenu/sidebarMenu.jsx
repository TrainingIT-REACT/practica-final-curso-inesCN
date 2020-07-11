import React, {Component} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class SidebarMenu extends Component {
  
state = {}

handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state

    return (
  <Sidebar.Pushable as={Segment}>
  <Sidebar
    as={Menu}
    icon='labeled'
    inverted
    vertical
    visible
    width='thin'
  >
     <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}

        >
          Upcoming Events
        </Menu.Item>
      </Menu>
  </Sidebar>

  <Sidebar.Pusher>
    <Segment basic>
      <Header as='h3'>Application Content</Header>
      {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
    </Segment>
  </Sidebar.Pusher>
</Sidebar.Pushable>
)
}
}


export default SidebarMenu