import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  const [value, setValue] = React.useState(15); // initialize the state with default value

  const handleSliderChange = (event, newValue) => {
    setValue(newValue); // update the state with the new value
  };
  return (
    <div className="mb-16">
      <Box sx={{ width: 900, height: 27 }}>
        <div
          className="text-white mb-3 "
          style={{
            fontSize: "55px",
            fontWeight: 700,
          }}
        >
          {value} attendees{" "}
        </div>
        <Slider
          value={value}
          aria-label="Temperature"
          onChange={handleSliderChange}
          defaultValue={15}
          getAriaValueText={valuetext}
          style={{ color: "#683F99" }}
          sx={{ height: 25 }}
        />
      </Box>
    </div>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function ColorSlider() {
//   const [value, setValue] = React.useState(30); // initialize the state with default value

//   const handleSliderChange = (event, newValue) => {
//     setValue(newValue); // update the state with the new value
//   };

//   return (
//     <Box sx={{ width: 300 }}>

//       <Slider
//         aria-label="Temperature"
//         value={value} // set the value prop to the state value
//         onChange={handleSliderChange} // call the handler function on change
//         getAriaValueText={valuetext}
//         color="secondary"
//         sx={{ height: 8 }}
//       />
//       <div>{valuetext(value)}</div> {/* display the current value */}
//     </Box>
//   );
// }
