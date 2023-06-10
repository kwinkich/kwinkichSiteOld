import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Skills.module.css'

const CodingSkillsList = () => {
  const skills = [
    { name: 'Html', level: '80' },
    { name: 'JS', level: '20' },
		{ name: 'JS', level: '5' },
    { name: 'Rust', level: '5' },
  ];

	const codingWrapperRef = useRef(null);
	const codingTextRef = useRef(null);


	useEffect(()=>{
		const codingWrapperElement = codingWrapperRef.current;
		const codingTextElement = codingTextRef.current;
		gsap.set(codingWrapperElement, {x: -1300});
		gsap.to(codingWrapperElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: codingWrapperElement,
				start: 'top 80%', // Начало анимации при достижении 80% от верха экрана
			},
		});
		gsap.set(codingTextElement, {x: -1300});
		gsap.to(codingTextElement, {
			x: 0,
			duration: 1,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: codingTextElement,
				start: 'top 80%', // Начало анимации при достижении 80% от верха экрана
			},
		});
	})


  return (
    <div>
      <h1 className={styles.headingSkills} ref={codingTextRef}>Программування</h1>
      <div className={styles.skillsGrid} ref={codingWrapperRef}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <h2>{skill.name}</h2>
            <div className={styles.progressBg}>
							<div className={styles.progressBar} style={{width: `${skill.level}%`, height: '100%', position: `relative`, backgroundColor: `var(--acent-color)`}}></div>
							<span className={styles.bgSpan} style={{position: `absolute`, top: '9px', left: '85%', fontSize: "14px", color: `var(--text-color)`, lineHeight: "140%", fontWeight: 400}}>{skill.level}%</span>
						</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingSkillsList;
