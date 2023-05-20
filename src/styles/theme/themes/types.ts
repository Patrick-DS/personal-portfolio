
// Third-party imports

// Global imports
import breakpoints from "./common/breakpoints"
import devices from "./common/devices"

// Local imports

////////////////////////////////////////////////////////////////////////////////

interface Colors {
    text: string,
    white: string,
    lightGray: string,
    gray: string,
    darkGray: string,
    black: string,
}

export interface Theme {
    colors: Colors
    breakpoints: typeof breakpoints
    devices: typeof devices
}