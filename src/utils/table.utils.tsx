import formatDate from "./formatDate";
import { ModalComponent } from "../components";
import { Link } from "react-router-dom";
import { useState } from "react";

const RowsTableShow = (
  data: {}[],
  PathRouterLink: string,
  deleteTableData: (children: string) => void
) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  return (
    <>
      {data.map(
        (
          [
            tableResult,
            _id,
            mssv,
            name,
            age,
            gender,
            address,
            BDT,
            Nganh,
            createdAt,
            updatedAt,
          ]: any,
          index: number
        ) => {
          console.log(_id);
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{mssv}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{gender}</td>
              <td>
                {updatedAt > createdAt
                  ? formatDate(updatedAt)
                  : formatDate(createdAt)}
              </td>
              <td>
                <Link
                  to={PathRouterLink + "/" + _id + "/detail"}
                  className="mr-2 btn btn-primary"
                >
                  Xem
                </Link>
                <Link
                  to={PathRouterLink + "/" + _id + "/edit"}
                  className="mr-2 btn btn-info"
                >
                  Cập Nhập
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    setShowModal(true);
                    setDeleteId(_id);
                  }}
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Xóa
                </button>
              </td>
            </tr>
          );
        }
      )}
      {showModal && (
        <ModalComponent deleteId={deleteId} deleteTableData={deleteTableData} />
      )}
    </>
  );
};

export default RowsTableShow;
