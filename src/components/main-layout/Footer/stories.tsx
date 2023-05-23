// Third-party imports
import type { Meta } from "@storybook/react"

// Global imports
import { backgroundDecorator } from "@/components/main-layout/Background/stories"

// Local imports
import Footer from "./Footer"

////////////////////////////////////////////////////////////////////////////////

export const Default = () => <Footer />

const storyOptions: Meta<typeof Footer> = {
	title: "Layout/Footer",
	component: Footer,
	decorators: [backgroundDecorator]
}

export default storyOptions
