// getters are functions
export default {

    displayArray: state => state.displayArray,
    patternArray: state => state.patternArray,
    redArray: state => state.colorArrays.red,
    greenArray: state => state.colorArrays.green,
    blueArray: state => state.colorArrays.blue,
    brightOptions: state => state.slideOptions.brightness,
    demoOptions: state => state.slideOptions.demoSeconds
}