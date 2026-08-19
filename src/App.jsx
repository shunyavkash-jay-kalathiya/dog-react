import { Canvas } from "@react-three/fiber";
import Dog from "./components/Dog";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

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
        <div className="images">
          <img id='tommorowland' src="/tommorowland.png" alt="tommorowland"/>
          <img id='navy-pier' src="/navy-pier.png" alt="navy-pier"/>
          <img id='msi-chicago' src="/msi-chicago.png" alt="msi-chicago.png"/>
          <img id='phone' src="/phone.png" alt="phone"/>
          <img id='kikk' src="/kikk.png" alt="kikk"/>
          <img id='kennedy' src="/kennedy.png" alt="kennedy"/>
          <img id='opera' src="/opera.png" alt="opera"/>
        </div>
        <Canvas id="canvas-item" >
          <Dog />
        </Canvas>
        <section className="sec" id="sec-1">
          <div className="top">
            <div className="left">
              <h1>
                We
                <br />
                Make
                <br />
                Good
                <br />
                Shit
                <br />
              </h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>Dogstudio is a multidisciplinary creative studio at the intersection of art, design and technology.</p>
            </div>
          </div>
        </section>

        <section className="sec" id="sec-2">
          <div className="container">
            <div className="titles">
              <a img-title="tommorowland" href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="navy-pier"  href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="msi-chicago"  href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="phone"  href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="kikk" href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="kennedy" href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>
              <a img-title="opera" href="javascript:void(0)" className="title-item">
                <span className="small-title">2020 - ONGOING</span>
                <h3 className="title-main">Tomorrowland</h3>
              </a>            
            </div>
          </div>
        </section>

        <section className="sec" id="sec-3">
          section 3
        </section>
      </main>
    </>
  );
}

export default App;
