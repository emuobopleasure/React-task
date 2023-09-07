import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper w-[1216px] h-[96px] px-[10px] py-[24px] flex justify-between mb-[72px]'>
        <h1 className='h1 text-[#fff] text-[48px] font-black leading-[20px]'>
          APP
        </h1>
        <div>
          <button className='logout-button flex justify-between bg-[#9BFF00] px-[24px] py-[12px] rounded-[40px] gap-[10px]'>
            <div></div>
            <div>Logout</div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header