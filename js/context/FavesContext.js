import React, { Component, createContext } from "react";
import { setFave, getFaves, deleteFave } from "../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { faveIds: [] };
  }
  componentDidMount() {
    this.getFavesIds();
  }

  getFavesIds = async () => {
    try {
      const allFaves = await getFaves();
      console.log(allFaves);
      const faveIds = allFaves.map(fave => {
        if (fave[0] !== "uuid") return fave[0];
      });
      this.setState({ faveIds });
    } catch (e) {
      console.log(e);
    }
  };

  setFaveId = async faveId => {
    try {
      console.log(faveId);
      await setFave(faveId);
      this.getFavesIds();
    } catch (e) {
      console.log(e);
    }
  };

  deleteFaveId = async faveId => {
    try {
      await deleteFave(faveId);
      this.getFavesIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          setFaveId: this.setFaveId,
          deleteFaveId: this.deleteFaveId
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
