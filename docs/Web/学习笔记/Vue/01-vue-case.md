---
id:  vue-case
title: vue-case
---

### 折叠案板

```jsx
<template>
  <div id="app">
    <h3>案例: 折叠面板</h3>
    <div>
      <div class="title">
        <h4>芙蓉类送新建</h4>
        <span class="btnn" @click="showView">
          {{isShow ? "收起" : "显示"}}
        </span>
      </div>
      <div class="content" v-show="isShow">
        <p>寒雨连江夜入吴</p>
        <p>平明送客楚山孤</p>
        <p>洛阳亲友如相问</p>
        <p>一片冰心在玉壶</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    showView() {
      this.isShow = !this.isShow
      console.log(this.isShow);
    }
  },
}
</script>
<style lang="less">
  body {
    background-color: #ccc;
    #app {
      width: 500px;
      margin: 100px auto;
      border: 5px solid rgb(68, 98, 172);
      border-radius: 20px;
      background-color: #fff;
      padding-bottom: 30px;
      h3 {
        font-size: 25px;
        text-align: center;
      }
      .content,.title {
          margin: 0 50px;
          border: 1px solid #000;
           padding:0 20px;
      }
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
```

