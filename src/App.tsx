import { useState } from "react";
import "./App.css";
import mockupImage1 from "./assets/finalTemplate01.png";
import mockupImage2 from "./assets/finalTemplate02.png";
import mockupImage3 from "./assets/finalTemplate03.png";
import mockupImage4 from "./assets/finalTemplate04.png";
import mockupImage5 from "./assets/finalTemplate05.png";
import mockupImage6 from "./assets/finalTemplate06.png";
import mockupImage7 from "./assets/finalTemplate07.png";
import mockupImage8 from "./assets/finalTemplate08.png";

interface ISvgItem {
  id: string;
  content: JSX.Element;
}
const svgItems: ISvgItem[] = [
  {
    id: "1",
    content: (
      <div className="logoBuilderSlideSidebarItem ">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="8bed19d3-b887-4366-894a-9d7aca816f66"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" text-anchor="left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.09 305">
              <defs>
                <style>
                  {`.class667a7ccd5ab3acls-1{fill:#ffce00;data-cmyk=cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>Asset 10</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="class667a7ccd5ab3acls-1"
                    d="M.5,64.55V59.68q19.86,0,30.4,16.72,1.62,2.46,3.65,9.38L90.84,304.5h-4.6l-49.76-195Q30.09,83.18,23.4,74.27T.5,64.55ZM.87,28.07V23.2q48.65,1.23,67.69,49.11L127.32,304.5h-4.6l-44-172.21q-11-49.47-17.26-63.66T39,40.64Q22.76,28.48.87,28.07ZM1,76.71V71.84q18.24.42,23,19.62l54.68,213h-4.6l-54.4-212Q16,83.2,12.18,80T1,76.71ZM1.12,5.37V.51q26.74,0,54.31,19,13.38,10.5,18.45,15t11.68,17a113.44,113.44,0,0,1,9.82,25.32Q98.59,89.56,107,123L152.47,304.5H147L85.83,65.36Q76.5,41,53,24.22A99.93,99.93,0,0,0,1.12,5.37Zm0,83.9V84.41q7.49.81,10.3,7.14t8.82,35.71l47,177.24H62.58q-1.15-4.32-5.35-20.23T50,257L35.21,200.82q-17.64-64.56-18.86-71.47L7.59,96.17Q6,90.1,1.12,89.27Zm.15-48.64V35.77q23.91.81,39.14,14.82t19.89,40L115.19,304.5h-5.44L66.16,136.79Q53.4,87.7,50.44,76.31T34.91,52.37Q21.14,41.44,1.27,40.63Zm.06-24.32V11.45q23.91.41,46.41,16T77.88,65.42l61.2,239.08h-4.61L73.88,67.74Q64.55,45.87,44.09,31.3T1.33,16.31Zm.08,36.48V47.93q25.94,1.22,39.31,21.93a60.51,60.51,0,0,1,4.74,11.37L103,304.5H98.4L56,138.77,44.59,94.19q-3.87-15.12-10.15-25T21.06,56.43Q14,53.61,1.41,52.79Zm115.23,81.07-3.24-10.14,16.39-57.21q8.72-28.35,34.26-47t55.53-19V5.37q-29.19.4-53.3,19.05t-32.22,47Zm5.67,22.69-2.84-9.32,21-75.82q7.4-25.93,30.09-43.14t49.05-16.82v4.86q-26,.42-45.4,15.2T145.41,73.06Zm5.27,23.11-2.43-10.14,26.39-94q9.27-25.12,27.52-39.12T219.59,23.2v4.87a66.16,66.16,0,0,0-38.51,13.78q-17,13-24.72,35.26ZM133.66,202l-2.84-10.54,32.34-112.3q7.78-19.85,23.39-31.79t33-11.55v4.86q-15.4-.81-31,11.55T168.1,80.76Zm6.48,23.51-3.24-8.92,38-133.67q3.42-13.82,18.35-27.22,10.55-7.71,26.35-7.72v4.86a36.89,36.89,0,0,0-24.73,8.31A46.29,46.29,0,0,0,179.46,84Zm5.27,22.29-2.83-10.13L185.87,86a34.67,34.67,0,0,1,12.62-19q9.75-7.69,20.69-7.29v4.87A24.82,24.82,0,0,0,202,70.63a34.68,34.68,0,0,0-11.14,16.61Zm6.08,23.1-3.24-10.13L197,89.18q5.17-17.33,22.62-17.34v4.87q-13.38,0-17.43,14.18Zm5.68,21.89-3.25-10.13L207.66,93.27q2.93-8.85,11.92-8.86v4.86q-5.27,0-6.48,4.86Z"
                  ></path>
                </g>
              </g>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="5b07e92b-6a4e-4123-b36d-5f78f815b961"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="ef49eb76-5390-4a7f-b7d2-18e82d184d67"
            width="290"
            fontFamily="Arial"
          >
            Software Company{" "}
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "2",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="be2e2164-6b16-4e52-a8bd-4d3393bbecb0"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d148cls-1{fill:#ffce00;data-cmyk:cmyk(0,19,100,0);}.class667bd6c48d148cls-2{fill:#315864;data-cmyk:cmyk(51,12,0,61);}`}
                </style>
              </defs>
              <title>svg</title>
              <polygon
                className="class667bd6c48d148cls-1"
                points="41.33 100 2.35 100 47.96 21.01 86.94 21.01 41.33 100"
              ></polygon>
              <polygon
                className="class667bd6c48d148cls-2"
                points="47.96 178.99 86.94 178.99 41.33 100 2.35 100 47.96 178.99"
              ></polygon>
              <polygon
                className="class667bd6c48d148cls-1"
                points="106.01 100 67.03 100 112.65 21.01 151.62 21.01 106.01 100"
              ></polygon>
              <polygon
                className="class667bd6c48d148cls-2"
                points="112.65 178.99 151.62 178.99 106.01 100 67.03 100 112.65 178.99"
              ></polygon>
              <polygon
                className="class667bd6c48d148cls-1"
                points="158.67 100 197.65 100 152.04 178.99 113.06 178.99 158.67 100"
              ></polygon>
              <polygon
                className="class667bd6c48d148cls-2"
                points="152.04 21.01 113.06 21.01 158.67 100 197.65 100 152.04 21.01"
              ></polygon>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="d4204ba9-386b-4cd7-973c-e1290bcba7fd"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="572ff3f4-9550-49d0-8285-3d04b21f8cc1"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "3",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="4f1c11a1-d43b-4fe4-965c-a9748eb277cd"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d2a0cls-1{fill:#ffce00;data-cmyk:cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>svg</title>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="4.74"
                y="23.13"
                width="133.38"
                height="20.07"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="121.29"
                y="34.55"
                width="73.97"
                height="8.65"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="4.74"
                y="67.68"
                width="108.62"
                height="20.07"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="96.52"
                y="79.11"
                width="98.74"
                height="8.65"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="4.74"
                y="112.24"
                width="87.91"
                height="20.07"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="75.81"
                y="123.67"
                width="119.45"
                height="8.65"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="4.74"
                y="156.8"
                width="58.72"
                height="20.07"
              ></rect>
              <rect
                className="class667bd6c48d2a0cls-1"
                x="46.63"
                y="168.23"
                width="148.63"
                height="8.65"
              ></rect>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="b2bb78a1-8798-48c1-b701-647228179047"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="c2ded178-b461-4db5-94ef-b466ce679ce7"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "4",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="e33dc902-eed1-4045-b0ee-4efa40e65523"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d367cls-1{fill:#6cc4f6;data-cmyk:cmyk(56,20,0,4);}.class667bd6c48d367cls-2{fill:#0071bc;data-cmyk:cmyk(100,40,0,26);}`}
                </style>
              </defs>
              <title>svg</title>
              <polygon
                className="class667bd6c48d367cls-1"
                points="50.88 98.97 1.76 64.26 1.76 11.53 50.88 46.24 50.88 98.97"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-2"
                points="50.88 98.97 100 64.26 100 11.53 50.88 46.24 50.88 98.97"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-1"
                points="149.12 98.97 100 64.26 100 11.53 149.12 46.24 149.12 98.97"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-2"
                points="149.12 98.97 198.24 64.26 198.24 11.53 149.12 46.24 149.12 98.97"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-1"
                points="149.12 101.03 198.24 135.74 198.24 188.47 149.12 153.76 149.12 101.03"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-2"
                points="149.12 101.03 100 135.74 100 188.47 149.12 153.76 149.12 101.03"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-1"
                points="50.88 101.03 100 135.74 100 188.47 50.88 153.76 50.88 101.03"
              ></polygon>
              <polygon
                className="class667bd6c48d367cls-2"
                points="50.88 101.03 1.76 135.74 1.76 188.47 50.88 153.76 50.88 101.03"
              ></polygon>
            </svg>
          </svg>
          <text
            fill="#4b0d66"
            data-cmyk="cmyk(26,87,0,60)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="8adf11d3-dcbb-4725-bc93-856438ce80be"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="65001f6b-ad8c-4610-b892-71d513cc20a3"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "5",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="8bed19d3-b887-4366-894a-9d7aca816f66"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" text-anchor="left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.09 305">
              <defs>
                <style>
                  {`.class667a7ccd5ab3acls-1{fill:#ffce00;data-cmyk=cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>Asset 10</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="class667a7ccd5ab3acls-1"
                    d="M.5,64.55V59.68q19.86,0,30.4,16.72,1.62,2.46,3.65,9.38L90.84,304.5h-4.6l-49.76-195Q30.09,83.18,23.4,74.27T.5,64.55ZM.87,28.07V23.2q48.65,1.23,67.69,49.11L127.32,304.5h-4.6l-44-172.21q-11-49.47-17.26-63.66T39,40.64Q22.76,28.48.87,28.07ZM1,76.71V71.84q18.24.42,23,19.62l54.68,213h-4.6l-54.4-212Q16,83.2,12.18,80T1,76.71ZM1.12,5.37V.51q26.74,0,54.31,19,13.38,10.5,18.45,15t11.68,17a113.44,113.44,0,0,1,9.82,25.32Q98.59,89.56,107,123L152.47,304.5H147L85.83,65.36Q76.5,41,53,24.22A99.93,99.93,0,0,0,1.12,5.37Zm0,83.9V84.41q7.49.81,10.3,7.14t8.82,35.71l47,177.24H62.58q-1.15-4.32-5.35-20.23T50,257L35.21,200.82q-17.64-64.56-18.86-71.47L7.59,96.17Q6,90.1,1.12,89.27Zm.15-48.64V35.77q23.91.81,39.14,14.82t19.89,40L115.19,304.5h-5.44L66.16,136.79Q53.4,87.7,50.44,76.31T34.91,52.37Q21.14,41.44,1.27,40.63Zm.06-24.32V11.45q23.91.41,46.41,16T77.88,65.42l61.2,239.08h-4.61L73.88,67.74Q64.55,45.87,44.09,31.3T1.33,16.31Zm.08,36.48V47.93q25.94,1.22,39.31,21.93a60.51,60.51,0,0,1,4.74,11.37L103,304.5H98.4L56,138.77,44.59,94.19q-3.87-15.12-10.15-25T21.06,56.43Q14,53.61,1.41,52.79Zm115.23,81.07-3.24-10.14,16.39-57.21q8.72-28.35,34.26-47t55.53-19V5.37q-29.19.4-53.3,19.05t-32.22,47Zm5.67,22.69-2.84-9.32,21-75.82q7.4-25.93,30.09-43.14t49.05-16.82v4.86q-26,.42-45.4,15.2T145.41,73.06Zm5.27,23.11-2.43-10.14,26.39-94q9.27-25.12,27.52-39.12T219.59,23.2v4.87a66.16,66.16,0,0,0-38.51,13.78q-17,13-24.72,35.26ZM133.66,202l-2.84-10.54,32.34-112.3q7.78-19.85,23.39-31.79t33-11.55v4.86q-15.4-.81-31,11.55T168.1,80.76Zm6.48,23.51-3.24-8.92,38-133.67q3.42-13.82,18.35-27.22,10.55-7.71,26.35-7.72v4.86a36.89,36.89,0,0,0-24.73,8.31A46.29,46.29,0,0,0,179.46,84Zm5.27,22.29-2.83-10.13L185.87,86a34.67,34.67,0,0,1,12.62-19q9.75-7.69,20.69-7.29v4.87A24.82,24.82,0,0,0,202,70.63a34.68,34.68,0,0,0-11.14,16.61Zm6.08,23.1-3.24-10.13L197,89.18q5.17-17.33,22.62-17.34v4.87q-13.38,0-17.43,14.18Zm5.68,21.89-3.25-10.13L207.66,93.27q2.93-8.85,11.92-8.86v4.86q-5.27,0-6.48,4.86Z"
                  ></path>
                </g>
              </g>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="5b07e92b-6a4e-4123-b36d-5f78f815b961"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="ef49eb76-5390-4a7f-b7d2-18e82d184d67"
            width="290"
            fontFamily="Arial"
          >
            Software Company{" "}
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "6",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="f1c760ac-c055-45b2-b7a1-e778088fcf7d"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d3aacls-1{fill:#ffce00;data-cmyk:cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>svg</title>
              <path
                className="class667bd6c48d3aacls-1"
                d="M40.65,148.69A60,60,0,0,1,99.27,88.76V51.14A97.57,97.57,0,0,0,3,148.69c0,.23,0,.45,0,.68H40.66C40.66,149.14,40.65,148.92,40.65,148.69Z"
              ></path>
              <path
                className="class667bd6c48d3aacls-1"
                d="M99.43,126.08a60,60,0,0,1,59.93,58.63H197A97.57,97.57,0,0,0,99.43,88.46l-.68,0V126.1Z"
              ></path>
              <rect
                className="class667bd6c48d3aacls-1"
                x="40.26"
                y="148.54"
                width="38.82"
                height="38.82"
                transform="translate(227.62 108.28) rotate(90)"
              ></rect>
              <rect
                className="class667bd6c48d3aacls-1"
                x="99.17"
                y="12.64"
                width="38.82"
                height="38.82"
                transform="translate(150.63 -86.53) rotate(90)"
              ></rect>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="240074fa-9c14-4998-aceb-6d772b92428b"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="66efb921-7289-4ec3-9a96-fe4d61b4067a"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "7",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="8bed19d3-b887-4366-894a-9d7aca816f66"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" text-anchor="left">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220.09 305">
              <defs>
                <style>
                  {`.class667a7ccd5ab3acls-1{fill:#ffce00;data-cmyk=cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>Asset 10</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="class667a7ccd5ab3acls-1"
                    d="M.5,64.55V59.68q19.86,0,30.4,16.72,1.62,2.46,3.65,9.38L90.84,304.5h-4.6l-49.76-195Q30.09,83.18,23.4,74.27T.5,64.55ZM.87,28.07V23.2q48.65,1.23,67.69,49.11L127.32,304.5h-4.6l-44-172.21q-11-49.47-17.26-63.66T39,40.64Q22.76,28.48.87,28.07ZM1,76.71V71.84q18.24.42,23,19.62l54.68,213h-4.6l-54.4-212Q16,83.2,12.18,80T1,76.71ZM1.12,5.37V.51q26.74,0,54.31,19,13.38,10.5,18.45,15t11.68,17a113.44,113.44,0,0,1,9.82,25.32Q98.59,89.56,107,123L152.47,304.5H147L85.83,65.36Q76.5,41,53,24.22A99.93,99.93,0,0,0,1.12,5.37Zm0,83.9V84.41q7.49.81,10.3,7.14t8.82,35.71l47,177.24H62.58q-1.15-4.32-5.35-20.23T50,257L35.21,200.82q-17.64-64.56-18.86-71.47L7.59,96.17Q6,90.1,1.12,89.27Zm.15-48.64V35.77q23.91.81,39.14,14.82t19.89,40L115.19,304.5h-5.44L66.16,136.79Q53.4,87.7,50.44,76.31T34.91,52.37Q21.14,41.44,1.27,40.63Zm.06-24.32V11.45q23.91.41,46.41,16T77.88,65.42l61.2,239.08h-4.61L73.88,67.74Q64.55,45.87,44.09,31.3T1.33,16.31Zm.08,36.48V47.93q25.94,1.22,39.31,21.93a60.51,60.51,0,0,1,4.74,11.37L103,304.5H98.4L56,138.77,44.59,94.19q-3.87-15.12-10.15-25T21.06,56.43Q14,53.61,1.41,52.79Zm115.23,81.07-3.24-10.14,16.39-57.21q8.72-28.35,34.26-47t55.53-19V5.37q-29.19.4-53.3,19.05t-32.22,47Zm5.67,22.69-2.84-9.32,21-75.82q7.4-25.93,30.09-43.14t49.05-16.82v4.86q-26,.42-45.4,15.2T145.41,73.06Zm5.27,23.11-2.43-10.14,26.39-94q9.27-25.12,27.52-39.12T219.59,23.2v4.87a66.16,66.16,0,0,0-38.51,13.78q-17,13-24.72,35.26ZM133.66,202l-2.84-10.54,32.34-112.3q7.78-19.85,23.39-31.79t33-11.55v4.86q-15.4-.81-31,11.55T168.1,80.76Zm6.48,23.51-3.24-8.92,38-133.67q3.42-13.82,18.35-27.22,10.55-7.71,26.35-7.72v4.86a36.89,36.89,0,0,0-24.73,8.31A46.29,46.29,0,0,0,179.46,84Zm5.27,22.29-2.83-10.13L185.87,86a34.67,34.67,0,0,1,12.62-19q9.75-7.69,20.69-7.29v4.87A24.82,24.82,0,0,0,202,70.63a34.68,34.68,0,0,0-11.14,16.61Zm6.08,23.1-3.24-10.13L197,89.18q5.17-17.33,22.62-17.34v4.87q-13.38,0-17.43,14.18Zm5.68,21.89-3.25-10.13L207.66,93.27q2.93-8.85,11.92-8.86v4.86q-5.27,0-6.48,4.86Z"
                  ></path>
                </g>
              </g>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="5b07e92b-6a4e-4123-b36d-5f78f815b961"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="ef49eb76-5390-4a7f-b7d2-18e82d184d67"
            width="290"
            fontFamily="Arial"
          >
            Software Company{" "}
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "8",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="d8a47139-9327-40cf-9de8-a5fb46a001eb"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d3aacls-1{fill:#ffce00;data-cmyk:cmyk(0,19,100,0);}`}
                </style>
              </defs>
              <title>svg</title>
              <path
                className="class667bd6c48d3aacls-1"
                d="M40.65,148.69A60,60,0,0,1,99.27,88.76V51.14A97.57,97.57,0,0,0,3,148.69c0,.23,0,.45,0,.68H40.66C40.66,149.14,40.65,148.92,40.65,148.69Z"
              ></path>
              <path
                className="class667bd6c48d3aacls-1"
                d="M99.43,126.08a60,60,0,0,1,59.93,58.63H197A97.57,97.57,0,0,0,99.43,88.46l-.68,0V126.1Z"
              ></path>
              <rect
                className="class667bd6c48d3aacls-1"
                x="40.26"
                y="148.54"
                width="38.82"
                height="38.82"
                transform="translate(227.62 108.28) rotate(90)"
              ></rect>
              <rect
                className="class667bd6c48d3aacls-1"
                x="99.17"
                y="12.64"
                width="38.82"
                height="38.82"
                transform="translate(150.63 -86.53) rotate(90)"
              ></rect>
            </svg>
          </svg>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="68759d5f-60d2-4107-bb3f-4479aa410bc8"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="bc3883dd-5ff8-4d33-9fef-454f25e7f2f5"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "9",
    content: (
      <div className="logoBuilderSlideSidebarItem">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="400"
          height="100"
          viewBox="0 0 400 100"
          id="88b54766-bb3b-4e95-86e7-d06d0d3195d4"
        >
          <rect width="400" height="100" fill="none" data-cmyk="none"></rect>
          <svg x="0" y="0" height="100" width="100" textAnchor="left">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <defs>
                <style>
                  {`.class667bd6c48d325cls-1{fill:#b8cc1f;data-cmyk:cmyk(10,0,85,20);}`}
                </style>
              </defs>
              <title>svg</title>
              <path
                className="class667bd6c48d325cls-1"
                d="M158.13,75.06a6.54,6.54,0,0,1,9.25,0l4.41,4.41c5,5,13.34,5.56,18.54.67a13,13,0,0,0,.29-18.72L139,9.77c-5-5-13.34-5.56-18.54-.67a13,13,0,0,0-.29,18.72l23.44,23.44a6.54,6.54,0,0,1,0,9.25h0a6.54,6.54,0,0,1-9.25,0L89.59,15.76c-5-5-13.34-5.56-18.54-.67a13,13,0,0,0-.29,18.72L80.9,44a6.54,6.54,0,0,1,0,9.25h0a6.54,6.54,0,0,1-9.25,0l-24-24c-5-5-13.34-5.56-18.54-.67a13,13,0,0,0-.29,18.72L98.56,117a6.54,6.54,0,0,1-9.25,9.25L34.21,71.14c-5-5-13.34-5.56-18.54-.67a13,13,0,0,0-.29,18.72l33.31,33.31a6.54,6.54,0,0,1,0,9.25h0a6.54,6.54,0,0,1-9.25,0L28.21,120.53c-5-5-13.34-5.56-18.54-.67a13,13,0,0,0-.29,18.72L61,190.23c5,5,13.34,5.56,18.54.67a13,13,0,0,0,.29-18.72L63.23,155.55a6.54,6.54,0,0,1,0-9.25h0a6.54,6.54,0,0,1,9.25,0l37.94,37.94c5,5,13.34,5.56,18.54.67a13,13,0,0,0,.29-18.72L113.1,150a6.54,6.54,0,0,1,9.25-9.25l30.38,30.38a13,13,0,0,0,18.72-.29c4.9-5.2,4.38-13.49-.67-18.54L95.44,77a6.54,6.54,0,0,1,0-9.25h0a6.54,6.54,0,0,1,9.25,0l61.11,61.11c5,5,13.34,5.56,18.54.67a13,13,0,0,0,.29-18.72L158.13,84.31a6.54,6.54,0,0,1,0-9.25Z"
              ></path>
            </svg>
          </svg>
          <text
            fill="#315864"
            data-cmyk="cmyk(51,12,0,61)"
            fontSize="80"
            x="110"
            y="59"
            textAnchor="left"
            lengthAdjust="spacing"
            id="e2d2ca78-b56e-4e93-96c2-41e5d53c068e"
            width="290"
            fontFamily="Arial"
            style={{ fontSize: "67px" }}
          >
            Volksbyte
          </text>
          <text
            fill="#0071bc"
            data-cmyk="cmyk(100,40,0,26)"
            fontSize="25"
            x="110"
            y="96"
            textAnchor="left"
            id="e560e372-73f2-4a34-895a-45a80da7d9e9"
            width="290"
            fontFamily="Arial"
          >
            Software Company
          </text>
        </svg>
      </div>
    ),
  },
];

function App() {
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const activeItem = svgItems.find((item) => item.id === activeItemId);
  console.log(activeItem?.content);

  const handleItemClick = (id: string) => {
    setActiveItemId(id);
  };
  return (
    <div className="logoBuilderSlideContainer">
      <div className="svgItemContainer">
        {svgItems.map((item) => (
          <div
            key={item.id}
            className={`logoBuilderSlideSidebarItemContainer ${
              activeItemId === item.id ? "active" : " "
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.content}
          </div>
        ))}
      </div>

      <div className="logoBuilderSlideTemplateViewContainer">
        <div className="logoBuilderSlideTemplateViewItem1">
          <img src={mockupImage1} alt="mockupImage1" />
          <div className={`${activeItemId ? "tshirt" : " "}`}>
            {activeItem?.content}
          </div>
        </div>

        <div className="logoBuilderSlideTemplateViewItem2">
          <img src={mockupImage2} alt="mockupImage2" />
          <div className={`${activeItemId ? "desktop" : " "}`}>
            {activeItem?.content}
          </div>
        </div>
        <div className="logoBuilderSlideTemplateViewItem3">
          <img src={mockupImage3} alt="mockupImage3" />
          <div className={`${activeItemId ? "mog" : " "}`}>
            {activeItem?.content}
          </div>
        </div>

        <div className="logoBuilderSlideTemplateViewItem4">
          <img src={mockupImage4} alt="mockupImage4" />
          <div className={`${activeItemId ? "bottle " : " "}`}>
            {activeItem?.content}
          </div>
        </div>

        <div className="logoBuilderSlideTemplateViewItem5">
          <img src={mockupImage5} alt="mockupImage5" />
          <div className={`${activeItemId ? "laptop " : " "}`}>
            {activeItem?.content}
          </div>
        </div>

        <div className="logoBuilderSlideTemplateViewItem6">
          <div className={`${activeItemId ? "notebook2" : " "}`}>
            {activeItem?.content}
          </div>
          <img src={mockupImage6} alt="mockupImage6" />
          <div className={`${activeItemId ? "notebook1 " : " "}`}>
            {activeItem?.content}
          </div>
        </div>
        <div className="logoBuilderSlideTemplateViewItem7">
          <div className={`${activeItemId ? "bag2" : " "}`}>
            {activeItem?.content}
          </div>
          <img src={mockupImage7} alt="mockupImage7" />
          <div className={`${activeItemId ? "bag1" : " "}`}>
            {activeItem?.content}
          </div>
        </div>
        <div className="logoBuilderSlideTemplateViewItem8">
          <img src={mockupImage8} alt="mockupImage8" />
          <div className={`${activeItemId ? "paper " : " "}`}>
            {activeItem?.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const svgItems: ISvgItem[] = [
//   {
//     id: "1",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "2",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "3",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "4",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "5",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "6",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "7",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "8",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//       <div className="logoBuilderSlideSidebarItem">
//         svg
//       </div>
//     </div>
//     ),
//   },
//   {
//     id: "9",
//     content: (
//       <div className="logoBuilderSlideSidebarItemContainer">
//         <div className="logoBuilderSlideSidebarItem">
//           svg
//         </div>
//       </div>
//     ),
//   },
// ];
