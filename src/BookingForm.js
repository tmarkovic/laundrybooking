import React, {Component} from "react";
import {connect} from 'react-redux'
import {setApartmentId} from './actions';

class BookingForm extends Component {

  constructor(props) {
    super(props);
    this.handleApartmentCodeChanged = this.handleApartmentCodeChanged.bind(this);
  }

  handleRoomIdChanged(e) {

  }

  handleApartmentCodeChanged(e) {
    this.props.setApartmentId(e.target.value);
  }

  render() {

    return (
      <div className="flex h-full items-left mb-4 md:flex flex-col">
        <div className="flex flex-col mb-4 w-full">
          <label className="mb-2 uppercase text-left font-bold text-md text-grey-darkest" htmlFor="apartment_code">apartment code</label>
          <input onChange={this.handleApartmentCodeChanged} type="text" className="border py-2 px-3 text-grey-darkest" name="apartment_code" id="apartment_code" />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label className="mb-2 text-left uppercase font-bold text-md text-grey-darkest" htmlFor="roomid">Laundry room</label>
          <div className="inline-flex">
            <button onClick={this.handleRoomIdChanged} value="1" className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-l">
              Room 1</button>
            <button onClick={this.handleRoomIdChanged} value="2" className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded-r">
              Room 2
  </button>
          </div>

        </div>

        <div className="flex w-full mt-auto">
          <button className="block bg-teal hover:bg-teal-dark text-white uppercase text-md mx-auto p-4 rounded" type="submit">Book time</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setApartmentId: (id) => dispatch(setApartmentId(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)
