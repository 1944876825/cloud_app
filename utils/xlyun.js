class Xlyun {
	
	// 获取分享链接第一层
	static getVerifyCode() {
		var data = '{"code":"'+this.panLink['pwd']+'","id":"'+this.panLink['shareId']+'"}'
		var header = {
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://wx.stariverpan.com',
			'referer': 'https://wx.stariverpan.com/',
		}
		uni.$u.http.post('https://productapi.stariverpan.com/cmsprovider/v2.0/cloud/verifyCode', data, {header: header}).then(res => {
			if (res.data['code'] == '200') {
				var d = res.data['data']
				this.fileList = d['shareFileInfo']
				this.panLink['userId'] = d['shareUserInfo']['id']
			} else {
				uni.showToast({
					icon: 'none',
					title: '获取文件列表失败'
				})
			}
		}).catch(err => {
			uni.showToast({
				icon: 'none',
				title: '请求失败 verifyCodeErr'
			})
		})
	}
	// 获取文件列表
	static getFileList(parentId) {
		var data = '{"parentId":"'+parentId+'","userId":"'+this.panLink['userId']+'"}'
		var header = {
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://wx.stariverpan.com',
			'referer': 'https://wx.stariverpan.com/',
		}
		uni.$u.http.post('https://productapi.stariverpan.com/cmsprovider/v2.0/cloud/fileList', data, {header: header}).then(res => {
			if (res.data['code'] == '200') {
				res.data['data'].sort((str1, str2)=> {
					return this.strCompare(str1.fileName, str2.fileName)
				});
				this.fileList.push(...res.data['data'])
			} else {
				uni.showToast({
					icon: 'none',
					title: '获取文件列表失败'
				})
			}
		}).catch(err => {
			console.log(err);
			uni.showToast({
				icon: 'none',
				title: '请求失败 fileListErr'
			})
		})
	}
	// 排序
	strCompare(str1, str2) {
	    // 处理数据为null的情况
	    if (str1 == undefined && str2 == undefined) {
	        return 0;
	    }
	    if (str1 == undefined) {
	        return -1;
	    }
	    if (str2 == undefined) {
	        return 1;
	    }
	    // 比较字符串中的每个字符
	    let c1;
	    let c2;
	    let regexArr = ['-', '_', '—', '~', '·'], canRegex = /[^0-9\.]/g;
	    // 如果都不是数字格式（含有其它内容）
	    if (canRegex.test(str1) && canRegex.test(str2)) {
	        for (let i = 0; i < regexArr.length; i++) {
	            let regex = eval('(/[^0-9\\' + regexArr[i] + '\\.]/g)');
	            // 去除后缀
	            let tps1 = str1.replace(/\.[0-9a-zA-Z]+$/, '');
	            let tps2 = str2.replace(/\.[0-9a-zA-Z]+$/, '');
	            // 如果在名字正则要求范围内（没有正则以外的值）
	            if (!regex.test(tps1) && !regex.test(tps2)) {
	                // 转换为字符串数组
	                let numberArray1 = tps1.split(regexArr[i]);
	                let numberArray2 = tps2.split(regexArr[i]);
	                return this.compareNumberArray(numberArray1, numberArray2);
	            }
	        }
	    }
	    // 逐字比较返回结果
	    for (let i = 0; i < str1.length; i++) {
	        c1 = str1[i];
	        if (i > str2.length - 1) { // 如果在该字符前，两个串都一样，str2更短，则str1较大
	            return 1;
	        }
	        c2 = str2[i];
	        // 如果都是数字的话，则需要考虑多位数的情况，取出完整的数字字符串，转化为数字再进行比较
	        if (this.isNumber(c1) && this.isNumber(c2)) {
	            let numStr1 = "";
	            let numStr2 = "";
	            // 获取数字部分字符串
	            for (let j = i; j < str1.length; j++) {
	                c1 = str1[j];
	                if (!this.isNumber(c1) && c1 !== '.') { // 不是数字则直接退出循环
	                    break;
	                }
	                numStr1 += c1;
	            }
	            for (let j = i; j < str2.length; j++) {
	                c2 = str2[j];
	                if (!this.isNumber(c2) && c2 !== '.') {
	                    break;
	                }
	                numStr2 += c2;
	            }
	            // 将带小数点的数字转换为数字字符串数组
	            let numberArray1 = numStr1.split('.');
	            let numberArray2 = numStr2.split('.');
	            return this.compareNumberArray(numberArray1, numberArray2);
	        }
	        // 不是数字的比较方式
	        if (c1 != c2) {
	            return c1 - c2;
	        }
	    }
	    return 0;
	}
	// 排序
	isNumber(obj) {
	    if (parseFloat(obj).toString() == "NaN") {
	        return false;
	    }
	    return true;
	}
	// 排序
	compareNumberArray(numberArray1, numberArray2) {
	    for (let i = 0; i < numberArray1.length; i++) {
	        if (numberArray2.length < i + 1) { // 此时数字数组2比1短，直接返回
	            return 1;
	        }
	        let compareResult = parseInt(numberArray1[i]) - parseInt(numberArray2[i]);
	        if (compareResult != 0) {
	            return compareResult;
	        }
	    }
	    // 说明数组1比数组2短，返回小于
	    return -1;
	}
	
	// 获取文件夹列表
	static getFolderList(parentId) {
		var data = '{"parentId":"'+parentId+'","userId":"'+this.panLink['userId']+'"}'
		var header = {
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://wx.stariverpan.com',
			'referer': 'https://wx.stariverpan.com/',
		}
		uni.$u.http.post('https://productapi.stariverpan.com/cmsprovider/v2.0/cloud/folderList', data, {header: header}).then(res => {
			if (res.data['code'] == '200') {
				this.fileList = []
				if (res.data['data']) {
					this.fileList = res.data['data']
				}
				this.xlGetFileList(parentId)
			} else {
				uni.showToast({
					icon: 'none',
					title: '获取文件列表失败'
				})
			}
		}).catch(err => {
			uni.showToast({
				icon: 'none',
				title: '请求失败 fileListErr'
			})
		})
	}
	
	// 获取分享链接密码
	static checkShareId() {
		var data = '{"id":"'+this.panLink['shareId']+'"}'
		var header = {
			'content-type': 'application/json;charset=UTF-8',
			'origin': 'https://wx.stariverpan.com',
			'referer': 'https://wx.stariverpan.com/',
		}
		uni.$u.http.post('https://productapi.stariverpan.com/cmsprovider/v2.0/cloud/checkShareId', data, {header: header}).then(res => {
			if (res.data['data']) {
				this.panLink['pwd'] = res.data['data']
			}
			this.xlGetVerifyCode()
		}).catch(err => {
			uni.showToast({
				icon: 'none',
				title: '请求失败 checkShareIdErr'
			})
		})
	}
}
export default Xlyun