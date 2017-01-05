import React,{Component} from 'react';
import {Con,Col,Tile,Icon} from 'tinper-bee';

class Employee extends Component{
  render() {
    return (
    	<Con className="portal-tile-content">
    		<Col md={3} sm={4} xs={6}>
	    		<Tile hoverColors="info">
					<Icon type="github-character" />
					<h4>待办事项</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="cog-wheel-silhouette" />
					<h4>员工入职</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="checkered-raised-flag" />
					<h4>员工离职</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="plane" />
					<h4>人才流动</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
	    		<Tile hoverColors="info">
					<Icon type="earth-globe" />
					<h4>员工休假</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="fire-symbol" />
					<h4>员工信息</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="plane" />
					<h4>员工动态</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
				<Tile hoverColors="info">
					<Icon type="stack-exchange-symbol" />
					<h4>人才结构</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}>
	    		<Tile hoverColors="info">
					<Icon type="github-character" />
					<h4>待办事项</h4>
				</Tile>
			</Col>
			<Col md={3} sm={4} xs={6}> 
				<Tile hoverColors="info">
					<Icon type="cog-wheel-silhouette" />
					<h4>员工入职</h4>
				</Tile>
			</Col>
    	</Con>
    )
  }
}

export default Employee;