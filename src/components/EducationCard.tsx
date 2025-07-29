import { useTranslation } from "react-i18next";
import type { Education } from "../utils/functions";
import RightSide from "./RightSide";

function EducationCard({
  institution,
	program,
  degree,
  startDate,
  endDate,
}: Education) {
	const { t } = useTranslation();

  return (
		<div className="section-content">
			<div className="detail-content">
				<div>
					<h4>{degree ? `${degree} ${t('of')} ${program}` : `${program}`}, {institution}</h4>
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