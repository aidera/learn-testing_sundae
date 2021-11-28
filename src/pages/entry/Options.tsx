import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import ScoopOption from './ScoopOption';
import { getOptions, OptionsType, ProductItem } from '../../api/backend';
import ToppingOption from './ToppingOption';
import AlertBanner from '../../components/AlertBanner';
import { pricePerItem } from '../../constants';
import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utilities';

interface Props {
  optionType: OptionsType;
}

const Options = (props: Props) => {
  const { optionType } = props;

  const [items, setItems] = useState<ProductItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  // @ts-ignore
  const [orderDetails, updateItemCount] = useOrderDetails([]);

  useEffect(() => {
    let isSubscribed = true;
    getOptions(optionType)
      .then((response) => {
        if (isSubscribed) {
          setItems(response.data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setError(true);
        }
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
          updateItemCount={(itemName: string, newItemCount: number) =>
            updateItemCount(itemName, newItemCount, optionType)
          }
        />
      );
    } else {
      return (
        <ToppingOption
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
          updateItemCount={(itemName: string, newItemCount: number) =>
            updateItemCount(itemName, newItemCount, optionType)
          }
        />
      );
    }
  });

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  if (error) {
    return <AlertBanner />;
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
};

export default Options;
