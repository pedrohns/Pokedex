export interface IResponseCreate {
    quote: string;
  }


  export interface IResponseList {
    resp: [{
        rowid:string,
        nome: string,
        imagem: string,
        gif: string,
        hp: BigInteger,
        attack: BigInteger,
        defense: BigInteger,
        special_attack: BigInteger,
        special_defense: BigInteger,
        speed: BigInteger,
        tipo: string,
        weight: BigInteger,
        seletor: BigInteger,
    }]
  }

  export interface IDetailList {
        rowid:string,
        nome: string,
        imagem: string,
        gif: string,
        hp: BigInteger,
        attack: BigInteger,
        defense: BigInteger,
        special_attack: BigInteger,
        special_defense: BigInteger,
        speed: BigInteger,
        tipo: string,
        weight: BigInteger,
        seletor: BigInteger,
    
  }