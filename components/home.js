import React from 'react'
	var styleli={
		listStyle: 'none',
		width: '20%',
		height: '210px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
	var liimg={
		width: '70%',
		height: '100%'
	}
	var lispan={
		fontSize: '25px',
		color:'#000000'
	}
	var qianggoulr={
		width: '50%',
		paddingLeft: '80px',
		
	}
	var qgh1={
		color: '#FF0000',fontSize:'40px'
	}
	var qgp={
		fontSize: '25px',
		color: '#9D9D9D',
		margin: '10px 0'
	}
	var qgspan={
		color:'#DF5000 '
	}
	var qgimg={
		position: 'absolute'
	}
class Home extends React.Component{
	render(){
		return(
			
			<div id='hu' style={{width: '100%',
		height: '100vh'}}>
			   <div id="banner" style={{height:'400px',
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap'}} >
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>美食</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>商超便利</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>果蔬生鲜</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>下午茶</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>医药健康</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>大牌5折</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>浪漫鲜花</span>
				</li>
				<li  style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>麻辣烫</span>
				</li>
				<li style={styleli}>
					<img style={liimg} src="https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>地方菜系</span>
				</li>
				<li style={styleli} >
					<img style={liimg} src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
				    <span style={lispan}>披萨意面</span>
				</li>
		    </div>
		   <div id="qianggou" style={{height: '300px',width: '100%',display:'flex',marginTop: '50px'}}>
			<div className="qg_left" style={qianggoulr}>
				<h1 style={qgh1}>限量抢购</h1>
				<p style={qgp}>超值美味9.9元起</p>
				<span style={qgspan}>3819人正在抢></span>
				<img style={qgimg} src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
			</div>
			<div className="qg_right" style={qianggoulr}>
				<h1 style={qgh1}>品质套餐</h1>
				<p style={qgp}>搭配齐全吃得好</p>
				<span style={qgspan}>立即抢购></span>
				<img  style={qgimg} src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" />
			</div>
		</div>
		</div>	
			
		)
	}
}
export default Home