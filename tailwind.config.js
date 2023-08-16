tailwind.config = {
    theme: {
        fontSize: {
            sm: '0.8rem',
            md: '0.9rem',
            base: '1rem',
            xl: '1.15rem',
            '1xl': '1.35em',
            '2xl': '1.65em',
            '3xl': '2.1rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
        },
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            xs: "320px", // s-phone
            sss: "405px", // m-phone
            ss: "620px", // s-tablet
            sm: "768px", // tablet
            ssm: "820px", // just for logo and nav 
            md: "1024px", // tablet - ipad
            lg: "1280px", // ipad
            lg1: "1366px", // laptop
            lg2: "1660px", // computer
            xl: "1920px", // computer-l
        },
    },
    plugins: [],
};