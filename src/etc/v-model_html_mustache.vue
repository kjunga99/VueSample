<template>
  <div>
    <h1>Hello {{ aniaml }}</h1> <!-- 머스태치 사용 -->
    <p>원숭이는 {{ food }}를 좋아합니다.</p>
    <input type="text" v-model="food" />
    <div v-html="alertMessage"></div> <!-- 확실한 경우일때만 사용 -->
    <!-- <div v-html="subscribeHtml"></div> -->
  </div>
</template>

<script>


export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      aniaml : "Monkey",
      food : "apple",
      alertMessage : "<h2>경고 !!!</h2>",
      // subscribeHtml : '<button onclick="document.querySelector('body').style.background = 'red'">구독하기</button>',
    }
  },

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background:#2c3e50;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}

div {box-sizing: border-box;}
.black-bg {
  width:100%; height:100%; background: rgba(0,0,0, .5);
  position:fixed; padding:20px;
}
.white-bg {
  width:100%; background: #fff;
  border-radius:8px; padding:20px;
}
</style>
