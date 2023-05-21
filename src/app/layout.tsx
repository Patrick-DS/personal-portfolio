// Third-party imports
import type { FC, ReactNode } from "react"
import type { Metadata } from "next"

// Global imports
import { StyledComponentsRegistry } from "@/components/utils"
import { Header } from "@/components/main-layout"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const metadata: Metadata = {
	title: "Patrick Da Silva",
	description: "Personal portfolio",
	icons: {
		icon: {
			url: "/favicon.ico",
			type: "image/ico",
		},
		shortcut: {
			url: "/favicon.ico",
			type: "image/ico",
		},
	},
}

interface LayoutProps {
	children: ReactNode
}

/**
 * @function Layout
 * @category App
 * @description Main layout of the website.
 */
const Layout: FC<LayoutProps> = ({ children }) => (
	<html lang="en">
		<body>
			<StyledComponentsRegistry>
				<Header />
				{children}
			</StyledComponentsRegistry>
		</body>
	</html>
)

export default Layout