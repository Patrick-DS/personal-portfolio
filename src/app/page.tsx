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
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const ICON_SIZE = 200

const Home = () => (
	<StyledMain>
		<HeadlineCard
			title="Patrick Da Silva"
			subtitle="Your reference in software, cloud and machine learning"
		/>
		<HomepageCardContainer>
			<TechnologiesGridHeader>
				I'm proficient in many technologies, including the following:
			</TechnologiesGridHeader>
			<StyledGrid>
				{[
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
