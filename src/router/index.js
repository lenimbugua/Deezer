import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheArtistDetails from "../views/TheArtistDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/artist/:id",
      name: "artist",
      component: TheArtistDetails,
    },
  ],
});

export default router;
