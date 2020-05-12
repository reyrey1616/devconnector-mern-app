import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
const Experience = ({ experience }) => {
  const experiences = experience.map((exp, key) => {
    return (
      <tr key={exp._id}>
        <td> {exp.company}</td>
        <td className='hide-sm'> {exp.title}</td>
        <td>
          {' '}
          <Moment format='YYYY/MM/DD' date={exp.from} />-{' '}
          {exp.to === null ? (
            'Now'
          ) : (
            <Moment format='YYYY/MM/DD' date={exp.to} />
          )}
        </td>
        <td>
          <button className='btn btn-danger'> Delete </button>
        </td>
      </tr>
    );
  });
  return (
    <Fragment>
      <h2 className='my-2'> Experience Credentials </h2>
      <table className='table'>
        <thead>
          <tr>
            <th> Company</th>
            <th className='hide-sm'> Title </th>
            <th className='hide-sm'> Years</th>
            <th />
          </tr>
        </thead>

        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: Proptypes.array.isRequired,
};

export default connect(null)(Experience);
