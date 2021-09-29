import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiProlog } from "react-icons/di";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div1>
			<Link href="/">
				<a
					style={{
						display: "flex",
						alignItems: "center",
						color: "#d5ff80",
						marginBottom: "20px",
					}}
				>
					<DiProlog size="3rem" /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href="#about">
					<NavLink>About Me</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#skills">
					<NavLink>Skills</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#experience">
					<NavLink>Experience</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/D4r3-D3v1L" target="_blank">
				<AiFillGithub size="3rem" />
			</SocialIcons>
			<SocialIcons
				href="https://www.linkedin.com/in/surya-prakash-akula-44bbb5190/"
				target="_blank"
			>
				<AiFillLinkedin size="3rem" />
			</SocialIcons>
			<SocialIcons href="https://github.com/D4r3-D3v1L" target="_blank">
				<AiFillInstagram size="3rem" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
