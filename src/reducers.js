//import {combineReducers} from 'redux'
import {List, Map} from 'immutable'

// const urls = List([
//     'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
//     'http://i.dailymail.co.uk/i/pix/2015/12/03/18/2F085F8100000578-0-image-a-12_1449166064325.jpg',
//     'http://img.huffingtonpost.com/asset/scalefit_630_noupscale/561549ff1400002900bfc5a7.jpeg',
// ])
const initialState = Map({
    slideIndex:0, 
    urls: List()
})
const nextSlide = (state=initialState, action) => {
    switch (action.type) {
        case 'NEXT': {
            //debugger
            let nextIndex = state.get('slideIndex') + 1
            if (nextIndex === state.get('urls').size) {
                nextIndex = 0
            }
            return (state.set('slideIndex', nextIndex))
        }
        case 'SET_URLS': {
            return (state.set('urls', List(action.urls)))
        }
        default: return state
    }
}

export default nextSlide