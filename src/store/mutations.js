// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
export default {
    first(state) {
        state.firstAccess = true
    },

    second(state) {
        state.secondAccess = true
    },

    updateBrightness(state, n) {
        state.current.brightness = n
    },

    updateBlending(state, n) {
        state.current.blending = n
    },

    updateBreathing(state, n) {
        state.current.breath = n
    },

    updateTimeDisplay(state, n) {
        state.current.tDisplay = n
    },

    updateSecondsAnimate(state, n) {
        state.current.aSec = n
    },

    updateColor(state, payload) {
        state.current[payload.name] = payload.val
    },

    changePattern(state, payload) {
        state.patterns[payload.name] = payload.val
    },

    updateCurrent(state, payload) {
        for (let i in payload) {
            if (state.current[i] !== payload[i]) {
                state.current[i] = payload[i]
            }
        }
    },
    addColor(state, payload) {
        state.colorArrays[payload.name].push(payload.val)
    },
    updateDemoSeconds(state, n) {
        state.current.demoSeconds = n
    },
    updateFramerate(state, n) {
        state.current.framerate = n
    },

    modifyCurrent(state, payload) {
        state.current[payload.item] = payload.val
    }

}