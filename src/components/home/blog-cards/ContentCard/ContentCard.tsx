// Third-party imports
import type { FC, ReactNode } from "react"

// Global imports

// Local imports
import { ContentCardContainer, ContentTitle, DateDisplay, Content } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface ContentCardProps {
	header: string
	date: string
	content?: string
	children?: ReactNode
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
	children,
}) => (
	<ContentCardContainer>
		<ContentTitle>{header}</ContentTitle>
		<hr />
		<DateDisplay>{date}</DateDisplay>
		<Content>{content || children}</Content>
	</ContentCardContainer>
)

export default ContentCard