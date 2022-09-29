<script setup>
const router = useRoute();
const showName = router.params.id;
const isLoading = ref(true)


const showDetails = await getDetailsByName(showName);

isLoading.value = false
const customBackground = useState("customBackground");
customBackground.value = showDetails.image.original;

onMounted(() => {


  const headerBackgroundEl = document.querySelector("#header-background");
  headerBackgroundEl.style = `background-image: url('${showDetails.image.original}')`;
});

</script>

<template>

  <div v-if="isLoading">Loading</div>
  <div v-else class="c-details-page">
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