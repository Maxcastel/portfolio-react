export function PHPSvg({width,height}:{width:number,height:string}){

    return (
        <svg width={width} height={height} className="my-auto" viewBox="0 0 256 134" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">
            <g fill-rule="evenodd"><ellipse fill="#8993BE" cx="128" cy="66.63" rx="128" ry="66.63"/>
                <path d="M35.945 106.082l14.028-71.014H82.41c14.027.877 21.041 7.89 21.041 20.165 0 21.041-16.657 33.315-31.562 32.438H56.11l-3.507 18.411H35.945zm23.671-31.561L64 48.219h11.397c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.52zM100.192 87.671l14.027-71.013h16.658l-3.507 18.41h15.78c14.028.877 19.288 7.89 17.535 16.658l-6.137 35.945h-17.534l6.137-32.438c.876-4.384.876-7.014-5.26-7.014H124.74l-7.89 39.452h-16.658zM153.425 106.082l14.027-71.014h32.438c14.028.877 21.042 7.89 21.042 20.165 0 21.041-16.658 33.315-31.562 32.438h-15.781l-3.507 18.411h-16.657zm23.67-31.561l4.384-26.302h11.398c6.137 0 10.52 2.63 10.52 7.89-.876 14.905-7.89 17.535-15.78 18.412h-10.521z" fill="#232531"/>
            </g>
        </svg>

        // <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}><defs><clipPath id="A"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162"/></clipPath><radialGradient cx="0" cy="0" fx="0" fy="0" gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)" gradientUnits="userSpaceOnUse" id="B" r="1" spreadMethod="pad"><stop offset="0" stop-color="#aeb2d5"/><stop offset=".3" stop-color="#aeb2d5"/><stop offset=".75" stop-color="#484c89"/><stop offset="1" stop-color="#484c89"/></radialGradient><clipPath id="C"><path d="M0 324h576V0H0v324z"/></clipPath><clipPath id="D"><path d="M0 324h576V0H0v324z"/></clipPath></defs><g transform="matrix(.164883 0 0 -.162632 11.737077 58.329876)"><g clip-path="url(#A)"><path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162" fill="url(#B)"/></g><g clip-path="url(#C)"><path d="M288 27.36c146.73 0 265.68 60.28 265.68 134.64S434.73 296.64 288 296.64 22.32 236.36 22.32 162 141.27 27.36 288 27.36" fill="#777bb3"/></g><g clip-path="url(#D)"><path d="M161.734 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zM98.67 77.557c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.63 2.48l28.328 145.75a3 3 0 0 0 2.945 2.427h61.054c19.188 0 33.47-5.2 42.447-15.487 9.025-10.33 11.812-24.772 8.283-42.92-1.436-7.394-3.906-14.26-7.34-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428H98.67z"/><path d="M159.224 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545-5.162-3.974-13.554-5.988-24.94-5.988H149.7l9.523 49zm28.83 35H127a6 6 0 0 1-5.889-4.855L92.783 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.588 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.354 13.984 5.752 5.292 10.5 11.232 14.08 17.657s6.17 13.594 7.668 21.302c3.715 19.104.697 34.402-8.97 45.466-9.572 10.958-24.614 16.514-44.706 16.514m-45.633-90h19.313c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.1 10.832 1.144 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.856-61m45.633 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75L127 226.307h61.055" fill="#fff"/><path d="M311.583 116.307c-.896 0-1.745.4-2.314 1.092s-.802 1.6-.63 2.48l12.53 64.49c1.192 6.133.898 10.535-.827 12.395-1.056 1.137-4.228 3.044-13.607 3.044h-22.702l-15.755-81.072a3 3 0 0 0-2.945-2.428h-31.5a3 3 0 0 0-2.945 3.572l28.328 145.75a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572l-6.836-35.178h24.422c18.605 0 31.22-3.28 38.57-10.028 7.5-6.884 9.827-17.89 6.947-32.72l-13.18-67.825a3 3 0 0 0-2.945-2.428h-32z"/><path d="M293.66 271.057h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.75a6 6 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855l15.283 78.645h20.23c9.363 0 11.328-2 11.407-2.086.568-.61 1.315-3.44.082-9.78l-12.53-64.49a6 6 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855l13.18 67.825c3.093 15.92.447 27.864-7.86 35.5-7.928 7.28-21.208 10.82-40.6 10.82h-20.784l6.143 31.605a6 6 0 0 1-5.89 7.145m0-6l-7.53-38.75h28.062c17.657 0 29.836-3.082 36.54-9.238s8.71-16.14 6.032-29.938l-13.18-67.824h-32l12.53 64.488c1.426 7.336.902 12.34-1.574 15.008s-7.746 4.004-15.805 4.004H281.56l-16.226-83.5h-31.5l28.328 145.75h31.5" fill="#fff"/><path d="M409.55 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.86 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zm-63.062-67.75c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48l28.328 145.75a3 3 0 0 0 2.946 2.427h61.053c19.19 0 33.47-5.2 42.448-15.487 9.025-10.33 11.81-24.77 8.283-42.92-1.438-7.394-3.907-14.26-7.342-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93H388.24l-7.057-36.322a3 3 0 0 0-2.946-2.428h-31.75z"/><path d="M407.04 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.63-2.914 3.125-9.058 1.435-17.766-1.898-9.75-5.417-16.664-10.458-20.546-5.162-3.974-13.554-5.988-24.94-5.988h-12.033l9.522 49zm28.83 35h-61.054a6 6 0 0 1-5.889-4.855L340.6 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.587 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.356 13.986 5.752 5.29 10.488 11.23 14.078 17.655s6.17 13.594 7.668 21.302c3.715 19.105.697 34.403-8.97 45.467-9.572 10.957-24.613 16.513-44.706 16.513m-45.632-90h19.312c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.102 10.832 1.145 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.855-61m45.632 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75l28.328 145.75h61.054" fill="#fff"/></g></g></svg>
    )
}