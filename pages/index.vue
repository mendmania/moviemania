<script setup>
const allShowsByGenreAndRating = useState("allShowsByGenreAndRating").value;
</script>

<template>
  <div>
    <SectionContainer v-for="showsByGenreAndRating,i in allShowsByGenreAndRating"
    :sectionName="showsByGenreAndRating.sectionName"
    :key="i">
    <SectionWrapper :showsByGenreAndRating="showsByGenreAndRating" />
  </SectionContainer>
</div>
</template>