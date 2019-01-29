import React from 'react';
import { render} from 'react-dom';
import { EditablesContext, theme } from '../../src/editables/EditablesContext';

import Paragraph from '../../src/editables/Paragraph';
import PlainText from '../../src/editables/PlainText';
import EditableNumber from '../../src/editables/EditableNumber';
import CustomLink from "../../src/editables/CustomLink";
import Image from "../../src/editables/Image";
import FileUpload from "../../src/editables/FileUpload";
import BackgroundImage from "../../src/editables/BackgroundImage";

import "./index.css"

const defaultPageContent = {
  backgroundImg: { imageSrc: "https://www.nomadiclabs.ca/img/nomadic-04.jpg" },
  title: { text: "Editable Fields Demo!" },
  subtitle: { text: "Go ahead and edit this page!" },
  paragraph: { text: "<p>This package makes it easy to implement on-page editing in your awesome React project. Feel free to test it out!</p><p>Toggle <strong>Show editable fields</strong> to switch between the editing interface and the default view.</p>" },
  link: { link: "https://github.com/nomadic-labs/react-easy-editables", anchor: "Source code on Github"},
  number: { number: 42 },
  image: { imageSrc: "https://placebear.com/400/300", caption: "Picture of an adorable kitten courtesy of http://placekitten.com" },
  file: { filepath: "https://www.nomadiclabs.ca/img/nomadic-04.jpg", filename: "Header image (jpg)" },
}

class App extends React.Component {
  state = {
    showEditingControls: true,
    theme: theme,
    pageContent: defaultPageContent,
  }

  handleContentChange = field => content => {
    console.log(content)
    this.setState({
      pageContent: {
        ...this.state.pageContent,
        [field]: content
      }
    })
  }

  toggleEditingControls = event => {
    this.setState({ showEditingControls: event.target.checked });
  }

  render() {
    const { pageContent } = this.state;

    return(
      <EditablesContext.Provider value={ {...this.state} }>
        <div className="grid-container">
          <div className="grid-item header">
            <BackgroundImage content={pageContent.backgroundImg} onSave={this.handleContentChange("backgroundImg")} styles={{ height: "300px"}}>
              <div className="header-content">
                <h1><PlainText content={pageContent.title} onSave={this.handleContentChange("title")} /></h1>
                <h3>
                  <input type="checkbox" id="showControls" name="showControls" checked={this.state.showEditingControls} value={this.state.showEditingControls} onChange={this.toggleEditingControls} />
                  <label htmlFor="showControls">Show editable fields</label>
                </h3>
              </div>
            </BackgroundImage>
          </div>
        </div>


        <div className="wrapper">
          <div className="flex-container">
            <div className="flex-item image">
              <Image content={pageContent.image} onSave={this.handleContentChange("image")} maxSize={1024*1024*2} />
            </div>

            <div className="flex-item desc">
              <h2><PlainText content={pageContent.subtitle} onSave={this.handleContentChange("subtitle")} /></h2>
              <hr />

              <div className="demo-items">
                <Paragraph content={pageContent.paragraph} onSave={this.handleContentChange("paragraph")} />
              </div>

              <div className="demo-items">
                <ul>
                  <li><EditableNumber content={pageContent.number} onSave={this.handleContentChange("number")} /> weekly downloads on NPM</li>
                  <li><CustomLink content={pageContent.link} onSave={this.handleContentChange("link")} /></li>
                  <li><FileUpload content={pageContent.file} onSave={this.handleContentChange("file")} maxSize={1024*1024*2} /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        <footer>
          <small>Created by <a href="https://www.nomadiclabs.ca">Nomadic Labs</a></small>
        </footer>
      </EditablesContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));