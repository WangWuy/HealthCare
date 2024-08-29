export const Colors = {
    primary: "#1462B0",
    dark: "#000000",
    light: "#FFFFFF",
    orange_red: "#D05C3D",
    cyan_blue: "#248F99",
    gray_light: "#969393",
    transparent: "rgba(9,10,17,0.8)",
    sea_green: "#48B28D",
    plale_blue: "#E3ECF5",
    fiery_orange: "#E96012",
    area_near: "#C7D9EC",
    blue: {
        100: '#EBF4FA',
        200: '#CCE3F1',
        300: '#B3D4EB',
        400: '#99C6E4',
        500: '#66AAD6',
        600: '#338DC9',
        700: '#0071BB',
        800: '#005C98',
        900: '#003C63',
    },
    orange: {
        100: '#FFF8EF',
        200: '#FFF1E0',
        300: '#FFE3C2',
        400: '#FFCC8F',
        500: '#FFBE70',
        600: '#FFB052',
        700: '#FFA233',
        800: '#FF9920',
        900: '#FF8B00',
    },
    gray: {
        100: '#F5F6FA',
        200: '#F1F2F5',
        300: '#E7E8EB',
        400: '#C5C6C9',
        500: '#A7A8AB',
        600: '#7D7E81',
        700: '#696A6C',
        800: '#494A4D',
        900: '#28282B',
    },
    green: {
        100: '#BFE8C6',
        200: '#95D9A1',
        300: '#65CB7A',
        400: '#38C05D',
        500: '#00B43D',
        600: '#00A534',
        700: '#009328',
        800: '#00821B',
        900: '#006205',
    },
    blue_line: {
        100: '#BCDEFE',
        200: '#91C9FE',
        300: '#66B4FD',
        400: '#46A4FD',
        500: '#2D94FB',
        600: '#2D86EC',
        700: '#2A74D9',
        800: '#2862C6',
        900: '#2343A7',
    },
    orange_line: {
        100: '#FEEDB4',
        200: '#FEE283',
        300: '#FED850',
        400: '#FFCD29',
        500: '#FFC509',
        600: '#FFB700',
        700: '#FFA400',
        800: '#FF9300',
        900: '#FF7300',
    },
    red: {
        0: '#FFE8EC',
        100: '#FFC5D0',
        200: '#F18C96',
        300: '#E75C6D',
        400: '#F2244A',
        500: '#F7002E',
        600: '#E8002E',
        700: '#D70028',
        800: '#CA0020',
        900: '#BB0014',
    },
};

export const getRandomColor = () => {
    const colorList:any = Colors;
    const colorArray = [];

    // Add top-level colors
    for (const key in Colors) {
        if (typeof colorList[key] === 'string') {
            colorArray.push(colorList[key]);
        } else {
            // Add nested colors
            for (const shade in colorList[key]) {
                colorArray.push(colorList[key][shade]);
            }
        }
    }

    // Pick a random color
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
}   