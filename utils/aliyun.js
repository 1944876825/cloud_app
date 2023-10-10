class Aliyun {
	userInfo = {}
	file = {}
	pwd = ''
	next_marker = ''
	share_token = ''
	isDesc = true
	panUser = {}
	my_file_id = ''
	
	constructor() {
		this.getUserInfo()
	}
	
	// 获取视频播放链接
	async getVideoPlay(file) {
		this.file = file
		var pmsg = '解析失败';
		if (!this.share_token) {
			let sres = await this.getCacheShareToken()
			if (sres != '成功') {
				return sres
			}
		}
		let mres = await this.getCacheFile()
		if (mres == '成功') {
			if (this.userInfo['jxType'] == 'down') {
				var playUrlList = await this.getVideoDownUrl()
			} else {
				var playUrlList = await this.getVideoPlayUrl()
			}
			return playUrlList
		} else {
			return mres
		}
	}
	
	// 获取分享链接资源列表
	async getShareFile(file, pwd, isDesc) {
		this.file = file
		this.pwd = pwd
		this.isDesc = isDesc
		if (!this.share_token) {
			let sres = await this.getCacheShareToken()
			if (sres != '成功') {
				fmsg = smsg
				return {fileList, fmsg}
			}
		}
		var fileList = await this.getShareFileList()
		return fileList
	}
	
	// 获取缓存中的网盘信息
	async getUserInfo() {
		this.panUser = getApp().globalData.panUser
		if (this.panUser['aliyun']) {
			this.userInfo = this.panUser['aliyun']
		} else {
			uni.showToast({
				icon:"none",
				title:'请先绑定阿里云盘账号'
			})
		}
	}
	
	// 缓存网盘信息
	setUserInfo() {
		this.panUser['aliyun'] = this.userInfo
		uni.setStorage({
			key:'panUser',
			data:this.panUser
		})
	}
	
	// 刷新账号
	async Refresh() {
		var data = {
			'refresh_token': this.userInfo['refresh_token'],
			'grant_type': 'refresh_token'
		}
		var hedaer = {
			'content-type': 'application/json;charset=UTF-8',
			'Referer': 'https://www.aliyundrive.com/',
			'Origin': 'https://www.aliyundrive.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		const ures = await uni.$u.http.post('https://auth.aliyundrive.com/v2/account/token', data, {header: hedaer}).then(res => {
			if (res.data['access_token']) {
				this.userInfo = res.data
				if (this.userInfo['cache_file_id']) {
					res.data['cache_file_id'] = this.userInfo['cache_file_id']
					this.setUserInfo()
					return '成功'
				} else {
					return this.AddFolder()
				}
			} else {
				return '账号刷新失败'
			}
		}).catch(err => {
			return '账号刷新失败'
		})
		return ures
	}
	
	// 创建目录
	async AddFolder() {
		var name = "缓存"+Date.now()
		var data = {
			'drive_id': this.userInfo['default_drive_id'],
			'parent_file_id': 'root',
			'name': name,
			'check_name_mode': 'refuse',
			'type': 'folder',
		}
		var hedaer = {
			'authorization': 'Bearer '+this.userInfo['access_token'],
			'content-type': 'application/json;charset=UTF-8',
			'Referer': 'https://www.aliyundrive.com/',
			'Origin': 'https://www.aliyundrive.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		const amsg = await uni.$u.http.post('https://api.aliyundrive.com/adrive/v2/file/createWithFolders', data, {header: hedaer}).then(res => {
			if (res.data['file_id']) {
				this.userInfo['cache_file_id'] = res.data['file_id']
				this.setUserInfo()
				return '成功'
			} else {
				return '缓存目录创建失败'
			}
		}).catch(err => {
			return '缓存目录创建失败'
		})
		return amsg
	}
	
	// 获取视频播放地址
	async getVideoPlayUrl() {
		var data = {
			'drive_id': this.userInfo['default_drive_id'],
			'file_id': this.my_file_id,
			'category': 'live_transcoding',
			'template_id': 'QHD|FHD|HD|SD|LD',
			'url_expire_sec': 14400,
		}
		var hedaer = {
			'authorization': 'Bearer '+ this.userInfo['access_token'],
			'content-type': 'application/json;charset=UTF-8',
			'Referer': 'https://www.aliyundrive.com/',
			'Origin': 'https://www.aliyundrive.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		let playUrlList = await uni.$u.http.post('https://api.aliyundrive.com/v2/file/get_video_preview_play_info', data, {header: hedaer}).then(res => {
			var playUrlList = []
			var urlList = res.data['video_preview_play_info']['live_transcoding_task_list']
			if (urlList.length > 0) {
				urlList.forEach(e=>{
					playUrlList.unshift({
						title: e['template_height']+'P',
						url: e['url']
					})
				})
				return playUrlList
			} else {
				return '解析失败'
			}
		}).catch(err => {
			var restxt = JSON.stringify(err.data)
			if (restxt.includes('AccessTokenInvalid')) {
				// let ures = await this.Refresh();
				// if (ures == '成功') {
				// 	return this.getVideoPlayUrl()
				// } else {
				// 	return '账号失效，请在网盘界面刷新账号'
				// }
			}
			return '解析失败'
		})
		return playUrlList
	}
	
	// 获取视频下载地址
	async getVideoDownUrl() {
		var userInfo = this.userInfo
		var data = {
			'drive_id': this.userInfo['default_drive_id'],
			'file_id': this.my_file_id,
			'url_expire_sec': 14400,
		}
		var hedaer = {
			'authorization': 'Bearer '+this.userInfo['access_token'],
			'content-type': 'application/json;charset=UTF-8',
			'Referer': 'https://www.aliyundrive.com/',
			'Origin': 'https://www.aliyundrive.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		let playUrlList = await uni.$u.http.post('https://api.aliyundrive.com/v2/file/get_download_url', data, {header: hedaer}).then(res => {
			if (res.data['url']) {
				playUrlList = [
					{
						title: '线路1',
						url: res.data['url']
					}
				]
				return playUrlList
			} else {
				return '解析失败'
			}
		}).catch(err => {
			var restxt = JSON.stringify(err.data)
			if (restxt.includes('AccessTokenInvalid')) {
				// let ures = await this.Aliyun.Refresh();
				// if (ures == '成功') {
				// 	return this.getVideoDownUrl()
				// } else {
				// 	return '账号失效，请在网盘界面刷新账号'
				// }
			}
			return '解析失败'
		})
		return playUrlList
	}
	
	async getCacheFile() {
		const res = await uni.getStorageSync(this.file['file_id']);
		if (res['my_file_id']) {
			if (res['cache_file_id'] == this.userInfo['cache_file_id']) {
				this.my_file_id = res['my_file_id']
				return '成功'
			}
			return await this.saveFile()
		} else {
			return await this.saveFile()
		}
	}
	
	// 转存
	async saveFile() {
		var file = this.file
		var data = '{"requests":[{"body":{"file_id":"'+file['file_id']+'","share_id":"'+file['share_id']+'","auto_rename":true,"to_parent_file_id":"'+this.userInfo['cache_file_id']+'","to_drive_id":"'+this.userInfo['default_drive_id']+'"},"headers":{"Content-Type":"application/json"},"id":"0","method":"POST","url":"/file/copy"}],"resource":"file"}'
		var hedaer = {
			'authorization': 'Bearer '+this.userInfo['access_token'],
			'x-share-token': this.share_token,
			'content-type': 'application/json;charset=UTF-8',
			'Referer': 'https://www.aliyundrive.com/',
			'Origin': 'https://www.aliyundrive.com',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		const mres = await uni.$u.http.post('https://api.aliyundrive.com/adrive/v2/batch', data, {header: hedaer}).then(res => {
			if (res.data['responses']['0']['body']['file_id']) {
				this.my_file_id = res.data['responses']['0']['body']['file_id']
				uni.setStorage({
					key: file['file_id'],
					data: {
						'cache_file_id': this.userInfo['cache_file_id'],
						'my_file_id': this.my_file_id,
					}
				})
				return '成功'
			} else {
				return '转存失败'
			}
		}).catch(err => {
			var restxt = JSON.stringify(err.data)
			if (restxt.includes('AccessTokenInvalid')) {
				// let ures = await this.Aliyun.Refresh();
				// if (ures == '成功') {
				// 	return this.saveFile()
				// } else {
				// 	return '账号失效，请在网盘界面刷新账号'
				// }
			}
			if (restxt.includes('QuotaExhausted.Drive')) {
				return '账号内存已满，请在网盘界面清理账号'
			}
			return '转存失败'
		})
		return mres
	}
	
	async getCacheShareToken() {
		const res = await uni.getStorageSync(this.file['share_id']);
		if (res) {
			if (res['time'] > Date.now()) {
				this.share_token = res['share_token']
				return '成功'
			}
			return await this.getShareToken()
		} else {
			return await this.getShareToken()
		}
	}
	
	// 获取分享资源ShareToken
	async getShareToken() {
		var data = {
			'share_id': this.file['share_id'],
			'share_pwd': this.pwd,
		}
		var header = {
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://www.aliyundrive.com',
			'referer': 'https://www.aliyundrive.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		const sres = await uni.$u.http.post('https://api.aliyundrive.com/v2/share_link/get_share_token', data, {header: header}).then(res => {
			if (res.data['share_token']) {
				uni.setStorage({
					key: this.file['share_id'],
					data: {
						'share_token': res.data['share_token'],
						'time': Date.now() + 300000
					}
				})
				this.share_token = res.data['share_token']
				return '成功'
			} else {
				return '资源获取失败'
			}
			return '资源获取失败'
		})
		return sres
	}
	
	// 获取阿里网盘分享资源列表
	async getShareFileList() {
		var file = this.file
		var data = {
			'image_thumbnail_process': "image/resize,w_256/format,jpeg",
			'image_url_process': "image/resize,w_1920/format,jpeg/interlace,1",
			'limit': 20,
			'marker': this.next_marker,
			'order_by': "name",
			'order_direction': this.isDesc ? "ASC" : "DESC",
			'parent_file_id': file['file_id'],
			'share_id': file['share_id'],
			'video_thumbnail_process': "video/snapshot,t_1000,f_jpg,ar_auto,w_256",
		}
		var header = {
			'x-share-token': this.share_token,
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://www.aliyundrive.com',
			'referer': 'https://www.aliyundrive.com/',
			'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
		}
		let fres = await uni.$u.http.post('https://api.aliyundrive.com/adrive/v3/file/list', data, {header: header}).then(res => {
			if (res.data['items']) {
				this.next_marker = res.data['next_marker']
				return res.data['items']
			} else {
				return '获取失败'
			}
		}).catch(err => {
			return '获取失败'
		})
		return fres
	}
}

export default Aliyun