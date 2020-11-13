import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getCharacters,
  setDefaultPage,
  setIsLoading,
} from "../actions/characters";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterList from "../components/CharacterList";
import styles from "../styles";

class Home extends Component {
  constructor() {
    super();
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  async componentDidMount() {
    await this.props.getCharacters();
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { classes, characters } = this.props;

    return (
      <div className={classes.root}>
        <Grid container direction={"row"} spacing={4}>
          <Header classes={classes}></Header>
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
  async handleScroll(event) {
    const pagePadding = 16;
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) !==
        document.documentElement.offsetHeight + pagePadding ||
      this.props.characters.isLoading
    )
      return;
    await this.props.getCharacters(this.props.characters.defaultPage + 1);
  }
}

Home.propTypes = {
  getCharacters: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
  defaultPage: state.characters.defaultPage,
  isLoading: state.characters.isLoading,
  setDefaultPage: state.setDefaultPage,
  setIsLoading: state.setIsLoading,
});
const mapDispatchToProps = (dispatch) => ({
  getCharacters: (page) => {
    dispatch(getCharacters(page));
  },
  setDefaultPage: (page) => {
    dispatch(setDefaultPage(page));
  },
  setIsLoading: () => {
    dispatch(setIsLoading());
  },
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);
