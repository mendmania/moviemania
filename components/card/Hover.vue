<script setup>
let show = useState("hoverShowData");
let right = useState("right");
let left = useState("left");
let cardHover = useState("cardHover");
let isHovering = useState("isHovering");

const animate = ref(false);

const vMyDirective = {
  mounted: (el) => {
    // do something with the element
    console.log("vMyDirective mounted");
    setTimeout(() => {
      animate.value = true;
    }, 0);
  },
};


function onMouseLeave() {
  isHovering.value = false;
  cardHover.value = false;
}

const hoverTimer = useState("hoverTimer");

const router = useRouter()
function goToDetails(data) {

  // console.error("hoverTimer.value",hoverTimer.value)
  // clearTimeout(hoverTimer.value)

  // onMouseLeave()
  router.push('details/'+data)
}

const leftPosition = left.value - 0; //110
const rightPosition = -right.value //- 210 - 200;
</script>
      
  <template>
  <Teleport to="#cardpreview">
      <div class="c-card__hover"
      @click="goToDetails(show.name)"
           @mouseleave="onMouseLeave"
           :style="`transform: translate3d(calc(${leftPosition}px - 16% - 16%), ${rightPosition}px, 10px)`">
        <div class="c-card__hover__content c-card__holder--16-9"
             v-my-directive
             :class="animate ? 'animate':''">
          <div class="c-card__hover--img-url c-card__holder--position"
               :style="{backgroundImage:`url('${show.image.medium}')`}" />

          <div class="c-card__holder--position c-card--radius">
            <div class="c-card__holder--position c-card__hover--overlay c-card--radius" />
            <div class="c-card__details c-card__holder--position c-card__details--spacing">
              <div class="c-card__details--text">
                {{show.name}}
              </div>
              <div class="c-card__details--buttons">
                <span class="c-card__details--rating">
                  <img src="@/assets/icons/star-icon.svg" />
                  {{show.rating.average}}
                </span>
                <span class="c-card__details--rating">
                  <img src="@/assets/icons/heart-icon.svg" />
                  Follow
                </span>
              </div>
              <div class="c-card__details--genres">
                <template v-for="genre,i in show.genres"
                          :key="genre">
                  <span class="c-card__details--delimiter"
                        v-if="i !== 0" />
                  {{genre}}
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Teleport>
</template>