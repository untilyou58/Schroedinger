import { useEffect, useRef, useState } from "react";
import "./App.css";
import "./css/column.css";
import "./css/normalize.css";
import "./css/webflow.css";
import {sketch} from "./js";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function App() {
  const p5Ref = useRef(null);
  const [p5Instance, setP5Instance] = useState(null);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    // Wait for the DOM to load
    // const p5 = window.p5;
    if (!p5Instance || !p5Ref.current) return;
    !isSetup && sketch?.setup(p5Instance, p5Ref.current);
    setIsSetup(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p5Instance, p5Ref.current]);

  return (
    <>
      <div>
        <div className="div-block">
          <div className="columns w-row">
            <div className="w-col w-col-8">
              <div className="infowrapper">
                <div id="canvas-wrapper">
                  <div id="container" ref={p5Ref}>
                  <ReactP5Wrapper sketch={(p) => {
                      if(!p5Instance) {
                        setP5Instance(p);
                        window.p5 = p;
                      }
                  }} ></ReactP5Wrapper>
                  </div>
                </div>

                <div className="control-button-wrapper">
                  <div id="container_reset" className="button-wrapper"></div>
                  <div
                    id="container_run_pause"
                    className="button-wrapper"
                  ></div>
                  <div id="container_download" className="button-wrapper"></div>
                </div>

                <div className="w-row">
                  <div className="w-col w-col-2">
                    <div className="potential-wrapper">
                      <h5>Potential Options</h5>
                      <div id="container_potentials"></div>
                    </div>
                  </div>
                  <div className="w-col w-col-3">
                    <div className="potential-wrapper">
                      <h5>Potential parameters</h5>
                      <div id="container_potential_parameters_height">
                        <label>Potential height:</label>
                      </div>
                      <div id="value_height"></div>
                      <div id="container_potential_parameters_customized">
                        <label></label>
                      </div>
                    </div>
                  </div>
                  <div className="w-col w-col-2">
                    <div className="potential-wrapper">
                      <h5>Initial state options</h5>
                      <div id="container_psi"></div>
                    </div>
                  </div>
                  <div className="w-col w-col-5">
                    <div className="potential-wrapper">
                      <h5>Initial state parameters</h5>
                      <div id="container_psi_parameters_n">
                        <label>Level n:</label>
                      </div>

                      <div id="container_psi_parameters_position">
                        <label>Position:</label>
                        <div id="value_position" className="value-style"></div>
                      </div>

                      <div id="container_psi_parameters_velocity">
                        <label>Velocity:</label>
                        <div id="value_velocity" className="value-style"></div>
                      </div>

                      <div id="container_psi_parameters_variance">
                        <label>Variance:</label>
                        <div id="value_variance" className="value-style"></div>
                      </div>
                      <div id="container_psi_parameters_customized">
                        <label>Custom wavefunction:</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
