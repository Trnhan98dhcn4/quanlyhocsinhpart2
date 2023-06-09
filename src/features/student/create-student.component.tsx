import { useForm } from "react-hook-form";
import { IStudent } from "../../model/student.model";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { postThunkStudent, putThunkStudent } from "../../thunks/thunk.student";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PathRouter } from "../../constants/path.router";
import { useEffect } from "react";

const CreateStudentComponent = (props: { isUpdate: boolean }) => {
  const { isUpdate } = props;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IStudent>({
    defaultValues: {
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
      address: "",
      BDT: "",
      Nganh: "",
      mssv: "",
      name: "",
      age: "",
      gender: "Male",
    },
  });
  const navigate = useNavigate();
  const { key } = useParams();
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.student.students);
  const Exitinput = students.find((f) => f._id === key);
  useEffect(() => {
    if (Exitinput) {
      setValue("TableResult", Exitinput.TableResult);
      setValue("mssv", Exitinput.mssv);
      setValue("name", Exitinput.name);
      setValue("age", Exitinput.age);
      setValue("gender", Exitinput.gender);
      setValue("address", Exitinput.address);
      setValue("BDT", Exitinput.BDT);
      setValue("Nganh", Exitinput.Nganh);
    }
  }, [key, setValue, students]);

  const onSubmitEvent = (event: IStudent) => {
    if (!isUpdate) {
      dispatch(postThunkStudent(event));
    } else {
      dispatch(putThunkStudent({ id: key, body: event }));
    }
    navigate(PathRouter.student.list);
    window.location.reload();
  };
  console.log(students);
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      <div className="col border border-secondary">
        <Link to={PathRouter.student.list}>Quay Lại</Link>
        <div className="font-weight-bold d-flex justify-content-center">
          <h2>{!isUpdate ? "Add New Student" : "Update Student"}</h2>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <form onSubmit={handleSubmit(onSubmitEvent)}>
            <div className="form-group w-100">
              <label htmlFor="mssv">MSSV:</label>
              <input
                type="text"
                className="form-control"
                id="mssv"
                {...register("mssv")}
                placeholder="Nhập Mã Số Sinh Viên"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-100">
              <label htmlFor="name">Tên Học Sinh:</label>
              <input
                type="text"
                className="form-control"
                {...register("name")}
                id="name"
                placeholder="Nhập Tên Học Sinh"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-100">
              <label htmlFor="age">Tuổi:</label>
              <input
                type="number"
                className="form-control"
                {...register("age")}
                id="age"
                placeholder="Tuổi Học Sinh"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group w-100">
              <label htmlFor="gender">Giới tính:</label>
              <select
                className="form-control"
                id="gender"
                {...register("gender")}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="d-flex  justify-content-center">
              <button type="submit" className="btn btn-primary">
                {!isUpdate ? "Xác nhận" : "Cập Nhập"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStudentComponent;
