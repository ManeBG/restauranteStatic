<script setup>
import { businessInfo } from '../data/businessInfo'
import { useCart } from '../composables/useCart'

const { totalItems } = useCart()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary-custom d-flex align-items-center gap-2" href="#">
        <!-- Simple icon as logo placeholder -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.736 1h8.528a1 1 0 0 1 .766.35l2.708 3.119-1.536 1.536-1.554-1.554L11.516 2H4.484L3.358 4.453 1.804 6.007.268 4.469l2.702-3.119zm9.022 3.102 1.284-1.284L12.016 2H3.984l-1.26 1.168 1.284 1.284a1.5 1.5 0 0 0 2.136 0l.4-.4.4.4a1.5 1.5 0 0 0 2.136 0l.4-.4.4.4a1.5 1.5 0 0 0 2.136 0l.692-.692.692.692z"/>
          <path d="M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 7h-11zM2 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-5z"/>
        </svg>
        {{ businessInfo.name }}
      </a>
      
      <button class="navbar-toggler border-0 shadow-none px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link fw-medium px-3" href="#hero">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3" href="#featured">Destacados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3" href="#menu">Menú</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3" href="#como-ordenar">Cómo Ordenar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3" href="#ubicacion">Ubicación</a>
          </li>
        </ul>
        <div class="d-flex align-items-center mt-3 mt-lg-0 gap-3">
          <button class="btn btn-outline-secondary position-relative border-0 shadow-none fs-5 d-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas">
            <i class="bi bi-cart3 text-dark"></i>
            <span v-if="totalItems > 0" class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary-custom" style="font-size: 0.65rem;">
              {{ totalItems }}
            </span>
          </button>
          <a href="#menu" class="btn btn-primary-custom w-100 px-4">Ordenar Ahora</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.4rem;
}
.nav-link {
  color: var(--text-dark);
  transition: color 0.3s ease;
}
.nav-link:hover, .nav-link:focus {
  color: var(--primary-color);
}
@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
