// Third-party imports
import { createElement } from "react"
import type { FC, ReactNode } from "react"

// Global imports

// Local imports
import { HeadlineCard, ContentCard } from "../blog-cards"
import { BlogContainer } from "./styles"
import blogEntries, { BlogEntryType } from "./blog-entries"

////////////////////////////////////////////////////////////////////////////////

interface BlogProps {
	children?: any
}

/**
 * @function Blog
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const Blog: FC<BlogProps> = ({ children }) => (
	<BlogContainer>
		<HeadlineCard
			title="Patrick Da Silva"
			subtitle="Your reference in software, cloud and machine learning"
		/>
		{blogEntries.map(({ itemId, header, date, content: { type, data } }) => (
			type === BlogEntryType.TEXT ? (
				<ContentCard key={itemId} header={header} date={date} content={data as string} />
			) : type === BlogEntryType.COMPONENT ? (
				<ContentCard key={itemId} header={header} date={date} content="">
					{createElement(data as any)}
				</ContentCard>
			) : null
		))}
	</BlogContainer>
)

export default Blog