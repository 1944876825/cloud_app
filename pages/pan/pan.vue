<template>
	<view class="content flex-col" style="padding: 20rpx;">
		<view class="header">
			<view class="nT flex-row justify-between items-center" style="padding: 20rpx;background-color: #fff;border-radius: 20rpx;">
				<view class="" style="font-size: 16px;font-weight: 600;">
					云盘列表
				</view>
				<view class="" 
					@tap="toPanAdd"
					style="font-size: 12px;color: #fff;background-color: #FB7299;border-radius: 50px;padding: 8rpx 15rpx;">
					添加/修改
				</view>
			</view>
		</view>
		<view class="center">
			<view 
				v-if="panUser['aliyun']"
				class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 20rpx;margin-top: 20rpx;">
				<view class="flex-row justify-between">
					<u-avatar :src="pan[0]['img']" size="35"></u-avatar>
					<text style="font-size: 16px;">{{panUser['aliyun']['nick_name']}}</text>
					<u-avatar :src="panUser['aliyun']['avatar']" size="35"></u-avatar>
				</view>
				<view class="line_1" style="padding: 30rpx;font-size: 14px;">
					token: {{panUser['aliyun']['refresh_token']}}
				</view>
				<view class="flex-row justify-between">
					<view class="" style="font-size: 12px;background-color: #FB7299;color: #fff;border-radius: 50px;padding: 8rpx 20rpx;">
						刷新
					</view>
					<view class="" style="font-size: 12px;background-color: #00aaff;color: #fff;border-radius: 50px;padding: 8rpx 20rpx;">
						打开
					</view>
				</view>
			</view>
			
			<view
				v-if="panUser['xlyun']"
				class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 20rpx;margin-top: 20rpx;">
				<view class="flex-row justify-between">
					<u-avatar :src="pan[1]['img']" size="35"></u-avatar>
					<text style="font-size: 16px;">{{panUser['xlyun']['nick_name']}}</text>
				</view>
				<view class="line_1" style="padding: 30rpx;font-size: 14px;">
					私钥: {{panUser['xlyun']['pkey']}}
				</view>
				<view class="flex-row justify-between">
					<view class="" style="font-size: 12px;background-color: #00aaff;color: #fff;border- radius: 50px;padding: 8rpx 20rpx;">
						打开
					</view>
				</view>
			</view>
			
			<view
				v-if="panUser['quark']"
				class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 20rpx;margin-top: 20rpx;">
				<view class="flex-row justify-between">
					<u-avatar :src="pan[2]['img']" size="35"></u-avatar>
					<text style="font-size: 16px;">{{panUser['quark']['nick_name']}}</text>
					<u-avatar :src="panUser['quark']['avatar']" size="35"></u-avatar>
				</view>
				<view class="line_1" style="padding: 30rpx;font-size: 14px;">
					cookie: {{panUser['quark']['cookie']}}
				</view>
				<view class="flex-row justify-between">
					<view class="" style="font-size: 12px;background-color: #FB7299;color: #fff;border-radius: 50px;padding: 8rpx 20rpx;">
						刷新
					</view>
					<view class="" style="font-size: 12px;background-color: #00aaff;color: #fff;border-radius: 50px;padding: 8rpx 20rpx;">
						打开
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
				pan: [],
				panUser: {},
			};
		},
		onLoad() {
			this.pan = getApp().globalData.pan
			this.panUser = getApp().globalData.panUser
		},
		onShow() {
			this.panUser = getApp().globalData.panUser
		},
		methods: {
			toPanAdd() {
				uni.navigateTo({
					url:'/pages/pan/add'
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
