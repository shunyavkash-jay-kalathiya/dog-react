import { Canvas } from "@react-three/fiber";
import Dog from "./components/Dog";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#sec-1",
  //       start: "top top",
  //       markers: true,
  //       scrub: true,
  //       endTrigger: "#sec-4",
  //       end: "top top",
  //     },
  //   });

  //   tl.to("html", {
  //     backgroundColor: "#995555",
  //   }).to("html", {
  //     backgroundColor: "#559955",
  //   });
  // }, []);

  return (
    <>
      <main>
        <Canvas style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
             top: 0,
            left: 0,
        }}>
          <Dog />
        </Canvas>
        <section className="sec" id="sec-1">
          section 1
        </section>

        <section className="sec" id="sec-2">
          section 2
        </section>

        <section className="sec" id="sec-3">
          section 3
        </section>

        <section className="sec" id="sec-4">
          section 4
        </section>
      </main>
    </>
  );
}

export default App;
