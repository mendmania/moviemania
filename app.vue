
<script setup>

const searchTerm = useState("searchTerm")


let hoverShowData = useState("hoverShowData");
let cardHover = useState("cardHover");
let right = useState("right");
let left = useState("left");
let isHovering = useState("isHovering");
</script>
    
<template>
  <div>
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
    