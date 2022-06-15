import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./MainStyles";

const Main = () => (
	<Section row padding>
		<LeftSection>
			<SectionTitle main center>
				Surya Prakash Akula
			</SectionTitle>
			<SectionText></SectionText>
			<Button
				onClick={() =>
					(window.location =
						"https://drive.google.com/file/d/1A06p1yTNN6Fjy-VT-Yl9OQsiQkzheXCt/view?usp=sharing")
				}
			>
				Resume
			</Button>
		</LeftSection>
	</Section>
);

export default Main;
