export default theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    maxWidth: theme.spacing.unit * 20,
    fontFamily: "OstrichSansBlack",
    fontSize: theme.spacing.unit * 4,
    transition: "all 0.15s",
    color: "#ffffff",
    "&:hover": {
      color: "#ffebb2",
      fontSize: theme.spacing.unit * 5,
      cursor: "pointer",
    },
  },

});
