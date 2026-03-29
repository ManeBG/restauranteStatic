<script setup>
import { reactive, computed } from 'vue'
import { useCart } from '../composables/useCart'
import { businessInfo } from '../data/businessInfo'

const { cart, cartTotal, clearCart } = useCart()

const customerData = reactive({
  name: '',
  deliveryType: 'delivery', // 'delivery' o 'pickup'
  address: '',
  reference: '',
  notes: ''
})

const isFormValid = computed(() => {
  if (!customerData.name.trim()) return false
  if (customerData.deliveryType === 'delivery' && !customerData.address.trim()) return false
  return true
})

const generateWhatsAppUrl = () => {
  let message = `Hola ${businessInfo.name}, quiero hacer este pedido:\n\n`
  message += `------------------------\n\n`
  
  cart.value.forEach(item => {
    message += `${item.quantity} x ${item.name} — $${item.price * item.quantity}\n`
  })
  
  message += `\n------------------------\n\n`
  message += `Total aproximado: $${cartTotal.value}\n\n`
  message += `------------------------\n\n`
  
  message += `Datos del cliente:\n`
  message += `Nombre: ${customerData.name.trim()}\n`
  
  if (customerData.deliveryType === 'delivery') {
    message += `Dirección: ${customerData.address.trim()}\n`
    if (customerData.reference.trim()) {
      message += `Referencia: ${customerData.reference.trim()}\n`
    }
  } else {
    message += `Envío: Pasaré a recoger a sucursal\n`
  }
  
  if (customerData.notes.trim()) {
    message += `Notas: ${customerData.notes.trim()}\n`
  }
  
  message += `\n¿Me lo pueden confirmar, por favor?`
  
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${businessInfo.whatsapp}?text=${encodedMessage}`
}

const handleWhatsAppCheckout = () => {
  if (!isFormValid.value || cart.value.length === 0) return
  
  const url = generateWhatsAppUrl()
  
  // Opcional: limpiar carrito después de redirigir (comentado porque el usuario
  // podría retroceder si WhatsApp no abrió bien). Se deja a consideración:
  // clearCart() 
  
  window.open(url, '_blank')
}
</script>

<template>
  <div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true" data-bs-backdrop="static">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0 shadow-lg rounded-4">
        <div class="modal-header border-bottom-0 pb-0 pt-4 px-4">
          <h4 class="modal-title fw-bold text-dark d-flex align-items-center gap-2" id="checkoutModalLabel">
            <i class="bi bi-whatsapp text-success"></i> Finalizar Pedido
          </h4>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body p-4">
          <p class="text-muted mb-4">Completa estos últimos datos para enviar tu pedido directamente a nuestro WhatsApp.</p>
          
          <form @submit.prevent="handleWhatsAppCheckout">
            <!-- Nombre -->
            <div class="mb-3">
              <label for="customerName" class="form-label fw-bold small text-dark">Tu Nombre <span class="text-danger">*</span></label>
              <input type="text" id="customerName" class="form-control bg-light border-0 py-2 custom-focus" v-model="customerData.name" placeholder="Ej. Juan Pérez" required>
            </div>
            
            <!-- Tipo de entrega -->
            <div class="mb-3">
              <label class="form-label fw-bold small text-dark">Método de entrega <span class="text-danger">*</span></label>
              <div class="d-flex gap-3">
                <div class="form-check custom-radio">
                  <input class="form-check-input" type="radio" name="deliveryType" id="typeDelivery" value="delivery" v-model="customerData.deliveryType">
                  <label class="form-check-label ms-1" for="typeDelivery">A domicilio</label>
                </div>
                <div class="form-check custom-radio">
                  <input class="form-check-input" type="radio" name="deliveryType" id="typePickup" value="pickup" v-model="customerData.deliveryType">
                  <label class="form-check-label ms-1" for="typePickup">Pasar a recoger</label>
                </div>
              </div>
            </div>
            
            <!-- Dirección (Solo si es delivery) -->
            <div v-if="customerData.deliveryType === 'delivery'" class="delivery-data animation-fade-in">
              <div class="mb-3">
                <label for="address" class="form-label fw-bold small text-dark">Dirección de entrega <span class="text-danger">*</span></label>
                <input type="text" id="address" class="form-control bg-light border-0 py-2 custom-focus" v-model="customerData.address" placeholder="Calle, Número, Colonia" required>
              </div>
              <div class="mb-3">
                <label for="reference" class="form-label fw-bold small text-dark">Referencia (Opcional)</label>
                <input type="text" id="reference" class="form-control bg-light border-0 py-2 custom-focus" v-model="customerData.reference" placeholder="Ej. Casa verde junto a la tienda">
              </div>
            </div>
            
            <!-- Comentarios -->
            <div class="mb-4">
              <label for="notes" class="form-label fw-bold small text-dark">Comentarios o notas (Opcional)</label>
              <textarea id="notes" class="form-control bg-light border-0 py-2 custom-focus" rows="2" v-model="customerData.notes" placeholder="Ej. Hamburguesa sin cebolla, pagaré con billete de $500, etc."></textarea>
            </div>
          </form>
        </div>
        
        <div class="modal-footer border-top-0 pt-0 px-4 pb-4">
          <div class="d-flex justify-content-between align-items-center w-100 mb-3">
            <span class="text-muted fw-medium">Total a pagar:</span>
            <span class="fs-4 fw-bold text-dark">${{ cartTotal }}</span>
          </div>
          
          <button class="btn btn-success btn-lg w-100 shadow-sm d-flex justify-content-center align-items-center py-3 fs-5" 
                  :disabled="!isFormValid || cart.length === 0" 
                  @click="handleWhatsAppCheckout"
                  data-bs-dismiss="modal">
            <i class="bi bi-send-fill me-2"></i> Enviar pedido por WhatsApp
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-focus:focus {
  box-shadow: 0 0 0 0.25rem rgba(37, 211, 102, 0.25); /* Verde de WA */
}
.btn-success {
  background-color: #25D366;
  border-color: #25D366;
  transition: all 0.3s ease;
}
.btn-success:hover:not(:disabled) {
  background-color: #128C7E;
  border-color: #128C7E;
  transform: translateY(-2px);
}
.animation-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
