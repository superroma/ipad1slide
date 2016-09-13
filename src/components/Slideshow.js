import React, {Component, PropTypes} from 'react'

const Slide = ({url, onNext}) => (
    <img 
        className="Slide" 
        alt='pic1' src={url}
        onClick={onNext}
    />
)
Slide.propTypes = {
    url: PropTypes.string,
    onNext: PropTypes.func.isRequired
}
class Slideshow extends Component {
    componentDidMount() {
        //debugger
        setInterval(this.props.onNext, 5000)
    }
    render() {
        return (
            <div>
                <Slide url={this.props.urls.get(this.props.slideIndex)} onNext={this.props.onNext}/>
            </div>
        )
    }
}
Slideshow.propTypes = {
    urls: PropTypes.object.isRequired,
    slideIndex: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired
}
export default Slideshow



