import React from "react";
import PropTypes from "prop-types";
import { getCaption, setCaption } from "../actions/caption";
import { setSelectedMeme } from "../actions/selectedMeme";
import { connect } from "react-redux";

const Popup = ({
  getCaption,
  setCaption,
  setSelectedMeme,
  caption,
  selectedMeme,
}) => {
  const updateTextBox = (e, index, value, meme) => {
    e.preventDefault();
    console.log("index", meme.boxes[index], index, value, meme);
    meme.boxes[index] = e.target.value;
    setSelectedMeme(meme);
  };
  const createCaption = () => {
    const options = {
      template_id: selectedMeme.id,
      boxes: selectedMeme.boxes,
    };
    getCaption(options);
  };
  const downloadCaption = (e, url) => {
    e.preventDefault();
    window.open(url, "_blank");
    closePopup();
  };
  const closePopup = () => {
    setSelectedMeme(null);
    setCaption(null);
  };

  return (
    <div>
      <div className="bg-popup" onClick={closePopup}></div>
      <div className="popup">
        {!caption.data ? (
          <main>
            <h5>Enter the meme captions :)</h5>
            <img className="img-selected" width={200} src={selectedMeme.url} />
            <div className="meme-captions">
              {selectedMeme.boxes.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  value={item}
                  onChange={(e) =>
                    updateTextBox(e, index, e.target.value, selectedMeme)
                  }
                ></input>
              ))}
              <button onClick={createCaption}>Create Caption</button>
            </div>
          </main>
        ) : (
          <main>
            <button onClick={(e) => downloadCaption(e, caption.data.url)}>
              <img className="caption-img" src={caption.data.url} />
            </button>
          </main>
        )}
      </div>
    </div>
  );
};

Popup.propTypes = {
  getCaption: PropTypes.func.isRequired,
  setCaption: PropTypes.func.isRequired,
  setSelectedMeme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  caption: state.caption,
  selectedMeme: state.selectedMeme,
});

export default connect(mapStateToProps, {
  getCaption,
  setCaption,
  setSelectedMeme,
})(Popup);
