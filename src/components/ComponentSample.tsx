import styled from 'styled-components';
import React from 'react';

function ComponentSample() {
	return (
		<StyleTest>
			<p>ComponentSample</p>
			<p>ComponentSample</p>
			<p>ComponentSample</p>
		</StyleTest>
	);
}

const StyleTest = styled.div`
	${({ theme }) => theme.flexCenterCenter}
`;

export default ComponentSample;
