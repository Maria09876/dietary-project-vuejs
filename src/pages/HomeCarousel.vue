<template>
  <div id="carousel" style="margin-top:10%">
    <div
      :class="getItemClass(index)"
      @click="moveToSelected(index)"
      v-for="(item, index) in items"
      :key="index"
      class="customCards"
    >
      <img :src="item.src" class="card-img-top customCardsImg" :alt="item.title" />
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">
          {{ item.description }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="buttons">
    <button id="prev" @click="moveToSelected('prev')">Prev</button>
    <button id="next" @click="moveToSelected('next')">Next</button>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "HomeCarousel",
  data() {
    return {
      selectedIndex: 0,
      items: [
        {
          src: require("../assets/breakfast.jpg"),
          title: "Breakfast",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/fish.jpg"),
          title: "fish",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/meat.jpg"),
          title: "meat",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/pasta.jpg"),
          title: "pasta",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/salads.jpg"),
          title: "salads",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/smoothie.jpg"),
          title: "smoothie",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/breakfast.jpg"),
          title: "Breakfast",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/fish.jpg"),
          title: "fish",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/meat.jpg"),
          title: "meat",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/pasta.jpg"),
          title: "pasta",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/salads.jpg"),
          title: "salads",
          description: "for a great start of your day!",
        },
        {
          src: require("../assets/smoothie.jpg"),
          title: "smoothie",
          description: "for a great start of your day!",
        },
      ],
    };
  },
  methods: {
    getItemClass(index) {
      if (index === this.selectedIndex) return 'selected';
      if (index === this.selectedIndex - 1) return 'prev';
      if (index === this.selectedIndex + 1) return 'next';
      if (index === this.selectedIndex - 2) return 'prevLeftSecond';
      if (index === this.selectedIndex + 2) return 'nextRightSecond';
      if (index < this.selectedIndex - 2) return 'hideLeft';
      if (index > this.selectedIndex + 2) return 'hideRight';
      return '';
    },
    moveToSelected(element) {
      if (element === "next" && this.selectedIndex < this.items.length - 1) {
        this.selectedIndex++;
      } else if (element === "prev" && this.selectedIndex > 0) {
        this.selectedIndex--;
      } else if (typeof element === 'number') {
        this.selectedIndex = element;
      }
    },
    mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
 
    handleKeydown(e) {
      if (e.keyCode === 37) {
        this.moveToSelected('prev');
      } else if (e.keyCode === 39) {
        this.moveToSelected('next');
      }
    },
  },
  
};

</script>

<style scoped>
/* cover-flow like effect, where each card appears to be on top of the next one, and the center card is the most prominent */
#carousel {
  position: relative;
  width:80%;
  height: 500px;
  left:10%;
  transform: translateY(-50%);
  background-color: bisque;
}
#carousel div {
  position: absolute;
  transition: transform 1s, left 1s, opacity 2s, z-index 0s;
  opacity: 2;
}
#carousel div img {
  width: 400px;
  transition: width 1s;
}
#carousel div.hideLeft {
  left: 0%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}
#carousel div.hideLeft img {
  width: 200px;
}
#carousel div.hideRight {
  left: 100%;
  opacity: 0;
  transform: translateY(50%) translateX(-50%);
}
#carousel div.hideRight img {
  width: 200px;
}
#carousel div.prev {
  z-index: 5;
  left: 30%;
  transform: translateY(50px) translateX(-50%);
}
#carousel div.prev img {
  width: 300px;
}
#carousel div.prevLeftSecond {
  z-index: 4;
  left: 15%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}
#carousel div.prevLeftSecond img {
  width: 200px;
}
#carousel div.selected {
  z-index: 10;
  left: 50%;
  transform: translateY(0px) translateX(-50%);
}
#carousel div.next {
  z-index: 5;
  left: 70%;
  transform: translateY(50px) translateX(-50%);
}
#carousel div.next img {
  width: 300px;
}
#carousel div.nextRightSecond {
  z-index: 4;
  left: 85%;
  transform: translateY(50%) translateX(-50%);
  opacity: 0.7;
}
#carousel div.nextRightSecond img {
  width: 200px;
}
.customCards{
    border: 2px solid aqua;
}

.card-body{
    text-align: center;
}

.buttons {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom:0;
}
</style>
