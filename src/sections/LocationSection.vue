<script setup>
import { businessInfo } from '../data/businessInfo'
</script>

<template>
  <section id="location" class="section-padding bg-white">
    <div class="container">
      <div class="row bg-alt rounded-4 shadow-sm overflow-hidden">
        <div class="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">
          <span class="text-secondary-custom fw-bold text-uppercase tracking-wide small mb-2 d-inline-block">Visítanos</span>
          <h2 class="display-5 fw-bold text-dark mb-4">Ubicación y Horarios</h2>
          
          <div class="d-flex align-items-start mb-4">
            <div class="text-primary-custom fs-4 me-3 mt-1">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1">Dirección</h5>
              <p class="text-muted mb-0">{{ businessInfo.address }}</p>
            </div>
          </div>
          
          <div class="d-flex align-items-start mb-4">
            <div class="text-primary-custom fs-4 me-3 mt-1">
              <i class="bi bi-clock-fill"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1">Horarios de Atención</h5>
              <p class="text-muted mb-0">{{ businessInfo.schedule }}</p>
            </div>
          </div>
          
          <div class="d-flex align-items-start">
            <div class="text-primary-custom fs-4 me-3 mt-1">
              <i class="bi bi-whatsapp"></i>
            </div>
            <div>
              <h5 class="fw-bold mb-1">Contacto Directo</h5>
              <p class="text-muted mb-0">WhatsApp: +{{ businessInfo.whatsapp }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 px-0 min-vh-50" style="min-height: 400px; background-color: #e9ecef;">
          <!-- Placeholder de mapa -->
          <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-muted bg-light">
            <i class="bi bi-map text-secondary-custom" style="font-size: 4rem;"></i>
            <p class="mt-3 fw-medium fs-5 text-dark">Mapa Interactivo (Próximamente)</p>
            <small>Aquí se integrará Google Maps</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tracking-wide {
  letter-spacing: 0.1em;
}
.min-vh-50 {
  min-height: 50vh;
}
</style>
