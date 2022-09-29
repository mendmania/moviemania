<script setup>
import { isMobile } from "@/utils/isMobile";


const allowHover = ref(false)
onMounted(()=>{
   allowHover.value = !!isMobile.any()
})

const router = useRouter()

const cardRef = ref(null);

let hoverShowData = useState("hoverShowData", () => 0);

let cardHover = useState("cardHover", () => false);
let right = useState("right", () => 0);
let left = useState("left", () => 0);
let isHovering = useState("isHovering", () => false);
let isHoveringCancelled = useState("isHoveringCancelled", () => false);

const props = defineProps({
  show: Object,
});

const { show } = toRefs(props);

// let hoverTimer = ref(null);

const hoverTimer = useState("hoverTimer", () => null);

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function onMouseEnterAction(event) {
  if(!allowHover) return

  isHovering.value = true;

  var elPosition = getOffset(event.srcElement);

  console.log("Elementt is ", elPosition);

  left.value = cardRef.value.getBoundingClientRect().x;

  clearTimeout(hoverTimer.value);
  // right.value = cardRef.value.getBoundingClientRect().y;

  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = cardRef.value.getBoundingClientRect();
  let offset = elemRect.top - bodyRect.top;

  // right.value = offset; ///+ 200;
  right.value = elPosition.top; ///+ 200;

  console.error("positions", "left:", left.value, "right:", right.value);
  hoverTimer.value = setTimeout(function () {
    hoverShowData.value = show.value;
    if (isHovering.value && !isHoveringCancelled.value) cardHover.value = true;
  }, 1200);
}

function onMouseEnter(ev) {
  onMouseEnterAction(ev);
}

function onMouseLeave() {
  isHovering.value = false;
  // cardHover.value = false
}

function goToDetails(data) {
  console.log('dsada',!!isMobile.any())
  if (allowHover) router.push("/details/" + data.split(" ")[0]);

  console.log(data);
  // isHoveringCancelled.value = true
  // clearTimeout(hoverTimer.value);
  // isHovering.value = false;
}
</script>
    
<template>
  <div :id="`card-${show.id}`"
       ref="cardRef"
       @click="goToDetails(show.name)"
       class="c-card__holder">

    <CardImage ref="card-image-ref"
               :image="show.image"
               @mouseover="onMouseEnter"
               @mouseleave="onMouseLeave" />
  </div>
</template>