import React from 'react'
import TextEditor, { createValueFromString, ButtonGroup, Button} from 'react-rte';


const styles = {
  input: {
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    color: "rgba(0,0,0,0.8)",
    backgroundColor: "#fff",
  }
};

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorValue: null }
  }

  componentDidMount() {
    this.initializeEditorState();
  }

  initializeEditorState = () => {
    const text = Boolean(this.props.content) ? this.props.content.text : '';
    const editorValue = createValueFromString(text, 'html');
    this.setState({ editorValue });
  }

  onChange = (editorValue) => {
    const text = editorValue.toString('html')

    this.setState({ editorValue })
    this.props.onContentChange({
      ...this.props.content,
      text: text
    })
  }


  render() {
    const { editorValue } = this.state;
    const { classes, EditorProps, placeholder } = this.props;

    if (editorValue) {
      return (
        <div style={styles.input} className={classes}>
          <TextEditor
            placeholder={placeholder}
            value={editorValue}
            onChange={this.onChange}
            {...EditorProps}
          />
        </div>
      )
    }

    return (<div />)
  }
};

export default RichTextEditor;