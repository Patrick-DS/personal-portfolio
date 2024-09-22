// Third-party imports
import type { FC, ReactNode } from "react"
import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"

// Global imports
import { StyledComponentsRegistry } from "@/components/utils"
import { Header, Footer, Background } from "@/components/main-layout"

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

const globalFont = Albert_Sans({ subsets: ["latin"] })

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
		<body className={globalFont.className}>
			<StyledComponentsRegistry>
				<Header />
				<Background />
				{children}
				<Footer />
			</StyledComponentsRegistry>
		</body>
	</html>
)

export default Layout