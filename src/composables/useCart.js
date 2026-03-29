import { ref, computed, watch } from 'vue'

const cart = ref([])
const toastMessage = ref('')
const showToast = ref(false)

// Recuperar carrito de localStorage al iniciar
const savedCart = localStorage.getItem('demo-restaurante-cart')
if (savedCart) {
  try {
    cart.value = JSON.parse(savedCart)
  } catch (e) {
    console.error('Error al recuperar carrito', e)
  }
}

// Guardar carrito automáticamente cuando cambie
watch(cart, (newCart) => {
  localStorage.setItem('demo-restaurante-cart', JSON.stringify(newCart))
}, { deep: true })

export function useCart() {
  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.value.push({ ...product, quantity })
    }
    
    // Disparar feedback visual
    triggerToast(`¡"${product.name}" agregado al carrito!`)
  }

  const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  const updateQuantity = (productId, amount) => {
    const item = cart.value.find(i => i.id === productId)
    if (item) {
      const newQuantity = item.quantity + amount
      if (newQuantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = newQuantity
      }
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  const totalItems = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  // Funcionalidad simple de toast para feedback
  let toastTimer = null
  const triggerToast = (msg) => {
    toastMessage.value = msg
    showToast.value = true
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      showToast.value = false
    }, 3000)
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    cartTotal,
    toastMessage,
    showToast
  }
}
