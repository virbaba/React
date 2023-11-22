import { useRef } from "react";
function Form() {
    let inputText = useRef(null);
    function handleForm(event) {
      event.preventDefault();
      console.log(inputText.current.value); // Access input value using .current.value
              // here on UI we see the update value 
      setName((currentName) => [...currentName, inputText.current.value]);
    }
  return (
    <>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="" id="" ref={inputText} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
