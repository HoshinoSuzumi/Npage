<template>
  <div class="np-navbar" :class="{'immerse': $store.state.config.settings['immerseNavbar']}">
    <div class="np-navbar-title">NPage</div>
    <div class="np-navbar-actions">
      <!--      <button class="mdui-btn" mdui-tooltip="{content: '登录以启用云同步'}">登录 / 注册</button>-->
      <button class="mdui-btn">{{ nowTemp }}</button>
      <button class="mdui-btn mdui-btn-icon mdui-text-color-grey-700"
              mdui-dialog="{target: '#settings-panel', 'history': false, 'modal': true,}">
        <i class="mdui-icon material-icons">settings</i>
      </button>
    </div>
    <SettingPanel/>
  </div>
</template>

<script>
    import mdui from 'mdui';
    import SettingPanel from "./SettingPanel";

    export default {
        name: "NavBar",
        components: {SettingPanel},
        data() {
            return {
                nowTemp: 'Fetching...',
            }
        },
        mounted() {
            mdui.mutation();
            this.$axios.get('https://api.boxmoe.cn/network/ip')
                .then((res) => {
                    this.$axios.get('https://www.tianqiapi.com/api/?appid=61587752&appsecret=vCzKza8x&ip=' + res.data.data.query)
                        .then((temp) => {
                            this.nowTemp = temp.data.city + ' ' + temp.data.data[0].tem2 + ' / ' + temp.data.data[0].tem1;
                        });
                });
        },
    }
</script>

<style scoped>
  .np-navbar {
    width: 100%;
    height: 50px;
    display: flex;
    align-content: center;
    padding: 0 1.5rem;
    transition: all .3s;
    box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, .06), 0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, .03);
    background: #FFFFFF;
  }

  .np-navbar.immerse {
    box-shadow: none;
    background: #FFFFFF00;
  }

  .np-navbar .np-navbar-title {
    width: 100%;
    margin: auto 0;
    font-size: 1.2rem;
    font-family: Poppins, "Microsoft JhengHei", sans-serif;
  }

  .np-navbar .np-navbar-actions {
    margin: auto 0;
    float: right;
    display: inline-flex;
    font-size: 1.2rem;
    font-family: "Microsoft JhengHei", sans-serif;
  }
</style>
