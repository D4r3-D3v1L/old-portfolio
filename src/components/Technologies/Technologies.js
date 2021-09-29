import React from "react";
import "tailwindcss/tailwind.css";

import { DiFirebase, DiTerminal, DiStackoverflow } from "react-icons/di";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

import { Languages } from "../../constants/constants";

const Technologies = () => (
	<Section id="skill">
		<SectionDivider />
		<SectionTitle>Skills</SectionTitle>
		<List>
			<ListItem>
				<DiTerminal size="3rem" />

				<ListContainer>
					<ListTitle>Languages/Databases</ListTitle>
					<ListParagraph>
						Python <br />
						Java <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size="3rem" />
				<ListContainer>
					<ListTitle>Frameworks/Libraries</ListTitle>
					<ListParagraph>
						Nodejs <br />
						Ionic <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiStackoverflow size="3rem" />
				<ListContainer>
					<ListTitle>Other Technologies</ListTitle>
					<ListParagraph>
						Git <br />
						Web Security <br />
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
