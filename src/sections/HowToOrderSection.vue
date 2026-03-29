<script setup>
import { businessInfo } from '../data/businessInfo'
</script>

<template>
  <section id="como-ordenar" class="section-padding bg-alt">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <span class="text-secondary-custom fw-bold text-uppercase tracking-wide small mb-2 d-inline-block">Fácil y Rápido</span>
          <h2 class="display-5 fw-bold text-dark mb-4">¿Cómo pedir?</h2>
          <p class="text-muted fs-5 mb-5">
            Hemos simplificado nuestro proceso para que disfrutes de nuestra comida desde la comodidad de tu hogar sin complicaciones.
          </p>
          
          <a :href="`https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(businessInfo.whatsappMessageTemplate)}`" target="_blank" rel="noopener noreferrer" class="btn btn-primary-custom btn-lg d-inline-flex align-items-center gap-2 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
            Pedir por WhatsApp
          </a>
        </div>
        
        <div class="col-lg-6 offset-lg-1">
          <div class="steps-wrapper position-relative">
            <!-- Step 1 -->
            <div class="d-flex mb-4 position-relative">
              <div class="step-icon bg-white text-primary-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm mt-1 z-1" style="width: 50px; height: 50px; min-width: 50px;">
                <span class="fs-4 fw-bold">1</span>
              </div>
              <div class="ms-4 pb-4 border-start border-2 border-primary border-opacity-25 ps-4 position-absolute" style="left: 24px; top: 50px; bottom: -20px;"></div>
              <div class="ms-4">
                <h4 class="fw-bold mb-2">Revisa el Menú</h4>
                <p class="text-muted mb-0">Explora nuestra variedad de hamburguesas, hot dogs, tortas y bebidas.</p>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="d-flex mb-4 position-relative">
              <div class="step-icon bg-white text-primary-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm mt-1 z-1" style="width: 50px; height: 50px; min-width: 50px;">
                <span class="fs-4 fw-bold">2</span>
              </div>
              <div class="ms-4 pb-4 border-start border-2 border-primary border-opacity-25 ps-4 position-absolute" style="left: 24px; top: 50px; bottom: -20px;"></div>
              <div class="ms-4">
                <h4 class="fw-bold mb-2">Elige tus Favoritos</h4>
                <p class="text-muted mb-0">Decide qué se te antoja hoy. Puedes agregar notas especiales si lo necesitas.</p>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="d-flex position-relative">
              <div class="step-icon bg-primary-custom text-white rounded-circle d-flex align-items-center justify-content-center shadow-md mt-1 z-1" style="width: 50px; height: 50px; min-width: 50px;">
                <span class="fs-4 fw-bold">3</span>
              </div>
              <div class="ms-4">
                <h4 class="fw-bold mb-2">Envía por WhatsApp</h4>
                <p class="text-muted mb-0">Contáctanos directamente; tomaremos tu pedido y te indicaremos el tiempo de entrega.</p>
              </div>
            </div>
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
.border-primary {
  border-color: var(--primary-color) !important;
}
</style>
