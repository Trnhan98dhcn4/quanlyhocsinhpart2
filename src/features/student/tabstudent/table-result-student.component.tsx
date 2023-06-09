import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getDetailThunkStudent,
  putThunkStudent,
} from "../../../thunks/thunk.student";
import TabComponent from "./tab.component";
import { FormComponent } from "../../../components";
import { useForm } from "react-hook-form";
import { IStudent } from "../../../model/student.model";
import { PathRouter } from "../../../constants/path.router";

const TableResultStudentComponent = () => {
  const { _rs } = useParams();
  const student = useAppSelector((state) => state.student.students);
  const loading = useAppSelector((state) => state.student.loading);
  const error = useAppSelector((state) => state.student.error);
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setValue } = useForm<IStudent>({
    defaultValues: {
      mssv: "",
      name: "",
      age: "",
      gender: "",
      address: "",
      BDT: "",
      Nganh: "",
      TableResult: {
        Toan: {
          KT_15p: "",
          KT_1T: "",
          KT_CK: "",
          Tong: "0",
        },
        Ly: {
          KT_15p: "",
          KT_1T: "",
          KT_CK: "",
          Tong: "0",
        },
        Hoa: {
          KT_15p: "",
          KT_1T: "",
          KT_CK: "",
          Tong: "0",
        },
        Van: {
          KT_15p: "",
          KT_1T: "",
          KT_CK: "",
          Tong: "0",
        },
        TA: {
          KT_15p: "",
          KT_1T: "",
          KT_CK: "",
          Tong: "0",
        },
      },
    },
  });
  const Exitinput = student.filter((f) => f._id === _rs);
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
    dispatch(getDetailThunkStudent(`${_rs}`));
  }, [dispatch, _rs]);

  if (loading) {
    return <div style={{ position: "absolute" }}>Loading...</div>;
  }
  if (error) {
    return <div> Error: {error}</div>;
  }

  const HandleOnSubmit = (event: IStudent) => {
    dispatch(putThunkStudent({ id: _rs, body: event }));
    alert("cap nhap phai ra ngaoi zo lai");
    navigate(PathRouter.student.list);
  };
  return (
    <>
      <TabComponent detail={_rs} />
      <table className="table table-bordered container mt-2">
        <thead>
          <tr>
            <th scope="col">Tên Môn Học</th>
            <th scope="col">KT-15P</th>
            <th scope="col">KT-1T</th>
            <th scope="col">KT-CK</th>
            <th scope="col">Tong</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Toan:</th>
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Toan.KT_15p")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Toan.KT_15p}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Toan.KT_1T")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Toan.KT_1T}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Toan.KT_CK")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Toan.KT_CK}</td>
            )}
            <td>
              {(
                (+Exitinput[0].TableResult.Toan.KT_15p +
                  +Exitinput[0].TableResult.Toan.KT_1T * 2 +
                  +Exitinput[0].TableResult.Toan.KT_CK * 3) /
                6
              ).toFixed(2)}
            </td>
          </tr>

          <tr>
            <th>Ly:</th>
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Ly.KT_15p")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Ly.KT_15p}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Ly.KT_1T")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Ly.KT_1T}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Ly.KT_CK")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Ly.KT_CK}</td>
            )}

            <td>
              {(
                (+Exitinput[0].TableResult.Ly.KT_15p +
                  +Exitinput[0].TableResult.Ly.KT_1T * 2 +
                  +Exitinput[0].TableResult.Ly.KT_CK * 3) /
                6
              ).toFixed(2)}
            </td>
          </tr>
          <tr>
            <th>Hoa:</th>
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Hoa.KT_15p")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Hoa.KT_15p}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Hoa.KT_1T")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Hoa.KT_1T}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Hoa.KT_CK")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Hoa.KT_CK}</td>
            )}
            <td>
              {(
                (+Exitinput[0].TableResult.Hoa.KT_15p +
                  +Exitinput[0].TableResult.Hoa.KT_1T * 2 +
                  +Exitinput[0].TableResult.Hoa.KT_CK * 3) /
                6
              ).toFixed(2)}
            </td>
          </tr>

          <tr>
            <th>Van:</th>
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Van.KT_15p")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Van.KT_15p}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Van.KT_1T")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Van.KT_1T}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.Van.KT_CK")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.Van.KT_CK}</td>
            )}
            <td>
              {(
                (+Exitinput[0].TableResult.Van.KT_15p +
                  +Exitinput[0].TableResult.Van.KT_1T * 2 +
                  +Exitinput[0].TableResult.Van.KT_CK * 3) /
                6
              ).toFixed(2)}
            </td>
          </tr>
          <tr>
            <th>TA:</th>
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.TA.KT_15p")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.TA.KT_15p}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.TA.KT_1T")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.TA.KT_1T}</td>
            )}
            {showForm ? (
              <td>
                <FormComponent register={register("TableResult.TA.KT_CK")} />
              </td>
            ) : (
              <td>{Exitinput[0].TableResult.TA.KT_CK}</td>
            )}

            <td>
              {(
                (+Exitinput[0].TableResult.TA.KT_15p +
                  +Exitinput[0].TableResult.TA.KT_1T * 2 +
                  +Exitinput[0].TableResult.TA.KT_CK * 3) /
                6
              ).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit(HandleOnSubmit)} id="form-all-update">
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
              Nhập Điểm
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default TableResultStudentComponent;
