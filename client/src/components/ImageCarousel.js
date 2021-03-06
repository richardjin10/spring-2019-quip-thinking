import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class ImageCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        index: 0,
        direction: null,
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
      const { index, direction } = this.state;

      return (
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} style={{width:"600px", height:"400px"}}>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./QT1.png')} alt="first slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./QT2.png')} alt="second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./QT3.png')} alt="third slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./QT4.png')} alt="fourth slide"/>
          </Carousel.Item>
        </Carousel>
      );
    }
}
