import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CardProject.module.css'
import PropTypes from 'prop-types';

const getProjectStatus = (lastCommitDate) => {
  const currentDate = new Date();
  const threeDaysAgo = new Date().setDate(currentDate.getDate() - 5);
  return lastCommitDate > threeDaysAgo ? 'На стадії розробки' : 'Виконано';
};

const RepositoryCard = ({ repository }) => {
  const { name, description, html_url, pushed_at } = repository;
  const status = getProjectStatus(new Date(pushed_at));
	const descriptionText = description || 'Опис відсутній';
  return (
    <div className={styles.repositoryCard}>
      <h2 className={styles.repositoryName}>{name}</h2>
      <p className={styles.repositoryDescriptionT}>Опис проекту</p>
      <p className={styles.repositoryDescription}>{descriptionText}</p>
      <p className={styles.repositoryStatus}>Статус: {status}</p>
      <div className={styles.repositoryLinkBlock}>
				<a href={html_url} target="_blank" rel="noopener noreferrer" className={styles.repositoryLink}>Двитися проєкт</a>
			</div>
    </div>
  );
};


RepositoryCard.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    pushed_at: PropTypes.string.isRequired,
  }).isRequired,
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
	const cardWrapperRef = useRef(null);

	useEffect(()=>{
		const cardWrapperElement = cardWrapperRef.current;
		gsap.set(cardWrapperElement, {x: -1300});
		gsap.to(cardWrapperElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: cardWrapperElement,
				start: 'top 90%',
			},
		});
	})



  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/kwinkich/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error('Ошибка при получении списка репозиториев:', error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <div id="repositories-container" className={styles.repositoriesContainer} ref={cardWrapperRef}>
        {repositories.map((repository, index) => (
          <RepositoryCard key={index} repository={repository} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;
