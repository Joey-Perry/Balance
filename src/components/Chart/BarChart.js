import { Bar } from 'react-chartjs-2';

const BarChart = ({expected, actual, remaining}) => {

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
        <div className='bar-chart'>
        <Bar
          data={data}
        />
      </div>
    )
}

export default BarChart;