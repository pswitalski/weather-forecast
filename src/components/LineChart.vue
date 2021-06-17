<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'LineChart',
  extends: Line,
  props: {
      chartData: Object,
      chartOptions: Object
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData,
    this.chartOptions
    )
  },
  beforeUnmount() {
   return
  }
})
</script>