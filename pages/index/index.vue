<template>
	<view class="content flex-col" style="padding-bottom: 20rpx;">
		<u-sticky offsetTop="0">
			<view class="flex-col" style="width: 750rpx;background-color: #fff;padding: 10rpx 20rpx;">
				<view class="head" style="">
					
				</view>
				<view class="" style="background-color: #fff;display: flex;flex-direction: row;height: 70rpx;">
					<view class="" @tap="toCenter">
						<u-avatar :src="'https://q1.qlogo.cn/g?b=qq&nk='+userInfo['qq']+'&s=640'" size="35"></u-avatar>
					</view>
					<view class="" style="width: 440rpx;margin-left: 20rpx;">
						<u-search
							placeholder="电影 / 电视剧 / 动漫"
							height="60rpx"
							:showAction="false"
							searchIconSize="16"
							style="font-size: 13px;"
						></u-search>
					</view>
				</view>
			</view>
		</u-sticky>
		
		<view class="header">
			<view class="flex-col" style="width: 750rpx;background-color: #fff;padding: 0 20rpx;">
				<view class="" style="width: 710rpx;margin-top: 15rpx;">
					<u-swiper
						:list="swiperList"
						height="388rpx"
						radius="13rpx"
						indicator
						indicatorMode="line"
						imgMode="aspectFill"
						keyName="image"
						showTitle
						circular
						@click="tapSwiper"
					></u-swiper>
				</view>
			</view>
			
			<view class="funMain flex-row" style="padding: 0 15rpx;margin-top: 15rpx;">
				<view class="funBox" style="width: 50%;" @tap="sponsor">
					<view class="" style="background-color: #FB7299;border-radius: 20rpx;width: 95%;height: 150rpx;display: flex;justify-content: center;align-items: center;margin: 0 auto;">
						<view style="">
							<u-icon name="rmb-circle" size="25" color="#fff"></u-icon>
						</view>
						<text class="funTip" style="width: 120rpx;color: #fff;font-weight: 600;">
							赞助
						</text>
					</view>
				</view>
				<view class="funBox" style="width: 50%;" @tap="toFileAdd">
					<view class="nT" style="background-color: #fff;border-radius: 20rpx;width: 95%;height: 150rpx;display: flex;justify-content: center;align-items: center;margin: 0 auto;">
						<view style="">
							<u-icon name="calendar" size="30" color="#FB7299"></u-icon>
						</view>
						<text class="funTip" style="width: 120rpx;color: #FB7299;font-weight: 600;">
							投稿
						</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="center">
			<view class="" style="padding: 0 20rpx;">
				<view
					v-for="card in cardList"
					style="background-color: #fff;border-radius: 20rpx;padding: 20rpx;margin: 15rpx 0;">
					
					<view class="hotMain">
						<view class="flex-row justify-between" style="padding: 10rpx 0;">
							<text style="font-weight: 600;font-size: 16px;">{{card['name']}}</text>
							<!-- <view class="" style="border: solid 1px #8a8a8a;border-radius: 50px;padding: 0 5rpx 3rpx 20rpx;display: flex;justify-content: center;align-items: center;">
								<u-icon name="arrow-right" label="更多" labelPos="left" labelSize="12px" size="13px"></u-icon>
							</view> -->
						</view>
						
						<view class="flex-row" style="padding: 5rpx 0;flex-wrap: wrap;">
							<view class="videoCardMain flex-col" v-for="video in card['list']" @tap="playVideo(video['id'])">
								<view class="videoCardImgBox">
									<image class="videoCardImg" :src="video['img']" mode="aspectFill"></image>
								</view>
								<view class="videoCardName line_1">
									{{video['name']}}
								</view>
								<view class="videoCardRate">
									<u-rate readonly allowHalf v-model="video['douban_score']" activeColor="#f19e38" size="13px"></u-rate>
								</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="" style="padding: 20rpx;background-color: #fff;border-radius: 20rpx;margin-top: 15rpx;">
					<view class="flex-row justify-between" style="padding: 10rpx 0;">
						<text style="font-size: 16px;font-weight: 600;">近期更新</text>
					</view>
					<view class="flex-row" style="padding: 10rpx 0;flex-wrap: wrap;">
						<view
							v-for="vod in vodList"
							class="videoCardMain flex-col"
							@tap="playVideo(vod['id'])">
							<view class="videoCardImgBox">
								<image class="videoCardImg" :src="vod['img']" mode="aspectFill"></image>
							</view>
							<view class="videoCardName line_1">
								{{vod['name']}}
							</view>
							<view class="videoCardRate">
								<u-rate readonly allowHalf v-model="vod['douban_score']" activeColor="#f19e38" size="13px"></u-rate>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="bottom">
			<u-loadmore :status="status" />
			<view 
				v-if="isShowToTop"
				@tap="toTop"
				class="flex-col justify-center items-center" style="position: fixed;right: 30rpx;bottom: 60rpx;width: 100rpx;height: 100rpx;background-color: #FB7299;border-radius: 50rpx;">
				<u-icon name="arrow-upward" size="20" color="#fff"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore',
				swiperList: [],// 轮播图列表
				vodList: [],// 视频列表
				cardList: [],// 卡片列表
				page: 1,
				isShowToTop: false,
				userInfo: {}
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
			if (e.scrollTop > 3000) {
				this.isShowToTop = true
			} else {
				this.isShowToTop = false
			}
		},
		onLoad() {
			uni.$u.http.setConfig((config) => {
			    config.baseURL = getApp().globalData.api;
			    return config
			})
			this.getUserInfo()
			this.getPanUser()
			this.getAppHome()
			this.getVodList()
		},
		onReachBottom() {
			this.getVodList()
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
			getPanUser() {
				uni.getStorage({
					key:'panUser',
					success:res=>{
						getApp().globalData.panUser = res.data
					}
				})
			},
			getUserInfo() {
				uni.getStorage({
					key:'userInfo',
					success:res=>{
						getApp().globalData.userInfo = res.data
						this.userInfo = res.data
					}
				})
			},
			toTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 1000
				});
			},
			toCenter() {
				uni.switchTab({
					url:'/pages/center/center'
				})
			},
			toFileAdd() {
				uni.navigateTo({
					url: '/pages/pan/fileAdd'
				})
			},
			playVideo(id) {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			},
			getVodList() {
				this.status = 'loading'
				uni.$u.http.post('api/movie/data/?m=list', {page: this.page}).then(res => {
					this.status = 'loadmore'
					this.vodList.push(...res.data['data'])
					this.page++
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: '视频列表获取失败'
					})
				})
			},
			getAppHome() {
				uni.$u.http.get('api/movie/data/?m=appHome').then(res => {
					this.swiperList = res.data['data']['swiper']
					this.cardList = res.data['data']['card']
				}).catch(err => {
					uni.showToast({
						icon: 'none',
						title: '视频列表获取失败'
					})
				})
			},
			tapSwiper(e) {
				if (e['url']) {
					getApp().mRoute(e['url'])
				}
			},
		}
	}
</script>

<style scoped lang="scss">
	.head {
		/* #ifndef H5 */
			height: 80rpx;
		/* #endif */
		/* #ifdef H5 */
			height: 30rpx;
		/* #endif */
	}
	.center {
		.videoCardMain {
			width: 220rpx;
			padding: 8rpx 0;
			.videoCardImgBox {
				text-align: center;
				.videoCardImg {
					width: 200rpx;
					height: 280rpx;
					border-radius: 16rpx;
				}
			}
			.videoCardName {
				font-size: 12px;
				padding: 0 15rpx;
				text-align: center;
			}
			.videoCardRate {
				padding: 3rpx 15rpx;
			}
		}
	}
</style>
