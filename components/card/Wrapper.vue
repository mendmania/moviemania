<script setup>
const props = defineProps({
  shows: Array,
});

const { shows } = toRefs(props);

</script>

<template>

  <div class="c-card__wrapper"
       v-for="show,i in shows"
       v-show="i>8 && i<18 || true"
       :key="show.id">
    <CardHolder :show="show" />

  </div>

</template>