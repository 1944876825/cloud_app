<template>
	<view class="content flex-col" style="padding: 15rpx;">
		<view class="header">
			<view class="mvInfoMain nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx 0;">
				<view class="flex-row">
					<view class="" style="padding: 0 30rpx;">
						<image style="width: 200rpx;height: 280rpx;border-radius: 10rpx;" :src="fileInfo['img']" mode=""></image>
					</view>
					<view class="flex-col" style="width: 430rpx;">
						<view class="line_1" style="font-size: 20px;font-weight: 600;padding: 15rpx 0;">
							{{fileInfo['name']}}
						</view>
						<view class="line_1" style="font-size: 13px;padding: 15rpx 0;">
							{{fileInfo['pan_type']}}
						</view>
						<view class="flex-row" style="margin-top: 15rpx;" v-if="fileInfo['douban_score']">
							<u-rate readonly allowHalf v-model="fileInfo['douban_score']" activeColor="#f19e38" size="20px"></u-rate>
							<text style="color: #f19e38;font-weight: 600;margin-left: 8rpx;font-size: 18px;">{{fileInfo['douban_score']}}</text>
						</view>
					</view>
				</view>
				<u-divider></u-divider>
				<view class="" style="padding: 10rpx 30rpx;font-size: 13px;width: ;">
					<text :class="isShowJJ ? '' : 'line_3'" @tap="isShowJJ=!isShowJJ">简介：{{fileInfo['introduction']=="" ? '暂无' : fileInfo['introduction']}}</text>
				</view>
			</view>
		</view>
		
		<view class="center flex-col">
			<view class="sourceMain flex-col nT" style="background-color: #fff;margin-top: 15rpx;border-radius: 20rpx;">
				<view class="" v-for="(source,souIndex) in fileInfo['list']">
					<view class="sourceBox">
						<view class="flex-row justify-between items-center" style="padding: 30rpx;">
							<u-avatar :src="pan[source['type']]['img']" size="35"></u-avatar>
							<text style="font-size: 14px;">{{pan[source['type']]['name']}}</text>
						</view>
						<view class="" v-for="link in source['list']">
							<view class="flex-row justify-between items-center" style="padding: 15rpx 30rpx;">
								<text style="font-size: 14px;">{{link['name']}}</text>
								<view class="flex-row">
									<text style="font-size: 12px;margin-right: 10rpx;border-radius: 50rpx;background-color: #ff0000;padding:8rpx 20rpx;color: #fff;" @tap="feedBack(link)">举报</text>
									<text style="font-size: 12px;margin-right: 10rpx;border-radius: 50rpx;background-color: #00aaff;padding:8rpx 20rpx;color: #fff;" @tap="copyYun(link['copy'])">复制</text>
									<text style="font-size: 12px;border-radius: 50rpx;background-color: #fb7299;padding:8rpx 20rpx;color: #fff;" @tap="openYun(source['type'], link)">打开</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="" v-if="souIndex != fileInfo['list']['length']-1">
						<u-divider></u-divider>
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
				id: '',
				fileInfo: {},
				isShowJJ: false,
				pan: []
			};
		},
		onLoad(option) {
			this.id = option.id
			this.getFileInfo()
			this.pan = getApp().globalData.pan
		},
		methods: {
			feedBack() {
				uni.showToast({
					icon:'none',
					title:'测试'
				})
			},
			// 复制分享链接
			copyYun(link) {
				uni.setClipboardData({
					data: link
				})
			},
			// 打开分享链接
			openYun(type, link) {
				if (link['open_url']) {
					if(plus.runtime.isApplicationExist({pname: link['pname'], action: link['action']})) {
						plus.runtime.openURL(link['open_url']);
						return
					} else {
						uni.showToast({
							icon: 'none',
							title: link['tips']
						})
					}
				}
				if (link['isplay'] == 'true') {
					uni.setStorage({
						key:'fileInfo',
						data:this.fileInfo
					})
					uni.setStorage({
						key:'panLink',
						data:link,
						success:res=>{
							uni.navigateTo({
								url:'/pages/yunpan/yunpan?type='+type
							})
						}
					})
				} else {
					plus.runtime.openURL(link['copy']);
				}
			},
			// 获取视频详情
			getFileInfo() {
				uni.$u.http.get('api/movie/data/?m=detail&id='+this.id).then(res => {
					if (res.data['status'] == '0') {
						this.fileInfo = res.data['data']
					} else {
						uni.showToast({
							icon: 'none',
							title: '信息获取失败'
						})
					}
				}).catch(err => {
					uni.showToast({
						icon: 'error',
						title: '初始化请求失败'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
