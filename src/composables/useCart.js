import { ref, computed, watch } from 'vue'

const cart = ref([])
const toastMessage = ref('')
const toastSubtitle = ref('')
const showToast = ref(false)
const isCartAnimating = ref(false)
const hasAutoOpened = ref(false)

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
    
    // Disparar feedback visual y toast
    triggerToast(
      `¡"${product.name}" agregado!`,
      "Toca el icono del carrito para ver tu pedido."
    )
    
    // Animar ícono de carrito
    isCartAnimating.value = true
    setTimeout(() => {
      isCartAnimating.value = false
    }, 600)
    
    // Abrir automáticamente el carrito en móvil solo la primera vez que agrega
    if (!hasAutoOpened.value && window.innerWidth < 992) {
      hasAutoOpened.value = true
      setTimeout(() => {
        const cartBtn = document.querySelector('[data-bs-target="#cartOffcanvas"]')
        if (cartBtn) {
          cartBtn.click()
        }
      }, 500) // Pequeño retraso para que la animación suceda y luego se abra
    }
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
    hasAutoOpened.value = false // Restaurar la capacidad de auto-abrir si vacía todo
  }

  const totalItems = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  let toastTimer = null
  const triggerToast = (msg, subtitle = '') => {
    toastMessage.value = msg
    toastSubtitle.value = subtitle
    showToast.value = true
    
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      showToast.value = false
    }, 3500) // Ligeramente más largo para dar tiempo a leer
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
    toastSubtitle,
    showToast,
    isCartAnimating
  }
}

