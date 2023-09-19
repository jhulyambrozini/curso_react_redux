import { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';
import { GraphsContainer, GraphsItem, Total } from './style';

type UserStatisticsGraphsProps = {
  data: GraphData[];
};
type TGraphData = {
  x: string;
  y: number;
}

const UserStatisticsGraphs = ({ data }: UserStatisticsGraphsProps) => {
  const [total, setTotal] = useState(0);
  const [graph, setGraph] = useState<TGraphData[] | null>(null);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });
    const totalAcess = data
      .map(({ acessos }) => Number(acessos))
      .reduce((a, b) => a + b, 0);

    setTotal(totalAcess);
    setGraph(graphData);
  }, [data]);

  if (!graph) return null;
  return (
    <GraphsContainer className="animeLeft">
      <Total>
        <p>Acessos: {total}</p>
      </Total>
      <GraphsItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphsItem>
      <GraphsItem>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            data={graph}
          ></VictoryBar>
        </VictoryChart>
      </GraphsItem>
    </GraphsContainer>
  );
};

export default UserStatisticsGraphs;
