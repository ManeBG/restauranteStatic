<script setup>
import { useCart } from '../composables/useCart'

const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, totalItems } = useCart()
</script>

<template>
  <div class="offcanvas offcanvas-end shadow" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header border-bottom">
      <h5 class="offcanvas-title fw-bold text-dark d-flex align-items-center gap-2" id="cartOffcanvasLabel">
        <i class="bi bi-cart3 text-primary-custom"></i> Tu Pedido
        <span class="badge bg-primary-custom rounded-pill ms-2" v-if="totalItems > 0">{{ totalItems }}</span>
      </h5>
      <button type="button" class="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div class="offcanvas-body d-flex flex-column p-0">
      <!-- Carrito Vacío -->
      <div v-if="cart.length === 0" class="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-muted p-4">
        <div class="bg-light rounded-circle p-4 mb-3">
          <i class="bi bi-cart-x text-secondary-custom" style="font-size: 3.5rem;"></i>
        </div>
        <h5 class="fw-bold text-dark">Tu carrito está vacío</h5>
        <p class="text-center mb-4 max-w-75">Aún no has agregado ningún producto delicioso.</p>
        <button class="btn btn-primary-custom px-4" data-bs-dismiss="offcanvas">
          Ver Menú
        </button>
      </div>

      <!-- Items del Carrito -->
      <div v-else class="flex-grow-1 overflow-auto p-3">
        <div class="d-flex justify-content-end mb-3">
          <button class="btn btn-link text-danger p-0 text-decoration-none small fw-medium" @click="clearCart">
            <i class="bi bi-trash"></i> Vaciar carrito
          </button>
        </div>
        
        <div class="cart-item border rounded-3 p-3 mb-3 bg-white shadow-sm position-relative" v-for="item in cart" :key="item.id">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <h6 class="fw-bold mb-0 pe-4 text-dark lh-sm">{{ item.name }}</h6>
            <button class="btn btn-sm text-muted position-absolute top-0 end-0 m-1 p-1" @click="removeFromCart(item.id)">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          
          <div class="d-flex justify-content-between align-items-end mt-3">
            <div class="fw-bold text-primary-custom">${{ item.price * item.quantity }}</div>
            
            <div class="input-group input-group-sm rounded bg-light border" style="width: 100px;">
              <button class="btn btn-light border-0 px-2 text-primary-custom fs-6 fw-bold" type="button" @click="updateQuantity(item.id, -1)">-</button>
              <input type="text" class="form-control text-center border-0 bg-light px-0 fw-bold" :value="item.quantity" readonly>
              <button class="btn btn-light border-0 px-2 text-primary-custom fs-6 fw-bold" type="button" @click="updateQuantity(item.id, 1)">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Totales y CTA -->
      <div class="offcanvas-footer border-top p-4 bg-light" v-if="cart.length > 0">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted fw-medium fs-5">Total</span>
          <span class="fw-bold fs-3 text-dark">${{ cartTotal }}</span>
        </div>
        
        <div class="d-grid gap-2">
          <!-- CTA hacia Checkout Modal -->
          <button class="btn btn-primary-custom py-3 shadow-sm d-flex justify-content-center align-items-center gap-2 fs-5" 
                  data-bs-toggle="modal" 
                  data-bs-target="#checkoutModal"
                  data-bs-dismiss="offcanvas">
            Continuar pedido <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-w-75 {
  max-width: 85%;
}
</style>
