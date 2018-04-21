<template>
  <div id="navbar">
    <span @click="doAction(0)">电影</span>
    <span @click="doAction(1)">音乐</span>
    <span @click="doAction(2)">书籍</span>
  </div>
</template>
<script>
export default {
  mounted: function () {},
  data () {
    return {}
  },
  computed: {

  },
  watch: {

  },
  methods: {
    doAction(index) {
      this.go(index);
    },
    go(index) {
      switch (index) {
        case 0:
          this.$router.push({
            name: 'movie'
          });
          break;
        case 1:
          this.$router.push({
            name: 'music'
          });
          break;
        case 2:
          this.$router.push({
            name: 'book'
          });
          break;
      }
    }
  }
}

</script>
<style>

</style>
