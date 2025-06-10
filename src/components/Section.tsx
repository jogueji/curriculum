import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}


function Section({title, children}: SectionProps) {

	return (
		<div className= "section">
			<h3>{title}</h3>
			<hr/>
			{children}
		</div>
	);
}

export default Section;
