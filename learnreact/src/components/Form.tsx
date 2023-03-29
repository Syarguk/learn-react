import { FormEvent, createRef } from 'react';
import { TypePropsForm, CardUserData } from 'types/types';

function Form(props: TypePropsForm) {
  const name = createRef<HTMLInputElement>();
  const data = createRef<HTMLInputElement>();
  const gender = createRef<HTMLSelectElement>();
  const promo = createRef<HTMLInputElement>();
  const period1 = createRef<HTMLInputElement>();
  const period2 = createRef<HTMLInputElement>();
  const fileF = createRef<HTMLInputElement>();
  const formRef = createRef<HTMLFormElement>();

  const createUser = () => {
    const file = fileF.current?.files?.[0];
    const user = {
      name: name.current?.value,
      data: data.current?.value,
      gender: gender.current?.value,
      promo: promo.current?.checked,
      period: period1.current?.checked
        ? period1.current?.value
        : period2.current?.checked
        ? period2.current?.value
        : undefined,
      img: file ? URL.createObjectURL(file) : undefined,
    };
    return user;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: CardUserData = createUser();
    props.onAdd(user);
    formRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        <input type="text" ref={name} placeholder="Name" />
      </label>
      <label>
        <input type="date" ref={data} placeholder="Data" />
      </label>
      <label>
        <select ref={gender}>
          <option key="1" value="man">
            Man
          </option>
          <option key="2" value="woman">
            Woman
          </option>
        </select>
      </label>
      <div>
        <label>
          Promocod
          <input type="checkbox" ref={promo} />
        </label>
      </div>
      <div className="switcher">
        <span>Period: </span>
        <label>
          10 days
          <input type="radio" name="switch" value="10 days" ref={period1} />
        </label>
        <label>
          20 days
          <input type="radio" name="switch" value="20 days" ref={period2} />
        </label>
      </div>
      <label>
        <input type="file" ref={fileF} placeholder="Add file" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
