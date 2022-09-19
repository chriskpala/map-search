<template>
  <div>
    <Dialog
      v-model:visible="showDialog"
      :showHeader="false"
      :breakpoints="{'960px': '30vw', '640px': '90vw'}" :style="{width: '30vw'}"
      :dialog="true"
    >
      <span style="display: flex;justify-content: space-between;padding-top: 10px;">
        <span style="display: flex">
          <img src="@/assets/icon-pin.svg" />
          <div style="margin-left:0.5rem">
            <div style="font-weight: bold">
              {{location.name}}
            </div>
            <div style="font-size: small;color: gray">
              {{getLongLat(location.location)}}
            </div>
          </div>
        </span>
        <span style="display: flex">
          <button
            class="btn-primary"
            style="margin-right: .5rem"
            v-if="currentLocationWebsite"
            @click="openURL(currentLocationWebsite)"
          >
            Visit Website
          </button>
          <img
            height="20"
            width="20"
            @click="$emit('onClose')"
            style="cursor: pointer; margin-top: 2px"
            src="@/assets/icon-cross.svg"
          />
        </span>
      </span>
      <hr v-if="currentLocationDescription || location.images">
      <span style="font-size: small" v-if="currentLocationDescription">
        {{currentLocationDescription}}
      </span>
      <span style="display: flex;margin-top: 1rem;">
        <img
          height="100"
          width="100"
          v-for="(image,i) in location.images"
          :key="i"
          :src="image"
          alt="image"
        />
      </span>
      <Bar
        v-if="locationHasChart"
        chart-id="bar-chart"
        dataset-id-key="label"
        :width="40"
        :height="30"
        :chart-options="chartOptions"
        :chart-data="chartData"
      /> 
    </Dialog>
  </div>
</template>

<script>
import Dialog from 'primevue/dialog';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'LocationDetailsDialog',
  components: {
    Bar,
    Dialog,
  },
  data() {
    return {
      showDialog: false,
      chartOptions: {
        responsive: true,
      },
      chartData: {
        labels: [],
        datasets: []
      }
    }
  },
  props: {
    location: {
      default: null,
      required: true
    },
    displayDialog: {
      default: false,
      required: true
    },
  },
  watch: {
    displayDialog: {
      handler: function(value) {
        this.showDialog = value;
        this.$nextTick(() => {
          value && this.manipulateChartData();
        });
      }
    }
  },
  computed: {
    currentLocationWebsite() {
      return this.location?.details?.website;
    },
    currentLocationDescription() {
      return this.location?.details?.description;
    },
    locationHasChart() {
      return !!this.location?.details?.avgStoreTraffic;
    }
  },
  methods: {
    getLongLat(location) {
      return `${location.lat}, ${location.lon}`;
    },
    openURL(url) {
      window.open(url,'_blank');
    },
    manipulateChartData() {
      let avgStoreTraffic = this.location?.details?.avgStoreTraffic;
      this.chartData = {
        labels: avgStoreTraffic ? Object.keys(avgStoreTraffic) : [],
        datasets: [{
          backgroundColor: '#f87979',
          label: "Average Store Traffic values",
          data: avgStoreTraffic ? Object.values(avgStoreTraffic) : []
        }]
      }
    }
  }
}
</script>

<style scoped>
.btn-primary {
  color: white;
  background-color: #4F7DFA;
  border: none;
  padding: 9px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
