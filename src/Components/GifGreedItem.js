import PropTypes from 'prop-types';
export const GifGreedItem = ({ title, url }) => {
    return (
        <div className="card ">
            <p>{title}</p>
            <img src={url} alt={title} />
        </div>
    )
}

GifGreedItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
    