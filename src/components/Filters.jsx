import Remove from "../../public/assets/images/icon-remove.svg";
import PropTypes from "prop-types";
const Filters = ({ filterButtons, setFiltereButtons }) => {
  // remove onclick
  const buttonRemoveHandler = (index) => {
    const copyFilter = [...filterButtons];
    copyFilter.splice(index, 1);
    setFiltereButtons(copyFilter);
  };
  //clear onclick
  const clearHandler = () => {
    setFiltereButtons([]);
  };
  return (
    <div className="filters">
      <div className="filter-items">
        {filterButtons.map((button, index) => {
          return (
            <div className="filter-button" key={button.value}>
              <h3>{button.value}</h3>
              <div
                className="remove-icon-div"
                onClick={() => buttonRemoveHandler(index)}
              >
                <img className="remove-icon" src={Remove} alt="remove icon" />
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => clearHandler()} className="clear">
        Clear
      </button>
    </div>
  );
};
Filters.propTypes = {
  filterButtons: PropTypes.array.isRequired,
  setFiltereButtons: PropTypes.func.isRequired,
};
export default Filters;
