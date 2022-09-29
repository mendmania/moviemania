<script setup>
let supportAnimationClass = useState("supportAnimationClass");

const props = defineProps({
  variant: String,
  scrollAnimationCount:Number,
});

const {scrollAnimationCount} = toRefs(props)


const emit = defineEmits(['scrollAnimationCountChange']);

function scrollSection(data) {
  emit('scrollAnimationCountChange', data)
}
</script>
    
<template>
  <div class="c-scroll" :class="variant === 'right' ? 'c-scroll--right':''"
       @click="scrollSection(variant)">
    <div :class="`c-scroll__section c-scroll__section--${variant}`">
      <img v-if="variant==='left'" src="@/assets/icons/chevron-left.svg" />
      <img v-if="variant==='right'" src="@/assets/icons/chevron-right.svg" />
    </div>
  </div>
</template>