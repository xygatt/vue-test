<template>
<div>
  <h2>선호 장르</h2>
  <select v-model="category">
    <option disabled value>선택해주세요</option>
    <option>로맨스</option>
    <option>호러</option>
    <option>스릴러</option>
  </select>
  <span>선택: {{ category }}</span>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      checkedWebtoons: [],
      gender: "",
      category: ""
    };
  }
};
</script>


<style>
</style>