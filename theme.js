import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  containers: {
    content: {
      maxWidth: "960px",
      margin: "0 auto",
    },
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
    },
    page: {
      width: "100%",
      maxWidth: "960px",
      m: 0,
      mx: "auto",
    },
    nav: {
      margin: "10px auto 80px",
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
    a: {
      color: "#333",
      textDecoration: "none",
      cursor: "pointer",
    },
    primaryButton: {
      display: "block",
      width: "150px",
      padding: "8px 0",
      margin: "20px auto",
      background: "#4979ff",
      borderRadius: "4px",
      color: "white",
      textAlign: "center",
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
