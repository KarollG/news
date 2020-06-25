import React from 'react';
import Neww from './Neww';
import PropTypes from 'prop-types';

const ListNews = ({news}) => {
    return (
        <div className="row">
            {news.map(neww => (
                <Neww
                    key={neww.url}
                    neww={neww}
                />
            ))}
        </div>
     );
}

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;