<script setup>
import { computed } from 'vue'
import { businessInfo } from '../data/businessInfo'
import { useCart } from '../composables/useCart'

const { totalItems, isCartAnimating } = useCart()

// Calculamos si existe un shortName para mostrárselo a las pantallas móviles
// de lo contrario usamos el nombre normal de forma responsiva y truncada
const mobileName = computed(() => {
  return businessInfo.shortName || businessInfo.name
})

// UX Móvil: Al hacer clic en cualquier link del menú desplegado, lo cerramos automáticamente
const closeMobileMenu = () => {
  if (window.innerWidth < 992) {
    const navbarNav = document.getElementById('navbarNav')
    if (navbarNav && navbarNav.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler')
      if (toggler) toggler.click()
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3 px-0">
    <div class="container d-flex align-items-center justify-content-between flex-nowrap position-static">
      
      <!-- Logo o Nombre (Izquierda, se trunca elegantemente sin romper si es muy largo) -->
      <a class="navbar-brand fw-bold text-primary-custom d-flex align-items-center gap-2 m-0 text-truncate" href="#" style="min-width: 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shop flex-shrink-0" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.736 1h8.528a1 1 0 0 1 .766.35l2.708 3.119-1.536 1.536-1.554-1.554L11.516 2H4.484L3.358 4.453 1.804 6.007.268 4.469l2.702-3.119zm9.022 3.102 1.284-1.284L12.016 2H3.984l-1.26 1.168 1.284 1.284a1.5 1.5 0 0 0 2.136 0l.4-.4.4.4a1.5 1.5 0 0 0 2.136 0l.4-.4.4.4a1.5 1.5 0 0 0 2.136 0l.692-.692.692.692z"/>
          <path d="M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 7h-11zM2 8.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-5z"/>
        </svg>
        
        <!-- Vista Móvil: Muestra shortName (si hay) o name truncado -->
        <span class="d-inline-block d-lg-none text-truncate" style="font-size: 1.15rem;">
          {{ mobileName }}
        </span>
        
        <!-- Vista Desktop: Siempre muestra el nombre completo -->
        <span class="d-none d-lg-inline-block text-truncate" style="font-size: 1.15rem;">
          {{ businessInfo.name }}
        </span>
      </a>

      <!-- Acciones Rápidas (Derecha) - Carrito Visible y Toggler Separados -->
      <div class="d-flex align-items-center gap-2 order-lg-last flex-shrink-0">
        
        <!-- Botón del Carrito -->
        <button 
          class="btn btn-outline-secondary position-relative border-0 shadow-none fs-4 d-flex align-items-center px-2 transition-fast" 
          :class="{ 'cart-bounce': isCartAnimating }"
          data-bs-toggle="offcanvas" 
          data-bs-target="#cartOffcanvas" 
          aria-controls="cartOffcanvas"
          aria-label="Ver pedido"
        >
          <i class="bi bi-cart3 text-dark"></i>
          <span v-if="totalItems > 0" class="position-absolute badge rounded-pill bg-primary-custom" style="top: -2px; right: -2px; font-size: 0.65rem;">
            {{ totalItems }}
          </span>
        </button>

        <!-- Botón Hamburguesa -->
        <button class="navbar-toggler border-0 shadow-none px-2 focus-ring-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- CTA Principal (Visible solo en Desktop como botón lateral) -->
        <a href="#menu" class="btn btn-primary-custom px-4 d-none d-lg-inline-block ms-2">Ordenar Ahora</a>
      </div>
      
      <!-- Menú de Navegación (Panel Flotante Vertical en Móvil, Header Center en Desktop) -->
      <div class="collapse navbar-collapse flex-grow-0 mobile-dropdown-panel" id="navbarNav">
        <ul class="navbar-nav mx-auto text-center gap-1 gap-lg-0">
          <li class="nav-item">
            <a class="nav-link fw-medium px-3 py-lg-1" href="#hero" @click="closeMobileMenu">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3 py-lg-1" href="#featured" @click="closeMobileMenu">Destacados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3 py-lg-1" href="#menu" @click="closeMobileMenu">Menú</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3 py-lg-1" href="#como-ordenar" @click="closeMobileMenu">Cómo Ordenar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-medium px-3 py-lg-1" href="#location" @click="closeMobileMenu">Ubicación</a>
          </li>
        </ul>
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
  transition: all 0.2s ease;
  border-radius: 8px; /* Modificador general estético */
}
.focus-ring-none:focus {
  outline: none;
  box-shadow: none;
}

/* Experiencia de App Nativa - Panel Flotante en Móvil */
@media (max-width: 991.98px) {
  .mobile-dropdown-panel {
    position: absolute;
    top: 100%; /* Cae exactamente debajo del límite inferior del header */
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-top: 1px solid rgba(0,0,0,0.06); /* Sutil línea divisoria */
    box-shadow: 0 12px 24px -6px rgba(0,0,0,0.15); /* Sombra elegante que da profundidad */
    padding: 1rem 0 1.5rem 0;
    z-index: 1050;
  }
  
  /* Link padding generoso para dedos en pantallas táctiles */
  .nav-link {
    font-size: 1.1rem;
    padding: 0.8rem 1rem !important;
    margin: 0.2rem 1.5rem;
  }
  
  /* Efecto active suave muy estético en tap móvil */
  .nav-link:hover, .nav-link:focus, .nav-link:active {
    background-color: rgba(var(--primary-color-rgb), 0.08);
    color: var(--primary-color);
  }
}

/* Hover clásico de links en Desktop */
@media (min-width: 992px) {
  .nav-link:hover, .nav-link:focus {
    color: var(--primary-color);
    background-color: transparent;
  }
}

/* Animación de feedback para el carrito */
.cart-bounce {
  animation: bounce 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: var(--primary-color) !important;
}

.cart-bounce i {
  color: var(--primary-color) !important;
}

@keyframes bounce {
  0% { transform: scale(1); }
  40% { transform: scale(1.35) rotate(-10deg); }
  60% { transform: scale(0.9) rotate(10deg); }
  80% { transform: scale(1.1) rotate(-5deg); }
  100% { transform: scale(1) rotate(0); }
}
</style>
