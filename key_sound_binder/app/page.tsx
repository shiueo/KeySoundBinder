import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          {" "}
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            REMOVE
          </button>
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          {" "}
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            ADD
          </button>
        </div>
      </div>
        


      <div className="w-full shadow stats stats-vertical lg:stats-horizontal">
  
  <div className="stat">
    <div className="stat-title">Input Key</div>
    <div className="stat-value">A</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
<div className="divider"></div> 
<div className="w-full shadow stats stats-vertical lg:stats-horizontal">
  
  <div className="stat">
    <div className="stat-title">Input Key</div>
    <div className="stat-value">B</div>
    <div className="stat-desc">2023-06-08-12-59-34</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">Binded sound</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>

      </main>
  );
}
