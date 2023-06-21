<template>
  <div>
    <h1>Hello {{ aniaml }}</h1>

    <p>원숭이는 {{ food }}를 좋아합니다.</p>
    <input type="text" v-model="food" />

    <img v-bind:src="img" alt="img" />
    <a :href="url">네이버</a>
    <a :href="food">{{ food }}</a>  <!-- input과 연결 -->

    <hr />
    <p :class="{ red : food==='apple', 'not-good': food==='rice' }">원숭이는 {{ food }}를 좋아합니다.</p> 
    <!-- 오브젝트형태 { 클래스(키) : 참/거짓(값) } : 값을 여러개 넣을수 있음 / .not-good 는 -(대쉬)가 있어 '' 해줌-->
  </div>
</template>

<script>


export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      aniaml : "Monkey",
      food : "apple",
      img : "https://placeimg.com/100/100/any",
      url : "https://www.naver.com",
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
.orange {color:orange}
.salmon {color:salmon}
.red {color:red}
.not-good {text-decoration: line-through;}

</style>
