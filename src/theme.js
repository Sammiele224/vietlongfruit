import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        lightgreen: "#5b8c51",
        darkgreen: "#31512a",
        yellow: "#fdd062",
        grey: "#777777",
        buttonGreen: "#5C8A5C",
        buttonGreenHover: "#4E774E",
        buttonGreenActive: "#416341",
        dotInactive: "#1a3d1a",
        dotActive: "#4a7c2f",
        bgLight: "#F3F8F6",
    },
    fonts: {
        heading: `'Spartan', sans-serif`,
        body: `'Spartan', sans-serif`,
    }
})

export default theme;