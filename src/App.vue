<script setup>
// Importamos todas las secciones construidas para la Fase 2
import NavbarSection from './sections/NavbarSection.vue'
import HeroSection from './sections/HeroSection.vue'
import FeaturedSection from './sections/FeaturedSection.vue'
import MenuSection from './sections/MenuSection.vue'
import HowToOrderSection from './sections/HowToOrderSection.vue'
import LocationSection from './sections/LocationSection.vue'
import FooterSection from './sections/FooterSection.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

// Componentes Globales (Fase 3)
import ProductModal from './components/ProductModal.vue'
import CartOffcanvas from './components/CartOffcanvas.vue'
import CheckoutModal from './components/CheckoutModal.vue'
import ToastNotification from './components/ToastNotification.vue'
</script>

<template>
  <div class="app-layout">
    <!-- Navbar -->
    <NavbarSection />

    <main>
      <!-- Hero -->
      <HeroSection />

      <!-- Productos Destacados -->
      <FeaturedSection />

      <!-- Menú Completo Separado por Categorías -->
      <MenuSection />

      <!-- Metodología de Compra Local -->
      <HowToOrderSection />

      <!-- Información y Mapa -->
      <LocationSection />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Elementos Globales y Modales -->
    <ProductModal />
    <CartOffcanvas />
    <CheckoutModal />
    <ToastNotification />

    <!-- Botón de WhatsApp Fijo -->
    <FloatingWhatsApp />
  </div>
</template>

<style>
/* Cualquier sobreescritura mínima adicional puede ir aquí, pero la mayoría ya está en main.css */
</style>
