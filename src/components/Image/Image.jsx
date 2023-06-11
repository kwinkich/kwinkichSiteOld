import { gsap } from 'gsap';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './Image.module.css'
import PropTypes from 'prop-types';

const Image = ({ username }) => {
  const [avatarUrl, setAvatarUrl] = useState('');
	const imageWrapperRef = useRef(null);

  useEffect(() => {
    const imageWrapperElement = imageWrapperRef.current;

    gsap.set(imageWrapperElement, { opacity: 0 });
    gsap.to(imageWrapperElement, { 
			opacity: 1, 
			duration: 1.7,  
			ease: 'power2.out',
      scrollTrigger: {
        trigger: imageWrapperElement,
        start: 'top 90%', // Начало анимации при достижении 80% от верха экрана
      }, });
  }, []);



  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const { avatar_url } = response.data;
        setAvatarUrl(avatar_url);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, [username]);

  return (
			<div className={styles.aboutImg} ref={imageWrapperRef}>
				<img src={avatarUrl} alt="GitHub Avatar" className={styles.imageGit}/>
			</div>
  );
};

Image.propTypes = {
  username: PropTypes.string.isRequired,
};



export default Image;
