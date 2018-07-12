export default {
    UpdateFirst({
        commit,
        state
    }, payload) {
        for (let i in payload) {
            if (state.current[i] != payload[i]) {
                commit('modifyCurrent', {
                    item: i,
                    val: payload[i]
                })
            }
        }
    },
    UpdateSecond({
        commit,
        state
    }, payload) {
        for (let i in payload) {
            if (state.patterns[i] != payload[i]) {
                commit('changePattern', {
                    name: i,
                    val: payload[i]
                })
            }
        }
    },
    newDemoSeconds({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateDemoSeconds', n)
        }
    },

    newFramerate({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateFramerate', n)
        }
    },
    newBrightness({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateBrightness', n)
        }
    },

    newBlending({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateBlending', n)
        }
    },

    newBreathing({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateBreathing', n)
        }
    },

    newTimeDisplay({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateTimeDisplay', n)
        }
    },

    newSecondsAnimate({
        commit,
        state
    }, n) {
        if (state.firstAccess) {
            commit('updateSecondsAnimate', n)
        }
    },

    newColor({
        commit,
        state
    }, payload) {
        if (state.firstAccess) {
            commit('updateColor', payload)
        }
    },

    newPattern({
        commit,
        state
    }, payload) {
        if (state.firstAccess) {
            commit('changePattern', payload)
        }
    },

    incrementIfOdd({
        commit,
        state
    }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },

    incrementAsync({
        commit
    }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}