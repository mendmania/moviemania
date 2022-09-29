<script setup>
const allShowsByGenreAndRating = useState("allShowsByGenreAndRating").value;
console.error("allShowsByGenreAndRating", allShowsByGenreAndRating);
</script>

<template>
  <SectionContainer v-for="showsByGenreAndRating,i in allShowsByGenreAndRating"
                    :sectionName="showsByGenreAndRating.sectionName"
                    :key="i">
    <SectionWrapper :showsByGenreAndRating="showsByGenreAndRating" />
  </SectionContainer>
</template>