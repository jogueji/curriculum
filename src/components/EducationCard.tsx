import type { Education } from "../utils/functions";
import RightSide from "./RightSide";

function EducationCard({
  institution,
	program,
  degree,
  startDate,
  endDate,
}: Education) {
  return (
		<div className="section-content">
			<div className="detail-content">
				<div className="side-content">
					<h4>{degree ? `${degree} of ${program}` : `${program}`}, {institution}</h4>
				</div>
				<RightSide
					startDate={startDate}
          endDate={endDate}
				/>
			</div>
		</div>
		
  )
}

export default EducationCard;