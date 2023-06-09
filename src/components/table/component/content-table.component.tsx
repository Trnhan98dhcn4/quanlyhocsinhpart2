import ArrayObjectArray from "../../../utils/arrayobjectarray";
import RowsTableShow from "../../../utils/table.utils";

const ContentTableComponent = (props: {
  dataHeader: string[];
  dataTbody: {}[];
  PathRouterLink: string;
  deleteTableData: (children: string) => void;
}) => {
  const { dataTbody, dataHeader, PathRouterLink, deleteTableData } = props;
  const result = ArrayObjectArray(dataTbody);
  const rows = RowsTableShow(result, PathRouterLink, deleteTableData);
  return (
    <div className="d-flex mt-3">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {dataHeader.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ContentTableComponent;
