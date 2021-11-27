import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import ScoopOption from './ScoopOption';
import { getOptions, OptionsType, ProductItem } from '../../api/backend';
import ToppingOption from './ToppingOption';

interface Props {
  optionType: OptionsType;
}

const Options = (props: Props) => {
  const { optionType } = props;

  const [items, setItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    let isSubscribed = true;
    getOptions(optionType)
      .then((response) => {
        if (isSubscribed) {
          setItems(response.data);
        }
      })
      .catch((error) => {
        //TODO: handle error response
      });

    return () => {
      isSubscribed = false;
    };
  }, [optionType]);

  const optionItems = items.map((item) => {
    if (optionType === 'scoops') {
      return (
        <ScoopOption
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      );
    } else {
      return (
        <ToppingOption
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      );
    }
  });

  return (
    <>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
