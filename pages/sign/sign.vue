<template>
	<view class="content flex-col" style="padding: 20rpx;">
		<view class="header">
			
		</view>
		<view class="center" style="padding: ;">
			<view class="" v-if="!isSign">
				<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;">
					<text style="font-size: 14px;font-weight: 600;">昵称：</text>
					<input type="text" v-model="name" placeholder="昵称" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
				</view>
				<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
					<text style="font-size: 14px;font-weight: 600;">QQ：</text>
					<input type="text" v-model="qq" placeholder="QQ号(展示头像)" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
				</view>
				<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
					<text style="font-size: 14px;font-weight: 600;">密码：</text>
					<input type="password" v-model="pass" placeholder="密码" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
				</view>
			</view>
			<view class="" v-else>
				<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
					<text style="font-size: 14px;font-weight: 600;">账号：</text>
					<input type="text" v-model="qq" placeholder="QQ号" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
				</view>
				<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
					<text style="font-size: 14px;font-weight: 600;">密码：</text>
					<input type="password" v-model="pass" placeholder="密码" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
				</view>
			</view>
			<view
				@tap="sign"
				class="nT"
				style="background-color: #fff;border-radius: 20rpx;margin-top: 30rpx;height: 80rpx;text-align: center;line-height: 80rpx;font-size: 16px;font-weight: 600;">
				{{isSign?'登录':'注册'}}
			</view>
		</view>
		<view class="bottom">
			<view class="" style="position: fixed;bottom: 60rpx;width: 710rpx;">
				<view class="" style="text-align: center;font-size: 14px;" @tap="this.isSign = !this.isSign">
					{{isSign?'注册':'登录'}}
				</view>
				<view class="" style="font-size: 12px;text-align: center;margin-top: 20rpx;">
					注册声明/隐私声明
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSign: true,
				name: '',
				qq: '',
				pass: '',
			};
		},
		methods: {
			sign() {
				var m = 'signin'
				var data = {
					'qq': this.qq,
					'pass': this.pass,
				}
				if (!this.isSign) {
					m = 'signup'
					data['name'] = this.name
				}
				uni.$u.http.post('api/user/data/?m='+m, data).then(res => {
					if (res.data['status'] == '0') {
						uni.showToast({
							icon: 'none',
							title: res.data.msg ?? '成功'
						})
						getApp().globalData.userInfo = res.data['data']['userInfo']
						uni.setStorage({
							key:'userInfo',
							data:res.data['data']['userInfo']
						})
						uni.switchTab({
							url:'/pages/center/center'
						})
					} else {
						uni.showToast({
							icon:'none',
							title:res.data.msg ?? '失败'
						})
					}
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: '失败'
					})
				})
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
