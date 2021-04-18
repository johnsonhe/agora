import React from 'react';
import MDEditor from '@uiw/react-md-editor';

export default function EditCourse() {
  const [value, setValue] = React.useState("**Edit course content here!!!**");
  return (
    <div className="container">
      <div className="card p-4 m-5">
        <h4 className="card-title">Edit Course</h4>
        <MDEditor
          value={value}
          onChange={setValue}
        />
        <MDEditor.Markdown source={value} />
      </div>
      <button className="btn btn-success">Save Changes</button>
    </div>
  );
}
