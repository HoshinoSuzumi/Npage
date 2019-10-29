<template>
  <div>
    <NavBar/>
    <div class="main">
      <ContentArea title="Search">
        <div>
          <label>
            <input class="np-search" spellcheck="false" type="text" placeholder="Search everything" autofocus/>
          </label>
          <button class="np-search-btn mdui-hidden-md-up" @click="Search(null)">SEARCH</button>
        </div>
      </ContentArea>

      <ContentArea title="Bookmarks">
        <div class="websites-container mdui-container-fluid">
          <Label v-for="(website, index) in $store.state.config.websites" :key="index" :title="website.title"
                 :color="website.color" :url="website.url"/>
          <Label title="" plus/>
        </div>
      </ContentArea>
    </div>
    <AddSitePanel/>
  </div>
</template>

<script>
    import Label from "../components/Label";
    import ContentArea from "../components/ContentArea";

    import $ from 'jquery';
    import NavBar from "../components/NavBar";
    import AddSitePanel from "../components/AddSitePanel";

    export default {
        name: "index",
        components: {AddSitePanel, NavBar, Label, ContentArea},
        methods: {
            Search(kw) {
                if (kw === null) {
                    let inputted = $('.np-search').val();
                    if (inputted) {
                        kw = inputted;
                    }
                }
                if (kw !== null)
                    this.$store.state.config.settings['openInNewTab']
                        ? window.open('https://www.baidu.com/s?wd=' + kw)
                        : window.location.href = 'https://www.baidu.com/s?wd=' + kw;
            }
        },
        beforeCreate() {
            if (localStorage.getItem('config') === null) {
                localStorage.setItem('config', JSON.stringify(this.$store.state.config));
            } else {
                this.$store.commit('rewriteConfig', JSON.parse(localStorage.getItem('config')));
            }
        },
        mounted() {
            let self = this;
            $('.np-search').keypress(function (e) {
                if (e.which === 13) {
                    self.Search($('.np-search').val());
                }
            });
        },
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*background: rgba(0, 196, 141, .5);*/
  }

  .websites-container {
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow: 0.5rem 0.875rem 2.375rem rgba(39, 44, 49, .06), 0.0625rem 0.1875rem 0.5rem rgba(39, 44, 49, .03);
    padding: 15px;
  }
</style>
