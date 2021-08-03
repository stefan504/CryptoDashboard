import React from 'react';
import { Line } from 'react-chartjs-2';

function Charts({ data }) {
	return (
		<div className="px-2 height h-80">
			<Line
				data={data}
				options={{
					maintainAspectRatio: true,
					responsive: true,

					borderColor: 'white',
					title: {
						display: true,
						fontSize: 30,
					},
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</div>
	);
}

export default Charts;
