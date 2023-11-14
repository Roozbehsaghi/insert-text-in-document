import { useState } from "react";

const InsertText = () => {
  const [text, setText] = useState("");
  const [document, setDocument] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    if (!loading) {
      setLoading(true);
      insertText();
      setText("");
    }
  };

  const insertText = () => {
    const newDoc = `<p class="paragraph-highlight-class">${text}</p>`;
    setDocument(document + newDoc);
    remove();
    setLoading(false);
  };

  const remove = () => {
    setTimeout(() => {
      setDocument((doc) => {
        const d = doc.replace(` class="paragraph-highlight-class"`, "");
        return d;
      });
    }, 2000);
  };

  return (
    <div>
      <div className="body-container">
        <form onSubmit={handleSubmit}>
          <textarea
            onKeyDown={(e) => {
              if (e.key === "enter" || e.which === 13) {
                handleSubmit(e);
              }
            }}
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            rows={5}
          ></textarea>
        </form>
      </div>
      <div className="document-container">
        <p className="para">Document</p>
        {document ? (
          <div
            className="document-body"
            dangerouslySetInnerHTML={{
              __html: document,
            }}
          ></div>
        ) : (
          <div
            className="document-body"
            style={{ textAlign: "center", color: "#52525240" }}
          >
            Added content will show here
          </div>
        )}
      </div>
    </div>
  );
};

export default InsertText;
