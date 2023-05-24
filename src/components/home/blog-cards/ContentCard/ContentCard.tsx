// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { ContentCardContainer, ContentTitle, DateDisplay, Content } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface ContentCardProps {
	header: string
	date: string
	content: string
}

/**
 * @function ContentCard
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const ContentCard: FC<ContentCardProps> = ({
	header,
	date,
	content,
}) => (
	<ContentCardContainer>
		<ContentTitle>{header}</ContentTitle>
		<hr />
		<DateDisplay>{date}</DateDisplay>
		<Content>{content}</Content>
	</ContentCardContainer>
)

export default ContentCard