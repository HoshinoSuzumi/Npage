<template>
  <div class="mdui-col-xs-3 mdui-col-sm-2 mdui-col-md-1 np-label" @click="(plus === '') ? add() : open(url)">
    <button class="close" :id="title" v-if="plus !== ''" @click="del($event)"></button>
    <a-avatar class="mdui-m-a-1 mdui-m-t-2" :size="64" :icon="(plus === '') ? 'plus' : ''"
              :style="{backgroundColor: (plus === '') ? '#c8c8c8' : color}">
      {{ title.slice()[0] }}
    </a-avatar>
    <div style="display: flex; justify-content: center; align-content: center;">
      <p class="mdui-text-truncate" style="max-width: 100px;">
        {{ (plus === '') ? '' : title }}
      </p>
    </div>
  </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: "Label",
        props: ['title', 'color', 'url', 'plus'],
        methods: {
            open(url) {
                window.location.href = url;
            },
            add() {
                this.$store.commit('mkSite', {
                    title: '0x' + new Date().getTime().toString(16).toUpperCase(),
                    url: 'https://www.baidu.com/',
                    color: '#3282F2'
                })
            },
            del(el) {
                this.$store.commit('rmSite', el.target.id);
            }
        },
        mounted() {
            $('.np-label, .close').click(function (e) {
                e.stopPropagation();
            });
        }
    }
</script>

<style scoped>

  .np-label {
    cursor: pointer;
    text-align: center;
    margin-top: 0;
    border-radius: 10px;
    box-shadow: none;
    transition: all .3s;
  }

  .np-label:hover {
    transform: scale(1.05);
    box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, .09), 0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, .06);
    box-sizing: border-box;
    transition: all .3s;
  }

  .np-label p {
    margin-top: .25em;
  }

  .np-label:hover .close {
    display: block;
  }

  .np-label .close {
    display: none;
    z-index: 1;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    outline: none;
    color: #C8C8C8;
    border-radius: 15px;
    line-height: 15px;
    text-align: center;
    height: 15px;
    width: 15px;
    font-size: 15px;
    padding: 0;
    top: 3px;
    right: 3px;
    position: absolute;
    transition: all .3s ease;
  }

  .np-label .close::before {
    content: "\2716";
  }

  .np-label .close:hover {
    color: #47494e;
  }
</style>
