<template>
    <button @click="increase">{{ counter }}</button>
    <button @click="sayHi">{{ name }}</button>
</template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
        name: "options api",
      };
    },
  
    methods: {
      increase() { this.counter++; },
      sayHi() { alert(this.name); },
    },
  };
  </script>