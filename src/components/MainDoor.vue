<template>
    <div>MainDoor
        <div> 
            <Banner/> 
            <Category/>
            <CouponShop/>
            <PopularStores/>
        </div>
    </div>
</template>

<script>
import Banner from "./main/Banner";
import Category from "./main/Category";
import CouponShop from "./main/CouponShop";
import PopularStores from "./main/PopularStores";

export default {
    name: "",
    components: {
        Banner,
        Category,
        CouponShop,
        PopularStores
    }
};
</script>

<style scoped>
</style>