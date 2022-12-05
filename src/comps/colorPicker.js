
export default function ColorPicker() {
  return (
    <div>
      <input placeholder="enter hex code here" />
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red"
        }}
      >

      </div>
    </div>
  )
}