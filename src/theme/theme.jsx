const theme = {
    fonts: {
        heading: "'Playfair Display', Georgia, serif",
        body: "'DM Sans', sans-serif"
    },

    colors: {
        bg: "#181822",
        bgNavBar: "#0a0a0eeb",
        brandColor: "#d900ff",
    },
}

const commonStyle = {
    border: "1px solid black",
    padding: "10px",
    margin: "5px",
    width: "150px",
    minHeight: "100px",
};

const todoStyle = {
    ...commonStyle,
    backgroundColor: "#f8d7da",
};

const doingStyle = {
    ...commonStyle,
    backgroundColor: "#fff3cd",
};

const doneStyle = {
    ...commonStyle,
    backgroundColor: "#d4edda",
};


export default theme;