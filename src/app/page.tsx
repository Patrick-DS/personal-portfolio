"use client"
// Third-party imports
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { Icon } from "@/components/generic"
import { HeadlineCard } from "@/components/generic/cards"
import { ThemeNames } from "@/styles"

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
import dockerLogoDark from "./icons/dark/docker.png"
import dockerLogoLight from "./icons/light/docker.png"
import firebaseLogoDark from "./icons/dark/firebase.png"
import firebaseLogoLight from "./icons/light/firebase.png"
import googleAnalyticsLogoDark from "./icons/dark/google-analytics.png"
import googleAnalyticsLogoLight from "./icons/light/google-analytics.png"
import nextjsLogoDark from "./icons/dark/nextjs.png"
import nextjsLogoLight from "./icons/light/nextjs.png"
import kubernetesLogoDark from "./icons/dark/kubernetes.png"
import kubernetesLogoLight from "./icons/light/kubernetes.png"
import mongoLogoDark from "./icons/dark/mongo.png"
import mongoLogoLight from "./icons/light/mongo.png"

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
		{
			src: dockerLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: firebaseLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: googleAnalyticsLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: nextjsLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: kubernetesLogoDark,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: mongoLogoDark,
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
		{
			src: dockerLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: firebaseLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: googleAnalyticsLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: nextjsLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: kubernetesLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
		{
			src: mongoLogoLight,
			width: ICON_SIZE,
			height: ICON_SIZE,
		},
	],
}

const Home = () => {
	// Hooks
	const theme = useTheme()

	// Variables
	const themeName = theme?.themeName || ThemeNames.LIGHT

	return (
		<StyledMain>
			<HeadlineCard
				title="Patrick Da Silva"
				subtitle="Your reference in software, cloud and machine learning"
			/>
			<HomepageCardContainer>
				<p>{"I'm proficient in those technologies:"}</p>
				<StyledGrid>
					{[
						"aws",
						"django",
						"flask",
						"js",
						"nest",
						"ts",
						"docker",
						"firebase",
						"googleAnalytics",
						"nextjs",
						"kubernetes",
						"mongo",
					].map(imageName => (
						<Icon
							key={imageName}
							imageName={imageName}
							alt="Technology icon"
							width={ICON_SIZE}
							height={ICON_SIZE}
						/>
					))}
				</StyledGrid>
			</HomepageCardContainer>
		</StyledMain>
	)
}

export default Home
