// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { BlogTitle, BlogSubtitle, HeadlineContainer } from "./styles"

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
		{subtitle && (
			<BlogSubtitle>
				{subtitle}
			</BlogSubtitle>
		)}
	</HeadlineContainer>
)

export default HeadlineCard