<script setup>
import  CONFIG  from '@/config/config'
const {scrollStep} = CONFIG.slider

const shows = useState("allShows");
const isSliding = ref(false);

let scrollAnimationCount = useState("scrollAnimationCount");
let supportAnimationClass = useState("supportAnimationClass");

const props = defineProps({
  variant: String,
});

function scrollSection(data) {

  if (isSliding.value) return;

  isSliding.value = true;
  supportAnimationClass.value = "slider-animation";
  if (data === "right") {

    scrollAnimationCount.value -= (scrollStep-1)*10//90;

    setTimeout(function () {
      supportAnimationClass.value = "";
      scrollAnimationCount.value += (scrollStep-1)*10 //90;

      const els = shows.value.splice(0, scrollStep-1);
      shows.value.push(...els);

      isSliding.value = false;
    }, 900);
  } else if (data === "left") {
    scrollAnimationCount.value += (scrollStep-1)*10;

    setTimeout(function () {
      supportAnimationClass.value = "";
      scrollAnimationCount.value -= (scrollStep-1)*10;

      const els = shows.value.splice(-(scrollStep-1));
      shows.value.unshift(...els);

      isSliding.value = false;
    }, 900);
  }
}
</script>
    
<template>
  <div class="c-scroll" :class="variant === 'right' ? 'c-scroll--right':''"
       @click="scrollSection(variant)">
    <div :class="`c-scroll__section c-scroll__section--${variant}`">
      >
    </div>
  </div>
</template>