"use client"
// Third-party imports
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { Icon, ImageNames } from "@/components/generic"
import { HeadlineCard } from "@/components/generic/cards"
import { ThemeNames } from "@/styles"

// Local imports
import { StyledMain, HomepageCardContainer, StyledGrid } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const ICON_SIZE = 200

const Home = () => (
	<StyledMain>
		<HeadlineCard
			title="Patrick Da Silva"
			subtitle="Your reference in software, cloud and machine learning"
		/>
		<HomepageCardContainer>
			<p>{"I'm proficient in those technologies:"}</p>
			<StyledGrid>
				{[
					ImageNames.AWS,
					ImageNames.DJANGO,
					ImageNames.FLASK,
					ImageNames.JS,
					ImageNames.NEST,
					ImageNames.TS,
					ImageNames.DOCKER,
					ImageNames.FIREBASE,
					ImageNames.GOOGLE_ANALYTICS,
					ImageNames.NEXTJS,
					ImageNames.KUBERNETES,
					ImageNames.MONGO,
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

export default Home
