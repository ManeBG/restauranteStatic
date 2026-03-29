<script setup>
import { ref, computed } from 'vue'
import { products } from '../data/products'
import { categories } from '../data/categories'
import ProductCard from '../components/ProductCard.vue'

// Estado para controlar qué categoría está activa
const activeCategory = ref('all')

// Filtramos para asegurar que los botones de categoría solo existan 
// si realmente tienen productos vinculados en el catálogo
const availableCategories = computed(() => {
  return categories.filter(cat => products.some(p => p.category === cat.id))
})

// Agrupar productos dependiendo del filtro aplicado
const groupedProducts = computed(() => {
  const result = []
  
  categories.forEach(cat => {
    // Si no es "todas" y la id de categoría no coincide con la activa, saltamos esta categoría
    if (activeCategory.value !== 'all' && activeCategory.value !== cat.id) {
      return
    }

    const catProducts = products.filter(p => p.category === cat.id)
    if (catProducts.length > 0) {
      result.push({
        ...cat,
        items: catProducts
      })
    }
  })
  
  return result
})
</script>

<template>
  <section id="menu" class="section-padding bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <span class="text-primary-custom fw-bold text-uppercase tracking-wide small mb-2 d-inline-block">Nuestro Sabor</span>
        <h2 class="display-5 fw-bold text-dark">Explora el Menú</h2>
        <p class="text-muted fs-5 mt-3 max-w-700 mx-auto">
          Todo preparado con ingredientes frescos, listos para satisfacer tu antojo en cualquier momento.
        </p>
      </div>

      <!-- Barra de Filtros / Pills -->
      <div class="filters-container mb-5">
        <div class="d-flex flex-nowrap overflow-auto pb-3 justify-content-lg-center gap-2 category-filters">
          <button 
            class="btn rounded-pill px-4 fw-medium flex-shrink-0 transition-fast"
            :class="activeCategory === 'all' ? 'btn-primary-custom shadow-sm' : 'btn-outline-custom'"
            @click="activeCategory = 'all'"
          >
            Todo el Menú
          </button>
          
          <button 
            v-for="cat in availableCategories" 
            :key="cat.id"
            class="btn rounded-pill px-4 fw-medium flex-shrink-0 d-flex align-items-center gap-2 transition-fast"
            :class="activeCategory === cat.id ? 'btn-primary-custom shadow-sm' : 'btn-outline-custom'"
            @click="activeCategory = cat.id"
          >
            <span>{{ cat.icon }}</span> {{ cat.name }}
          </button>
        </div>
      </div>
      
      <!-- Lista de Productos Mapeados -->
      <div class="category-block mb-5 mb-lg-5 animation-fade-in" v-for="group in groupedProducts" :key="group.id">
        <div class="d-flex align-items-center gap-3 mb-4 pb-2 border-bottom">
          <div class="category-icon bg-white text-primary-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 50px; height: 50px; font-size: 1.5rem;">
            {{ group.icon }}
          </div>
          <h3 class="fw-bold mb-0 text-dark">{{ group.name }}</h3>
        </div>
        
        <div class="row g-4">
          <div 
            v-for="product in group.items" 
            :key="product.id" 
            class="col-12 col-md-6 col-lg-4"
          >
            <ProductCard :product="product" />
          </div>
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
.category-block {
  scroll-margin-top: 100px; /* Para que el navbar no lo tape al hacer scroll local hacia la sección */
}
.transition-fast {
  transition: all 0.2s ease-in-out;
}

/* Modificadores estéticos para scrollbar en móviles para que no estorbe físicamente pero mantenga funcionalidad táctil */
.category-filters::-webkit-scrollbar {
  height: 4px;
}
.category-filters::-webkit-scrollbar-track {
  background: transparent;
}
.category-filters::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Animación de entrada suave cuando se cambia el filtro */
.animation-fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
