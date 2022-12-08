import "./style.css";

const mystyle = {
  backgroundColor: "red",
  textAlign: "center",
  width: "400px",
  padding: 10,
  borderRadius: 10
}

const mysecondstyle = {
  backgroundColor: "green"
}

export default function Styling() {
  return (
    <div>
      <div style={mystyle}>
        Hello from Nextstack
      </div>

      <div
        style={{
          backgroundColor: "blue"
        }}
      >
        hello
      </div>

      <div className="mydiv">
        my third div
      </div>
    </div>
  )
}