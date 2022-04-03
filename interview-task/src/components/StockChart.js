import { useEffect } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import styles from '../styles/StockChart.module.scss'

const StockChart = () => {
  const options = {
   
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
      }
    ]
  }

  return (
    <div className={styles.stockChart}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        containerProps = {{ className: styles.chartContainer }}
        options={options}
      />
      <p>MiFID II compliant pre- and post-trade transaction data is available <a>here</a>. The data is delayed by at least 15 minutes and will be refreshed every 15 minutes. Publication of trades in equity securities that are large in scale compared to normal market size and illiquid non-equity securities may be delayed if the trade is eligible for deferred publication in accordance with the trading rules of Aquis Stock Exchange and MiFIR. Further details as to when the publication of a trade may be deferred are set out in the trading rules which are available <a>here</a>.</p>
    </div>
  )
}

export default StockChart