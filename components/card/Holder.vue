<script setup>
import {mDebounce} from '@/utils/debounce'

const cardRef = ref(null);

let hoverShowData = useState("hoverShowData", () => {
  false;
});

let cardHover = useState("cardHover", () => {
  false;
});
let right = useState("right", () => {
  0;
});
let left = useState("left", () => {
  0;
});
let isHovering = useState("isHovering", () => {
  false;
});

const props = defineProps({
  show: Object,
});

const { show } = toRefs(props);

function onMouseEnterAction(){
  console.error('calling from debounce',cardRef.value.getBoundingClientRect())
  isHovering = true;

  left.value = cardRef.value.getBoundingClientRect().x;
  // right.value = cardRef.value.getBoundingClientRect().y;
  
  
  let bodyRect = document.body.getBoundingClientRect()
  let elemRect = cardRef.value.getBoundingClientRect()
  let offset  = elemRect.top - bodyRect.top;
  
  right.value = offset + 200;
  console.log('Element is ' + offset + ' vertical pixels from <body>',document.body.getBoundingClientRect());

  console.error('positions','left:',left.value, 'right:',right.value);
  setTimeout(function () {
    hoverShowData.value = show.value;
    if (isHovering) cardHover.value = true;
  }, 1200);
}

function onMouseEnter(ev) {
  console.error("enter");
  onMouseEnterAction()
}

function onMouseLeave() {
  console.error("dd");
  isHovering = false;
  // cardHover.value = false
}
</script>
    
<template>

  <div :id="`card-${show.id}`"
       ref="cardRef"
       class="c-card__holder">
    <CardImage ref="card-image-ref"
               :image="show.image"
               @mouseover="onMouseEnter"
               @mouseleave="onMouseLeave" />

  </div>
</template>