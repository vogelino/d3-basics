{
	const { scaleLinear } = d3;

	const linearScale = scaleLinear()
		.domain([0, 100])
		.range([0, 10])
		.clamp(true);

	console.log(linearScale(5));
}
