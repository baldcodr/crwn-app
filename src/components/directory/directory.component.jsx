import React from "react";

import "../directory/directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          id: 1
        },
        {
          title: "shoes",
          imageUrl:
            "https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 2
        },
        {
          title: "dress",
          imageUrl:
            "https://images.unsplash.com/photo-1499939667766-4afceb292d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
          id: 3
        },
        {
          title: "top",
          imageUrl:
            "https://images.unsplash.com/photo-1482501157762-56897a411e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          size: "large",
          id: 4
        },
        {
          title: "accessories",
          imageUrl:
            "https://images.unsplash.com/photo-1486308510493-aa64833637bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80",
          size: "large",
          id: 5
        }
      ]
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
