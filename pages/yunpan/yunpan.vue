<template>
	<view class="content flex-col" style="padding: 20rpx;">
		<view class="header">
			<view class="">
				
			</view>
		</view>
		<u-sticky>
			<view class="flex-row justify-between nT" style="padding: 20rpx;background-color: #fff;border-radius: 20rpx;">
				<text style="font-size: 16px;font-weight: 600;">文件列表</text>
				<text style="font-size: 12px;border-radius: 50rpx;background-color: #fb7299;padding:8rpx 20rpx;color: #fff;" @tap="setDesc">{{isDesc ? '倒序' : '正序'}}</text>
			</view>
		</u-sticky>
		<view class="center" style="">
			<view class="nT" style="background-color: #fff;border-radius: 20rpx;margin-top: 30rpx;padding: 20rpx 0;">
				<view
					v-if="type=='0'"
					class="flex-col fileMain">
					<view
						class="flieBox flex-row items-center"
						v-for="(f,index) in fileList"
						@tap="openFile(f,index)">
						<image :src="f['type']=='folder' ? pan[0]['folder'] : f['thumbnail']" mode=""></image>
						<view>{{f['name']}}</view>
					</view>
				</view>
				
				<view
					v-if="type=='1'"
					class="flex-col fileMain">
					<view
						class="flieBox flex-row items-center justify-between"
						v-for="(f,index) in fileList"
						@tap="openFile(f,index)">
						<image :src="f['isFolder']=='1' ? pan[1]['folder'] : '../../static/img/xl-video.png'" mode=""></image>
						<text>{{f['fileName']}}</text>
					</view>
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
				type: '',
				fileList: [],
				share_token: '',
				panLink: '', //云盘信息
				aliShareToken: {},//阿里网盘shareToken缓存
				isDesc: true,// 是否正序
				Aliyun: null,
				pan: {}
			};
		},
		onLoad(option) {
			this.type = option.type
			this.pan = getApp().globalData.pan
			uni.getStorage({
				key:'panLink',
				success:res=>{
					this.panLink = res.data
					uni.setNavigationBarTitle({
						title: this.panLink.name
					})
					this.initYunPan()
				},
				fail:err=>{
					uni.showToast({
						icon:'none',
						title:'云盘信息不存在'
					})
				}
			})
		},
		onReachBottom() {
			if (this.type == '0') {
				if (this.Aliyun.next_marker) {
					this.getAliFileList()
				}
			}
		},
		methods: {
			// 设置排序
			setDesc() {
				this.isDesc = !this.isDesc
				if (this.type == '0') {
					this.fileList = []
					this.getAliFileList()
				}
				if (this.type == '1') {
					this.fileList.reverse()
				}
			},
			// 初始化（区分链接类型、匹配资源id等）
			initYunPan() {
				if (this.type == '0') {
					this.Aliyun = new Aliyun()
					this.getAliFileList()
				}
				if (this.type == '1') {
					
				}
			},
			async getAliFileList() {
				let fileList = await this.Aliyun.getShareFile(this.panLink, this.pwd, this.isDesc)
				if (typeof(fileList)=='object' && fileList.length > 0) {
					this.fileList = fileList
				} else {
					uni.showToast({
						icon: 'none',
						title: fmsg
					})
				}
			},
			// 打开文件夹
			openFile(file, index) {
				if (this.type == '0') {
					if (file['type'] == 'folder') {
						var link = {
							'share_id': file['share_id'],
							'file_id': file['file_id'],
							'pwd': this.panLink['pwd'],
							'name': file['name']
						}
						uni.setStorage({
							key:'panLink',
							data:link,
							success:res=>{
								uni.navigateTo({
									url:'/pages/yunpan/yunpan?type='+this.type
								})
							}
						})
					}
					if (file['category'] == 'video') {
						uni.setStorage({
							key: 'fileList',
							data: this.fileList,
							success:res=>{
								uni.setStorage({
									key: 'shareToken',
									data:this.Aliyun.share_token,
									success:res=>{
										uni.navigateTo({
											url:'/pages/play/play?index='+index+'&type='+this.type+'&pwd='+this.panLink['pwd']
										})
									}
								})
							}
						})
					}
				}
				if (this.type == '1') {
					// 文件夹
					if (file['isFolder'] == '1') {
						this.xlGetFolderList(file['id'])
					}
					if (file['suffix']=='mp4' || file['suffix']=='mkv') {
						uni.setStorage({
							key: 'fileList',
							data:this.fileList,
							success:res=>{
								uni.navigateTo({
									url:'/pages/play/play?index='+index+'&type='+this.type+'&pwd='+this.panLink['pwd']
								})
							}
						})
					}
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.center {
		.flieBox {
			padding: 10rpx 30rpx;
			image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 15rpx;
			}
			view {
				padding: 15rpx 30rpx;
				width: 500rpx;
				word-wrap: break-word;
				font-size: 12px;
			}
		}
	}
</style>
