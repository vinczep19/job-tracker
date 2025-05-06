import "./App.css";

function App() {
  return (
    <div className="bg-neutral-600 h-screen w-screen flex justify-center items-center">
      Job Tracker App
      <form className="grid bg-neutral-300 h-150 w-140 rounded-2xl">
        <p className="text-2xl font-bold relative top-5 left-3">Sign In</p>
        <div className="">
          <div className="flex justify-center items-center gap-2">
            <label className="flex">username</label>
            <input type="text" className="bg-neutral-100 flex" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <label className="flex">username</label>
            <input type="text" className="bg-neutral-100 flex" />
          </div>
          <button>Log In</button>
        </div>
      </form>
    </div>
  );
}

export default App;
