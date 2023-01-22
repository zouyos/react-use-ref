export function App() {
  return (
    <>
      <div>
        <label>Numéro carte bancaire</label>
        <input type="number" name="creditCardNumber" />
      </div>
      <div>
        <label>Code secret</label>
        <input type="number" name="creditCardCode" />
      </div>
      <div>
        <label>Expiration date</label>
        <input type="text" name="creditCardExpiration" />
      </div>
    </>
  );
}
