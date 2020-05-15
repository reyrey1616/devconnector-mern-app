import React, { Fragment, useEffect } from 'react';
import Spinner from '../layout/spinner.component';
import PropTypes from 'prop-types';
import { connect } from 'reacr-redux';
import { getProfiles } from '../../actions/profile';

const Profile = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, []);

  return <div></div>;
};

Profile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profile);
