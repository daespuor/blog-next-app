import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  containers: {
    content: {
      maxWidth: "960px",
      margin: "0 auto",
    },
    postPreview: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
      marginBottom: "10px",
    },
    hero: {
      padding: "2rem",
      backgroundColor: "#c4c4c4",
      border: "1px solid grey",
      borderRadius: ".5rem",
    },
    nav: {
      margin: "10px auto 10px",
      padding: "10px 0",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      borderBottom: "1px solid #ddd",
      "& a": {
        marginLeft: "12px",
      },
      "& .logo": {
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    signInButton: {
      background: "#000",
      color: "#fff",
      borderRadius: ".5em",
      padding: "1.5rem",
      cursor: "pointer",
      "& svg": {
        marginRight: "1em",
      },
    },
    footer: {
      display: "block",
      textAlign: "center",
      padding: "30px 0",
      marginTop: "60px",
      color: "#777",
      borderTop: "1px solid #eaeaea",
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
