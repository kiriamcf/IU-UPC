"use client";

import * as React from "react";
import Slider from "@mui/material/Slider";

function PriceFilter({ value, setValue }) {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <Slider
                className="w-[90%]"
                min={0}
                max={25}
                value={value}
                onChange={handleChange}
                sx={{
                    color: "#BC8D4B",
                    "& .MuiSlider-track": {
                        border: "none",
                    },
                    "& .MuiSlider-thumb": {
                        backgroundColor: "#fff",
                        border: "1px solid currentColor",
                        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                            boxShadow: "inherit",
                        },
                        "&:before": {
                            display: "none",
                        },
                    },
                }}
            />
            <div>
                Des de {value[0]}€ a {value[1]}€
            </div>
        </div>
    );
}

export default PriceFilter;
