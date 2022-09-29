<script setup>
import CONFIG from "@/config/config";
const { scrollStep } = CONFIG.slider;

const scrollStepCalculated = (scrollStep - 1) * 10
const isSliding = ref(false);

const props = defineProps({
  showsByGenreAndRating: Object,
});


const { showsByGenreAndRating } = toRefs(props);

let isHoveringCancelled = useState("isHoveringCancelled");

onMounted(() => {
  isHoveringCancelled.value = false;
});

showsByGenreAndRating.value.scrollAnimationCount = -scrollStepCalculated;

let supportAnimationClass = useState("supportAnimationClass", () => "");

function animation() {
  return `transform: translate3d(${showsByGenreAndRating.value.scrollAnimationCount}%, 0px, 0px)`;
}

function scrollAnimationCountChange(data) {

  if (isSliding.value) return;

  isSliding.value = true;
  supportAnimationClass.value = "slider-animation";

  if (data === "right") {
    showsByGenreAndRating.value.scrollAnimationCount -= scrollStepCalculated; //90;

    setTimeout(function () {
      supportAnimationClass.value = "";
      showsByGenreAndRating.value.scrollAnimationCount += scrollStepCalculated; //90;

      const els = showsByGenreAndRating.value.shows.splice(0, scrollStep - 1);
      showsByGenreAndRating.value.shows.push(...els);

      isSliding.value = false;
    }, 900);
  } else if (data === "left") {
    showsByGenreAndRating.value.scrollAnimationCount += scrollStepCalculated;

    setTimeout(function () {
      supportAnimationClass.value = "";
      showsByGenreAndRating.value.scrollAnimationCount -= scrollStepCalculated;

      const els = showsByGenreAndRating.value.shows.splice(-(scrollStep - 1));
      showsByGenreAndRating.value.shows.unshift(...els);

      isSliding.value = false;
    }, 900);
  }
}

//render card 3 times showing
const step = 3 * scrollStep;
useState("scrollStep", () => step);

function getOnlyStepShows() {
  return showsByGenreAndRating.value.shows.slice(1, step);
}
</script>

<template>
  <SectionScroll :variant="'left'"
                 :scrollAnimationCount="showsByGenreAndRating.scrollAnimationCount"
                 @scrollAnimationCountChange="scrollAnimationCountChange" />
  <div class="c-section">
    <div class="c-section__wrapper"
         :style="animation()"
         :class="supportAnimationClass">
      <CardWrapper :shows="getOnlyStepShows()" />
    </div>
  </div>
  <SectionScroll :variant="'right'"
                 :scrollAnimationCount="showsByGenreAndRating.scrollAnimationCount"
                 @scrollAnimationCountChange="scrollAnimationCountChange" />
</template>