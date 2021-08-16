export const customSearchStyles = {
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: '#646464',
    fontSize: '2em',
    paddingRight: '1em'
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#585858',
    fontSize: '1.5em',
    fontWeight: '500',
    paddingLeft: '1em'
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    backgroundColor: 'white'
  }),
  control: (styles: any) => ({
    ...styles,
    paddingTop: '.5em',
    paddingBottom: '.5em',
    border: `2px solid #00be4f`,
    borderRadius: '10px',
    boxShadow: '0',
    ':hover': {
      borderColor: '#00be4f',
      boxShadow: 'red'
    },
  }),
}

export const customCallStyles = {
  container: (styles: any) => ({
    ...styles,
    border: `0px solid red`,
    borderRadius: '10px',
    width: '12em',
    padding: '0px',
    marginBottom: '0px',
    minHeight: '33.3px'
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: '0px',
  }),
  placeholder: (styles: any) => ({
    ...styles,
    color: '#585858',
    fontSize: '.8em',
    paddingLeft: '1em'
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: '0'
  }),
  control: (styles: any) => ({
    ...styles,
    minHeight: '33.3px',
    width: '11em'
  })
}
