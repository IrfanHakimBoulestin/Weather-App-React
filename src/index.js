import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavbarHeader from './Components/Meta/NavbarHeader';
import NavbarFooter from './Components/Meta/NavbarFooter';
import reportWebVitals from './Analytics/reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Components/Cards/cards";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarHeader />
      <div className="row">
          <Cards cardTitle="Get Current Weather For Location" cardSubHeader="Please Provide Full Postcode: " onclick="" imageSvg={
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-thermometer mt-1" viewBox="0 0 16 16">
                  <path d="M8 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  <path d="M8 0a2.5 2.5 0 0 0-2.5 2.5v7.55a3.5 3.5 0 1 0 5 0V2.5A2.5 2.5 0 0 0 8 0zM6.5 2.5a1.5 1.5 0 1 1 3 0v7.987l.167.15a2.5 2.5 0 1 1-3.333 0l.166-.15V2.5z"/>
              </svg> } />
          <Cards cardTitle="Get Current Astronomy For Location" cardSubHeader="Please Provide Full Postcode: " onclick="" imageSvg={
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-moon-stars mt-1" viewBox="0 0 16 16">
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
              </svg>
          } />
          <Cards cardTitle="Get Sport Events For Location" cardSubHeader="Please Provide Full Postcode: " onclick="" imageSvg={
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 457.577 457.577" className="mt-1"><g><g><g>
                    <path d="M276.092,377.771c1.877-4.286,4.153-8.313,6.76-12.06l-17.296-62.042c-1.841-6.603-6.326-12.152-12.395-15.337
                        l-39.331-20.637l26.807-61.214l15.106,27.403c5.247,9.519,16.719,13.726,26.864,9.825c26.436-10.168,54.548-21.529,73.671-29.584
                        c8.03-3.382,14.93-9.552,15.643-18.73c0.901-11.588-7.762-21.711-19.35-22.613l-64.17,24.543l-25.631-41.387l1.594-3.639
                        c5.632-12.86-0.228-27.85-13.088-33.482l-52.89-23.162c-12.86-5.632-27.85,0.228-33.482,13.088l-2.092,4.776l26.685-1.696
                        l-84.588,25.619c-6.621,2.006-11.984,7.206-14.051,14.075l-24.236,80.51c-3.346,11.107,2.931,22.86,14.084,26.218
                        c11.116,3.346,22.876-2.991,26.215-14.078c0.001-0.002,0.002-0.004,0.002-0.006l20.985-69.705l76.602-23.201l-59.479,36.407
                        l-18.763,62.323c-2.669,8.864-8.016,16.133-14.971,21.27l43.439,62.979l-58.642,69.059c-8.887,10.465-7.607,26.152,2.857,35.039
                        c10.468,8.887,26.153,7.606,35.039-2.858l70.974-83.581c6.85-8.066,7.796-19.513,2.558-28.547
                        c-3.908-5.509,3.441,4.449-47.208-63.712c5.775,4.761,52.217,43.055,59.289,48.886l0.819,0.681
                        c12.929,10.742,15.896,29.3,7.184,43.487l24.171,86.7c3.064,10.992,13.053,18.189,23.932,18.189
                        c4.375,0,8.865-1.167,12.891-3.603c-5.763-6.334-10.389-13.723-13.599-21.937C268.107,414.394,268.494,395.123,276.092,377.771z"/>
                <circle cx="269.904" cy="50.753" r="50.753"/>
                <path d="M341.078,355.453c-19.545,0-38.174,11.356-46.517,30.406c-14.711,33.591,10.051,71.125,46.464,71.125c19.545,0,38.174-11.356,46.517-30.406C402.253,392.987,377.491,355.453,341.078,355.453z"/>
                </g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
            </svg>
          } />
          <Cards cardTitle="Get 3-Day Forecast for Location" cardSubHeader="Please Provide Full Postcode: " onclick="" imageSvg={
              <svg width="75" height="75" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--emojione mt-1" preserveAspectRatio="xMidYMid meet">
                  <g fill="#4d5357">
                      <path d="M61 18L45 2v10H3v12h42v10z"></path>
                      <path d="M8 62c-3.3 0-6-2.8-6-6.3h3c0 1.6 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3c-3.3 0-6-2.8-6-6.3C2 42.8 4.7 40 8 40s6 2.8 6 6.3h-3c0-1.6-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3c3.3 0 6 2.8 6 6.3c0 3.6-2.7 6.4-6 6.4"></path>
                      <path d="M24 62c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3"></path>
                      <path d="M40 62c-3.3 0-6-2.8-6-6.3v-9.3c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3v9.3c0 3.5-2.7 6.3-6 6.3m0-18.6c-1.7 0-3 1.3-3 3v9.3c0 1.6 1.3 3 3 3s3-1.3 3-3v-9.3c0-1.7-1.3-3-3-3"></path>
                      <path d="M53 47.7L58.8 62H62V40h-3v14.3L53.2 40H50v22h3z"></path>
                  </g>
              </svg>
          }/>
          <Cards cardTitle="Get Previous 7-Days Weather for Location" cardSubHeader="Please Provide Full Postcode: " onclick="" imageSvg={
              <svg width="75" height="75" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                  <path d="m23.998 11.978v.023c0 6.627-5.372 11.999-11.999 11.999-2.862 0-5.491-1.002-7.553-2.675l.022.018c-.263-.215-.43-.539-.43-.902 0-.321.13-.611.341-.822l.545-.545c.211-.212.503-.344.826-.344.272 0 .522.093.72.25l-.002-.002c1.504 1.2 3.432 1.925 5.53 1.925 4.917 0 8.903-3.986 8.903-8.903s-3.986-8.903-8.903-8.903c-2.362 0-4.509.92-6.102 2.42l.005-.004 2.456 2.456c.14.14.226.334.226.547 0 .427-.346.774-.774.774h-7.034c-.428 0-.774-.347-.774-.774v-7.034c0-.427.347-.774.774-.774.214 0 .407.087.547.226l2.389 2.389c2.15-2.057 5.072-3.323 8.289-3.323 6.619 0 11.987 5.36 11.999 11.976v.001zm-8.753 3.811.475-.611c.152-.195.244-.443.244-.713 0-.372-.174-.702-.446-.915l-.003-.002-1.969-1.532v-5.048c0-.641-.52-1.162-1.162-1.162h-.774c-.641 0-1.162.52-1.162 1.162v6.56l3.165 2.461c.195.154.445.247.716.247.371 0 .701-.174.914-.444z"/>
              </svg>
          }/>
      </div>
    <NavbarFooter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
