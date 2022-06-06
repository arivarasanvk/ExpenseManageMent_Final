import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.pNameInputRef = React.createRef();
    this.priceInputRef = React.createRef();
    this.descInputRef = React.createRef();
    this.crncyTypeInputRef = React.createRef();
  }

  onAddValues = (e) => {
    e.preventDefault();
    let itemVal = {};
    itemVal.id = new Date().getTime();
    itemVal.name = this.pNameInputRef.current.value;
    itemVal.amount = this.priceInputRef.current.value;
    itemVal.description = this.descInputRef.current.value;
    itemVal.currencyType = this.crncyTypeInputRef.current.value;

    if (itemVal.name === "") {
      alert("Product Name is Mandatory");
    } else if (itemVal.amount === "") {
      alert("Price of the product is Mandatory");
    } else {
      this.props.stateValues.parentCallBack(itemVal);

      //Clears the values
      this.pNameInputRef.current.value = "";
      this.priceInputRef.current.value = "";
      this.descInputRef.current.value = "";
      this.crncyTypeInputRef.current.value = "₹";

      this.props.stateValues.editProductVals = null;
      // this.props.stateValues.editProductVals.name = "";
      // this.props.stateValues.editProductVals.amount = "";
      // this.props.stateValues.editProductVals.description = "";
    }
  };

  onEditForm = (e) => {
    if (e === null || this.props.stateValues.editProductVals === null) {
      return;
    }
    e.preventDefault();

    this.pNameInputRef.current.value = this.props.stateValues.editProductVals.name;
    this.priceInputRef.current.value = this.props.stateValues.editProductVals.amount;
    this.descInputRef.current.value = this.props.stateValues.editProductVals.description;
    this.crncyTypeInputRef.current.value = this.props.stateValues.editProductVals.currencyType;
  };

  render() {
    this.onEditForm(this.props.stateValues.crntEvent);
    return (
      <div id="expenseForm">
        <form>
          <table>
            <tbody>
              <tr>
                <td align="right">Product Name:</td>
                <td align="left">
                  <input
                    type="text"
                    required
                    name="p_name"
                    ref={this.pNameInputRef}
                  />
                </td>
              </tr>
              <tr>
                <td align="right">Product Price:</td>
                <td align="left">
                  <input
                    type="number"
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                    name="p_price"
                    ref={this.priceInputRef}
                  />

                  <select ref={this.crncyTypeInputRef}>
                    <option value="₹">₹</option>
                    <option value="$">$</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td align="right">Description:</td>
                <td align="left">
                  <input
                    type="textArea"
                    name="p_desciption"
                    ref={this.descInputRef}
                  />
                </td>
              </tr>
              <tr align="center"></tr>
            </tbody>
          </table>
        </form>
        <button
          type="submit"
          text-align="center"
          onClick={(e) => {
            this.onAddValues(e);
          }}
        >
          Add
        </button>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ExpenseForm;
