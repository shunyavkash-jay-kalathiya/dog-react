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
          <img id="tommorowland" src="/tommorowland.png" alt="tommorowland" />
          <img id="navy-pier" src="/navy-pier.png" alt="navy-pier" />
          <img id="msi-chicago" src="/msi-chicago.png" alt="msi-chicago.png" />
          <img id="phone" src="/phone.png" alt="phone" />
          <img id="kikk" src="/kikk.png" alt="kikk" />
          <img id="kennedy" src="/kennedy.png" alt="kennedy" />
          <img id="opera" src="/opera.png" alt="opera" />
        </div>
        <Canvas
          id="canvas-item"
          camera={{
            position: [0, 0, 0.55],
            fov: 80,
          }}
        >
          <Dog />
        </Canvas>
        <section className="sec" id="sec-1">
          <div className="top">
            <span className="line-1"></span>
            <div className="left">
              <span className="line-2"></span>
              <h1>
                We
                <br />
                Make
                <br />
                Cool
                <br />
                Stuff
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
              <a img-title="navy-pier" href="javascript:void(0)" className="title-item">
                <span className="small-title">2018 - Today</span>
                <h3 className="title-main"> Navy Pier</h3>
              </a>
              <a img-title="msi-chicago" href="javascript:void(0)" className="title-item">
                <span className="small-title">2015 - Today</span>
                <h3 className="title-main"> MSI Chicago</h3>
              </a>
              <a img-title="phone" href="javascript:void(0)" className="title-item">
                <span className="small-title">2016</span>
                <h3 className="title-main"> This Was Louise’s Phone</h3>
              </a>
              <a img-title="kikk" href="javascript:void(0)" className="title-item">
                <span className="small-title">2012 - Today</span>
                <h3 className="title-main"> KIKK Festival 2018</h3>
              </a>
              <a img-title="kennedy" href="javascript:void(0)" className="title-item">
                <span className="small-title">2017</span>
                <h3 className="title-main"> The Kennedy Center</h3>
              </a>
              <a img-title="opera" href="javascript:void(0)" className="title-item">
                <span className="small-title">2016 - Ongoing</span>
                <h3 className="title-main"> Royal Opera Of Wallonia</h3>
              </a>
            </div>
          </div>
        </section>

        <section id="sec-3">
          <div className="container">
            <div className="top">
              <div className="left">
                <h3>
                  We're crafting <br /> emotional <br /> experiences aimed
                  <br /> at improving <br /> results
                </h3>
              </div>
              <div className="right"></div>
            </div>
            <div className="bottom">
              <div className="left"></div>
              <div className="right">
                <p>Dogstudio is a design & technology firm working globally from our offices based in Belgium and Chicago. Our strong focus on producing high quality & emotional brandings, digital products and experiences became a signature.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
