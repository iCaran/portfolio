/* eslint-disable jsx-a11y/img-redundant-alt */
import './photo.styles.scss';
import image from './image1.jpg';

const Photo = () => (
	<div id='photo'>
		<img src={image} alt='Image not found' />
	</div>
);

export default Photo;
