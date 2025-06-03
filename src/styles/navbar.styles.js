// navbar.styles.js
export const appBarStyles = {
  px: { xs: 1, sm: 2, md: 4 },
  '@media(min-width:1024px)': {
    px: 6,
  },
};

export const toolbarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: { xs: 56, md: 72 },
  borderBottom: '1px solid #ccc',
};



export const titleStyles = {
  fontSize: { xs: '1rem', md: '1.5rem' },
};

export const iconsBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: { xs: 1.5, md: 3 },
  '@media(min-width:1024px)': {
    gap: 4,
  },
};
