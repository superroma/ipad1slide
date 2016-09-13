import {connect} from 'react-redux'
import {next} from './actions'
import Slideshow from './components/Slideshow'

const mapStateToProps = (state) => ({
    urls: state.get('urls'),
    slideIndex: state.get('slideIndex')
})
const mapDispatchToProps = (dispatch) => ({
    onNext: () => { dispatch(next()) }
})

const ClickableSlideshow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slideshow)

export default ClickableSlideshow