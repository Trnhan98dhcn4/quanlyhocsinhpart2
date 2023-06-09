const FormComponent = (props: { register: any }) => {
  const { register } = props;
  return (
    <div className="form-group">
      <input
        type="text"
        {...register}
        className="form-control"
        placeholder="Nhập vào đây"
        form="form-all-update"
      />
    </div>
  );
};

export default FormComponent;
