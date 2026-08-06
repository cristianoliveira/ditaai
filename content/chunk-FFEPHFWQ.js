(function(){try{var g=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};g["__faroBundleId_Speechify Chrome Extension"]="14.3.0"}catch(l){}})();
import{g as o}from"./chunk-IQTXTTBF.js";import{f as i,i as n}from"./chunk-KJ3NFIHV.js";import{g as e,n as t}from"./chunk-CAO5DZGK.js";t();e();var d=n(o)`
  left: ${({left:r})=>r??"-6px"};
  pointer-events: none;
  position: absolute;
  top: ${({top:r})=>r??"-4px"};

  g {
    transform-origin: center;
    animation: spinner_rotation 2s linear infinite;
  }

  g circle {
    stroke-linecap: round;
    animation: spinner_dash 2s ease-in-out infinite;
  }

  ${({variant:r})=>r==="ai"&&i`
      g circle {
        stroke: url(#aiSpinnerGradient);
      }

      &:hover g circle {
        stroke: url(#aiSpinnerGradientHover);
      }

      &:active g circle {
        stroke: url(#aiSpinnerGradientActive);
      }
    `}

  @keyframes spinner_rotation {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner_dash {
    0% {
      stroke-dasharray: 0 330;
      stroke-dashoffset: 0;
    }

    47.5% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -35;
    }

    95%,
    100% {
      stroke-dasharray: 92 330;
      stroke-dashoffset: -119;
    }
  }
`;export{d as a};
//# sourceMappingURL=chunk-FFEPHFWQ.js.map
