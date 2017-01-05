import React,{Component} from 'react';
import {Navbar,FormControl,Badge,Con,Col,Tile,Icon} from 'tinper-bee';
import NavLink from './NavLink';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;	
const Nav = Navbar.Nav;
const SideContainer = Navbar.SideContainer;

class PortalNavbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false,
            current: 1
        }
    }

    onToggle(value) {
        this.setState({expanded: value});
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div id="navbar">
                <Navbar fluid={true} className="portal-navbar" expanded={this.state.expanded} onToggle={this.onToggle.bind(this)}>
                    <div className="toggle-wrap"><Toggle show/></div>
                    <Header>
                        <Brand>
                            <a href="#"><img style={{width:94}} src="/img/logo.png"/></a>
                        </Brand>
                    </Header>

                    <Nav pullRight className="portal-nav">
                        <NavItem eventKey={1} className="form-item"><FormControl type="text" placeholder="Search"/></NavItem>

                        <Menu mode="horizontal" className="dropdown">
                            <SubMenu title={<span><Badge dataBadge="4" colors="warning">
                                <img className="img-title" src="/img/img.jpeg" />
                                </Badge>刘认华<Icon type="caret-down"></Icon></span>}>
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Nav>
                </Navbar>
                <Col md={1} style={{paddingLeft:0}}>
                <SideContainer onToggle={this.onToggle.bind(this)} expanded={this.state.expanded}>
                    <Menu onClick={this.handleClick.bind(this)}
                          defaultOpenKeys={['demo3sub1']}
                          selectedKeys={[this.state.current]}
                          mode="inline"
                          className="portal-menu" >
                        <Menu.Item 
                            key="1">
                            <NavLink to="/"><Icon type="home"/><h4>首页</h4></NavLink>
                        </Menu.Item>
                        <Menu.Item key="2"><NavLink to="/organize"><Icon type="sitemap"/><h4>组织管理</h4></NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to="/employee"><Icon type="group-profile-users"/><h4>员工管理</h4></NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to="/time"><Icon type="time"/><h4>时间管理</h4></NavLink></Menu.Item>
                        
                    </Menu>
                </SideContainer>
                </Col>
                
            </div>
        )
    }
}

export default PortalNavbar;