"use client";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Home</p>
      <button
        onClick={() => setIsOpen(true)}
        className="m-6 px-2 py-1 rounded-sm bg-slate-900 text-white"
      >
        click me
      </button>
    </div>
  );
};
export default Home;
