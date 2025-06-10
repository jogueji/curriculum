interface RightSideProps {
  startDate: string
  endDate: string
}

function RightSide({
  startDate,
  endDate,
}: RightSideProps) {
  return (
		<div className="side-content" style= {{textAlign: 'right'}}>
			<h4>{startDate} - {endDate}</h4>
		</div>
  )
}

export default RightSide;