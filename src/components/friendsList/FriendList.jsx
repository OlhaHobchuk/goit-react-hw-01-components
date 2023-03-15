import React from 'react';

import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendslist}>
            {friends.map(FriendListItem)}
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

