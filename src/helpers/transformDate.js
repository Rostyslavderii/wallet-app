export const transformDate = date => {
  const dateString = new Date(date);
  const day = dateString.getDate().toString().padStart(2, '0');
  const month = (dateString.getMonth() + 1).toString().padStart(2, '0');
  const year = dateString.getFullYear().toString().slice(2);

  return `${day}.${month}.${year}`;
};

export const switchColor = ({ type, theme: { colors } }) => {
  switch (type) {
    case 'INCOME':
      return colors.btGreen;
    case 'EXPENSE':
      return colors.btPink;
    default:
      return colors.black;
  }
};

export const chooseBtnColor = p => {
  if (p.edit) {
    return 'transparent';
  }
  return p.red ? p.theme.colors.btPink : p.theme.colors.btGreen;
};

export const chooseTextAlign = ({ textAlign }) => {
  switch (textAlign) {
    case 'left':
      return 'left';
    case 'right':
      return 'right';
    default:
      return 'center';
  }
};
