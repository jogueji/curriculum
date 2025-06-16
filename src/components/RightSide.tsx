interface RightSideProps {
  startDate: string
  endDate: string
}

function RightSide({
  startDate,
  endDate,
}: RightSideProps) {
  return (
		<div style= {{textAlign: 'right'}}>
			<h4>{startDate} - {endDate}</h4>
		</div>
  )
}

export default RightSide;
