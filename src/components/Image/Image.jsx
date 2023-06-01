import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Image.module.css'
import PropTypes from 'prop-types';

const Image = ({ username }) => {
  const [avatarUrl, setAvatarUrl] = useState('');

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
			<div className={styles.aboutImg}>
				<img src={avatarUrl} alt="GitHub Avatar" className={styles.imageGit}/>
				<span className={styles.circleSpin}></span>
			</div>
  );
};

Image.propTypes = {
  username: PropTypes.string.isRequired,
};



export default Image;
