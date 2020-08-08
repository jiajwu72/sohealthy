<template>
  
  <Frame1>
    <router-view></router-view>
  </Frame1>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Frame1 from './components/common/Frame1';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Frame1,
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>

body{
  font: milkshake;
}

</style>
