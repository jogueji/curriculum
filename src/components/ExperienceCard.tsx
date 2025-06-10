import type { Experience } from "../utils/functions";
import RightSide from "./RightSide"

function ExperienceCard({
  organization,
  role,
  startDate,
  endDate,
  responsibilities
}: Experience) {
  return (
		<div className="section-content">
			<div className="detail-content">
				<div className="side-content">
					<h4>{role} - {organization}</h4>
				</div>
				<RightSide
					startDate={startDate}
          endDate={endDate}
				/>
			</div>
			<p>{responsibilities}</p>
		</div>
		
  )
}

export default ExperienceCard;