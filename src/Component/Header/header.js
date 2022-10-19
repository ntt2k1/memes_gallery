import React from 'react';

const Header = () => {
  return (
    <div className="mx-auto bg-white border-2 shadow-md z-10 gap-10 sticky top-0">
      <div className="flex flex-row items-center container mx-auto">
        <img
          className="h-20 w-20 ml-20 cursor-pointer"
          src="assets/logo_meme.jpg"
          alt="logo"
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }}
        />
        <a
          className="bg-black text-white font-extrabold h-fit rounded-2xl px-5 py-2"
          href="/"
        >
          Trang chủ
        </a>
      </div>
    </div>
  );
};

export default Header;
