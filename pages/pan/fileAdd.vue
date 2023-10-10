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
					<view class="addBox">
						<view class="flex-row justify-between">
							<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;">
								<text style="font-size: 14px;font-weight: 600;">名称：</text>
								<input type="text" v-model="vodName" placeholder="资源名称" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
							</view>
							<view
								@tap="searchMv"
								class="nT flex-col justify-center" style="background-color: #fff;border-radius: 20rpx;margin-left: 15rpx;padding: 0 20rpx;font-weight: 600;font-size: 14px;">
								搜索
							</view>
						</view>
						<view
							class="nT"
							style="background-color: #fff;padding: 20rpx;border-radius: 20rpx;margin: 15rpx 0;">
							<text style="font-size: 14px;font-weight: 600;padding: 15rpx;">选择</text>
							<view class="flex-row" style="margin-top: 15rpx;">
								<scroll-view class="hideScrollbar" :scroll-x="true" :show-scrollbar="false">
									<view class="flex-row">
										<view 
											class="flex-col" 
											v-for="(vodImg,vigIndex) in vodImgList"
											@tap="tapImg(vigIndex)"
											:class="imgIndex==vigIndex ? 'imgAct' : ''"
											style="padding: 10rpx;border-radius: 20rpx;">
											<image class="" style="width: 120rpx;height: 160rpx;border-radius: 16rpx;" :src="vodImg['pic']" mode="aspectFill"></image>
											<text class="line_1" style="width: 120rpx;font-size: 12px;text-align: center;font-weight: 600;padding: 10rpx 0;">{{vodImg['title']}}</text>
										</view>
									</view>
								</scroll-view>
							</view>
						</view>
						<view class="nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;">
							<text style="font-size: 14px;font-weight: 600;">资源链接：</text>
							<textarea v-model="fileLink" name="" id="" cols="30" rows="10" style="padding: 15rpx;font-size: 14px;" placeholder="请在此填写资源分享链接"></textarea>
						</view>
						<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
							<text style="font-size: 14px;font-weight: 600;">密码：</text>
							<input type="text" v-model="pwd" placeholder="资源密码" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
						</view>
						<view class="flex-row nT" style="background-color: #fff;border-radius: 20rpx;padding: 30rpx;margin-top: 15rpx;">
							<text style="font-size: 14px;font-weight: 600;">备注：</text>
							<input type="text" v-model="remark" placeholder="资源备注" style="font-size: 14px;padding: 0 15rpx;width: 420rpx;">
						</view>
					</view>
				</view>
				<view
					@tap="addPan"
					class="nT"
					style="background-color: #fff;border-radius: 20rpx;margin-top: 50rpx;height: 80rpx;text-align: center;line-height: 80rpx;font-size: 16px;font-weight: 600;">
					投稿
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
				tabIndex: 0,
				fileLink: '',
				imgIndex: 0,
				vodImgList: [],
				vodName: '',
				pwd: '',
				remark: '',
			}
		},
		onLoad(option) {
			
		},
		methods: {
			// 根据名称搜索豆瓣信息
			searchMv() {
				uni.showLoading({
					title:'正在获取'
				})
				uni.$u.http.post('api/movie/douban/?m=appGetDb&name='+this.vodName).then(res => {
					uni.hideLoading()
					this.vodImgList = res.data['data']
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: '搜索失败'
					})
				})
			},
			tapImg(index) {
				this.imgIndex = index
			},
			setTab(index) {
				this.tabIndex = index
			},
			addPan() {
				if (this.fileLink) {
					var db = this.vodImgList[this.imgIndex]['id']
					uni.$u.http.post('api/movie/data/?m=panAdd', {
						type: this.tabIndex, 
						douban: db, 
						file: this.fileLink,
						pwd: this.pwd,
						remark: this.remark,
					}).then(res => {
						uni.showToast({
							icon:'none',
							title:res.data['msg']
						})
					}).catch(err => {
						uni.showToast({
							icon: 'none',
							title: '投稿失败'
						})
					})
				} else {
					uni.showToast({
						icon:'none',
						title:'请填写资源链接'
					})
				}
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
