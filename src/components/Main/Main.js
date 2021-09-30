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
				style={{ color: "red" }}
				onClick={() =>
					(window.location =
						"https://drive.google.com/file/d/1httn-f627taK0JQJFhgkEdygNFF2xCVE/view?usp=sharing")
				}
			>
				Resume
			</Button>
		</LeftSection>
	</Section>
);

export default Main;
