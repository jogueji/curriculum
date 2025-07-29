import { useTranslation } from 'react-i18next';
import { useEffect, useReducer } from 'react';
import { curriculumReducer, loadYml, initialState } from './utils/functions';
import Section from './components/Section';
import ExperienceCard from './components/ExperienceCard';
import EducationCard from './components/EducationCard';
import SkillsCard from './components/SkillsCard';
import ProjectCard from './components/ProjectCard';

function Curriculum() {
  const { t } = useTranslation();
	const [{curriculum, isLoading, error}, dispatch] = useReducer(curriculumReducer, initialState);
  
	const handleGetCurriculum = () => {
    dispatch({ type: 'get' })
		loadYml().then((payload) => {
			dispatch({type: 'success', payload});
		}).catch((error: Error) => {
			const payload = error.message;
			dispatch({type: 'failed', payload});
		})
  }
  
	useEffect(() => {
    handleGetCurriculum()
  }, []);

	const {
		name, contactInfo,
		profile, experience, education,
		courses, projects, skills
	} = curriculum ?? {};
  const { address, email, phone, linkedIn } = contactInfo ?? {};
	
  return (
    <div>
			{isLoading && <h1>{t('loading')}...</h1>}
			{error && <h1>Error: {error}</h1>}
			{curriculum && (
				<>
					<div className='main-info'>
						<h3>{name}</h3>
						<p>{address} | {email} | {phone} | <a href={linkedIn?.url}>{linkedIn?.label}</a></p>
					</div>
					<Section title={t('profile')}>
						<p className= "section-content">{profile}</p>
					</Section>
					<Section title={t('experience')}>
						{experience?.map((exp, i: number) => (
        			<ExperienceCard key={i} {...exp} />
      			))}
					</Section>
					<Section title={t('education')}>
						{education?.map((edu, i: number) => (
        			<EducationCard key={i} {...edu} />
      			))}
					</Section>
					<Section title={t('courses')}>
						{courses?.map((course, i: number) => (
        			<EducationCard key={i} {...course} />
      			))}
					</Section>
					<Section title={t('projects')}>
						{projects?.map((project, i: number) => (
        			<ProjectCard key={i} {...project} />
      			))}
					</Section>
					{skills && <Section title={t('skills')}>
						<SkillsCard skills={skills} />
					</Section>}
				</>
			)}
    </div>
  );
}

export default Curriculum;
