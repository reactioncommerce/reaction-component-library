export const theme = {
    color: {
        border: "#a7edff",
        sidebarBackground: "#a7edff"
    }
};

export const fontFamily = {
    base: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Roboto"',
        '"Oxygen"',
        '"Ubuntu"',
        '"Cantarell"',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        'sans-serif',
    ],
    monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
};

export const borderRadius = 3;
export const maxWidth = 1000;
export const sidebarWidth = 300;

export const styles = {
    content: {
        margin: 0,
        maxWidth: "initial",
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 0
    },
    header: {
        backgroundColor: "#fffbcc",
        marginLeft: -45,
        marginRight: -45,
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 20,
        paddingBottom: 40,
    },
    sidebar: {
        backgroundColor: "#ffffff",
        borderColor: "#a7edfff",
        borderWidth: "0 2px 0 0"
    },
    logo: {
        backgroundColor: "#f7fdff",
        borderBottom: 0
    },
    input: {
        backgroundColor: "#f6f6f6",
        border: "1px solid #f6f6f6",
        borderRadius: 23,
        paddingLeft: 30,
        "&:focus": {
            borderColor: "#052AFE"
        }
    }
}

/* 

TODO: search bar icon

div.rsg--search-44 {
  position: relative;
}

div.rsg--search-44:before {
  border: 3px solid #052a4e;
  border-radius: 50%;
  content: " ";
  display: block;
  height: 6px;
  left: 25px;
  width: 6px;
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translateY(-58%);
}

div.rsg--search-44:after {
  background: #052a4e;
  content: " ";
  height: 7px;
  left: 35px;
  position: absolute;
  transform: rotate(-45deg);
  top: 55%;
  width: 3px;
  z-index: 1;
}
*/