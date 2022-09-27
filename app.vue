
<script setup>
const meni = 1;
console.log(meni)

let hoverShowData = useState("hoverShowData");
let cardHover = useState("cardHover");
let right = useState("right");
let left = useState("left");
let isHovering = useState("isHovering");
</script>
    
<template>
  <div>
    <PageHeader />
    <PageBody>
      <NuxtPage />
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
    