// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { HeadlineCard, ContentCard } from "../blog-cards"
import { BlogContainer } from "./styles"
import blogEntries from "./blog-entries"

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
		{blogEntries.map(({ itemId, ...contentCardProps }) => (
			<ContentCard key={itemId} {...contentCardProps} />
		))}
	</BlogContainer>
)

export default Blog