import allu from "./IMG/card-2.jpg";
import './App.css';

function App() {
  return (
    <>
    <div className="relative flex justify-center h-auto max-w-xl m-auto p-auto mt-24 max-[1024px]:mt-14">
      <div className="absolute">
      <img src= {allu} alt="" className="rounded-xl" />
      </div>
    <div className="z-10">
      <p class="text-3xl font-extrabold text-white tracking-wide">Do You need a trip?</p>
    </div>
    </div>
    </>
  );
}

export default App;
