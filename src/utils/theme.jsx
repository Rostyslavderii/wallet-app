const theme = {
  colors: {
    // default
    white: '#ffffff',
    black: '#000000',
    // background
    bgPurple: '#C5BAFF',
    bgOrange: '#FFD8D0',
    bgGray: '#E7EAF2',
    bgGrayRight: 'rgba(255, 255, 255, 0.4);',
    modalCategory: 'rgba(255, 255, 255, 0.7)',
    //button & table-text
    btGreen: '#24CCA7',
    btPink: '#ff6596',
    btBlue: '#4A56E2',
    // additional statistic colors
    yellow: '#fed057',
    lReddy: '#FFD8D0',
    reddy: '#fd9498',
    lGreen: '#24cca7',
    green: '#00AD84',
    lBlight: '#81E1FF',
    lBlue: '#6E78E8',
    lPurple: '#C5BAFF',
    inputGray: '#BDBDBD',
  },

  //font-family
  ff: {
    familyPoppins: 'Poppins,  sans-serif',
    familyExo: 'Exo,  sans-serif',
    fontStyle: 'normal',
  },

  fontWeight: {
    fw4: '400',
    fw5: '500',
    fw6: '600',
    fw7: '700',
  },

  fontSize: {
    fs16: '16px',
    fs18: '18px',
    fs30: '30px',
  },

  lineHeight: {
    lh26: '26px',
    lh27: '27px',
    lh45: '45px',
  },

  textProps: {
    letterSpace: '0.1em',
    textTransform: 'uppercase',
  },

  // borders & box-shadows
  boxShadow: {
    buttonShadow: '0px 6px 15px rgba(36, 204, 167, 0.5)',
    confirmPassword: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    modalCategory: '0px 6px 15px rgba(0, 0, 0, 0.1)',
  },

  borderColor: {
    b: '1px solid #4A56E2',
    comment: '1px solid #E0E0E0',
    c: '4px solid #E5F1EF',
    x: 'border: 1px solid #000000',
  },

  borderRadius: {
    r2: '2px',
    r20: '20px',
    r30: '30px',
  },

  //linear-gradient & backdrop-filter
  CurrencyLinear:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%)',
  BackdropFilter: 'blur(25px)',
  transition: '250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export default theme;
