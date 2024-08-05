import { AreaChart } from '@tremor/react';

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function WatchAreaGraph({change = 0, chartData}) {
  const color = change >= 0 ? ['green'] : ['red'];
  let data = [];
  for (let i = chartData.length - 1;
    i >= 0; i--) {
    data.push(chartData[i]);
}
  return (
    <AreaChart
      className="h-24"
      data={data}
      index="date"
      autoMinValue={true}
      showXAxis={false}
      showYAxis={false}
      showLegend={false}
      showAnimation={true}
      showTooltip={true}
      categories={['open']}
      colors={color}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}