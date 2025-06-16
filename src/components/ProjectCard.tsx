import RightSide from "./RightSide"

interface ProjectCardProps {
  organization: string
  title: string
  startDate: string
  endDate: string
	description: string
}

function ProjectCard({
  organization,
  title,
  startDate,
  endDate,
  description
}: ProjectCardProps) {
  return (
		<div className="section-content">
			<div className="detail-content">
				<div>
					<h4>{title} - {organization}</h4>
				</div>
				<RightSide
					startDate={startDate}
          endDate={endDate}
				/>
			</div>
			<p>{description}</p>
		</div>
		
  )
}

export default ProjectCard;