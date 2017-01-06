import React,{Component} from 'react';
import {Con,Col,Tile,Icon} from 'tinper-bee';

class Organize extends Component{
  render() {
    return (
    	<Con className="portal-tile-content">
    		
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="uf-personin" />
					<h4>员工信息</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="uf-earth" />
					<h4>员工动态</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="uf-widgetab" />
					<h4>人才结构</h4>
				</Tile>
			</Col>
    		<Col md={3}>
	    		<Tile hoverColors="info">
					<Icon type="uf-pass-s-o" />
					<h4>待办事项</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="uf-training" />
					<h4>员工入职</h4>
				</Tile>
			</Col>
			<Col md={3}>
				<Tile hoverColors="info">
					<Icon type="uf-seal" />
					<h4>员工离职</h4>
				</Tile>
			</Col>
    	</Con>
    )
  }
}

export default Organize;