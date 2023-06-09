import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { FormComponent } from "../../../components";
import { IStudent } from "../../../model/student.model";
import {
  getDetailThunkStudent,
  putThunkStudent,
} from "../../../thunks/thunk.student";
import formatDate from "../../../utils/formatDate";
import TabComponent from "./tab.component";
import { PathRouter } from "../../../constants/path.router";

const DetailsComponent = () => {
  // redux toolkit
  const student = useAppSelector((state) => state.student.students);
  const loading = useAppSelector((state) => state.student.loading);
  const error = useAppSelector((state) => state.student.error);
  const dispatch = useAppDispatch();
  //react-router-dom
  const { _dt } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  //react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IStudent>({
    defaultValues: {
      mssv: "",
      name: "",
      gender: "",
      age: "",
      address: "",
      BDT: "",
      Nganh: "",
      TableResult: {
        Toan: {
          KT_15p: "null",
          KT_1T: "null",
          KT_CK: "null",
          Tong: "0",
        },
        Ly: {
          KT_15p: "null",
          KT_1T: "null",
          KT_CK: "null",
          Tong: "0",
        },
        Hoa: {
          KT_15p: "null",
          KT_1T: "null",
          KT_CK: "null",
          Tong: "0",
        },
        Van: {
          KT_15p: "null",
          KT_1T: "null",
          KT_CK: "null",
          Tong: "0",
        },
        TA: {
          KT_15p: "null",
          KT_1T: "null",
          KT_CK: "null",
          Tong: "0",
        },
      },
    },
  });
  const Exitinput = student.filter((f) => f._id === _dt);

  useEffect(() => {
    if (Exitinput) {
      setValue("TableResult", Exitinput[0].TableResult);
      setValue("mssv", Exitinput[0].mssv);
      setValue("name", Exitinput[0].name);
      setValue("age", Exitinput[0].age);
      setValue("gender", Exitinput[0].gender);
      setValue("address", Exitinput[0].address);
      setValue("BDT", Exitinput[0].BDT);
      setValue("Nganh", Exitinput[0].Nganh);
    }
    dispatch(getDetailThunkStudent(`${_dt}`));
  }, [dispatch, _dt, Exitinput, setValue]);

  if (loading) {
    return <div style={{ position: "absolute" }}>Loading...</div>;
  }
  if (error) {
    return <div> Error: {error}</div>;
  }
  const onSubmitForm = (event: IStudent) => {
    dispatch(putThunkStudent({ id: _dt, body: event }));
    alert("cap nhap phai ra ngaoi zo lai");
    navigate(PathRouter.student.list);
  };

  return (
    <>
      <TabComponent detail={_dt} />
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">MSSV: </th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("mssv")} />
                    </td>
                  ) : (
                    <td>{Exitinput[0].mssv}</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Họ Tên: </th>

                  {showForm ? (
                    <td>
                      <FormComponent register={register("name")} />
                    </td>
                  ) : (
                    <td>{Exitinput[0].name}</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Giới tính: </th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("gender")} />
                    </td>
                  ) : (
                    <td>{Exitinput[0].gender}</td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Tuổi: </th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("age")} />
                    </td>
                  ) : (
                    <td>{Exitinput[0].age}</td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row"> Đỉa chỉ trú:</th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("address")} />
                    </td>
                  ) : (
                    <td>
                      {" "}
                      {Exitinput[0].address
                        ? Exitinput[0].address
                        : "Chưa Cập Nhập"}
                    </td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Bậc Đào Tạo: </th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("BDT")} />
                    </td>
                  ) : (
                    <td>
                      {Exitinput[0].BDT ? Exitinput[0].BDT : "Chưa Cập Nhập"}
                    </td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Ngành: </th>
                  {showForm ? (
                    <td>
                      <FormComponent register={register("Nganh")} />
                    </td>
                  ) : (
                    <td>
                      {" "}
                      {Exitinput[0].Nganh
                        ? Exitinput[0].Nganh
                        : "Chưa Cập Nhập"}
                    </td>
                  )}
                </tr>
                <tr>
                  <th scope="row">Tạo vào ngày: </th>
                  <td>{formatDate(Exitinput[0].createdAt)}</td>
                </tr>
                <tr>
                  <th scope="row">Cập nhập vào ngày:</th>
                  <td>{formatDate(Exitinput[0].updatedAt)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-content-center">
        <form id="form-all-update" onSubmit={handleSubmit(onSubmitForm)}>
          {showForm ? (
            <div className="row mt-2">
              <button className="btn btn-primary mr-2" type="submit">
                Cập Nhập
              </button>
              <button
                className="btn btn-danger "
                onClick={() => {
                  setShowForm(false);
                }}
              >
                Thoat
              </button>
            </div>
          ) : (
            <button
              className="btn btn-primary mt-2"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Cập Nhập Thêm
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default DetailsComponent;
