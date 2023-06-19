<template>
  
  <div>
    <nav>
      <router-link to="/">Home</router-link>   <!-- <a> 태그로 만들어짐. tag='div' 로 하면 div 로 생성. -->
      <router-link to="/about">About</router-link>
      <router-link :to="{name : 'Names'}">Names</router-link>  <!-- path가 아니라 name을 통해서 매칭시켜줌. -->
      <router-link to="/user">User</router-link>  <!-- http://localhost:8080/user/zz -->
      <router-link to="/user2/HAHA">User2</router-link>
    </nav>
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'App',
  data() { // 데이터바인딩
    return {
      
    }
  },

  methods : { // 함수 만드는 공간
    
  },
  components: {
    
  }
}
</script>

<style scoped>

</style>
