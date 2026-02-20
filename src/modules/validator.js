export function validateTitle(title) {
  const regex = /^[a-zA-ZÀ-ÿ0-9\s]{5,50}$/;
  return regex.test(title.trim());
}

export function validateScore(value){
    const number = Number(value);
    return(
        !isNaN(number)&&
        Number.isInteger(number)&&
        number >= 1 && number <= 5
    );
}

