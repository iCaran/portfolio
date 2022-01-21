import { homePage } from '../../../assets/data';
import './photo.styles.scss';

const Photo = () => (
	<div id='photo'>
		<img src={homePage.imageUrl} alt='Image not found' />
	</div>
);

export default Photo;
