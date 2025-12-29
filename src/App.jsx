import gsap from "gsap";
import {ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
      <div className="flex-center h-[100vh]">
          <h2 className="text-3xl text-indigo-300">Hello, gsap</h2>
      </div>
  );
}

export default App
