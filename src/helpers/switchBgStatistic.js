export const switchBgStatistic = ({ name, theme: { colors } }) => {
    switch (name) {
        case 'Main expenses':
            return colors.yellow;
        case 'Products':
            return colors.lReddy;
        case 'Car':
            return colors.reddy;
        case 'Self care':
            return colors.lPurple;
        case 'Child care':
            return colors.lBlue;
        case 'Household products':
            return colors.btBlue;
        case 'Education':
            return colors.lBlight;
        case 'Leisure':
            return colors.lGreen;
        case 'Entertainment':
            return colors.btPink;
        case 'Other expenses':
            return colors.green;
        default:
            return colors.btBlue;
    }
};