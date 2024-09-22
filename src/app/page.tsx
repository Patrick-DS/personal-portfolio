"use client"
// Third-party imports

// Global imports
import { Icon, ImageNames } from "@/components/generic"
import { HeadlineCard } from "@/components/generic/cards"

// Local imports
import {
	StyledMain,
	HomepageCardContainer,
	StyledGrid,
	TechnologiesGridHeader,
	StyledLink,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const ICON_SIZE = 200
const iconProps = (imageName: ImageNames) => ({
	imageName,
	alt: imageName,
	width: ICON_SIZE,
	height: ICON_SIZE,
})

const techImages = [
	ImageNames.AWS,
	ImageNames.DOCKER,
	ImageNames.KUBERNETES,
	ImageNames.GOOGLE_CLOUD,
	ImageNames.FIREBASE,
	ImageNames.JS,
	ImageNames.TS,
	ImageNames.NEXTJS,
	ImageNames.NEST,
	ImageNames.MONGO,
	ImageNames.PYTHON,
	ImageNames.DJANGO,
	ImageNames.FLASK,
	ImageNames.GOOGLE_ANALYTICS,
	ImageNames.REDIS,
]

const companyImages = [
	ImageNames.POLAR_SQUAD,
	ImageNames.SMARTLY,
	// ImageNames.RECRIGHT,
	ImageNames.STAIY,
	// ImageNames.TECHTILE,
	// ImageNames.IMMORISE,
	ImageNames.BERYLLS,
	ImageNames.HELLA,
	// ImageNames.EF,
]

const Home = () => (
	<StyledMain>
		<HeadlineCard
			title="Patrick Da Silva"
			subtitle="Your reference in software, cloud and machine learning"
		/>
		<HomepageCardContainer>
			<TechnologiesGridHeader>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				I'm proficient in many technologies, including the following:
			</TechnologiesGridHeader>
			<StyledGrid>
				{techImages.map(imageName => (
					<Icon key={imageName} {...iconProps(imageName)} />
				))}
			</StyledGrid>
		</HomepageCardContainer>
		<HomepageCardContainer>
			<TechnologiesGridHeader>
				{/* eslint-disable-next-line react/no-unescaped-entities */}
				And I've worked with those companies:
			</TechnologiesGridHeader>
			<StyledGrid>
				{companyImages.map(imageName => (
					<Icon key={imageName} {...iconProps(imageName)} />
				))}
			</StyledGrid>
		</HomepageCardContainer>
		<HomepageCardContainer>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			If you're trying to build something with software and need support:
			<br />
			<br />
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<StyledLink href="/contact">let's get in touch</StyledLink>!
			<br />
			<br />
			<br />
			You can find my CV <StyledLink href="/cv">here</StyledLink>!
			<br />
			<br />
			<br />
			Looking forward to our collaboration!
		</HomepageCardContainer>
	</StyledMain>
)

export default Home
