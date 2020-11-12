const styles = (theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      //marginTop: theme.spacing(2),
    },
  },
  rootColor: {
    color: "#6b6b6b",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#6d6d6d",
    position: "relative",
    height: "200px",
    overflowY: "hidden",
    marginBottom: "30px",
  },
  marginBottom: {
    marginBottom: "30px",
  },
  banner: {
    width: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    filter: "blur(6px)",
    zIndex: "0",
  },
  bannerH2: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
  },
  episodeListItem: {
    paddingLeft: "0",
  },
  paperNoPadding: {
    color: "#6d6d6d",
  },
  customHeight: {
    maxHeight: "212px",
    overflowY: "scroll",
    textAlign: "left",
    border: "none",
    boxShadow: "none",
    marginTop: "20px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  custom: {
    textAlign: "left",
    border: "none",
    boxShadow: "none",
    marginTop: "20px",
  },
  image: {
    minWidth: "100px",
    width: "100%",
  },
  noMargin: {
    margin: "0 auto",
    width: "calc(100% - 20px)",
  },
  auto: {
    textTransform: "lowercase",
  },
  characterNameH4: {
    paddingLeft: "16px",
    textAlign: "left",
  },
  gridNoTopPadding: {
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  },
  darkList: {
    backgroundColor: "#efefef",
    paddingTop: "0",
    paddingBottom: "0",
  },
  inlinePagination: {
    display: "inline-block",
    margin: "20px 0",
  },
  listTransitionEnter: {
    top: 0,
    width: "120px",
    maxHeight: "40px",
    color: "transparent",
    backgroundColor: "#5a564c",
  },
  listTransitionEnterActive: {
    top: "45px",
    width: "200px",
    maxHeight: "200px",
    backgroundColor: "#9e8949",
    transition: "all 400ms",
  },
  listTransitionExit: {
    top: "45px",
    width: "200px",
    maxHeight: "200px",
    backgroundColor: "#9e8949",
  },
  listTransitionExitActive: {
    top: 0,
    width: "120px",
    maxHeight: "40px",
    color: "transparent",
    backgroundColor: "#5a564c",
    transition: "all 400ms",
  },
});

export default styles;
