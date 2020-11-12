import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCharacters, setDefaultPage } from "../actions/characters";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterList from "../components/CharacterList";
import styles from "../styles";
import { Pagination } from "@material-ui/lab";

class Home extends Component {
  componentDidMount() {
    this.props.getCharacters();
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  render() {
    const { classes, characters, setDefaultPage } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction={"row"} spacing={4}>
          <Header
            classes={classes}
            characters={characters}
            handleChangePage={this.handleChangePage}
          ></Header>
          <CharacterList
            classes={classes}
            characters={characters}
          ></CharacterList>
          <Footer
            classes={classes}
            characters={characters}
            handleChangePage={this.handleChangePage}
          ></Footer>
        </Grid>
      </div>
    );
  }
  handleChangePage(event, value) {
    this.props.setDefaultPage(value);
  }
}

Home.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  setDefaultPage: state.setDefaultPage,
});
const mapDispatchToProps = (dispatch) => ({
  getCharacters: () => {
    dispatch(getCharacters());
  },
  setDefaultPage: (page) => {
    dispatch(setDefaultPage(page));
  },
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
