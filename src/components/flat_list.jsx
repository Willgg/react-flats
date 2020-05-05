import React, { Component } from 'react';
import Flat from './flat.jsx'

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map( flat => {
      return (
        <Flat
          key={flat.name}
          flat={flat}
          selectFlat={props.selectFlat}
          selected={flat.name == props.selectedFlat.name}
        />
      )
    });
  }


  return (
    <div className="flat-list">
      { renderList() }
    </div>
  );
}

export default FlatList;
