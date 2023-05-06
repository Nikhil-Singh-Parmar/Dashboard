import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
      name: '4th May',
      Total_Plays: 400,
      Unique_Plays: 240,
      amt: 240,
    },
    {
      name: '5th May',
      Total_Plays: 300,
      Unique_Plays: 138,
      amt: 210,
    },
    {
      name: '6th May',
      Total_Plays: 200,
      Unique_Plays: 900,
      amt: 290,
    },
    {
      name: 'Today',
      Total_Plays: 200,
      Unique_Plays: 900,
      amt: 290,
    }
  ];
  
function Chart(props){
    return(
        <LineChart
    width={800}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="monotone"
      dataKey="Unique_Plays"
      stroke="red"
      activeDot={{ r: 8 }}
    />
    <Line type="monotone" dataKey="Total_Plays" stroke=" rgb(11, 252, 7)" />
  </LineChart>

    )
}
export default Chart;