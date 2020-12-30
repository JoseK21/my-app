import React from "react";
import ReactDOM from "react-dom";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import { ReactSvgPanZoomLoader } from "react-svg-pan-zoom-loader";

import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>React SVG Pan Zoom Remote file loader</h1>
      <h3>A React component that adds pan and zoom features to SVG</h3>

      <ReactSvgPanZoomLoader
        src="test-digram.svg"
        render={content => (
          <UncontrolledReactSVGPanZoom width={500} height={500}>
            <svg width={617} height={316}>
              <g>
                <rect x="400" y="40" width="100" height="200" fill="#4286f4" stroke="#f4f142" onClick={() => alert('blue')} />
                <circle cx="108" cy="108.5" r="100" fill="#0ff" stroke="#0ff" onClick={() => alert('cyan')} />
                <circle cx="180" cy="209.5" r="100" fill="#ff0" stroke="#ff0" onClick={() => alert('yellow')} />
                <circle cx="220" cy="109.5" r="100" fill="#f0f" stroke="#f0f" onClick={() => alert('pink')} />
              </g>
            </svg>
          </UncontrolledReactSVGPanZoom>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
