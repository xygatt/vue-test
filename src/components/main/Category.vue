<template>
    <div>
        <h2>Category</h2>

        <ul>
            <li v-for="(item, idx) in categorys" :key="idx">
                <button @click="selectCategoty(item.id)" target="_blank">
                    <span>{{item.name}}</span>
                </button>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            categorys: [
                {
                    name: "전체메뉴",
                    id: "all",
                    src: ""
                },
                {
                    name: "족발",
                    id: "j",
                    src: ""
                },
                {
                    name: "한식",
                    id: "h",
                    src: ""
                },
                {
                    name: "양식",
                    id: "y",
                    src: ""
                }
            ]
    };
  },
  methods: {
      selectCategoty(id) {
          console.log(id); 
        //   router.push({ name: 'ShopList', params: { categoryId: id }})
      }
  }
};
</script>

<style scoped>
</style>