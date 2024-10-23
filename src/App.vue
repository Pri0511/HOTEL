
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
  <div >
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="min-width: 100vh; ">
        <q-tabs
          v-model="tab"
        
           class="custom-tabs full-width-tabs"
        >
          <q-tab name="/" icon="home" label="" />
          <q-tab name="hotel" icon="habitaciones" label="" />
          <q-tab name="servicios" icon="servicios" label="" />
          <q-tab name="actividades" icon="actividades" label="" />
          <q-tab name="contacto" icon="contacto" label="" />
        </q-tabs>
        <router-view></router-view>
      </div>
    </div>
  </div>

 
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const tab = ref('')  
    const router = useRouter()
    const route = useRoute()

  
    onMounted(() => {
      tab.value = getTabFromRoute(route.path)
    })

  
    watch(tab, (newTab) => {
      if (newTab) {
        router.push({ path: `/${newTab}` })
      }
    })

 
    watch(route, (newRoute) => {
      tab.value = getTabFromRoute(newRoute.path)
    })

   
    function getTabFromRoute(path) {
      if (path.includes('/servicios')) return 'servicios'
      if (path.includes('/hotel')) return 'hotel'
      if (path.includes('/actividades')) return 'actividades'
      if (path.includes('/contacto')) return 'contacto'
      if (path === '/') return ''
      return ''
    }

    return {
      tab
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;

}


.custom-tabs {
  background-color: #242323; 
  color: white; 
  font-size:60px;
}

.q-tab {
  font-family: "Mooli", serif;
  flex-grow: 0.05; 
  text-align: center; 
  margin: 0 25px; 
}

.q-tab .q-icon {
  font-size: 30px;
  margin-top: 10px;
}

.q-tab--active {
  font-weight: bold; 
}

.full-width-tabs {
  display: flex;
  margin-left: -450px;
  margin-top: -50px;
  padding: 0;
  justify-content: space-between; 
  width: 1993px;

  height: 80px; 
}



</style>