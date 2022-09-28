<script setup>

const searchTerm = ref(null)

const urlHeroBanner = await import('@/assets/images/hero-banner.png')
console.error(urlHeroBanner.default)

</script>

<template>
    <div class="c-header" :style="`backgroundImage: url('${urlHeroBanner.default}')`">
        <div class="c-header__overlay" />
        <div class="c-header__holder">
            <div class="c-header__title">
                <img src="@/assets/icons/tv.svg" />
                <span>Moviemania</span>
            </div>
            <div class="c-header__search">
                <input placeholder="Search" v-model="searchTerm"/>
                <img src="@/assets/icons/search.svg" />
            </div>
        </div>
    </div>
</template>

<style>
</style>