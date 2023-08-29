<template>
  <div class="carousel slide" data-ride="carousel" id="cardCarousel">
    <div class="carousel-inner">
      <div class="cardWrapper">
        <div class="card-group container">
          <div
            class="card"
            v-for="(item, index) in filteredItems"
            :key="index"
            :class="{ 'carousel-item': true, active: index === 0 }"
          >
            <div class="content">
              <div class="imgBox">
                <img
                  :src="item.src"
                  class="rounded card-img"
                  :alt="item.title"
                />
              </div>
              <div class="card-body contentBox">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">
                  {{ item.description }}
                </p>
              </div>
            </div>
            <ul class="sci">
              <li>
                {{ item.duration }}
              </li>
              <li>
                {{ item.difficulty }}
              </li>
              <li>
                {{ item.quantity }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="">
    <div class="progress mt-3" style="margin-left: 8%; margin-right: 16%; height: 4px; ">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{ width: progress + '%' }"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
      style="background-color: rgb(182, 164, 240);"
    ></div>
  </div>
  <div class="buttons">
    <button id="prev" @click="moveToSelected('prev')">
      <i class="bi bi-arrow-left"></i>
    </button>
    <button id="next" @click="moveToSelected('next')">
      <i class="bi bi-arrow-right"></i>
    </button>
  </div>
  </div>
  
</template>

<script>
import $ from "jquery";
const itemsToShow = 4;

export default {
  name: "HomeCarousel",
  data() {
    return {
      selectedIndex: 0,
      items: [
        {
          src: require("../assets/breakfast.jpg"),
          title: "Breakfast",
          description: "yummi!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/fish.jpg"),
          title: "fish",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/meat.jpg"),
          title: "meat",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/pasta.jpg"),
          title: "pasta",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/salads.jpg"),
          title: "salads",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/smoothie.jpg"),
          title: "smoothie",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/breakfast.jpg"),
          title: "Breakfast",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/fish.jpg"),
          title: "fish",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/meat.jpg"),
          title: "meat",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/pasta.jpg"),
          title: "pasta",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/salads.jpg"),
          title: "salads",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/smoothie.jpg"),
          title: "smoothie",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/breakfast.jpg"),
          title: "Breakfast",
          description: "yummi!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/fish.jpg"),
          title: "fish",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/meat.jpg"),
          title: "meat",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/pasta.jpg"),
          title: "pasta",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/salads.jpg"),
          title: "salads",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        },
        {
          src: require("../assets/smoothie.jpg"),
          title: "smoothie",
          description: "for a great start of your day!",
          duration: "20'",
          difficulty: "Easy",
          quantity: "6-8",
        }
      ],
      progress: 0,
    };
  },
  methods: {
    moveToSelected(element) {
      const step = 100 / ( ( this.items.length - itemsToShow ) / itemsToShow ); // Calculate progress step based on items per view (4 items per view)

      if (element === "next" && this.selectedIndex < this.items.length - itemsToShow) {
    this.selectedIndex = this.selectedIndex + itemsToShow
    this.progress += step;
  } else if (element === "prev" && this.selectedIndex > 0) {
    this.selectedIndex =this.selectedIndex - itemsToShow;
    this.progress -= step;
  } 
    },
  },
  mounted() {
    $("#cardCarousel").on("slid.bs.carousel", (e) => {
      this.progress = ((e.to + 1) / this.items.length) * 100;
    });
  },
  computed: {
    filteredItems() {
      return this.items.slice(
        this.selectedIndex,
        this.selectedIndex + itemsToShow
      );
    },
  },
};
</script>

<style scoped>
.cardWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.container {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
}
.container .card {
  position: relative;
  width: 300px;
  height: 500px;
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Add this to prevent inner content from spilling out */
}
.container .card .content {
  /*position: relative;
   display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  transition: transform 0.7s ease-in-out;
  width: 100%;
  height: 100%;
}

.container .card:hover .content {
  transform: translateY(-20px);
}

.container .card .content .imgBox {
  /* position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* place the image below the text content */
}

.container .card .content .imgBox img {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.7s ease-in-out;
}

.container .card .content .contentBox {
  /* color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px 0 10px;
  line-height: 1.1em; */
  color: white;
  text-shadow: 1.5px 0px black;
  font-weight: 500;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 2; /* Place the content above the image */
  transition: opacity 0.3s ease; /* Smooth transition */
}

.container .card .content .contentBox h5 p {
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
}

.container .card .sci {
  position: relative;
  bottom: 5px;
  display: flex;
  padding: 0;
  margin: 0;
}

.container .card .sci li {
  list-style: none;
  margin: 0 10px;
  transition: 0.5s;
  opacity: 0;
}
.container .card:hover .content .contentBox {
  opacity: 1; /* Display the content on hover */
  transition: opacity 0.7s ease-out;
}
.container .card:hover .sci li {
  transform: translateY(0px);
  opacity: 1;
}

.container .card .sci li {
  color: black;
  font-size: 20px;
}
</style>
