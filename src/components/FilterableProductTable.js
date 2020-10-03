import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    filteredItems: this.props.products?.data,
    checked: false,
  };

  handleSearch = (event) => {
    const { value } = event.target;
    const filteredItems = this.props.products?.data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      filteredItems,
      search: value,
    });
  };

  filterByStock = () => {
    const filteredItems = this.props.products?.data.filter(
      (item) =>
        ((item.stocked && !this.state.checked) || this.state.checked) &&
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
    );

    this.setState((prevState) => ({
      filteredItems,
      checked: !this.state.checked,
    }));
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          setSearch={this.handleSearch}
          checked={this.state.checked}
          filterByStock={this.filterByStock}
        />
        <ProductTable data={this.state.filteredItems || []} />
      </div>
    );
  }
}
