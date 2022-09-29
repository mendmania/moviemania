<script setup>

import {isMobile} from '@/utils/isMobile'

getShowsTest();
onMounted(()=>{
  console.error('----------------',isMobile.any())
})

</script>

<template>
  <SectionContainer>
    <SectionWrapper />
  </SectionContainer>
</template>