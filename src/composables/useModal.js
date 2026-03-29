import { ref } from 'vue'

const selectedProduct = ref(null)

export function useModal() {
  const setModalProduct = (product) => {
    selectedProduct.value = product
  }
  
  return {
    selectedProduct,
    setModalProduct
  }
}
