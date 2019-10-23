<template>
  <div class="mdui-dialog" id="settings-panel">
    <div class="mdui-dialog-title">NPage 设置</div>
    <div class="mdui-dialog-content">

      <div class="mdui-col-xs-6">
        <div class="setting-block">
          <div class="setting-block-title">
            设置和书签云同步
          </div>
          <div class="setting-block-icon">
            <i class="mdui-icon material-icons">cloud_queue</i>
          </div>
          <div class="setting-block-actions">
            <a-switch style="margin-left: .25rem; margin-bottom: .25rem;"
                      :defaultChecked="$store.state.config.settings['autoSyncConfig']"
                      @change="switchChanged('autoSyncConfig', $event)"/>
          </div>
        </div>
      </div>
      <div class="mdui-col-xs-6">
        <div class="setting-block">
          <div class="setting-block-title">
            沉浸式导航栏
          </div>
          <div class="setting-block-icon">
            <i class="mdui-icon material-icons">desktop_windows</i>
          </div>
          <div class="setting-block-actions">
            <a-switch style="margin-left: .25rem; margin-bottom: .25rem;"
                      :defaultChecked="$store.state.config.settings['immerseNavbar']"
                      @change="switchChanged('immerseNavbar', $event)"/>
          </div>
        </div>
      </div>
      <div class="mdui-col-xs-6">
        <div class="setting-block">
          <div class="setting-block-title">
            在新标签页打开窗口
          </div>
          <div class="setting-block-icon">
            <i class="mdui-icon material-icons">label_outline</i>
          </div>
          <div class="setting-block-actions">
            <a-switch style="margin-left: .25rem; margin-bottom: .25rem;"
                      :defaultChecked="$store.state.config.settings['openTabNewWindow']"
                      @change="switchChanged('openTabNewWindow', $event)"/>
          </div>
        </div>
      </div>

      <div class="mdui-col-xs-12">
        <div class="mdui-divider"></div>
        <ul class="mdui-list">

          <li class="mdui-list-item">
            <div class="mdui-list-item-content mdui-m-r-2">
              <div class="mdui-list-item-title mdui-list-item-one-line">清除数据</div>
              <div class="mdui-list-item-text">
                删除本地所有的书签和设置缓存。如果您进行过云同步，那么这些设置可以从云端重新获取
              </div>
            </div>
            <button class="mdui-btn mdui-ripple mdui-color-red">清除</button>
          </li>

        </ul>
      </div>

    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple" mdui-dialog-close>关闭</button>
      <button class="mdui-btn mdui-ripple" mdui-dialog-close>保存设置</button>
    </div>
  </div>
</template>

<script>
    import mdui from 'mdui';

    export default {
        name: "SettingPanel",
        mounted() {
            mdui.mutation();
        },
        methods: {
            switchChanged(tag, state) {
                this.$store.commit('updateSetting', {
                    key: tag,
                    value: state,
                });
            },
        },
    }
</script>

<style scoped>
  .setting-block {
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100px;
    margin-bottom: 1rem;
    border: 1px solid #C8C8C8;
    border-radius: 10px;
    padding: 10px;
    overflow: hidden;
  }

  .setting-block .setting-block-title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .setting-block .setting-block-icon {
    position: absolute;
    top: 0;
    right: 12px;
    color: rgba(0, 0, 0, .05);
  }

  .setting-block .setting-block-icon i {
    font-size: 5rem;
  }

  .setting-block .setting-block-actions {
    display: block;
    position: absolute;
    left: 1rem;
    bottom: 1.5rem;
  }
</style>
