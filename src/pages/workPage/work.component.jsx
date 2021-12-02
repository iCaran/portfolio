import './work.styles.scss';

import Projects from '../../components/work/projects/projects.component.jsx';

const Work = () => {
	return <div id='workPage'>
		<div className='heading'>Here is some of my Work and Experience</div>
		<div className='projects'><Projects/></div>
	</div>;
};

export default Work;