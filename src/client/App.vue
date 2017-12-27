<template>
  <div class="app full-height">
    <h1>{{ message }}</h1>
    <Button type="primary" @click="open">Click Me</Button>
    <router-link :to="{ name: 'hello' }">Goto Hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
async function asyncFun() {
  var value = 10;
  return value;
}
(async () => {
  console.log(await asyncFun());
})();

export default {
  data() {
    return {
      message: "Express + Vue boilerpla"
    };
  },
  methods: {
    async time() {
      return axios.post("/api/time", { time: new Date().getTime() });
    },
    async name() {
      return axios.post("/api/name", {hello : 'world' });
    },
    async open() {
      var name = await this.name();
      var data = await this.time();

      this.$Notice.success({
        title: "Notification title",
        desc: JSON.stringify(data)
      });
    }
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
