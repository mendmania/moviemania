
<script setup>
import {isMobile} from '@/utils/isMobile'

const searchTerm = useState("searchTerm")
const showsBySearch = useState('showsBySearch', () => []);



let hoverShowData = useState("hoverShowData");
let cardHover = useState("cardHover");
let right = useState("right");
let left = useState("left");
let isHovering = useState("isHovering");

const isUsingMobile = ref(false)
getShowsTest();
onMounted(()=>{
  isUsingMobile.value = !!isMobile.any()
})
</script>
    
<template>
  <div :class="isUsingMobile ? 'is-mobile':''">
    <PageHeader />
    <PageSearch v-if="searchTerm" />
    <PageBody v-else>
      <NuxtPage  />
    </PageBody>
    <PageFooter />
    <CardHover :show="hoverShowData"
               v-if="cardHover"
               :left="left"
               :right="right"
               :isHovering="isHovering"
               ref="child" />
    <div id="cardpreview"/>
  </div>
</template>
    