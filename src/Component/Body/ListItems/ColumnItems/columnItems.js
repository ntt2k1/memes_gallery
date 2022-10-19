import React from 'react';
import Loading from '../../Loading/loading';
import Item from './Item/item';

const ColumnItems = ({ imageList, loading }) => {
  return (
    <div className="flex flex-col gap-5 w-[20%]">
      {imageList &&
        imageList.map((item) =>
          loading ? (
            <Loading key={item.id} />
          ) : (
            <Item key={item.id} item={item} />
          )
        )}
    </div>
  );
};

export default ColumnItems;
