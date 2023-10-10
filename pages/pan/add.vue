<template>
	<view class="content flex-col" style="padding: 20rpx;">
		<view class="header">
			<view class="flex-row">
				<view
					class="Tab"
					:class="tabIndex==0 ? 'aTab' : ''"
					@tap="setTab(0)">
					阿里云
				</view>
				<view
					class="Tab"
					:class="tabIndex==1 ? 'aTab' : ''"
					style="margin-left: 15rpx;"
					@tap="setTab(1)">
					小龙云
				</view>
				<view
					class="Tab"
					:class="tabIndex==2 ? 'aTab' : ''"
					style="margin-left: 15rpx;"
					@tap="setTab(2)">
					夸克
				</view>
			</view>
		</view>
		<view class="center">
			<view class="" style="margin-top: 20rpx;">
				<view class="addMain">
					<view class="addBox" v-if="tabIndex==0">
						<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
							<text style="font-size: 14px;font-weight: 600;">token：</text>
							<input type="text" v-model="token" placeholder="阿里云盘账号token" style="font-size: 14px;padding: 0 15rpx;">
						</view>
						<view class="flex-row" style="font-size: 12px;margin-top: 20rpx;">
							<view class="" 
								@tap="toWeb"
								style="background-color: #00aaff;color: #fff;padding: 8rpx 15rpx;border-radius: 50px;">
								获取token
							</view>
						</view>
					</view>
					
					<view class="addBox" v-if="tabIndex==1">
						<view class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;">
							<text style="font-size: 14px;font-weight: 600;">私钥：</text>
							<textarea v-model="pkey" name="" id="" cols="30" rows="10" style="padding: 15rpx;font-size: 14px;" placeholder="小龙云登录私钥"></textarea>
						</view>
					</view>
					
					<view class="addBox" v-if="tabIndex==2">
						<view class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;">
							<text style="font-size: 14px;font-weight: 600;">cookie：</text>
							<textarea v-model="quark" name="" id="" cols="30" rows="10" style="padding: 15rpx;font-size: 14px;" placeholder="夸克网盘cookie"></textarea>
						</view>
						<view class="flex-row" style="font-size: 12px;margin-top: 20rpx;">
							<view class="" 
								@tap="toWeb"
								style="background-color: #00aaff;color: #fff;padding: 8rpx 15rpx;border-radius: 50px;">
								获取cookie
							</view>
						</view>
					</view>
				</view>
				
				<view
					@tap="addPan"
					class="nT"
					style="background-color: #fff;border-radius: 20rpx;margin-top: 30rpx;height: 80rpx;text-align: center;line-height: 80rpx;font-size: 16px;font-weight: 600;">
					完成
				</view>
			</view>
		</view>
		<view class="bottom">
			
		</view>
	</view>
</template>

<script>
	import Aliyun from '../../utils/aliyun'
	export default {
		data() {
			return {
				tabIndex: 0,
				token: '',
				pkey: '',
				quark: '',
				Aliyun: null,
			}
		},
		onLoad(option) {
			var panUser = getApp().globalData.panUser
			if (panUser['aliyun']) {
				this.token = panUser['aliyun']['refresh_token']
			}
			// if (panUser['xlyun']) {
			// 	this.token = panUser['xlyun']['refresh_token']
			// }
			this.Aliyun = new Aliyun()
		},
		methods: {
			setTab(index) {
				this.tabIndex = index
			},
			async addPan() {
				if (this.tabIndex==0) {
					this.Aliyun.userInfo['refresh_token'] = this.token
					let ures = await this.Aliyun.Refresh();
					uni.showToast({
						icon:'none',
						title:ures
					})
				}
			},
			toWeb() {
				// #ifdef APP-PLUS
				uni.navigateTo({
					url:'/pages/pan/web?type='+this.tabIndex
				})
				// #endif
			},
		}
	}
</script>

<style lang="scss" scoped>
	.Tab {
		padding: 10rpx 25rpx;
		background-color: #fff;
		border-radius: 50px;
		font-size: 14px;
		font-weight: 600;
	}
	.aTab {
		background-color: #FB7299;
		color: #fff;
	}
	.imgAct {
		background-color: #FB7299;
		color: #fff;
	}
</style>
