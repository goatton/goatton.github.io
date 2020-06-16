Highcharts.chart('myChart01', {
	title: {
		text: 'Highcharts 和弦图'
	},
	series: [{
		keys: ['from', 'to', 'weight'],
		data: [
			['企业风险', 'B', 5],
			['企业风险', 'C', 4],
			['企业风险', 'D', 3],
			['企业风险', 'E', 4],
			['B', 'C', 1],
			['B', 'D', 4],
			['B', 'A', 2],
			['C', 'D', 5],
			['C', 'E', 3],
			['C', 'A', 5],
			['D', 'A', 1],
			['D', 'B', 4],
			['D', 'C', 4],
			['D', 'E', 2],
		],
		type: 'dependencywheel',
		name: '关联度',
		dataLabels: {
			color: '#333',
			textPath: {
				enabled: true,
				attributes: {
					dy: 5
				}
			},
			distance: 10
		},
		size: '95%'
	}]
});
