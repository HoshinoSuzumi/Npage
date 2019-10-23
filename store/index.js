import mdui from 'mdui';

const API_BASE = 'https://n.boxmoe.cn/api';

export const state = () => ({
  config: {
    websites: [
      {title: 'GitHub', url: 'https://github.com/', color: '#181616'},
      {title: '哔哩哔哩', url: 'https://www.bilibili.com/', color: '#FB7299'},
      {title: '百度', url: 'https://www.baidu.com/', color: '#3282F2'},
    ],
    settings: {
      "immerseNavbar": false,
      "autoSyncConfig": false,
      "openTabNewWindow": true,
    },
  },
  runtime: {
    token: null,
  }
});

export const mutations = {
  mkSite(state, site) {
    for (let i = 0; i < state.config.websites.length; i++) {
      if (state.config.websites[i].title === site.title)
        return
    }
    state.config.websites.push(site);
    this.commit('syncConfigWithLocalStorage', state.config);
    if (state.config.settings['autoSyncConfig'])
      this.commit('syncConfigWithCloudService');
  },
  rmSite(state, title) {
    for (let i = 0; i < state.config.websites.length; i++) {
      if (state.config.websites[i].title === title)
        state.config.websites.splice(i, 1)
    }
    this.commit('syncConfigWithLocalStorage', state.config);
    if (state.config.settings['autoSyncConfig'])
      this.commit('syncConfigWithCloudService');
  },
  updateSetting(state, data) {
    if (Object.keys(state.config.settings).indexOf(data.key) !== -1) {
      state.config.settings[data.key] = data.value;
    } else {
      console.log('Unknown configuration item: ' + data.key);
    }
    this.commit('syncConfigWithLocalStorage', state.config);
    if (state.config.settings['autoSyncConfig'])
      this.commit('syncConfigWithCloudService');
  },
  rewriteConfig(state, config) {
    state.config = config
  },
  flushCache(state) {
    mdui.Dialog('#settings-panel').close();
    mdui.confirm('您正在清除所有书签和设置缓存', '清除数据', function () {
      localStorage.removeItem('config');
      window.location.reload();
    }, null, {
      confirmText: '确认清除',
      cancelText: '取消',
      history: false,
      modal: true,
    });
  },
  syncConfigWithCloudService(state) {
    console.log('Features in development. Config will be synced: \n' + JSON.stringify(state.config, null, 4));
  },
  syncConfigWithLocalStorage(state, config) {
    localStorage.setItem('config', JSON.stringify(config));
  },
};
