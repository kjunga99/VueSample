<template>
  <div>
    <h2>당신의 나이는 {{ age }}입니다.</h2>
    <p v-if="age > 18">당신은 어른입니다.</p>
    <p v-else>당신은 어른이 아닙니다.</p> 
    <!-- v-else : 같은 레벨(한부모안에 형제, 연속으로 연결되어있어야 함)에 있어야 함 -->
    <p v-else-fi="age > 13 && age <= 18">당신의 청소년입니다.</p> 
    <!-- 조건들 사이에 다른 요소가 들어가면 에러남 -->

    <hr />

    <h2 v-if="display">(if)보입니다.</h2> <!-- display:none 일때 없어짐. 완전 새롭게 생성될때 -->
    <h2 v-show="display">(show)보입니다.</h2> <!-- display:none 일때 style="display:none" 로 태그 살아있음. 랜더링 시간이 단축 -->

    <hr />
    <!-- v-for 랜더링 -->
    <h2>{{ animals }}</h2>
    <h2 v-for="(animal, index) in animals" :key="index">{{ animal }} 인덱스는 : {{ index }}</h2>
    
    <ul>
      <li v-for="(user, index) in users" :key="index">
        이름은 {{ user.name }}, 직업은 {{ user.job }}
        <p v-for="item in user.skill" :key="item">skill 은 {{ item }}</p>
      </li>
    </ul>

    <hr /> 
    <!-- 조건부 랜더링 -->
    <h2 v-for="(animal, index) in animals" :key="index">
      <span v-if="animal !=='monkey'">{{ animal }} 인덱스는 : {{ index }}</span>
    </h2> <!-- 태그 비효율적 이여서 template을 사용-->

    <template v-for="(animal, index) in animals" :key="index">
      <h2 v-if="animal !=='monkey'">{{ animal }} 인덱스는 : {{ index }}</h2>
    </template>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      age : 30,
      display : false,

      animals : ["monkey", "rat", "dog", "lion"],
      users : [
        { name: 'scalper', job:'developer', gender: 'male', skill:["html", "css", "javascropt"] },
        { name: 'john', job:'designer', gender: 'male', skill:["html", "css", "javascropt"] },
        { name: '철수', job:'pm', gender: 'female', skill:["html", "css", "javascropt"] },
      ]
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
