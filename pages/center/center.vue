<template>
	<view class="content flex-col" style="padding: 0 20rpx;">
		<view class="header">
			<view class="head" style="">
				
			</view>
			
			<view class="nT" style="background-color: #fff;border-radius: 20rpx;" @tap="toSign">
				<view class="flex-row" style="padding: 50rpx 30rpx;">
					<u-avatar :src="'https://q1.qlogo.cn/g?b=qq&nk='+userInfo['qq']+'&s=640'" size="50"></u-avatar>
					<view class="flex-col" style="padding: 10rpx 50rpx;">
						<text style="font-size: 15px;font-weight: 600;">{{userInfo['name']}}</text>
						<text class="line_2" style="font-size: 12px;margin-top: 10rpx;width: 450rpx;">{{yiyan}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="center">
			<view class="" style="border-radius: 20rpx;margin-top: 20rpx;">
				<view class="flex-row" style="">
					<view class="" style="width: 25%;" @tap="toPanAdd">
						<view class="flex-col items-center nT justify-center"
							style="width: 150rpx;height: 150rpx;background-color: #fff;margin: 0 auto;border-radius: 30rpx;">
							<view class="flex-col items-center justify-center" style="width: 80rpx;height: 80rpx;">
								<u-icon name="level" size="35" color="#FB7299"></u-icon>
							</view>
							<text style="font-size: 12px;font-weight: 600;">云盘</text>
						</view>
					</view>
					<view class="" style="width: 25%;" @tap="toFileAdd">
						<view class="flex-col items-center nT justify-center"
							style="width: 150rpx;height: 150rpx;background-color: #fff;margin: 0 auto;border-radius: 30rpx;">
							<view class="flex-col items-center justify-center" style="width: 80rpx;height: 80rpx;">
								<u-icon name="calendar" size="35" color="#FB7299"></u-icon>
							</view>
							<text style="font-size: 12px;font-weight: 600;">投稿</text>
						</view>
					</view>
					<view class="" style="width: 25%;" @tap="sponsor">
						<view class="flex-col items-center nT justify-center"
							style="width: 150rpx;height: 150rpx;background-color: #fff;margin: 0 auto;border-radius: 30rpx;">
							<view class="flex-col items-center justify-center" style="width: 80rpx;height: 80rpx;">
								<u-icon name="rmb-circle" size="30" color="#FB7299"></u-icon>
							</view>
							<text style="font-size: 12px;font-weight: 600;">赞助</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {},
				yiyan: '',
			};
		},
		onLoad() {
			if (!this.userInfo.qq) {
				this.userInfo = getApp().globalData.userInfo
			}
			this.getYY()
		},
		onShow() {
			if (!this.userInfo.qq) {
				this.userInfo = getApp().globalData.userInfo
			}
		},
		methods: {
			// 赞助
			sponsor() {
				plus.runtime.openURL(getApp().globalData.zanzhu);
			},
			toPanAdd() {
				uni.showToast({
					icon:'none',
					title:"尽情期待"
				})
				return
				uni.navigateTo({
					url:'/pages/pan/pan'
				})
			},
			toFileAdd() {
				uni.navigateTo({
					url: '/pages/pan/fileAdd'
				})
			},
			toSign() {
				uni.navigateTo({
					url:'/pages/sign/sign'
				})
			},
			getYY() {
				uni.$u.http.get('https://v.api.aa1.cn/api/yiyan/index.php').then(res => {
					var str = res.data
					if (str.indexOf('<p>') >= 0) {
						var yyy = str.match(/<p>(.*)<\/p>/)
						this.yiyan = yyy[1]
					} else {
						this.yiyan = str
					}
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: '一言获取失败'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		.head {
			/* #ifndef H5 */
				height: 80rpx;
			/* #endif */
			/* #ifdef H5 */
				height: 30rpx;
			/* #endif */
		}
	}
</style>
