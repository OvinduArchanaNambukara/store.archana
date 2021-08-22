import chroma from 'chroma-js';

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
    border: `0px solid #9e9e9e`,
    borderRadius: '10px',
    padding: '0px',
    marginBottom: '0px',
    minHeight: '33.3px'
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: '0px',
    height: '33.2px'
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
    minHeight: '33.2px',
    height: '33.2px',
    border: '1px solid #9e9e9e'
  })
}


export const colourStyles = {
  control: (styles: any) => ({...styles, backgroundColor: 'white'}),
  // @ts-ignore
  option: (styles: any, {data, isDisabled, isFocused, isSelected}) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
          ? null
          : isSelected
              ? data.color
              : isFocused
                  ? color.alpha(0.1).css()
                  : null,
      color: isDisabled
          ? '#ccc'
          : isSelected
              ? chroma.contrast(color, 'white') > 2
                  ? 'white'
                  : 'black'
              : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor:
            !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  // @ts-ignore
  multiValue: (styles, {data}) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  // @ts-ignore
  multiValueLabel: (styles, {data}) => ({
    ...styles,
    color: data.color,
  }),
  // @ts-ignore
  multiValueRemove: (styles, {data}) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};
