'use client'
// Third-party imports
import React, { useState } from 'react'
import type { FC } from "react"
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'

// Global imports
import { GlobalStyles, themeManager } from '@/styles'

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface RegistryProps {
    children: React.ReactNode
}

const StyledComponentsRegistry: FC<RegistryProps> = ({ children }) => {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement()
        styledComponentsStyleSheet.instance.clearTag()
        return <>{styles}</>
    })

    return (typeof window === 'undefined') ? (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            <GlobalStyles />
            <ThemeProvider theme={themeManager.selectedTheme}>
                {children}
            </ThemeProvider>
        </StyleSheetManager>
    ) : (
        <>
            <ThemeProvider theme={themeManager.selectedTheme}>
                {children}
            </ThemeProvider>
        </>
    )
}

export default StyledComponentsRegistry