<template>
  <ion-page>
    <ion-item>
      <ion-label>Checkbox: {{ checkbox }}</ion-label>
      <ion-checkbox v-model="checkbox" slot="end"></ion-checkbox>
    </ion-item>
  </ion-page>
</template>

<script lang="ts">
import { IonApp, IonItem, IonCheckbox, IonLabel, IonPage } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonApp,
    IonItem, 
    IonCheckbox, 
    IonLabel,
    IonPage
  },
  setup() {
    const checkbox = ref(false);
    
    return { checkbox }
  }
});
</script>