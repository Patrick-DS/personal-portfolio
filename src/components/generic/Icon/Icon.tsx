"use client"
// Third-party imports
import type { FC } from "react"
import Image from "next/image"
import { useTheme } from "styled-components"

// Global imports
import { ThemeNames } from "@/styles"

// Local imports
import { iconImages, ImageNames } from "./images"

////////////////////////////////////////////////////////////////////////////////

interface IconProps {
	imageName: ImageNames
	alt?: string
	width: number
	height: number
	[key: string]: any
}

const Icon: FC<IconProps> = ({
	imageName,
	alt = "",
	width,
	height,
	...props
}) => {
	// Hooks
	const theme = useTheme()

	// Variables
	const themeName = theme?.themeName || ThemeNames.LIGHT

	return (
		<Image
			src={iconImages[imageName][themeName]}
			alt={alt}
			width={width}
			height={height}
			{...props}
		/>
	)
}

export default Icon
