<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'BarChart',
  extends: Bar,
  props: {
      chartData: Object,
      chartOptions: Object
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData,
    this.chartOptions
    )
  }
})
</script>