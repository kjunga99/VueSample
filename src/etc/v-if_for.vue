<template>

  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>모달창</h4>
      <p>내용</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div class="menu"> 
    <a v-for="menu in 2" :key="menu">Home</a> <!-- v-for="작명 in 횟수" 반복문 -->
    <a v-for="menu1 in menus" :key="menu1">{{ menu1 }}</a> 
    <!-- v-for 쓸때 :key 꼭 써야함. 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀(문자,숫자) -->
    <a v-for="(a, i) in menus" :key="i">{{ i }}</a>
    <!-- 왼쪽변수:array 데이터, 오른쪽변수:1씩 증가하는 정수 -->
  </div>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p class="red" :style="style01">{{ price1 }} 만원</p>
    <button v-on:click="increase">허위매물신고</button>
    <!-- @click="신고수++" -->
    <!-- 이벤트 핸들러 : @mouseover="" 등등 이벤트명 찾아쓰면 됨, 입력할 자바스크립트 코드가 길면 아래 함수를 사용함 -->
    <span>신고수 : {{ 신고수[0] }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @:click="increase">허위매물신고</button>
    <span>신고수 : {{ 신고수[1] }}</span>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ price3 }} 만원</p>
    <button v-on:click="increase">허위매물신고</button>
    <span>신고수 : {{ 신고수[2] }}</span>
  </div>

  <hr />

  <div v-for="(a, i) in 3" :key="i">
    <h4>{{ products[i] }}</h4>
    <p>{{ price1 }} 만원</p>
  </div>

  <hr />
  
  <div v-for="(a, i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>{{ price1 }} 만원</p>
  </div>

  <hr />

  <div>
    <img :src="원룸들[0].image">
    <h4>{{ 원룸들[0].title }}</h4>
    <p>{{ 원룸들[0].price }} 만원</p>
  </div>

  <hr />

  <div v-for="(a, i) in 원룸들" :key="i"> <!-- 반복문 사용-->
    <img :src="a.image">
    <h4>{{ a.title }}</h4>
    <p>{{ a.price }} 만원</p>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import data from '../assets/oneroom.js'


export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      price1 : 60,
      price2 : 70,
      price3 : 90,
      style01 : 'color:red',
      products : ['역삼동', '천호동', '마포구'],
      menus : ['Shop', 'About'],
      신고수 : [0, 0, 0],
      
      모달창열렸니 : false,

      원룸들 : data,
    }
  },

  methods : { // 함수 만드는 공간
    increase() {
      this.신고수[1] += 1  // data() 안에 들어있는 데이터쓸땐 this.데이터명
    },
  },
  components: {
    // HelloWorld
  }
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
