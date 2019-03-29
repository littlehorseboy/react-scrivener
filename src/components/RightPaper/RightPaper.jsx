import React from 'react';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import Quill from '../UI/Quill/quill';

class RightPaper extends React.Component {
  constructor(props) {
    super(props);
    this.toolbarRef = React.createRef();
    this.editorRef = React.createRef();
  }

  componentDidMount() {
    const editor = new Quill(this.editorRef.current, {
      bounds: this.editorRef.current,
      modules: {
        toolbar: [['bold', 'italic'], ['link', 'image']],
      },
      placeholder: 'Compose an ...',
      theme: 'snow',
      debug: 'info',
    });

    editor;
  }

  render() {
    return (
      <>
        <div ref={this.editorRef}>
          <p>Hello World!</p>
          <p>Some initial <strong>bold</strong> text</p>
          <p><br /></p>
        </div>
      </>
    );
  }
}

export default RightPaper;
