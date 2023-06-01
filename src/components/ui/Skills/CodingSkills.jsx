import styles from './Skills.module.css'

const CodingSkillsList = () => {
  const skills = [
    { name: 'Html', level: '80' },
    { name: 'JS', level: '20' },
		{ name: 'JS', level: '5' },
    { name: 'Rust', level: '5' },
  ];

  return (
    <div>
      <h1 className={styles.headingSkills}>Программування</h1>
      <div className={styles.skillsGrid}>
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
