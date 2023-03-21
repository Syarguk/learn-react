import React from 'react';

class InputSearch extends React.Component<{ getstor: string }, { curValue: string }> {
  constructor(props: { getstor: string }) {
    super(props);
    this.state = {
      curValue: props.getstor,
    };
  }

  onUpdateSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    localStorage.setItem('inpVal', target.value);
    this.setState({ curValue: target.value });
  };

  render() {
    return (
      <div className="search-wrap" data-testid="search">
        <input
          className="search"
          type="text"
          onChange={this.onUpdateSearch}
          value={this.state.curValue}
        />
      </div>
    );
  }
}
export default InputSearch;
