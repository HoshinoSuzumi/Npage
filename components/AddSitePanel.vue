<template>
  <div class="mdui-dialog" id="addsite-panel">
    <div class="mdui-dialog-title">添加书签</div>
    <div class="mdui-dialog-content">

      <div class="mdui-col-xs-6">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">站点名称</label>
          <input v-model="inputData.site" class="mdui-textfield-input" type="text"/>
        </div>
      </div>
      <div class="mdui-col-xs-6">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">站点链接</label>
          <input v-model="inputData.url" class="mdui-textfield-input" type="url"/>
        </div>
      </div>
      <div class="mdui-col-xs-6">
        <div class="mdui-textfield">
          <label class="mdui-textfield-label">书签颜色</label>
          <a @click="togglePicker">{{ pickerToggleTig }} >></a>
        </div>
        <chrome-picker v-if="!simpleColorPicker" style="width: 100%;" v-model="colors"/>
        <compact-picker v-if="simpleColorPicker" style="width: 100%;" v-model="colors"/>
      </div>

    </div>
    <div class="mdui-dialog-actions">
      <button class="mdui-btn mdui-ripple" mdui-dialog-close>取消</button>
      <button class="mdui-btn mdui-ripple" @click="addSite" mdui-dialog-confirm>添加站点</button>
    </div>
  </div>
</template>

<script>
    import mdui from 'mdui';
    import {Chrome, Compact} from 'vue-color';

    export default {
        name: "AddSitePanel",
        data() {
            return {
                simpleColorPicker: true,
                pickerToggleTig: '高级',
                colors: {
                    "hsl": {"h": 248.90322580645162, "s": 1, "l": 0.696078431372549, "a": 1},
                    "hex": "#7B64FF",
                    "hex8": "#7B64FFFF",
                    "rgba": {"r": 123, "g": 100, "b": 255, "a": 1},
                    "hsv": {"h": 248.90322580645162, "s": 0.607843137254902, "v": 1, "a": 1},
                    "oldHue": 248.90322580645162,
                    "source": "hex",
                    "a": 1
                },
                inputData: {
                    site: '',
                    url: '',
                },
            }
        },
        components: {
            'chrome-picker': Chrome,
            'compact-picker': Compact,
        },
        methods: {
            addSite() {
                if (this.inputData.site !== '' && this.inputData.url !== '') {
                    for (let i = 0; i < this.$store.state.config.websites.length; i++) {
                        if (this.$store.state.config.websites[i].title === this.inputData.site) {
                            this.$message.warn('书签名称已存在');
                            return
                        }
                    }
                    this.$store.commit('mkSite', {
                        title: this.inputData.site,
                        url: this.inputData.url,
                        color: this.colors.hex8
                    });
                    this.inputData = {site: '', url: ''};
                    this.$message.success('添加成功');
                } else {
                    this.$message.error('请完整输入书签信息');
                }
            },
            togglePicker() {
                this.simpleColorPicker = !this.simpleColorPicker;
                this.pickerToggleTig = this.simpleColorPicker ? '高级' : '简单';
                setTimeout(() => {
                    new mdui.Dialog('#addsite-panel').handleUpdate();
                }, 10);
            },
        },
        mounted() {
            mdui.mutation();
        }
    }
</script>

<style scoped>

</style>
