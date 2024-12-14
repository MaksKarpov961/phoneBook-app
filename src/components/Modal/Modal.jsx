const Modal = () => {
  return (
    <div>
      <Modal
        isOpen={isModalOpen} // відкрито, якщо isOpen = true
        onRequestClose={closeModal} // закрити при натисканні на фон або клавішу Escape
        contentLabel="Edit Contact" // опис для доступності
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)", // фон
          },
          content: {
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            maxWidth: "400px",
            margin: "auto",
          },
        }}
      >
        <h2>Edit Contact</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleSave}>
            Save Changes
          </button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Modal;
