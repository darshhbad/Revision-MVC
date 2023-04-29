// const products = []  //We want to save this to a file

const fs = require('fs')

const path = require('path')

const rootDir=require('../util/path')

const p = path.join(rootDir,'data', 'products.json')


const getProductsFromFile = (cb)=>{   //helper function 
    // const p = path.join(rootDir,'data', 'products.json')

        fs.readFile(p,(err,fileContent)=>{  
            if (err){
                cb([])
            }
            else{cb(JSON.parse(fileContent))}
        })
    }

module.exports = class Product{
    constructor(t){
        this.title=t
        }
    
    save(){
        // products.push(this)
        // const p = path.join(rootDir,'data', 'products.json')
        getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),err=>{
                 console.log(err)
            })
        })
        
    }

    static fetchAll(cb){        //we need to put callback in products controller all functions are async fns and 
        getProductsFromFile(cb)
    }
}