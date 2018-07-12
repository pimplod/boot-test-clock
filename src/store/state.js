export default {
    firstAccess: false,
    secondAccess: false,
    current: {
        brightness: 125,
        demoSeconds: 20,
        framerate: 90,
        blending: "true",
        breath: "false",
        aSec: "false",
        tDisplay: "Arc",
        red: "#ff0000",
        green: "#00805e",
        blue: "#3812fa"
    },
    patterns: {
        hour: "Color_Waves",
        half: "Juggle",
        quarterAft: "Theater_Chase",
        quarterTo: "Color_Waves",
        timeDisplay: "Arc",
    },

    patternArray: [
        "Pride",
        "Color_Waves",
        "Juggle",
        "Theater_Chase",
        "Sinelon",
        "Bounce"
    ],

    displayArray: [
        "Arc",
        "Point",
        "Third"
    ],

    colorArrays: {
        red: [
            "#FF0000",
            "#F71605",
            "#EF2C0A",
            "#E7420F",
            "#DF5814",
            "#D76E1A",
            "#CF841F",
            "#C79A24",
            "#BFB029"
        ],
        green: [
            "#00805E",
            "#0C8D55",
            "#189A4C",
            "#24A843",
            "#30B53A",
            "#3CC231",
            "#48D028",
            "#54DD1F",
            "#61EB17"
        ],
        blue: [
            "#3812FA",
            "#332DF2",
            "#2F48EB",
            "#2B63E4",
            "#277EDD",
            "#2399D6",
            "#1FB4CF",
            "#1BCFC8",
            "#17EBC1"
        ]
    },
    slideOptions: {
        brightness: {
            eventType: "auto",
            width: "100%",
            height: 8,
            dotSize: 16,
            dotHeight: null,
            dotWidth: null,
            min: 0,
            max: 250,
            interval: 25,
            show: true,
            speed: 0.5,
            disabled: false,
            piecewise: true,
            //piecewiseStyle: false,
            piecewiseLabel: true,
            tooltip: "hover",
            tooltipDir: "top",
            reverse: false,
            data: null,
            clickable: true,
            realTime: false,
            lazy: true,
            formatter: null,
            bgStyle: null,
            sliderStyle: null,
            processStyle: null,
            piecewiseActiveStyle: {
                backgroundColor: "#3498db"
            },
            piecewiseStyle: {
                backgroundColor: "#ccc",
                visibility: "visible",
                width: "12px",
                height: "12px"
            },
            tooltipStyle: null,
            labelStyle: null,
            labelActiveStyle: null
        },
        demoSeconds: {
            eventType: "auto",
            width: "100%",
            height: 8,
            dotSize: 16,
            dotHeight: null,
            dotWidth: null,
            min: 10,
            max: 120,
            interval: 10,
            show: true,
            speed: 0.5,
            disabled: false,
            piecewise: true,
            //piecewiseStyle: false,
            piecewiseLabel: true,
            tooltip: "hover",
            tooltipDir: "top",
            reverse: false,
            data: null,
            clickable: true,
            realTime: false,
            lazy: true,
            formatter: null,
            bgStyle: null,
            sliderStyle: null,
            processStyle: null,
            tooltipStyle: null,
            labelStyle: null,
            labelActiveStyle: null
        },
        framerate: {
            eventType: "auto",
            width: "100%",
            height: 8,
            dotSize: 16,
            dotHeight: null,
            dotWidth: null,
            min: 10,
            max: 250,
            interval: 5,
            show: true,
            speed: 0.5,
            disabled: false,
            piecewise: true,
            piecewiseLabel: true,
            tooltip: "always",
            tooltipDir: "top",
            reverse: false,
            data: null,
            clickable: true,
            realTime: false,
            lazy: true,
            formatter: null,
            bgStyle: null,
            sliderStyle: null,
            processStyle: null,
            piecewiseActiveStyle: {
                backgroundColor: "#3498db"
            },
            piecewiseStyle: {
                backgroundColor: "#ccc",
                visibility: "visible",
                width: "12px",
                height: "12px"
            },
            tooltipStyle: null,
            labelStyle: null,
            labelActiveStyle: null
        }
    }

}