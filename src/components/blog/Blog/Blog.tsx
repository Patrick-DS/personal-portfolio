// Third-party imports
import type { FC } from "react"

// Global imports

// Local imports
import { HeadlineCard, ContentCard } from "@/components/generic/cards"
import { BlogContainer } from "./styles"
import blogEntries from "./blog-entries"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Blog
 * @category Components
 * @subcategory Home
 * @description Renders the blog content of the homepage.
 */
const Blog: FC<{}> = () => (
	<BlogContainer>
		<HeadlineCard title="Personal blog" />
		{blogEntries.map(({ itemId, ...contentCardProps }) => (
			<ContentCard key={itemId} {...contentCardProps} />
		))}
	</BlogContainer>
)

export default Blog