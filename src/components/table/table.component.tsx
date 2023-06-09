import ContentTableComponent from "./component/content-table.component";
import HeaderTableComponent from "./component/header-table.component";

const TableComponent = (props: {
  dataHeader: string[];
  dataTbody: {}[];
  PathRouterLink: string;
  deleteTableData: (children: string) => void;
}) => {
  const { dataHeader, dataTbody, PathRouterLink, deleteTableData } = props;

  return (
    <div>
      <HeaderTableComponent />
      <ContentTableComponent
        dataHeader={dataHeader}
        dataTbody={dataTbody}
        PathRouterLink={PathRouterLink}
        deleteTableData={deleteTableData}
      />
    </div>
  );
};

export default TableComponent;
