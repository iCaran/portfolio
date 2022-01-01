import './work.styles.scss';

import Projects from '../../components/work/projects/projects.component.jsx';
import Timeline from '../../components/work/timeline/timeline.component';

const Work = () => {
	return (
		<div id='workPage'>
			<div className='heading'>Here is some of my Work and Experience</div>
			<section>
				<Projects />
				<Timeline />
			</section>
		</div>
	);
};

export default Work;
