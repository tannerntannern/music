import React from 'react';
import ReactDOM from 'react-dom';
import { Section, Container, Title, Subtitle, Box } from 'bloomer';

ReactDOM.render(
	<Section>
		<Container>
			<Title>Work in Progress...</Title>
			<Subtitle>This website is under construction... Please go away and come back later!</Subtitle>
			<Box>
				In the meantime, checkout my main website at <a href="https://tannernielsen.com">tannernielsen.com</a>.
			</Box>
		</Container>
	</Section>,
	document.getElementById('root'),
);
