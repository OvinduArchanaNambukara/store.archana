import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {components} from "react-select";
import AsyncSelect from "react-select/async";
import {optionTypes} from "../../types/types";
import {BsSearch} from "react-icons/bs"
import {customStyles} from "../../custom-styles/custom-selector-styles";

const list = [
  {
    label: 'hello',
    value: 'kekek'
  },
  {
    label: 'Hisks',
    value: 'asasa'
  },
  {
    label: 'helasaslo',
    value: 'saassd'
  },
]

const SearchBar: React.FC = () => {
  const [selectOptions, setSelectOptions] = useState<optionTypes[]>(list);

  const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
          <BsSearch/>
        </components.DropdownIndicator>
    );
  };

  const loadOptions = async (inputValue: string) => {
    return selectOptions
  }

  return (
      <Container fluid={true}>
        <Row className='justify-content-center mt-md-5 mt-3 search-bar'>
          <Col xs={12} md={8} lg={6} xl={5}>
            <AsyncSelect
                cacheOptions={true}
                placeholder='Search...'
                isMulti={true}
                loadOptions={loadOptions}
                components={{DropdownIndicator}}
                styles={customStyles}
            />
          </Col>
        </Row>
      </Container>
  );
}

export default SearchBar;
