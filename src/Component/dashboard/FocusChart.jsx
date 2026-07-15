import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import WeekFocus from "./WeekFocus";
import MonthFocus from "./MonthFocus";

function FocusChart({ active }) {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weekly Study Hours",
      },
    },
  };

  let month = MonthFocus();
  let label;
  let dataMain;

  if (active === 'week') {
     label = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
     dataMain = WeekFocus();
  } else if (active === 'month') {

     dataMain = month[0];
     label = month[1];
  }

  const data = {
    labels: label,
    datasets: [
      {
        label: "mins",
        data: dataMain,
        borderColor: "#3b82f6",
        backgroundColor: "#93c5fd",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className=" h-[50vh] bg-secondary-main w-full md:w-5/10 rounded-lg pl-2 pb-2">
      <Line options={options} data={data} />
    </div>
  );
}

export default FocusChart;