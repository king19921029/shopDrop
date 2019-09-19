//域名
const host = 'http://api.swdel.com';

// 公共请求参数
let configData = {}
// 获取header
function getHeader(method) {
	if (method == "POST") {
		return {
			"Authentication": uni.getStorageSync("token"),
			"Content-type": "application/x-www-form-urlencoded",
		}
	} else {
		return {
			'Content-type': 'application/json'
		}
	}
}

// 小程序请求数据的方法
function request(url, method, data, header) {
	uni.showLoading({
		title: "正在加载..."
	});

	return new Promise((resolve, reject) => {
		wx.request({
			url: host + url,
			method: method,
			data: data,
			header: getHeader(method),
			success: function(res) {
				console.log(res)
				if (res.data.code == 0) {
					uni.hideLoading();
					resolve(res.data)
				} else {
					uni.hideLoading();
					uni.showToast({
						title: res.data.message,
						icon: 'none',
						duration: 1000
					})
					reject(res)
				}
			},
			fail: function(res) {
				uni.hideLoading();
			},
			complete: function() {

			},

		})
	})
}

function get(obj) {
	return request(obj.url, 'GET', obj.data)
}

function post(obj) {
	return request(obj.url, 'POST', obj.data)
}

function getQuery() {
	/* 获取当前路由栈数组 */
	const pages = getCurrentPages()
	const currentPage = pages[pages.length - 1]
	const options = currentPage.options
	return options
}

export default {
	request,
	get,
	post,
	host,
	getQuery
}
