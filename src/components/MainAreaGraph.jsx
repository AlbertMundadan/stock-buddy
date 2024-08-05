import { AreaChart } from '@tremor/react';

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us', {minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number).toString()

}`;



export function MainAreaGraph({change=0, chartData, category}) {
    const color = change >= 0 ? ['green'] : ['red'];
    let data = []
    for (let i = chartData.length - 1;
      i >= 0; i--) {
      data.push(chartData[i]);
    }
    return (
      <AreaChart
        className="h-64"
        data={data}
        index='date'
        autoMinValue={true}
        showXAxis={true}
        showYAxis={true}
        showLegend={false}
        showAnimation={true}
        animationDuration={1000}
        showTooltip={true}
        tickGap={120}
        categories={[category]}
        colors={color}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    );
  }