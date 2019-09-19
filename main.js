import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import messages from './utils/language.js'

// 首页弹框
import comTitle from './components/com-title/com-title.vue'
Vue.component('com-title',comTitle)

// 网络请求
import WXrequest from './utils/wx_request.js'

Vue.use(VueI18n)

Vue.config.productionTip = false
// http请求
Vue.prototype.$wxhttp = WXrequest

const i18n = new VueI18n({    
  locale: 'zh-CN',    
  messages: {    
    'zh_HK': {    
      index: {    
        invite: '邀請',    
        game: '遊戲'    
      }    
    },    
    'zh-CN': {    
      index: {    
        invite: '邀请',    
        game: '游戏'    
      }    
    }    
  }    
})    
Vue.prototype._i18n = i18n
Vue.prototype.$i18nMsg = function() {
	return i18n.messages[i18n.locale]
}




App.mpType = 'app'

const app = new Vue({
	i18n,
	...App
})
app.$mount()
