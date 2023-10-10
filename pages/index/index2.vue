<template>
	<view class="content flex-col">
		<view class="header flex-col">
			<view class="head" style="background-color: #fff;"></view>
			<view class="" style="background-color: #fff;display: flex;flex-direction: row;height: 70rpx;">
				<view class="" style="padding: 0 30rpx;">
					<u-avatar src="https://q1.qlogo.cn/g?b=qq&nk=1944876825&s=640" size="35"></u-avatar>
				</view>
				<view class="" style="width: 440rpx;">
					<u-search
						placeholder="电影 / 电视剧 / 动漫"
						v-model="keyword"
						height="60rpx"
						:showAction="false"
						searchIconSize="16"
						style="font-size: 13px;"
					></u-search>
				</view>
			</view>
		</view>
		
		<view class="center flex-col">
			<scroll-view
				class="tabMain"
				:show-scrollbar="false" 
				:scroll-x="true" 
				:scroll-into-view="tabScrollInto">
				<view
					class="tabContent flex-col"
					style="width: 750rpx;background-color: #fff;border-bottom: 1px solid #e7e7e7;">
					<view class="flex-row">
						<view class="tabItem" 
							v-for="(tab, tabItemIndex) in myclass" 
							:id="'tabb' + tabItemIndex" 
							:data-id="tabItemIndex"
							@click="pressScrollViewItem(tabItemIndex)"
							style=""
							>
							<text
								class="tabItemTitle"
								:class="tabIndex==tabItemIndex ? 'tabItemTitleActive' : ''"
								style="padding: 0 30rpx;height: 70rpx;"
							>
								{{tab.type_name}}
							</text>
						</view>
					</view>
					
					<view class="tabLineView flex-row">
						<view class="tabLine tabLineActive"
							:style="{
								left: `${tabItemLineLeft}px`,
								width: `${tabItemLineWidth}px`,
							}"
						>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<swiper
			class="childPageView"
			:current="tabIndex"
			@change="swiperChange"
			:style="{height: swiperHeight +'rpx'}">
			<swiper-item class="childPageViewItem"
				v-for="(page,childPageViewItemIndex) in myclass"
				:key="childPageViewItemIndex">
				<scroll-view
					class="flex-col"
					:scroll-y="true" 
					scroll-with-animation
					:style="{height: swiperHeight +'rpx'}" lower-threshold="300">
					<view class="mPd flex-col" v-for="(card, index) in cardList">
						<view class="" v-if="index == 'swiper'">
							<u-swiper
								:list="card"
								height="405rpx"
								radius="10rpx"
								indicator
								indicatorMode="line"
								imgMode="aspectFill"
								keyName="image"
								showTitle
								circular
								@click="tapSwiper"
							></u-swiper>
						</view>
						
						<view class="flex-col" v-if="index == 'card'" style="background-color: #fff;border-radius: 20rpx;padding: 20rpx;margin: 15rpx 0;">
							<view class="hotMain flex-col">
								<view class="flex-row justify-between" style="padding: 10rpx 0;">
									<text style="font-weight: 600;font-size: 16px;">{{card['name']}}</text>
									<!-- <view class="" style="border: solid 1px #8a8a8a;border-radius: 50px;padding: 0 5rpx 3rpx 20rpx;display: flex;justify-content: center;align-items: center;">
										<u-icon name="arrow-right" label="更多" labelPos="left" labelSize="12px" size="13px"></u-icon>
									</view> -->
								</view>
								
								<view class="flex-row" style="padding: 5rpx 0;flex-wrap: wrap;">
									<view class="videoCardMain flex-col" v-for="video in card[0]['list']" @tap="playVideo(video['id'])">
										<view class="videoCardImgBox">
											<image class="videoCardImg" :src="video['img']" mode="aspectFill"></image>
										</view>
										<view class="videoCardName line_1">
											{{video['name']}}
										</view>
										<!-- <view class="videoCardRate">
											<u-rate readonly allowHalf v-model="video['douban_score']" activeColor="#f19e38" size="13px"></u-rate>
										</view> -->
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view class="" style="height: 30rpx;text-align: center;">
						
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<view class="bottom">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				keyword: '',
				swiperList: [],
				hotList: [],
				cardList: [],
				
				tabIndex: 0,
				tabScrollInto:'',
				tabItemLineLeft: 0,
				tabItemLineWidth: 24,
				windowHeight:0,
				windowWidth:0,
				tabListSize:[],
				swiperHeight: 0,
				myclass: [
					{
						type_name: '推荐'
					},
					{
						type_name: '电影'
					},
					{
						type_name: '动漫'
					}
				],
				
			}
		},
		onLoad() {
			let system = uni.getSystemInfoSync();
			this.windowHeight = system.windowHeight;
			this.windowWidth = system.windowWidth;
			var rpx = this.windowWidth / 750;
			this.swiperHeight = this.windowHeight / rpx - 170;
			// #ifndef H5
				this.swiperHeight = this.swiperHeight - 50
			// #endif
			this.jcsetTabItemDistance()
			uni.$u.http.setConfig((config) => {
			    config.baseURL = getApp().globalData.api;
			    return config
			})
			this.getVodPhbAll()
		},
		onPullDownRefresh() {
			this.getVodPhbAll()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 500);
		},
		methods: {
			playVideo(id) {
				uni.navigateTo({
					url:'/pages/detail/detail?id='+id
				})
			},
			getVodPhbAll() {
				uni.$u.http.get('api/movie/data/?m=appHome').then(res => {
					this.cardList = res.data['data']
				}).catch(err => {
					uni.showToast({
						icon: 'error',
						title: '初始化请求失败'
					})
				})
			},
			tapSwiper(e) {
				if (e['url']) {
					getApp().mRoute(e['url'])
				}
			},
			swiperChange(e) {
				let index = e.detail.current
				this.setTabSelect(index)
				this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
			},
			pressScrollViewItem(index) {
				this.setTabSelect(index);
			},
			jcsetTabItemDistance() {
				var queryTabSize = uni.createSelectorQuery().in(this);
				var timer = setInterval(res=>{
					queryTabSize.select('#tabb' + (this.myclass.length-1)).boundingClientRect(data => {
						if (data) {
							clearInterval(timer);
							this.setTabItemDistance()
						}
					}).exec()
				}, 100)
			},
			setTabItemDistance() {
				var queryTabSize = uni.createSelectorQuery().in(this);
				for (var i = 0; i < this.myclass.length; i++) {
					queryTabSize.select('#tabb' + [i]).boundingClientRect()
				}
				queryTabSize.exec(rects => {
					rects.forEach((rect) => {
						this.tabListSize[rect.dataset.id] = rect
						
					})
					this.setTabItemLinePosition(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
				});
			},
			setTabItemLinePosition(left, width) {
				this.tabItemLineLeft = left + width/2 - 12
			},
			setTabSelect(index) {
				this.tabScrollInto = 'tabb' + index;
				this.tabIndex = index;
			},
		}
	}
</script>

<style scoped lang="scss">
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
	.tabMain {
		width: 750rpx;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
	}
	.tab {
		width: 750rpx;
		display: flex;
		flex-direction: row;
		white-space: nowrap;
	}
	
	/* 隐藏滚动条 */
	
	.tab ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
	
	.tabLineView {
		position: relative;
		height: 2px;
	}
	
	.tabLine {
		position: absolute;
		height: 2px;
		top: 0;
		bottom: 0;
		width: 0;
		background-color: #FB7299;
	}
	
	.tabLineActive {
		transition-duration: 0.2s;
		transition-property: left;
	}
	
	.childPageView {
		display: flex;
		flex-direction: column;
	}
	
	.tabItemTitle {
		color: #505050;
		font-size: 15px;
		height: 50rpx;
		line-height: 50rpx;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
	}
	
	.tabItemTitleActive {
		color: #FB7299;
	}
	
	.childPageViewItem {
		flex: 1;
		flex-direction: column;
		margin-top: 10rpx;
	}
</style>
