import help from '../assets/help.png';
import notifications from '../assets/notifications.png';
import '../styles/image_viewer.css';

export default () => {
  const image = document.createElement('img');
  image.src = notifications;

  document.body.appendChild(image);
};
