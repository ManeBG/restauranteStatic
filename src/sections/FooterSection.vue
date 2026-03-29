<script setup>
import { businessInfo } from '../data/businessInfo'
// Obtener año dinámico para el copyright
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-dark text-white pt-5 pb-4">
    <div class="container">
      <div class="row">
        <!-- Brand Info -->
        <div class="col-md-5 mb-4 mb-md-0">
          <h4 class="fw-bold text-white mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-shop text-primary-custom"></i> {{ businessInfo.name }}
          </h4>
          <p class="text-white-50 pe-md-5">
            Sabor auténtico preparado con pasión. Ingredientes frescos, recetas originales y la mejor atención, directo a tu mesa o a tu puerta.
          </p>
          <div class="d-flex gap-3 mt-4">
            <a v-if="businessInfo.socialMedia.facebook" :href="businessInfo.socialMedia.facebook" target="_blank" rel="noopener" class="text-white-50 fs-5 transition-color"><i class="bi bi-facebook"></i></a>
            <a v-if="businessInfo.socialMedia.instagram" :href="businessInfo.socialMedia.instagram" target="_blank" rel="noopener" class="text-white-50 fs-5 transition-color"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        
        <!-- Navegación -->
        <div class="col-md-3 mb-4 mb-md-0">
          <h5 class="fw-bold text-white mb-4">Navegación</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#hero" class="text-white-50 text-decoration-none transition-color">Inicio</a></li>
            <li class="mb-2"><a href="#featured" class="text-white-50 text-decoration-none transition-color">Destacados</a></li>
            <li class="mb-2"><a href="#menu" class="text-white-50 text-decoration-none transition-color">Nuestro Menú</a></li>
            <li class="mb-2"><a href="#como-ordenar" class="text-white-50 text-decoration-none transition-color">Cómo Ordenar</a></li>
          </ul>
        </div>
        
        <!-- Contacto -->
        <div class="col-md-4">
          <h5 class="fw-bold text-white mb-4">Contacto Rápido</h5>
          <ul class="list-unstyled text-white-50">
            <li class="mb-3 d-flex align-items-start gap-3">
              <i class="bi bi-geo-alt mt-1 text-primary-custom text-opacity-75"></i> 
              <span>{{ businessInfo.address }}</span>
            </li>
            <li class="mb-3 d-flex align-items-start gap-3">
              <i class="bi bi-whatsapp mt-1 text-primary-custom text-opacity-75"></i> 
              <span>+{{ businessInfo.whatsapp }}</span>
            </li>
            <li class="mb-3 d-flex align-items-start gap-3">
              <i class="bi bi-clock mt-1 text-primary-custom text-opacity-75"></i> 
              <span>{{ businessInfo.schedule }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <hr class="border-secondary opacity-25 mt-4 mb-4">
      
      <!-- Copyright -->
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 small">
        <p class="mb-2 mb-md-0">&copy; {{ currentYear }} {{ businessInfo.name }}. Todos los derechos reservados.</p>
        <p class="mb-0">
          Diseño web comercial por <span class="text-primary-custom fw-semibold">Desarrollador Profesional</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.transition-color {
  transition: color 0.3s ease;
}
.transition-color:hover {
  color: var(--primary-color) !important;
}
</style>
