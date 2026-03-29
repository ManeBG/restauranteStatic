<script setup>
import { useModal } from '../composables/useModal'
import { useCart } from '../composables/useCart'

const { selectedProduct } = useModal()
const { addToCart } = useCart()

const handleAddToCart = () => {
  if (selectedProduct.value) {
    addToCart(selectedProduct.value)
  }
}
</script>

<template>
  <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden" v-if="selectedProduct">
        <div class="position-relative">
          <button type="button" class="btn-close position-absolute top-0 end-0 m-3 z-1 flex-center bg-white p-2 rounded-circle shadow-sm opacity-100" data-bs-dismiss="modal" aria-label="Close"></button>
          
          <div class="bg-light d-flex align-items-center justify-content-center" 
               :style="`height: 250px; background-image: url('${selectedProduct.image}'); background-size: cover; background-position: center;`">
            <span v-if="selectedProduct.image.includes('placeholder')" class="text-muted opacity-50">
              <i class="bi bi-image" style="font-size: 4rem;"></i>
            </span>
          </div>
        </div>
        
        <div class="modal-body p-4">
          <div class="d-flex justify-content-between align-items-start mb-3 gap-2">
            <h4 class="fw-bold mb-0 text-dark lh-sm">{{ selectedProduct.name }}</h4>
            <span class="badge bg-secondary-custom fs-5 px-3 py-2 shadow-sm">${{ selectedProduct.price }}</span>
          </div>
          
          <span class="badge bg-light text-primary-custom border border-primary border-opacity-25 mb-4 text-capitalize">{{ selectedProduct.category }}</span>
          
          <h6 class="fw-bold text-muted mb-2">Descripción</h6>
          <p class="text-muted mb-4 fs-6">{{ selectedProduct.fullDescription || selectedProduct.shortDescription }}</p>
          
          <div class="d-grid mt-2">
            <button class="btn btn-primary-custom py-3 shadow-sm" @click="handleAddToCart" data-bs-dismiss="modal">
              <i class="bi bi-cart-plus me-2"></i> Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-close {
  width: 1em;
  height: 1em;
}
</style>
