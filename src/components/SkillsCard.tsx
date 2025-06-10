interface SkillsCardProps {
  skills: Array<{
		label: string
  	description: string
	}>
}

function SkillsCard({skills}: SkillsCardProps) {
	return (
		<div className="section-content">
			{skills.map(({label, description}, i: number) => (
				<div key= {i} className="skill-content">
					<h4>{label}:</h4>
					<p>{description}</p>
				</div>
			))}
		</div>
  )
}

export default SkillsCard;