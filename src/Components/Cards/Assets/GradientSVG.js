function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
        <svg style={{height:"0"}}
        xmlns="http://www.w3.org/2000/svg" width="41" height="68" viewBox="0 0 41 68" fill="none">
        <path d="M0.524905 -9.32324e-05C8.41896 -9.32324e-05 16.1387 2.30106 22.7332 6.61988C29.3276 10.9387 34.5087 17.0865 37.638 24.3059C40.7673 31.5253 41.7082 39.5009 40.3448 47.2501C38.9814 54.9993 35.3732 62.1836 29.9647 67.918L21.3671 59.8665C25.1977 55.805 27.7533 50.7165 28.719 45.2279C29.6847 39.7393 29.0183 34.0904 26.8019 28.977C24.5854 23.8637 20.9158 19.5093 16.2451 16.4504C11.5744 13.3915 6.10667 11.7616 0.515485 11.7616L0.524905 -9.32324e-05Z" fill="url(#paint0_angular_1_492)"/>
        <path d="M0.524905 -9.32324e-05C8.41896 -9.32324e-05 16.1387 2.30106 22.7332 6.61988C29.3276 10.9387 34.5087 17.0865 37.638 24.3059C40.7673 31.5253 41.7082 39.5009 40.3448 47.2501C38.9814 54.9993 35.3732 62.1836 29.9647 67.918L21.3671 59.8665C25.1977 55.805 27.7533 50.7165 28.719 45.2279C29.6847 39.7393 29.0183 34.0904 26.8019 28.977C24.5854 23.8637 20.9158 19.5093 16.2451 16.4504C11.5744 13.3915 6.10667 11.7616 0.515485 11.7616L0.524905 -9.32324e-05Z" fill="url(#paint1_linear_1_492)"/>
        <defs>
          <radialGradient id={idCSS} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.000690033 47.6046) rotate(-89.3674) scale(47.6076 50.0098)">
            <stop stop-color="#544E50"/>
            <stop offset="1" stop-color="#DA1515"/>
          </radialGradient>
          <linearGradient id={idCSS} x1="0.460327" y1="80.6365" x2="0.460327" y2="-9.32324e-05" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF0059"/>
            <stop offset="1" stop-color="#FF0059" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  
  export default GradientSVG;