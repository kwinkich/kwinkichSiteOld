import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Skills.module.css'

const ProfSkillsList = () => {
  const skills = [
    { name: 'Web-design', level: '70' },
    { name: 'Web Development', level: '45' },
		{ name: 'Graphic Design', level: '30' },
  ];

	const profWrapperRef = useRef(null);
	const profTextRef = useRef(null);


	useEffect(()=>{
		const profWrapperElement = profWrapperRef.current;
		const profTextElement = profTextRef.current;
		gsap.set(profWrapperElement, {x: -1300});
		gsap.to(profWrapperElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: profWrapperElement,
				start: 'top 80%', // Начало анимации при достижении 80% от верха экрана
			},
		});
		gsap.set(profTextElement, {x: -1300});
		gsap.to(profTextElement, {
			x: 0,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: profTextElement,
				start: 'top 80%', // Начало анимации при достижении 80% от верха экрана
			},
		});
	})

  return (
    <div>
      <h1 className={styles.headingSkills} ref={profTextRef}>Професійні</h1>
      <div className={styles.skillsGrid} ref={profWrapperRef}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h2>{skill.name}</h2>
            <div className={styles.progressBg}>
							<div className={styles.progressBar} style={{width: `${skill.level}%`, height: '100%', position: `relative`, backgroundColor: `var(--acent-color)`}}></div>
							<span style={{position: `absolute`, top: '9px', left: '85%', fontSize: "14px", color: `var(--text-color)`, lineHeight: "140%", fontWeight: 400}}>{skill.level}%</span>
						</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfSkillsList;
