// Third-party imports
import type { FC } from "react"
import ReactMarkdown from "react-markdown"

// Global imports

// Local imports
import { ContentCardContainer, ContentTitle, DateDisplay, Content, MarkdownLink } from "./styles"

////////////////////////////////////////////////////////////////////////////////

interface ContentCardProps {
	header: string
	date: string
	content: string
}

const components = {
	a: ({ href, children }: any) => (
		<MarkdownLink href={href} target="_blank">
			{children}
		</MarkdownLink>
	)
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
}) => {
	return (
		<ContentCardContainer>
			<ContentTitle>{header}</ContentTitle>
			<hr />
			<DateDisplay>{date}</DateDisplay>
			<Content>
				<ReactMarkdown
					components={components}
				>
					{content}
				</ReactMarkdown>
			</Content>
		</ContentCardContainer>
	)
}

export default ContentCard