<script setup>
import  CONFIG  from '@/config/config'
const {scrollStep} = CONFIG.slider

const shows = useState("allShows");

let isHoveringCancelled = useState("isHoveringCancelled");
onMounted(()=>{
  isHoveringCancelled.value = false
})

let scrollAnimationCount = useState("scrollAnimationCount", () => -(scrollStep-1)*10);
let supportAnimationClass = useState('supportAnimationClass', () =>'')

function animation(){
  return `transform: translate3d(${scrollAnimationCount.value}%, 0px, 0px)`
}

console.error(scrollStep)

//render card 3 times showing
const step = 3 * scrollStep
useState("scrollStep", () => step);

function getOnlyStepShows(){
  return shows.value.slice(1, step)
}



</script>

<template>
  <SectionScroll :variant="'left'" />
  <div class="c-section">
    <div class="c-section__wrapper" 
    :style="animation()"
    :class="supportAnimationClass" >
      <CardWrapper :shows="getOnlyStepShows()" />
    </div>
  </div>
  <SectionScroll :variant="'right'" />
</template>