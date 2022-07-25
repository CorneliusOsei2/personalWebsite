
import React from 'react';

function Particle() {
  return (
    <>
      <Particle
        params={{
          "particles": {
              "number": {
                  "value": 10,
                  "density": {"enable":true,"value_area":800},
              },
              "size": {
                  "value": 4
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }} />
    </>
  )
}

export default Particle;