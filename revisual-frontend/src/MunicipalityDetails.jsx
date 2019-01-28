import React from 'react';
// import PropTypes from 'prop-types';

function MunicipalityDetails({ match }) {
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  );
}

export default MunicipalityDetails;
