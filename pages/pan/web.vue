<template>
	<view>
		<view class="flex-row justify-end" style="padding: 20rpx;">
			<!-- #ifdef APP-PLUS -->
			<view @tap="panGet" style="padding: 10rpx 30rpx;font-size: 12px;background-color: #FB7299;color: #fff;border-radius: 50px;">点击获取</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				currentWebview: null,
				wv: null,
				wua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
			};
		},
		onLoad(option) {
			this.type = option.type
		},
		onReady() {
			var url = ''
			if (this.type == 0) {
				url = "https://www.aliyundrive.com/sign/in"
			} else if (this.type == 1) {
				url = 'https://wx.stariverpan.com/web/home?lang=zh'
			} else if (this.type == 2) {
				url = 'https://pan.quark.cn'
				plus.navigator.setUserAgent(this.wua)
			} else {
				return
			}
			// #ifdef APP-PLUS
				this.wv = plus.webview.create("", "custom-webview", {
					plusrequire:"none", //禁止远程网页使用plus的API，有些使用mui制作的网页可能会监听plus.key，造成关闭页面混乱，可以通过这种方式禁止
					'uni-app': 'none', //不加载uni-app渲染层框架，避免样式冲突
					top:uni.getSystemInfoSync().statusBarHeight+100 ,//放置在titleNView下方。如果还想在webview上方加个地址栏的什么的，可以继续降低TOP值,
					scalable: true,
				})
				this.wv.loadURL(url)
				this.currentWebview = this.$scope.$getAppWebview(); //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
				this.currentWebview.append(this.wv);//一定要append到当前的页面里！！！才能跟随当前页面一起做动画，一起关闭
			// #endif
		},
		methods: {
			panGet() {
				if (this.type == 0) {
					this.wv.evalJS('var axx = JSON.parse(localStorage.token);var token = axx["refresh_token"];document.write(token+"<hr>（上面的值就是阿里云盘token）");');
				} else if (this.type == 1) {
					
				} else if (this.type == 2) {
					this.wv.evalJS('document.write(document.cookie+"<hr>（上面的值就是夸克网盘cookie）");');
				} else {
					return
				}
			},
		}
	}
</script>

<style lang="scss">

</style>
