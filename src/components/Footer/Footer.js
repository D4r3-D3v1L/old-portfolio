import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Telegram</LinkTitle>
					<LinkItem href="https://t.me/D4r3_D3v1L" target="_blank">
						D4r3_D3v1L
					</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem
						href="mailto:d4r3d3v1l.asp@gmail.com"
						target="_blank"
					>
						d4r3d3v1l.asp@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
		</FooterWrapper>
	);
};

export default Footer;
