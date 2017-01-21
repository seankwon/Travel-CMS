import Editor from '../components/editor';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const {sections, isSaving} = state.editor;
  return {
    sections,
    isSaving
  }
}

export default connect(mapStateToProps)(Editor);
