<template>
  <div>
    <h1>{{ count + 1 }}</h1>
    <button v-on:click="addNumber">증가</button>
    <button v-on:click="minusNumber">감소</button>

    <button v-on:click="addNumber2(10)">마우스 오버시 10 증가</button>

    <hr />

    <h1>{{ message }}</h1>
    <button @click="greeting">인사하기</button>
    <button @click="sayGoodbye">작별하기</button>

    <hr />

    <div @mouseover="getMousePosition" class="box"></div>

    <hr />
    
    <button @click="addNumber2($event, 10)">10 더하기</button>
    <button @click="addNumber2($event, 100)">100 더하기</button>

  </div>
</template>

<script>


export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      count : 0,
      message : "",
    };
  },

  methods: {
    addNumber() {  // 일반함수로 작성
      //console.log("add Number");
      this.count = this.count + 1;
    },
    minusNumber() {  
      //console.log(this);
      this.count = this.count - 1;
    },
    
    // minusNumber: ()=>{  // arrow function 은 date this를 가리키지 못함
    //   console.log(this);
    //   this.count = this.count - 1;
    // },

    addNumber2(e, value) {  // value는 함수안으로 다이렉트하게 배달된 값. 여기 함수에서만 사용.
      //console.log(value);
      
      this.count = this.count + value;
      this.message = '마우스 좌표 ${e.pageX} 와 더하기 ${value} 는 ${e.pageX + value} 입니다.';
    },

    greeting() {
      this.message = "안녕하세요."
    },
    sayGoodbye() {
      this.message = "잘 가세요."
    },
    getMousePosition(event) {  // 마우스 좌표값 읽어서 표시
      console.log(event);
      this.message = '마우스의 위치는 ${event.pageX}, ${event.pageY} 입니다.';
    },
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
