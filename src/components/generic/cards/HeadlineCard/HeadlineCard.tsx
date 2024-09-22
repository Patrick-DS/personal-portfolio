// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import {
	BlogTitle,
	BlogSubtitle,
	HeadlineContainer,
	ProfilePicture,
} from "./styles"
import profilePicTransparentBg from "@/assets/images/profile-pic/profile-pic-transparent.png"
import { profile } from "console"

////////////////////////////////////////////////////////////////////////////////

interface HeadlineCardProps {
	title: string
	subtitle?: string
}

/**
 * @function HeadlineCard
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const HeadlineCard: FC<HeadlineCardProps> = ({ title, subtitle }) => (
	<HeadlineContainer>
		<BlogTitle>{title}</BlogTitle>
		{subtitle && <BlogSubtitle>{subtitle}</BlogSubtitle>}
		<ProfilePicture
			src={profilePicTransparentBg}
			width={400}
			height={400}
			alt={""}
		/>
	</HeadlineContainer>
)

export default HeadlineCard
