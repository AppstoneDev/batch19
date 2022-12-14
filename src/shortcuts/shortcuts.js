
export default function Shortcuts() {

  const handleClick = (e) => {
    console.log(e);
  }

  const showLayout = () => {
    return (
      <div>this is from the function 2</div>
    )
  }

  return (
    <div>
      <button onClick={handleClick}>
        click me
      </button>

      {showLayout()}
    </div>
  )
}