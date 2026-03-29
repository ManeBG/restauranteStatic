<script setup>
import { computed } from 'vue'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.vue'

// Filtrar explícitamente solo los destacados
const featuredProducts = computed(() => {
  return products.filter(p => p.featured).slice(0, 3) // Mostrar máximo 3 para mantener el diseño balanceado
})
</script>

<template>
  <section id="featured" class="section-padding bg-white">
    <div class="container">
      <div class="text-center mb-5">
        <span class="text-primary-custom fw-bold text-uppercase tracking-wide small mb-2 d-inline-block">Recomendaciones</span>
        <h2 class="display-5 fw-bold text-dark">Productos Destacados</h2>
        <p class="text-muted fs-5 mt-3 max-w-700 mx-auto">
          Los platillos favoritos de nuestros clientes. Preparados al momento con nuestra receta especial.
        </p>
      </div>
      
      <div class="row g-4 justify-content-center">
        <!-- Renderizar los productos filtrados -->
        <div 
          v-for="product in featuredProducts" 
          :key="product.id" 
          class="col-12 col-md-6 col-lg-4"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tracking-wide {
  letter-spacing: 0.1em;
}
.max-w-700 {
  max-width: 700px;
}
</style>
