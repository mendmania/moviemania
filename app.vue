
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
await getShows()

onMounted(()=>{
  isUsingMobile.value = !!isMobile.any()
})
</script>
    
<template>
  <div :class="isUsingMobile ? 'is-mobile':''">
    <PageHeader />
       <PageBody v-show="!searchTerm">
      <NuxtPage  />
    </PageBody>
    <PageSearch v-show="searchTerm" />
 
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
    