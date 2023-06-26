import React, { useState } from "react";
import "./write.css";
import Navbar from "../../components/Navbar/Navbar";
import FooterV2 from "../../components/Footerv2/FooterV2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="writeBB">
      <Navbar />

      <div className="writeContainer">
        <div className="writeContent">
          <input type="text" placeholder="Title" />
          <div className="writeEditorConter">
            <ReactQuill
              className="wEditor"
              theme="snow"
              value={value}
              onChange={setValue}
            />
            ;
          </div>
        </div>
        <div className="writeMenu">
          <div className="item">
            <h3>Publish</h3>
            <span>
              <b>Status:</b> Draft
            </span>
            <span>
              <b>Visibility:</b> Public
            </span>
            <input style={{ display: "none" }} type="file" id="file" />
            <label className="inputFile" htmlFor="file">
              Upload Image
            </label>
            <div className="writeButton">
              <button className="drafButton">Save as a draft</button>
              <button className="updateButton">Update</button>
            </div>
          </div>
          <div className="item">
            <h3>Category</h3>

            <div className="wButtons">
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="art"
                  id="art"
                />
                <label htmlFor="art">Art</label>
              </div>
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="science"
                  id="science"
                />
                <label htmlFor="art">Science</label>
              </div>
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="technology"
                  id="technology"
                />
                <label htmlFor="art">Technology</label>
              </div>
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="cinema"
                  id="cinema"
                />
                <label htmlFor="art">Cinema</label>
              </div>
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="design"
                  id="design"
                />
                <label htmlFor="art">Design</label>
              </div>
              <div className="writeRbutts">
                <input
                  className="writeRadio"
                  type="radio"
                  name="cat"
                  value="food"
                  id="food"
                />
                <label htmlFor="art">Food</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterV2 />
    </div>
  );
};

export default Write;
