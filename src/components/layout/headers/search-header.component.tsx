const SearchHeaderComponent = () => {
  return (
    <div className="col d-flex justify-content-center w-100">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          //   {...register("q", {
          //     required: true,
          //   })}
          //   onFocus={() => setShowResult(true)}
          //   onChange={handleInputChange}
          autoComplete="off"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchHeaderComponent;
