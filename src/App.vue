
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
  <div >
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="min-width: 100vh">
        <q-tabs
          v-model="tab"
        
           class="custom-tabs full-width-tabs"
        >
          <q-tab name="/" icon="home" label="" />
          <q-tab name="hotel" icon="hotel" label="" />
          <q-tab name="servisios" icon="servisios" label="" />
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
      if (path.includes('/servisios')) return 'servisios'
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
  font-style: normal;
  font-family: "Inconsolata", monospace;

}

body.desktop.no-touch.body--light {
  background-color: rgba(255, 255, 255, 0.411);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
}


.full-width-tabs {

 

  display: flex;
  margin-left: -91px;
  margin-top: -50px;
  padding: 0;
  justify-content: space-between; 
  width: 1366px;
  height:70px; 

}

.full-width-tabs {
  
  font-family: "Inconsolata", monospace;
  display: flex;
  justify-content: space-between; 

}

.custom-tabs {
  font-family: "Inconsolata", monospace;
  background-color: #b1afad; 
  color: white; 


}

.q-tab {
  
  flex-grow: 1; 
  text-align: center; 
  margin: 0; 
 
  
}

.q-tab .q-icon {

 
  font-style: normal;

}

.q-tab--active {
  font-style: normal;

}
</style>