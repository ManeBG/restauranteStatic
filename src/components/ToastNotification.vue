<script setup>
import { useCart } from '../composables/useCart'
const { toastMessage, showToast } = useCart()
</script>

<template>
  <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3 mb-5 mb-lg-3" style="z-index: 2000">
    <div class="toast align-items-center text-white bg-dark border-0 shadow-lg px-2 py-1" 
         :class="{ show: showToast }" 
         role="alert" 
         aria-live="assertive" 
         aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body fw-medium py-3">
          <i class="bi bi-check-circle-fill text-success me-2"></i>
          {{ toastMessage }}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto shadow-none" @click="showToast = false" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 50px;
}
</style>
