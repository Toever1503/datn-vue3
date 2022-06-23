<template>
    <a-carousel arrows>
        <router-link to="/home">
            <div class="h-100 slide-item"
                style="background-image: url(https://imgaz1.chiccdn.com/os/202206/20220620044202_788.jpg);">
                <!-- <div>
                    <h3 class="m-0 p-0" style="height: unset; font-size: 30px">Main Content</h3>
                    <span style="height: fit-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <br />
                    <a-button type="primary" ghost>Buy Now</a-button>
                </div> -->
            </div>
        </router-link>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
    </a-carousel>
</template>
<script setup></script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 350px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-slide)>div,
.ant-carousel :deep(.slick-slide)>div>a {
    height: 100%;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}

.slide-item {
    height: 100%;
    display: grid !important;
    align-items: center
}

.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}

.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>
