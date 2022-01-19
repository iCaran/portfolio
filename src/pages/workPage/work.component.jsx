import './work.styles.scss';

import ProjectCarousel from '../../components/work/project-carousel/projectCarousel.component';
import ProjectList from '../../components/work/project-list/projectList.component';

const Work = () => {
	return (
		<div id='workPage'>
			{/* <ProjectCarousel /> */}
			<ProjectList />
		</div>
	);
};

export default Work;
