import React from "react";

const AdminDashboardPage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-menu flex justify-between items-center">
          <h2 className="h2 text-[#fff] text-[40px] font-thin leading-[48px] w-[365px] h-[48px]">
            Today’s leaderboard
          </h2>
          <div className="right-menu flex justify-between items-center bg-[#1D1D1D]">
            <p>
              30 May 2022
            </p>
            <div>.</div>
            <p className="menu-2 bg-[#9BFF00] rounded-lg py-[4px] px-[10px] inline-flex justify-center items-center">
            Submissions OPEN
            </p>
            <div>.</div>
            <p>11:34</p>
          </div>
        </div>
        <div className="dashboard-sub flex justify-between items-center">
          <div>#</div>
          <div>Title</div>
          <div>Author</div>
          <div>Most Liked</div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
