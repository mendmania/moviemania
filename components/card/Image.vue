<script setup>
const props = defineProps({
  image: Object,
});

const { image } = toRefs(props);
</script>
        
<template>
  <div class="c-card__holder--16-9">
    <div class="c-card__holder--position c-card__holder--img-url"
         :style="{backgroundImage:`url('${image.medium}')`}">
      <span class="card--center"></span>
    </div>
  </div>
</template>