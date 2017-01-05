import React,{Component} from 'react'
import {Icon,Col,Tile} from 'tinper-bee';
import PortalNavbar from '../components/PortalNavbar';

class App extends Component {
    

    render() {
        return (
            <div id="portal">
                <PortalNavbar />
                <Col md={9}>
                    {this.props.children}
                </Col>
                
            </div>
        )
    }
}

export default App;
