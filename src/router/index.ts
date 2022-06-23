import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import MoviesScreen from "../movies/MoviesScreen.vue";
import MovieDetailsScreen from "../movieDetails/MovieDetailsScreen.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: MoviesScreen },
  { path: "/:id", component: MovieDetailsScreen },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
