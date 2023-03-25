import { Component } from 'react';

interface IFD {
  name: string;
  data: string;
}
class ItemFD extends Component<{ name: string; data: string }> {
  constructor(props: IFD) {
    super(props);
  }
  render() {
    const { name, data } = this.props;
    return (
      <div className="wrap-item-fd">
        <h3>User {name}</h3>
        <p>Data {data}</p>
      </div>
    );
  }
}

export default ItemFD;
