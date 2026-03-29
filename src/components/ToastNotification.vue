<script setup>
import { useCart } from '../composables/useCart'
const { toastMessage, toastSubtitle, showToast } = useCart()
</script>

<template>
  <div class="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3 mb-5 mb-lg-3" style="z-index: 2000">
    <div class="toast align-items-center text-white bg-dark border-0 shadow-lg px-2 py-1" 
         :class="{ show: showToast }" 
         role="alert" 
         aria-live="assertive" 
         aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body py-3 w-100">
          <div class="d-flex align-items-center mb-1">
            <i class="bi bi-check-circle-fill text-success ms-1 me-2 fs-5"></i>
            <span class="fs-6 fw-bold">{{ toastMessage }}</span>
          </div>
          <div v-if="toastSubtitle" class="text-white-50 ms-4 ps-1 small lh-sm">
            {{ toastSubtitle }}
          </div>
        </div>
        <button type="button" class="btn-close btn-close-white me-2 mt-3 shadow-none align-self-start" @click="showToast = false" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toast {
  transition: opacity 0.3s ease, transform 0.3s ease;
  border-radius: 12px;
  min-width: 280px;
}
</style>
