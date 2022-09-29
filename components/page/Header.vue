<script setup>
const searchTerm = useState("searchTerm", () => null);
const showsBySearch = useState("showsBySearch");
const router = useRouter();

let res = ref([]);

const myVal = computed({
  get() {
    return searchTerm.value;
  },
  async set(val) {
    res = await getShowsByName(val);
    showsBySearch.value = res;
    searchTerm.value = val;
  },
});

const customBackground = useState("customBackground", () => null);

const urlHeroBanner = await import("@/assets/images/hero-banner.png");

function goToHomePage() {
  router.push("/");
}
</script>

<template>
  <div class="c-header"
       id="header-background"
       :style="`backgroundImage: url('${customBackground ? customBackground : urlHeroBanner.default}')`">
    <div class="c-header__overlay" />
    <div class="c-header__holder">
        <div class="c-header__title"
             @click="goToHomePage">
          <img src="@/assets/icons/tv.svg" />
          <span>Moviemania</span>
        </div>

      <div class="c-header__search">
        <input placeholder="Search"
               v-model="myVal" />
        <img src="@/assets/icons/search.svg" />
      </div>
    </div>
  </div>
</template>

<style>
</style>