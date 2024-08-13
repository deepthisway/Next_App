export default function Topbar() {
  return (
    <>
      {/* Topbar */}
      <div className="w-full h-[72px] bg-[#032031] flex justify-between items-center px-4 md:px-8 lg:px-16">
        
        {/* Left Side: Empty div to balance the layout */}
        <div className="hidden md:block w-1/3"></div>

        {/* Center: Navigation Buttons */}
        <div className="flex justify-center space-x-4 w-full md:w-1/3">
          <button className="font-bold-custom text-white text-sm md:text-base">Home</button>
          <button className="font-light-custom text-white text-sm md:text-base">Instructors</button>
          <button className="font-light-custom text-white text-sm md:text-base">About Us</button>
          <button className="font-light-custom text-white text-sm md:text-base">Contact</button>
        </div>

        {/* Right Side: Login and Sign Up Buttons */}
        <div className="flex justify-end space-x-4 w-full md:w-1/3">
          <button className="font-light-custom text-white text-sm md:text-base">Login</button>
          <button className="font-light-custom text-white border-2 rounded-sm p-0.5 px-1 border-blue-300 text-sm md:text-base">Sign Up</button>
        </div>
        
      </div>

      {/* div for handling both the vector images */}
      <div className="relative bg-[#032031] w-full">
        <svg className="h-[256px] w-full md:w-[632px]" viewBox="0 0 633 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.12735 0.00192796C106.973 51.715 206.841 138.53 236.679 227.834C184.171 147.975 83.4445 70.4361 0 44.7609V78.8621C267.403 205.29 189.996 318.851 445.685 457.956H522.57C439.359 420.206 363.474 368.649 314.113 291.81L314.097 291.796V291.786L314.113 291.809C395.407 366.417 504.91 425.423 632.142 457.956H632.889V328.401C491.005 296.931 392.801 248.236 332.893 194.338C407.17 241.128 529.078 281.018 632.889 293.477V244.472C507.567 236.467 374.62 188.126 282.762 127.304C226.526 90.0658 179.897 40.5962 93.2123 0H5.12601L5.12735 0.00192796ZM478.387 99.4389C460.563 99.4389 446.113 109.829 446.113 122.647C446.113 135.465 460.563 145.858 478.387 145.858C496.211 145.858 510.66 135.465 510.66 122.647C510.66 109.829 496.211 99.4389 478.387 99.4389ZM7.79899 132.317C84.5188 175.736 176.547 268.58 159.932 325.3C156.874 324.477 153.635 324.053 150.37 324.049C135.147 324.049 122.808 332.922 122.808 343.87C122.808 354.815 135.147 363.69 150.37 363.69C161.139 363.69 170.442 359.236 174.975 352.759C184.011 343.246 185.731 324.731 184.202 305.836C178.612 236.572 111.45 163.108 7.79899 132.317ZM571.968 138.21C548.109 138.21 528.205 150.385 523.619 166.567C483.732 173.482 428.153 166.432 385.549 151.73C441.024 185.054 502.375 203.289 562.25 208.491C565.391 208.944 568.641 209.186 571.967 209.186C599.222 209.186 621.313 193.295 621.313 173.696C621.313 154.098 599.224 138.209 571.967 138.209L571.968 138.21ZM197.634 256.685C213.275 289.6 219.838 333.465 210.845 367C199.936 372.579 192.811 381.738 192.811 392.097C192.811 409.096 211.974 422.877 235.614 422.877C259.254 422.877 278.416 409.097 278.416 392.097C278.416 386.006 275.949 380.335 271.704 375.556L197.634 256.686V256.685Z" fill="#0D364F"/>
        </svg>

        {/* second SVG here */}
      </div>
    </>
  );
}
