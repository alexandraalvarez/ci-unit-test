<template>
  <div class="greeting">

    <h1>Componente para prueba unitaria</h1>
    <greetingComp></greetingComp>
    
  </div>
</template>

<script>
import greetingComp from '@/components/Greeting.vue'

export default {
  name: 'Greeting',
  components: {
    greetingComp
  }
}
</script>
