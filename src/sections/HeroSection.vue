<script setup>
</script>

<template>
  <section id="hero" class="hero-section position-relative d-flex align-items-center bg-alt overflow-hidden">
    <div class="container position-relative z-1 py-5">
      <div class="row align-items-center py-5">
        <div class="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
          <span class="badge bg-secondary-custom px-3 py-2 mb-3 rounded-pill fs-6 fw-semibold shadow-sm">
            🔥 Sabor que se siente en cada mordida
          </span>
          <h1 class="display-3 fw-bold mb-4 text-dark lh-sm">
            La Mejor Comida <br/>
            <span class="text-primary-custom">Hasta Tu Puerta</span>
          </h1>
          <p class="lead text-muted mb-5 pe-lg-4 fs-5">
            Hamburguesas jugosas, hot dogs artesanales y las mejores tortas preparadas al momento con ingredientes frescos de la más alta calidad.
          </p>
          <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
            <a href="#menu" class="btn btn-primary-custom btn-lg px-5 shadow-sm">
              <i class="bi bi-book-half me-2"></i> Ver Menú
            </a>
            <a href="#como-ordenar" class="btn btn-outline-custom btn-lg px-5">
              Cómo Ordenar
            </a>
          </div>
        </div>
        <div class="col-lg-6 position-relative hero-image-wrapper">
          <!-- Decoración de fondo circular -->
          <div class="blob-bg bg-secondary-custom opacity-25 rounded-circle position-absolute"></div>
          
          <!-- Imagen principal -->
          <div class="hero-image rounded-4 shadow-lg overflow-hidden position-relative z-1 mx-auto">
            <div class="d-flex align-items-center justify-content-center bg-white" style="height: 450px; background-image: url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop'); background-size: cover; background-position: center;">
              <!-- Si la imagen falla, queda un fondo blanco -->
            </div>
          </div>
          
          <!-- Elemento flotante decorativo -->
          <div class="floating-badge position-absolute bg-white rounded-3 shadow-sm p-3 d-flex align-items-center gap-3 z-2">
            <div class="bg-primary-custom rounded-circle p-2 text-white d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
            </div>
            <div>
              <p class="mb-0 fw-bold lh-1 text-dark">4.9 / 5</p>
              <small class="text-muted" style="font-size: 0.75rem;">Reseñas de clientes</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 80vh;
}

.blob-bg {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-40%, -50%);
  filter: blur(40px);
}

.hero-image {
  max-width: 90%;
  border: 4px solid white;
}

.floating-badge {
  bottom: 20px;
  left: 0;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@media (max-width: 991.98px) {
  .blob-bg {
    width: 300px;
    height: 300px;
    transform: translate(-50%, -50%);
  }
  .hero-image {
    max-width: 100%;
  }
}
</style>
