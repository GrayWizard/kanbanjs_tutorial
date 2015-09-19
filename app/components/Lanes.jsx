import React from 'react';
import Lane from './Lane.jsx';

export default class Lanes extends React.Component {
  render() {
    const lanes = this.props.items;

    return <div className='lanes'>{lanes.map(this.renderLane)}</div>;
  }
  renderLane(lane) {
    // new
//    return (
//      <Lane className='lane' key={`lane${lane.id}`}>
//        <Lane.Header id={lane.id} name={lane.name} />
//        <Lane.Notes id={lane.id} notes={lane.notes} />
//      </Lane>
//    );

    // old
    return <Lane className='lane' key={`lane${lane.id}`} {...lane} />;
  }
}