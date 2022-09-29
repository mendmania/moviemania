<script setup>
const router = useRoute();
const showName = router.params.id;

const showDetails = await getDetailsByName(showName);
console.log(showDetails);

const customBackground = useState("customBackground");
customBackground.value = showDetails.image.original;

onMounted(() => {
  const headerBackgroundEl = document.querySelector("#header-background");
  headerBackgroundEl.style = `background-image: url('${showDetails.image.original}')`;
  console.log(headerBackgroundEl);
});
</script>

<template>
  <div class="c-details-page">

    <div class="c-details-page__short-content">
      <div class="c-details-page__name">
        {{showDetails.name}}
      </div>

      <div class="c-details-page__actions">
        PLAY
        <img src="@/assets/icons/play-button.svg" />
      </div>

    </div>

    <div class="c-details-page__description"
         v-html="showDetails.summary" />

    <div class="c-details-page__premier">
      Premiered: {{showDetails.premiered}}
    </div>

    <div class="c-details-page__website">
      <a :href="showDetails.officialSite">
        Official website
      </a>
    </div>

  </div>
</template>