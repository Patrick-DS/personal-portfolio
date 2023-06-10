// Third-party imports
import { Albert_Sans } from "next/font/google"
import { ReactRenderer } from "@storybook/react"
import type { PartialStoryFn } from "@storybook/types"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const globalFont = Albert_Sans({ subsets: ["latin"] })

const FontDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
	<div className={globalFont.className}>
		<Story />
	</div>
)

export default FontDecorator