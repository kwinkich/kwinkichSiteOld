import styles from './Skills.module.css'

const ProfSkillsList = () => {
  const skills = [
    { name: 'Web-design', level: '70' },
    { name: 'Web Development', level: '45' },
		{ name: 'Graphic Design', level: '30' },
  ];

  return (
    <div>
      <h1 className={styles.headingSkills}>Професійні</h1>
      <div className={styles.skillsGrid}>
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
