"use client"
// Third-party imports
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { ThemeNames } from "@/styles"
import { HeadlineCard } from "@/components/generic/cards"

// Local imports
import { StyledMain, HomepageCardContainer, StyledGrid } from "./styles"

import awsLogoDark from "./icons/dark/aws.png"
import awsLogoLight from "./icons/light/aws.png"
import djangoLogoDark from "./icons/dark/django.png"
import djangoLogoLight from "./icons/light/django.png"
import flaskLogoDark from "./icons/dark/flask.png"
import flaskLogoLight from "./icons/light/flask.png"
import jsLogoDark from "./icons/dark/js.png"
import jsLogoLight from "./icons/light/js.png"
import nestLogoDark from "./icons/dark/nest.png"
import nestLogoLight from "./icons/light/nest.png"
import tsLogoDark from "./icons/dark/ts.png"
import tsLogoLight from "./icons/light/ts.png"

////////////////////////////////////////////////////////////////////////////////

const ICON_SIZE = 200

const images = {
	[ThemeNames.DARK]: [
		{
			src: awsLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: djangoLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: flaskLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: jsLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: nestLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: tsLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
	],
	[ThemeNames.LIGHT]: [
		{
			src: awsLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: djangoLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: flaskLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: jsLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: nestLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: tsLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
	]
}

const Home = () => {
	// Hooks
	const theme = useTheme()

	// Variables
	const themeName = theme?.themeName || ThemeNames.LIGHT

	return (
		<StyledMain>
			<HeadlineCard title="Patrick Da Silva" subtitle="Your reference in software, cloud and machine learning" />
			<HomepageCardContainer>
				<p>{"I'm proficient in those technologies:"}</p>
				<StyledGrid>
					{images[themeName].map((logoProps, index) => (
						<Image key={index} alt="Technology icon" {...logoProps} />
					))}
				</StyledGrid>
			</HomepageCardContainer>
		</StyledMain>
	)
}

export default Home
