const checkValue = (value) => {
    if (value < 0 || value > 99) {
      window.alert("Valor inválido!");
      return 0;
    }
    return value;
  }

export { 
    checkValue
};
