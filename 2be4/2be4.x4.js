// 2be4.x4.js
// ID: X414-2BE4-X4CORE-01

import ZeroThreeZero from "../ZeroThree/z3.zero.js";

const X4_2be4 = {
    id: "X414-2BE4-X4CORE-01",
    path: "./2be4/2be4.core.json",

    write(data) {
        const fs = window.require("fs");
        fs.writeFileSync(this.path, JSON.stringify(data, null, 2));
    },

    setX4(font, color, effect) {
        const payload = {
            id: "2BE4-X414-EVO1-R01",
            source: "X4-1-4",
            zeroRef: {
                zero: ZeroThreeZero.getZero(),
                one: ZeroThreeZero.getOne()
            },
            x4: {
                font: font || "X4-Default",
                color: color || "#ff00ff",
                effect: effect || "pulse"
            }
        };

        this.write(payload);
    }
};

export default X4_2be4;

