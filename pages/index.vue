<template>
  <div>

    <ContentArea title="Search">
      <div>
        <label>
          <input class="np-search" spellcheck="false" type="text" placeholder="Search everything" autofocus/>
        </label>
        <button class="np-search-btn mdui-hidden-md-up" @click="Search(null)">SEARCH</button>
      </div>
    </ContentArea>

    <ContentArea title="Websites">
      <Label title="百度" :color="'#3282F2'" :url="'https://www.baidu.com'"/>
      <Label title="" plus/>
    </ContentArea>

  </div>
</template>

<script>
    import Label from "../components/Label";
    import ContentArea from "../components/ContentArea";

    import $ from 'jquery';

    export default {
        name: "index",
        components: {Label, ContentArea},
        methods: {
            Search(kw) {
                if (kw === null) {
                    let inputted = $('.np-search').val();
                    if (inputted) {
                        kw = inputted;
                    }
                }
                if (kw !== null)
                    window.open('https://www.baidu.com/s?wd=' + kw);
            }
        },
        mounted() {
            let self = this;
            $('.np-search').keypress(function (e) {
                if (e.which === 13) {
                    self.Search($('.np-search').val());
                }
            });
        }
    }
</script>

<style scoped>

</style>
