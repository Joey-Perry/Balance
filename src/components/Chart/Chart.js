import { Pie } from 'react-chartjs-2';
import './chart.css';

const PieChart = ({checking, savings, debt}) => {

    const data = {
        labels: ['Checking', 'Savings', 'Debt'],
        datasets: [
            {
                label: 'accounts',
                data: [checking, savings, debt],
                backgroundColor: [
                    'rgb(79, 145, 243)',
                    'rgb(21, 228, 103)',
                    'rgb(243, 79, 80)'
                ]
            }
        ],
    };

    return (
        <div className='pie-chart'>
        <Pie
          data={data}
        />
      </div>
    )
}

export default PieChart;