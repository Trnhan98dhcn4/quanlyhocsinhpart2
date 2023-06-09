const ModalComponent = (props: {
  deleteId: string;
  deleteTableData: (children: string) => void;
}) => {
  const { deleteId, deleteTableData } = props;
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Bạn có muốn xóa Học Sinh Này Không??
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Xóa Là Mất luôn tất cả dữ liệu của học sinh này ^-^
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteTableData(deleteId);
                window.location.reload();
              }}
              data-dismiss="modal"
            >
              Xóa
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Thoát
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
