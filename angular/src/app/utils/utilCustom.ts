
export const colorDictionary = (color: number): string | undefined => {
    const objToFind: { [key: number]: string } = {
      1: 'card-red', //"#F70D0C",
      2: 'card-green', //"#6EF70C",
      3: 'card-blue', //"#0754F7",
      4: 'card-yellow', //"#E0D301",
      5: 'card-orange', //"#E6D3CD",
      6: 'card-purple', //"#D85EE6",
      7: 'card-lille', //"#C05BFC",
      8: 'card-sunny', //"#F2D966"
    };

    return objToFind[color];
};
export const modalColorDictionary = (color: number): string | undefined =>{
    const objToFind: { [key: number]: string } = {
      1:'modal-card modal-card-red', //"#F70D0C",
      2:'modal-card modal-card-green', //"#6EF70C",
      3:'modal-card modal-card-blue', //"#0754F7",
      4:'modal-card modal-card-yellow', //"#E0D301",
      5:'modal-card modal-card-orange', //"#E6D3CD",
      6:'modal-card modal-card-purple', //"#D85EE6",
      7:'modal-card modal-card-lille', //"#C05BFC",
      8:'modal-card modal-card-sunny', //"#F2D966"
    }
    return objToFind[color];
};
export const toUpperCase = (name: string): string =>{
  return name.replace(/^\w/, (match) => match.toUpperCase());
};
