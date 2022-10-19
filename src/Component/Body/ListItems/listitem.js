import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/loading';
import ColumnItems from './ColumnItems/columnItems';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const ListItem = () => {
  const [originData, setOriginData] = useState();
  const [imageList, setImageList] = useState([[], [], []]);
  const [loading, setLoading] = useState(false);
  const [times, setTimes] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    const getOriginItem = async () => {
      setLoading(true);
      let response = await axios.get('https://api.imgflip.com/get_memes');
      setLoading(false);
      let data = response.data;
      if (data.success) {
        setOriginData(data.data.memes);
      }
    };
    getOriginItem();
  }, []);

  useEffect(() => {
    if (originData) {
      getListItems();
    }
  }, [originData]);

  const getListItems = async () => {
    let layoutData = MasonryData(originData.slice(times, times + 30));
    let mergeData = [];
    for (let index = 0; index < 3; index++) {
      mergeData.push([...imageList[index], ...layoutData[index]]);
    }
    setImageList(mergeData);
    setTimes(times + 30);
  };

  const MasonryData = (data) => {
    var size = data.length / 3;
    var childCol = [];
    for (var i = 0; i < data.length; i += size) {
      childCol.push(data.slice(i, i + size));
    }
    return childCol;
  };

  const handleMore = async () => {
    if (times <= 100) {
      getListItems();
    } else setEnd(true);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col container mx-auto mt-20">
      <div className="flex flex-row justify-center gap-[120px]">
        {imageList &&
          imageList.map((image, index) => (
            <ColumnItems key={index} imageList={image} loading={loading} />
          ))}
      </div>
      <div className="bg-slate-400 w-[70px] h-[70px] rounded-full mx-auto my-12 animate-bounce relative">
        {end ? (
          <IoClose
            size={50}
            color="#C70039"
            className="absolute left-[9px] top-[10px] cursor-not-allowed"
            onClick={handleMore}
          />
        ) : (
          <FaAngleDoubleDown
            size={50}
            color="#3EF773"
            className="absolute left-[9px] top-[10px] cursor-pointer"
            onClick={handleMore}
          />
        )}
      </div>
    </div>
  );
};

export default ListItem;
