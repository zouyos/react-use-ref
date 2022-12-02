import { useRef } from "react";
export function App() {

  const codeInputRef = useRef();
  const dateInputRef = useRef();

  function handleCardNumberChange(e) {
    if (e.target.value.length >= 16) {
      codeInputRef.current.focus();
    }
  }


  function handleCodeChange(e) {
    if (e.target.value.length >= 3) {
      dateInputRef.current.focus();
    }
  }

  function handleDateChange(e) {
    if (e.target.value.length >= 4) {
      dateInputRef.current.blur();
    }
  }

  return (
    <>
      <div>
        <label>Code carte bancaire</label>
        <input
          autoFocus
          onChange={handleCardNumberChange}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Code à 3 chiffres</label>
        <input onChange={handleCodeChange} ref={codeInputRef} type="number" name="creditCardCode" />
      </div>
      <div>
        <label>Expiration</label>
        <input onChange={handleDateChange} ref={dateInputRef} type="text" name="creditCardCode" />
      </div>

    </>
  );

}
