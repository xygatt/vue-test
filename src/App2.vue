<template>
  <div> 
      <Box color="blue"/>
      <Box color="purple" />
      <Box color="green" />
      <Box color="blue" />
      <Box color="purple" />
      <Box/>
  </div>
</template>

<script>
import Box from "./components/Box";

export default {
  name: "app", 
  components: {
    Box
  }
}
</script>

<style scoped>
.box {
  border: 1px solid #000;
}
.blue {
  background: #009bff;
}
.purple {
  background: #8f46ff;
}
.green {
  background: #00bcac;
}

</style>
