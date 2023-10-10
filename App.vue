<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			api: 'http://43.139.139.17:783/',
			userInfo: {
				'name': '',
				'qq': '',
				'token': '',
			},
			panUser: {},
			zanzhu: 'https://jq.qq.com/?_wv=1027&k=q4yG0jsK',
			pan: [
				{
					"name": '阿里',
					"img": '../../static/img/ali.png',
					"folder": '../../static/img/ali-folder.png',
				},
				{
					"name": '小龙',
					"img": '../../static/img/xl.png',
					"folder": '../../static/img/xl-folder.png',
				},
				{
					"name": '夸克',
					"img": '../../static/img/quark.png',
				}
			],
		},
		methods: {
			mRoute(url) {
				if (!url) return
				var arr = url.split('|')
				if (arr.length != 2) return
				
				if (arr[0] == 'webview') {
					// #ifdef H5
						var url = atob(arr[1])
						window.location = url
					// #endif
					// #ifndef H5
						uni.navigateTo({
							url: '/pages/webview/webview?webUrl=' + arr[1]
						})
					// #endif
				}
				if (arr[0] == 'launch_url') {
					var url = atob(arr[1])
					// #ifdef H5
						window.location = url
					// #endif
					// #ifndef H5
						plus.runtime.openURL(url)
					// #endif
				}
				if (arr[0] == 'video') {
					uni.navigateTo({
						url: '/pages/detail/detail?id=' + arr[1]
					})
				}
				
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* #ifndef APP-NVUE */
		html,
		body {
			background-color: #eef4fc;
		}
	/* #endif */
	
	/* 隐藏滚动条 */
	.hideScrollbar ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	.nT {
		box-shadow: 2px 1px 1px 1px #DEEAF7;
	}
	.mPd {
		padding: 0 15rpx;
	}
	.line_1 {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.line_2 {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.line_3 {
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.uni-page-body {
		display: initial !important;
	}
	
	html {
		font-size: 16px;
	}
	
	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
			'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	view,
	image,
	text {
		box-sizing: border-box;
		flex-shrink: 0;
	}
	
	.statusBar {
		background-color: #1b242d;
	}
	
	#app {
		width: 100vw;
		height: 100vh;
	}
	
	.flex-wrap {
		flex-wrap: wrap;
	}
	
	.flex-nowrap {
		flex-wrap: nowrap;
	}
	
	.flex-row {
		display: flex;
		flex-direction: row;
		
	}
	
	.flex-col {
		display: flex;
		flex-direction: column;
	}
	
	.justify-start {
		justify-content: flex-start;
	}
	
	.justify-end {
		justify-content: flex-end;
	}
	
	.justify-center {
		justify-content: center;
	}
	
	.justify-between {
		justify-content: space-between;
	}
	
	.justify-around {
		justify-content: space-around;
	}
	
	.justify-evenly {
		justify-content: space-evenly;
	}
	
	.items-start {
		align-items: flex-start;
	}
	
	.items-end {
		align-items: flex-end;
	}
	
	.items-center {
		align-items: center;
	}
	
	.items-baseline {
		align-items: baseline;
	}
	
	.items-stretch {
		align-items: stretch;
	}
	
	.self-start {
		align-self: flex-start;
	}
	
	.self-end {
		align-self: flex-end;
	}
	
	.self-center {
		align-self: center;
	}
	
	.self-baseline {
		align-self: baseline;
	}
	
	.self-stretch {
		align-self: stretch;
	}
	
	.flex-1 {
		flex: 1 1 0%;
	}
	
	.flex-auto {
		flex: 1 1 auto;
	}
	
	.grow {
		flex-grow: 1;
	}
	
	.grow-0 {
		flex-grow: 0;
	}
	
	.shrink {
		flex-shrink: 1;
	}
	
	.shrink-0 {
		flex-shrink: 0;
	}
	
	.relative {
		position: relative;
	}
</style>
