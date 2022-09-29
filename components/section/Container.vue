<script setup>
const props = defineProps({
    sectionName:String,
})

const {sectionName} = props
</script>

<template>
    <div class="c-section-container">
        <div class="c-section-container__name">
            {{sectionName}}
        </div>
        <div class="c-section-container__cards">
            <slot />
        </div>
    </div>
</template>