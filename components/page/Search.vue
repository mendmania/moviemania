<script setup>
const showsBySearch = useState("showsBySearch");
const router = useRouter();

const searchTerm = useState("searchTerm");

const defaultImage = {
  image: {
    medium:
      "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
  },
};

function goToDetails(data) {
  searchTerm.value = null;
  router.push("/details/" + data);
}
</script>

<template>
  <div class="search-page">
    <template v-if="showsBySearch.length === 0 && searchTerm">
      <div class="search-page__no-results">
        No results
      </div>
    </template>
    <template v-else>
      <div v-for="show in showsBySearch"
           :key="show.id"
           :id="`card-${show.id}`"
           ref="cardRef"
           @click="goToDetails(show.name)"
           class="c-card__holder">

        <CardImage ref="card-image-ref"
                   :image="show.image ? show.image : defaultImage" />
      </div>
    </template>
  </div>
</template>
