
// 引入i18n国际化插件
import * as mUtils from '@/utils/mUtils'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'

Vue.use(VueI18n);
 
// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: mUtils.getStore('lang') || 'zh',
  messages: {
    zh: {
      ...zhLocale
    },
    en: {
      ...enLocale
    },
  }
});

export default i18n;