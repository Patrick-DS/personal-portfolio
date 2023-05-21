// Third-party imports
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<Header />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
