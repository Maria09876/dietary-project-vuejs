<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid"><LanguageSelector />
    </div>
  </nav>
  <nav class="navbar navbar-expand-md navbar-light  text-uppercase mt-4">
    <div class="container-fluid bg-teal">
      <a class="navbar-brand" href="#"
        ><img
          alr="Dimitra Koumporelou Logo"
          src="../../assets/logo.png"
          width="80"
          height="60"
          class="rounded"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/"
              class="nav-link active menuSection"
              aria-current="page"
              >{{ $t("home") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/nutrition" class="nav-link menuSection">{{ $t("nutrition") }}</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link menuSection" href="#">
              {{ $t("recipes") }}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuSection" href="#">{{
              $t("tipsForGoodLiving")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link menuSection" href="#">{{
              $t("contactDetails")
            }}</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2 text-lowercase"
            type="search"
            :placeholder="$t('search')"
            aria-label="Search"
          />
          <button class="btn btn-outline-success text-uppercase" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSelector from "./LanguageSelector.vue";

export default {
  name: "NavBar",
  components: { LanguageSelector },
};
</script>

<style>
.bg-teal {
  /* background-color: var(--bs-teal); */
  background-color: hsl(74, 72%, 79%);
  
}

.menuSection.active {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
}

.menuSection {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 16px;
  position: relative;
  display: inline-block;
  overflow:hidden;
  margin-right:8px
}
.menuSection:hover {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
}
.menuSection::before {
  content: "";
  background-color: rgba(182, 164, 240, 0.4);
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 100%;
  height: 3px;
  z-index: 1;
  transition: all 0.3s ease-in-out;
}
.menuSection:hover::before {
  height: 100%;
}
</style>
