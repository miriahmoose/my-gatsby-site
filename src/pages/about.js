import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout pageTitle='About Me'>
			<p>I'm a 34 year old lady and I have a basketball game tomorrowwwww!</p>
		</Layout>
	);
};

export const Head = () => <title>About Me</title>;
export default AboutPage;
