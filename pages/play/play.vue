<template>
	<view>
		<view class="header">
			<view class="" style="height: 60rpx;">
			</view>
			<view class="">
				<view class="" v-for="f in fileList">
					{{f['name']}}
				</view>
			</view>
		</view>
		
		<view class="center">
			
		</view>
		
		<view class="bottom">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				fileList: [],
				videoPlayUrl: 'http://43.139.139.17:777/mp4/2.mp4'
			};
		},
		onLoad(option) {
			this.index = option.index
			this.getVideoInfo()
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			getVideoInfo() {
				uni.getStorage({
					key: 'fileList',
					success:res=>{
						this.fileList = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head {
		/* #ifndef H5 */
			height: 70rpx;
		/* #endif */
		/* #ifdef H5 */
			height: 20rpx;
		/* #endif */
	}
</style>
