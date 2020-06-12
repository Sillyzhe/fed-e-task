<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <h3> Installed </h3>
    <ul class="list-group list-group-horizontal-lg">  
      <li class="list-group-item"> Router </li>
      <li class="list-group-item"> Vuex </li>
      <li class="list-group-item"> TypeScript </li>
      <li class="list-group-item"> Axios </li>
      <li class="list-group-item"> Bootstrap </li>
      <li class="list-group-item"> Popper </li>
      <li class="list-group-item"> Sass </li>
  
    </ul>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
