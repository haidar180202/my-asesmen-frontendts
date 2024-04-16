export const styleSelect = {
  control: (base: React.CSSProperties, state: { isDisabled: boolean }) => ({
    ...base,
    minHeight: '35px',
    height: '35px',
    borderColor: '#BCC2CE',
    borderRadius: '8px',
    outline: 'none',
    boxShadow: 'none',
    '&:hover': { borderColor: '#BCC2CE' },
    color: state.isDisabled ? '#b3b8c2 !important' : '#5A6376',
    backgroundColor: state.isDisabled ? '#edf1f7 !important' : (base.backgroundColor as string),
  }),
  singleValue: (provided: React.CSSProperties, state: { isDisabled: boolean }) => ({
    ...provided,
    color: state.isDisabled ? '#b3b8c2 !important' : '#5A6376',
    backgroundColor: state.isDisabled ? '#edf1f7 !important' : (provided.backgroundColor as string),
    paddingBottom: '5px',
  }),
  placeholder: (provided: React.CSSProperties) => ({
    ...provided,
    paddingBottom: '5px',
  }),
  indicatorSeparator: (styles: React.CSSProperties) => ({ display: 'none' }),
};
