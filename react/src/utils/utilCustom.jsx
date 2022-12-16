export const obj = {
    colorDictionary : (color) =>{
        var objToFind = {
          1:'card card-red',//"#F70D0C",
          2:'card card-green',//"#6EF70C",
          3:'card card-blue',//"#0754F7",
          4:'card card-yellow',//"#E0D301",
          5:'card card-orange',//"#E6D3CD",
          6:'card card-purple',//"#D85EE6",
          7:'card card-lille',//"#C05BFC",
          8:'card card-sunny',//"#F2D966"
        }
        return objToFind[color]
    },
    modalColorDictionary : (color) =>{
        var objToFind = {
          1:'modal-card modal-card-red',//"#F70D0C",
          2:'modal-card modal-card-green',//"#6EF70C",
          3:'modal-card modal-card-blue',//"#0754F7",
          4:'modal-card modal-card-yellow',//"#E0D301",
          5:'modal-card modal-card-orange',//"#E6D3CD",
          6:'modal-card modal-card-purple',//"#D85EE6",
          7:'modal-card modal-card-lille',//"#C05BFC",
          8:'modal-card modal-card-sunny',//"#F2D966"
        }
        return objToFind[color]
    }

}
