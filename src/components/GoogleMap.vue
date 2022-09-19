<template>
  <div @keyup.esc="closeDialog()">
    <address-auto-complete @onSelectLocation="selectLocation" />

    <GMapMap
      @click="closeDialog()"
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100vw; height: 100vh"
      :options="mapOptions"
      :style="displayDialog ? 'pointer-events:none' : 'pointer-events:all'"
    >
      <GMapMarker
        v-if="marker"
        :position="marker.position"
        :clickable="true"
        :icon='{
          url: require("@/assets/icon-pin.svg"),
          scaledSize: { width: 20, height: 25 },
        }'
        @click="displayDialog=true"
      >
      </GMapMarker>
    </GMapMap>

    <location-details-dialog
      :location="searchedLocation"
      :displayDialog="displayDialog"
      @onClose="closeDialog()"
    />
  </div>
</template>

<script>
import sampleData from '@/assets/sample-data'
import AddressAutoComplete from './AddressAutoComplete.vue';
import LocationDetailsDialog from './LocationDetailsDialog.vue';

const firstLocation = sampleData[0].location;

export default {
  name: 'GoogleMap',
  components: {
    AddressAutoComplete,
    LocationDetailsDialog
  },
  data() {
    return {
      center: { lat: firstLocation.lat, lng: firstLocation.lon },
      marker: null,
      searchedLocation: null,
      displayDialog: false,
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }
    }
  },
  methods: {
    selectLocation(location) {
      const {id,latLng} = location;
      this.searchedLocation = sampleData.find(res => res.id == id);
      this.center = latLng;
      this.marker = {
        position: latLng
      }
    },
    closeDialog() {
      if (this.displayDialog == true) this.displayDialog = false  
    }
  }
}
</script>
