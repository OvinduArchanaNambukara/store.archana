export const customStyles = {
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
