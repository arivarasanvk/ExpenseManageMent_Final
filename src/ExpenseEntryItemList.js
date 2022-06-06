import React from "react";
import "./ExpenseEntryItemList.css";
import ExpenseForm from "./ExpenseForm";

class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      parentCallBack: this.childToParent,
      editProductVals: null,
      crntEvent: null
    };
  }

  childToParent = (childData) => {
    this.setState((state, props) => {
      let itemsCrnt = [];
      itemsCrnt.push(childData);
      state.items.forEach((item) => {
        itemsCrnt.push(item);
      });
      let newState = { items: itemsCrnt };
      return newState;
    });
  };

  handleDelete = (idVal, e) => {
    e.preventDefault();
    // console.log("ssp is "+idVal+"  e val is "+e.target);
    this.setState((state, props) => {
      let items = [];
      state.items.forEach((item) => {
        if (item.id != idVal) items.push(item);
      });

      let newState = { items: items };
      return newState;
    });
  };

  setValShowEditComp = (idVal, e) => {
    let itemEdit = [];
    {
      this.state.items.forEach((item) => {
        if (item.id === idVal) itemEdit = item;
      });
    }

    this.handleDelete(idVal, e);

    console.log("values are", itemEdit);

    this.setState((state, props) => {
      let newState = {
        editProductVals: itemEdit,
        crntEvent: e
      };
      return newState;
    });
  };

  render() {
    // console.log(props);
    // console.log("tsis vals props ", this.props);
    // console.log("tsis vals state ", this.state);

    const lists = this.state.items.map((item) => (
      <tr key={item.id} id={item.id}>
        <td> {item.name} </td>
        <td>
          {" "}
          {item.amount} ({item.currencyType}){" "}
        </td>
        <td> {item.description} </td>
        <td>
          <a
            href={item.id}
            onClick={(e) => this.setValShowEditComp(item.id, e)}
          >
            Edit
          </a>
          /
          <a href={item.id} onClick={(e) => this.handleDelete(item.id, e)}>
            Remove
          </a>
        </td>
      </tr>
    ));

    console.log("tsis vals state OO", this.state);
    // const msg = this.state.msg;

    return (
      <div align="center">
        <div>
          <h1>Expense Management</h1>
        </div>

        <ExpenseForm stateValues={this.state} />

        <table>
          <thead>
            <tr>
              <th>ProductName</th>
              <th>Price</th>
              <th>Description</th>
              <th>Edit/Remove</th>
            </tr>
          </thead>
          <tbody>{lists}</tbody>
        </table>
      </div>
    );
  }
}

export default ExpenseEntryItemList;
