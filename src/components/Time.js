import React,{Component} from 'react';
import {Con,Col,Tile,Icon} from 'tinper-bee';

class Time extends Component{
  render() {
    return (
    	<Con className="portal-tile-content">
    		
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="plane" />
					<h4>人才流动</h4>
				</Tile>
			</Col>
			<Col md={3}>
	    		<Tile hoverColors="info">
					<Icon type="earth-globe" />
					<h4>员工休假</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="fire-symbol" />
					<h4>员工信息</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="plane" />
					<h4>员工动态</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="stack-exchange-symbol" />
					<h4>人才结构</h4>
				</Tile>
			</Col>
    	</Con>
    	)
  }
}

export default Time;