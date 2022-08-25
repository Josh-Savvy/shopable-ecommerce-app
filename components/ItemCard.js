import Image from 'next/image';
import styled from 'styled-components';
import { getFormattedCurrency } from '../utils/getFormattedCurrency';

import BetterLink from './BetterLink';

const Div = styled.div`
  border: 1px #eee solid;
  font-size: 14px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .info {
    padding: 8px;

    .brand {
      font-weight: 500;
    }

    .name {
      color: #777;
      margin: 8px 0;
    }

    .amount {
      font-weight: 500;
    }
  }
`;

const ItemCard = ({ id, imageURL, brand, name, price, setPriority }) => {
  return (
    <Div>
      <BetterLink href={`/collections/${id}`}>
        <Image
          src={imageURL}
          width={220}
          height={275}
          layout="responsive"
          priority={setPriority}
        />
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="amount">{`$ ${getFormattedCurrency(price)}`}</div>
        </div>
      </BetterLink>
    </Div>
  );
};

export default ItemCard;
