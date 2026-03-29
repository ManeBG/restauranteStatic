<script setup>
import { useCart } from '../composables/useCart'
import { useModal } from '../composables/useModal'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const { addToCart } = useCart()
const { setModalProduct } = useModal()
</script>

<template>
  <div class="card card-custom h-100">
    <!-- Usamos un div con background en lugar de img para mejor control si falla la imagen -->
    <div 
      class="card-img-top bg-light d-flex align-items-center justify-content-center" 
      :style="`background-image: url('${product.image}'); background-size: cover; background-position: center;`">
      <!-- Fallback visual rápido en caso de no cargar la imagen -->
      <span v-if="product.image.includes('placeholder')" class="text-muted opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
          <path d="M10.564 8.27 14 11.708V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.293l3.578-3.577 2.41 2.41 1.576-1.576v-.004z"/>
        </svg>
      </span>
    </div>
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start mb-2 gap-2">
        <h5 class="card-title fw-bold mb-0 lh-sm">{{ product.name }}</h5>
        <span class="badge bg-secondary-custom fs-6 fw-bold shadow-sm">${{ product.price }}</span>
      </div>
      <p class="card-text text-muted small mb-4">{{ product.shortDescription }}</p>
      
      <div class="mt-auto d-grid gap-2">
        <button class="btn btn-primary-custom btn-sm d-flex justify-content-center align-items-center gap-2" @click.prevent="addToCart(product)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
          Agregar al carrito
        </button>
        <button class="btn btn-outline-custom btn-sm" @click.prevent="setModalProduct(product)" data-bs-toggle="modal" data-bs-target="#productModal">
          Ver más detalles
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  font-size: 1.1rem;
}
.badge {
  padding: 0.4em 0.6em;
}
</style>
