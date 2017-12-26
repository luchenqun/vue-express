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
export default {
  data() {
    return {
      message: "Express + Vue boilerpla"
    };
  },
  methods: {
    open() {
      var self = this;
      axios.post("/api/time", { time: new Date().getTime() }).then(data => {
        self.$Notice.success({
          title: "Notification title",
          desc: JSON.stringify(data)
        });
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
