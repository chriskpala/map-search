<template>
  <div @keyup.enter="selectLocation(selectedLocation)" style="display:flex">
    <div class="search-input">
      <auto-complete
        style="width:100%"
        v-model="selectedLocation"
        :suggestions="items"
        @complete="searchLocation"
        optionLabel="name"
      >
        <template #header>
          <div style="background-color: #4F7DFA;color:white;padding: 1rem;">
            Found {{items.length}} Results:
          </div>
        </template>
        <template #item="slotProps" v-if="items.length">
          <span
            style="display: flex;cursor: pointer"
            @click="selectLocation(slotProps.item)"
          >
            <img src="@/assets/icon-pin.svg" />
            <div style="margin-left: .5rem;">
              <div style="font-weight: bold">
                {{slotProps.item.name}}
              </div>
              <div style="font-size: small;color: gray">
                {{getLongLat(slotProps.item.location)}}
              </div>
            </div>
          </span>
        </template>
      </auto-complete>
    </div>
    <div v-if="!items.length" class="error-message">
      No location found
    </div>
  </div>
</template>
<script>
import sampleData from '@/assets/sample-data'

export default {
  name: 'AddressAutoComplete',
  data() {
    return {
      selectedLocation: null,
      items: sampleData,
    }
  },
  methods: {
    searchLocation(input) {
      this.items = input.query
        ? sampleData.filter(res => res.name?.toLowerCase()?.startsWith(input.query.toLowerCase()))
        : sampleData;
    },
    selectLocation(selectedLocation) {
      const location = { ...selectedLocation.location }
      const formattedLocation = {
        id: selectedLocation.id,
        latLng: { lat: location.lat, lng: location.lon }
      }
      this.$emit('onSelectLocation', formattedLocation);
    },
    getLongLat(location) {
      return `${location.lat}, ${location.lon}`;
    },
  }
}
</script>

<style scoped>
.search-input {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  width: 40ch
}

.error-message{
  padding: 1rem;
  background-color: red;
  color: white;
  position: fixed;
  border-radius: .5rem;
  width: 40ch;
  top: 70px;
  left: 20px;
  z-index: 1000;
}
</style>
