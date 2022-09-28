<script setup>
const show = {
  id: 1,
  name: "Under the Dome",
  genres: ["Drama", "Science-Fiction", "Thriller"],
  rating: {
    average: 6.5,
  },
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    original:
      "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
  },
  runtime: 60,
  summary:
    "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  premiered: "2013-06-24",
};
</script>

<template>
  <div class="search-page">
    <div :id="`card-${show.id}`"
         ref="cardRef"
         @click="goToDetails(show)"
         class="c-card__holder">

      <CardImage ref="card-image-ref"
                 :image="show.image"
                 @mouseover="onMouseEnter"
                 @mouseleave="onMouseLeave" />
    </div>

    <div :id="`card-${show.id}`"
         ref="cardRef"
         @click="goToDetails(show)"
         class="c-card__holder">

      <CardImage ref="card-image-ref"
                 :image="show.image"
                 @mouseover="onMouseEnter"
                 @mouseleave="onMouseLeave" />
    </div>
  </div>

</template>
