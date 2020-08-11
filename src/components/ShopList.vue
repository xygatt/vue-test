<template>
    <div>
        <div>ShopList</div>
        {{id}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            test: "test"
        }
    }
};
</script>

<style scoped>
</style>