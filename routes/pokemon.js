const createConnection = require('../utils/sqlConnect')
let sqlQuery = require('../utils/sqlQuery')
var fetch = require('node-fetch');
const { response } = require('express');
var connectionBank = createConnection();
var pokemonDao = new sqlQuery(connectionBank);

module.exports = function(app){
    
    app.get("/createPokemon", async function(req,response){
        let firstData = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0", {
            headers: {
                Accept: "application/json"
            }, method:'GET'
        })
       let url = await firstData.json()
       await url.results.map(async (values)=>{
            var dado = await fetch(values.url, { method: 'GET'})
            let dadoParse =  await dado.json()
            await insertData(dadoParse)            
        })
        await response.send({pokemon:'Pokemons colhidos!'})
    })

    app.get("/getPokemon",async function(req, response){
        const result = await pokemonDao.select(`select *, case when ( tipo = 'fire') then  1  when ( tipo = 'grass') then  2 
        when ( tipo = 'water') then  3 when ( tipo = 'electric') then  4 when ( tipo = 'normal') then  5
        when ( tipo = 'psychic') then  6 when ( tipo = 'ghost') then  7 else 8   
         end as seletor
        from pokemons order by  seletor asc, rowid asc`)
    if (result.length > 0) {
        response.send({resp:result})
    } else {
        response.send({resp:'Erro:111'})
    }
    })

    app.get("/getDetails", async function(req, response){
        const result = await pokemonDao.select(`select *, case when ( tipo = 'fire') then  1  when ( tipo = 'grass') then  2 
        when ( tipo = 'water') then  3 when ( tipo = 'electric') then  4 when ( tipo = 'normal') then  5
        when ( tipo = 'psychic') then  6 when ( tipo = 'ghost') then  7 else 8   
         end as seletor from pokemons where rowid = ${req.query.rowid}`)
       
        if (result.length > 0) {
            response.send({resp:result[0]})
        } else {
            response.send({resp:'Erro:222'})
        }
        
    })

    async function insertData(param){
        var obj = {
            "rowid": "'"+param.id+"'",
            "nome":"'"+param.name+"'",
            "imagem":"'"+param.sprites.front_default+"'",
            "hp": param.stats[0].base_stat,
            "attack":param.stats[1].base_stat,
            "defense":param.stats[2].base_stat,
            "special_attack":param.stats[3].base_stat,
            "special_defense":param.stats[4].base_stat,
            "speed":param.stats[5].base_stat,
            "tipo":"'"+param.types[0].type.name+"'",
            "weight": param.weight
        }
        await pokemonDao.insert(`insert into pokemons (${Object.keys(obj)}) values (${Object.values(obj) })`)
    }

    /*
    app.get("/getPokemon", function(req,response,next){
        var arrayAux = [];
        var add;
        fetch("https://pokeapi.co/api/v2/pokemon?limit=2&offset=0", {
            headers: {
                Accept: "application/json"
            }, method:'GET'
        }).then(res => res.json())
          .then(res =>{
            res.results.map((values) =>{
                fetch(values.url, { method: 'GET'})
                .then(resp => resp.json())
                .then(resp =>{
                   //trocar isso para inserção direto
                    arrayAux.push({
                        "id": resp.id,
                        "name":resp.name,
                        "imagem":resp.sprites.front_default,
                        "hp": resp.stats[0].base_stat,
                        "attack":resp.stats[1].base_stat,
                        "defense":resp.stats[2].base_stat,
                        "special-attack":resp.stats[3].base_stat,
                        "special-defense":resp.stats[4].base_stat,
                        "speed":resp.stats[5].base_stat,
                        "type":resp.types[0].type.name,
                        "weight": resp.weight
                    })
                   
                })
            })
            response.send(res.results[0].name);
        })
    })
    */
}
