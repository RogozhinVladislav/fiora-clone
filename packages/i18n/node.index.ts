// import osLocale from 'os-locale';

// import * as zhCN from './zh-CN';
import * as enUS from './en-US';

// const languages = {
//     'zh-CN': zhCN,
//     'en-US': enUS,
// };

// const locale = osLocale.sync() || 'en-US';
// const locale = 'en-US';

export default function i18n(key: keyof typeof enUS) {
    // @ts-ignore
    // return languages[locale][key] || enUS[key] || key;
    return enUS[key] || key;
}
