import { SubmitHandler, useForm } from 'react-hook-form';
import { TypePropsForm, CardUserData } from 'types/types';

function Form(props: TypePropsForm) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardUserData>({
    defaultValues: { name: '' },
  });

  const onSubmit: SubmitHandler<CardUserData> = (data) => {
    const file = data.img?.[0];
    const image = file ? URL.createObjectURL(file) : undefined;
    data.img = image;
    props.onAdd(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input
          type="text"
          {...register('name', {
            required: 'This is reuired.',
            minLength: { value: 3, message: 'Min length 3' },
          })}
          placeholder="Name"
        />
        <span className="errors">{errors.name?.message}</span>
      </label>
      <label>
        <input type="date" {...register('data')} placeholder="Data" />
      </label>
      <label>
        <select {...register('gender', { required: 'You have to choose.' })}>
          <option key="1">{undefined}</option>
          <option key="2" value="man">
            Man
          </option>
          <option key="3" value="woman">
            Woman
          </option>
        </select>
        <span className="errors">{errors.gender?.message}</span>
      </label>
      <div>
        <label>
          Promocod
          <input type="checkbox" {...register('promo')} />
        </label>
      </div>
      <div className="switcher">
        <span>Period: </span>
        <label>
          10 days
          <input type="radio" {...register('period')} value="10 days" checked />
        </label>
        <label>
          20 days
          <input type="radio" {...register('period')} value="20 days" />
        </label>
      </div>
      <label>
        <input type="file" {...register('img')} placeholder="Add file" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
